"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/firebase/client";

export function FirebaseAnalytics() {
  useEffect(() => {
    // This effect will run once on the client side after the component mounts.
    // analytics is a promise that resolves to the analytics instance if supported.
    analytics.then(an => {
        if (an) {
            console.log("Firebase Analytics initialized");
        }
    });
  }, []);

  return null;
}
