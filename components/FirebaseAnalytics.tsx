"use client";

import { useEffect } from "react";
import { app } from "@/lib/firebase";

export function FirebaseAnalytics() {
  useEffect(() => {
    // getAnalytics requires browser environment — safe inside useEffect
    import("firebase/analytics").then(({ getAnalytics, isSupported }) => {
      isSupported().then((supported) => {
        if (supported) {
          getAnalytics(app);
        }
      });
    });
  }, []);

  return null;
}
