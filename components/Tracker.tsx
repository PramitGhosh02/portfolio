"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Tracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Avoid double tracking the exact same path in strict mode
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    const payload = {
      page: pathname || "/",
      referrer: typeof document !== "undefined" && document.referrer ? document.referrer : "Direct",
    };

    try {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Silent failure so tracking never disrupts user experience
      });
    } catch {
      // Ignore
    }
  }, [pathname]);

  return null;
}
