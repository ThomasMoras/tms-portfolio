import { useEffect } from "react";
import NProgress from "nprogress";

export const useNProgress = () => {
  useEffect(() => {
    NProgress.configure({
      // How much of the progress bar should be shown initially
      minimum: 0.3,

      // How often to trickle the progress bar (in ms)
      trickleSpeed: 100,

      // Show the spinner or not
      showSpinner: false,

      // The CSS z-index for the progress bar
      zIndex: 1031,

      // Adjust pace of updates
      speed: 200,

      // How much to increment by
      trickle: true,

      // The color of the progress bar (if not set in CSS)
      // barColor: '#29d'

      // The class name to add to the progress bar element
      barClassName: "bar",

      // The parent container for the progress bar
      parent: "body",
    });

    // Optional: Start progress on page load
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);
};
