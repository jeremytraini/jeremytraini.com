"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { parseAnalyticsProps, trackEvent } from "@/lib/analytics";

function getTrackingKey(element, eventName, props, pathname) {
  const explicitKey = element.dataset.analyticsKey;

  if (explicitKey) {
    return `${pathname}:${explicitKey}`;
  }

  if (props.section_id) {
    return `${pathname}:${eventName}:section:${props.section_id}`;
  }

  if (props.project_id) {
    return `${pathname}:${eventName}:project:${props.project_id}`;
  }

  return `${pathname}:${eventName}:${JSON.stringify(props)}`;
}

export default function AnalyticsObserver() {
  const pathname = usePathname();
  const trackedEventKeysRef = useRef(new Set());

  useEffect(() => {
    const handleClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const element = event.target.closest("[data-analytics-click]");

      if (!element) {
        return;
      }

      trackEvent(
        element.dataset.analyticsClick,
        parseAnalyticsProps(element.dataset.analyticsProps)
      );
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    trackedEventKeysRef.current = new Set();

    const observedElements = new WeakSet();
    const cleanupObservers = [];

    const registerObserver = ({
      element,
      eventName,
      props,
      threshold,
      rootMargin,
      trackingKey,
      durationMs = 0,
    }) => {
      if (!eventName || trackedEventKeysRef.current.has(trackingKey)) {
        return;
      }

      let timeoutId = null;

      const fireEvent = () => {
        if (trackedEventKeysRef.current.has(trackingKey)) {
          return;
        }

        trackedEventKeysRef.current.add(trackingKey);
        trackEvent(eventName, props);
        observer.disconnect();
      };

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const isVisible =
            entry?.isIntersecting && entry.intersectionRatio >= threshold;

          if (!isVisible) {
            if (timeoutId) {
              window.clearTimeout(timeoutId);
              timeoutId = null;
            }
            return;
          }

          if (durationMs <= 0) {
            fireEvent();
            return;
          }

          if (!timeoutId) {
            timeoutId = window.setTimeout(() => {
              timeoutId = null;
              fireEvent();
            }, durationMs);
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(element);
      cleanupObservers.push(() => {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }
        observer.disconnect();
      });
    };

    const registerTrackedView = (element) => {
      if (!element || observedElements.has(element)) {
        return;
      }

      observedElements.add(element);

      const eventName = element.dataset.analyticsView;
      const props = parseAnalyticsProps(element.dataset.analyticsProps);
      const threshold = Number(element.dataset.analyticsThreshold || 0.6);
      const rootMargin = element.dataset.analyticsRootMargin || "0px 0px -10% 0px";
      const trackingKey = getTrackingKey(element, eventName, props, pathname);
      registerObserver({
        element,
        eventName,
        props,
        threshold,
        rootMargin,
        trackingKey,
      });

      const engagedEventName = element.dataset.analyticsEngaged;
      const engagedThreshold = Number(
        element.dataset.analyticsEngagedThreshold || threshold
      );
      const engagedRootMargin =
        element.dataset.analyticsEngagedRootMargin || rootMargin;
      const engagedDurationMs = Number(
        element.dataset.analyticsEngagedDuration || 3000
      );
      const engagedProps = {
        ...props,
        engagement_duration_ms: engagedDurationMs,
      };
      const engagedTrackingKey = getTrackingKey(
        element,
        engagedEventName,
        engagedProps,
        pathname
      );

      registerObserver({
        element,
        eventName: engagedEventName,
        props: engagedProps,
        threshold: engagedThreshold,
        rootMargin: engagedRootMargin,
        trackingKey: engagedTrackingKey,
        durationMs: engagedDurationMs,
      });
    };

    const scan = (root) => {
      if (!root) {
        return;
      }

      if (root.matches?.("[data-analytics-view]")) {
        registerTrackedView(root);
      }

      root
        .querySelectorAll?.("[data-analytics-view]")
        .forEach((element) => registerTrackedView(element));
    };

    scan(document.body);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            scan(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      cleanupObservers.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
