"use client";

import { usePathname, useSearchParams } from "next/navigation";
import * as NProgress from "nprogress";
import { useEffect } from "react";

export function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 100,
      minimum: 0.3,
      easing: "ease",
      speed: 500,
    });
  }, []);

  useEffect(() => {
    // Start progress bar on route change
    NProgress.start();

    // Complete the progress bar
    setTimeout(() => {
      NProgress.done();
    }, 500);
  }, [pathname, searchParams]);

  return null;
}
