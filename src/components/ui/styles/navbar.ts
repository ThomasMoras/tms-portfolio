import { tv } from "tailwind-variants";

// Navbar component styles
export const navbar = tv({
  base: "fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border",
  variants: {
    variant: {
      desktop: "hidden lg:flex flex-row justify-between items-center w-full p-5",
      mobile: "lg:hidden flex flex-col w-full",
    },
  },
  defaultVariants: {
    variant: "desktop",
  },
});

// Navbar sections
export const navSection = tv({
  variants: {
    position: {
      left: "flex items-center",
      center: "flex gap-4 items-center justify-center",
      right: "flex gap-7 items-center w-32 justify-end",
      mobileHeader: "flex justify-between items-center p-5",
      mobilePanel: "flex flex-col px-4 py-2 bg-background/95 border-t",
    },
  },
});

// Navigation button
export const navButton = tv({
  base: "block p-3 text-center font-medium rounded-md transition-all",
  variants: {
    active: {
      true: "text-primary scale-110 border-b-2 border-primary",
      false: "text-foreground hover:scale-110",
    },
    mobile: {
      true: "p-3 text-left font-medium hover:bg-accent rounded-md",
      false: "",
    },
  },
  defaultVariants: {
    active: false,
    mobile: false,
  },
});

// Mobile menu button
export const menuButton = tv({
  base: "p-2 rounded-md hover:bg-accent",
});

// Container for toggle components
export const toggleContainer = tv({
  base: "w-10",
});

// Logo container for mobile view
export const logoContainer = tv({
  base: "flex flex-row gap-6",
});

// Controls container for mobile view
export const controlsContainer = tv({
  base: "flex gap-2 items-center",
});
