import { usePathname } from "next/navigation";

export const usePageTransition = () => {
  const pathname = usePathname();

  // Remove locale prefix from pathname (e.g., '/en/projects' -> '/projects')
  const path = pathname.split("/").slice(2).join("/");

  const getTransition = () => {
    // Now we can use exact matches
    switch ("/" + path) {
      case "/about":
        return {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 100 },
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            duration: 0.5,
          },
        };
      case "/projects":
        return {
          initial: { opacity: 0, scale: 0.8, y: 100 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.8, y: -100 },
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            duration: 0.5,
          },
        };
      default:
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 },
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            duration: 0.5,
          },
        };
    }
  };

  return { pathname, ...getTransition() };
};
