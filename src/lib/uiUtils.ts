import { ReactNode } from "react";

/**
 * Makes CSS class usage safer by handling undefined values
 */
export const safeCss = (cssClass: string | undefined): string => cssClass || "";

/**
 * Makes icon rendering safer by handling null/undefined values
 */
export const safeIcon = (icon: ReactNode): ReactNode => icon || null;

/**
 * Combines multiple CSS classes safely
 */
export const combineClasses = (...classes: (string | undefined | null)[]): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Creates a conditional CSS class string
 */
export const conditionalClass = (
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string => {
  return condition ? trueClass : falseClass;
};

// Type definition for display sizes
export type TabSize = "small" | "medium" | "large";

/**
 * Convert size to appropriate Tailwind classes
 */
export const getSizeClasses = (size: TabSize): string => {
  const sizeMap: Record<TabSize, string> = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-3 py-2",
    large: "text-lg px-4 py-3",
  };

  return sizeMap[size] || sizeMap.medium;
};
