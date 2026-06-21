"use client";

import { useEffect } from "react";

export default function ScrollBehaviorManager() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");

    const scrollHashTargetIntoView = (hash = window.location.hash) => {
      if (!hash) {
        return false;
      }

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (!target) {
        return false;
      }

      const block = target.dataset.scrollAnchor === "center" ? "center" : "start";

      target.scrollIntoView({
        behavior: "smooth",
        block,
        inline: "nearest",
      });

      return true;
    };

    const syncHashScroll = () => {
      let attempts = 0;
      const maxAttempts = 12;

      const tryScroll = () => {
        attempts += 1;

        if (scrollHashTargetIntoView() || attempts >= maxAttempts) {
          return;
        }

        window.setTimeout(tryScroll, 150);
      };

      tryScroll();
    };

    const handleDocumentClick = (event) => {
      const anchor = event.target.closest('a[href*="#"]');

      if (!anchor) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);

      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash
      ) {
        return;
      }

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));

      if (!target || target.dataset.scrollAnchor !== "center") {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", url.hash);
      scrollHashTargetIntoView(url.hash);
    };

    syncHashScroll();
    window.addEventListener("hashchange", syncHashScroll);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.documentElement.classList.remove("scroll-smooth");
      window.removeEventListener("hashchange", syncHashScroll);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return null;
}
