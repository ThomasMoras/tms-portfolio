import { useEffect } from "react";
import NProgress from "nprogress";

export const useNProgress = () => {
  useEffect(() => {
    NProgress.configure({
      minimum: 0.3,
      trickleSpeed: 100,
      showSpinner: false,
      speed: 200,
      trickle: true,
      barSelector: ".bar",
      parent: "body",
    });

    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);
};
