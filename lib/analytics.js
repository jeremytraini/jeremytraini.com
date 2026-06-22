"use client";

import { track } from "@vercel/analytics";

const ATTRIBUTION_STORAGE_KEY = "jt_analytics_attribution_v1";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

function cleanProperties(properties = {}) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => {
      return value !== undefined && value !== null && value !== "";
    })
  );
}

function getReferrerDomain(referrer) {
  if (!referrer) {
    return undefined;
  }

  try {
    return new URL(referrer).hostname;
  } catch {
    return undefined;
  }
}

function readStoredAttribution() {
  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function buildAttributionSnapshot() {
  const searchParams = new URLSearchParams(window.location.search);
  const utmParams = Object.fromEntries(
    UTM_KEYS.map((key) => [key, searchParams.get(key) || undefined])
  );
  const referrer = document.referrer || undefined;

  return cleanProperties({
    landing_path: window.location.pathname,
    landing_search: window.location.search || undefined,
    landing_referrer: referrer,
    landing_referrer_domain: getReferrerDomain(referrer),
    ...utmParams,
  });
}

function getAttribution() {
  const existing = readStoredAttribution();

  if (existing) {
    return existing;
  }

  const snapshot = buildAttributionSnapshot();

  try {
    window.sessionStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(snapshot)
    );
  } catch {}

  return snapshot;
}

export function trackEvent(name, properties = {}) {
  if (typeof window === "undefined" || !name) {
    return;
  }

  const payload = cleanProperties({
    ...getAttribution(),
    ...properties,
    path: window.location.pathname,
    page_url: `${window.location.pathname}${window.location.search}`,
  });

  try {
    track(name, payload);
  } catch {}

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }
}

export function parseAnalyticsProps(value) {
  if (!value) {
    return {};
  }

  try {
    const parsed = JSON.parse(value);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}
