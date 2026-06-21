"use client";

import { useEffect } from "react";

export default function ScrollBehaviorManager() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");

    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  return null;
}
