import React from "react";
import { Columns3, LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

export type DisplayLayout = "small" | "medium" | "large";
export type DisplayIconSize = "xs" | "sm" | "md" | "lg";

interface DisplayIconProps {
  size?: DisplayIconSize;
  className?: string;
}

const getSizeClasses = (size: DisplayIconSize): string => {
  switch (size) {
    case "xs":
      return "h-3 w-3";
    case "sm":
      return "h-4 w-4";
    case "md":
      return "h-5 w-5";
    case "lg":
      return "h-6 w-6";
    default:
      return "h-4 w-4";
  }
};

/**
 * Component for displaying grid layout icons with consistent sizing
 */
export const DisplayIcons: Record<DisplayLayout, React.FC<DisplayIconProps>> = {
  // Small (3 columns) layout
  small: ({ size = "sm", className = "" }) => (
    <Columns3 className={cn(getSizeClasses(size), className)} />
  ),

  // Medium (2 columns) layout
  medium: ({ size = "sm", className = "" }) => (
    <LayoutGrid className={cn(getSizeClasses(size), className)} />
  ),

  // Large (1 column) layout
  large: ({ size = "sm", className = "" }) => (
    <List className={cn(getSizeClasses(size), className)} />
  ),
};

/**
 * Component that renders an icon based on layout type
 */
export const DisplayLayoutIcon: React.FC<{
  layout: DisplayLayout;
  size?: DisplayIconSize;
  className?: string;
}> = ({ layout, size = "sm", className = "" }) => {
  const IconComponent = DisplayIcons[layout];
  return <IconComponent size={size} className={className} />;
};

/**
 * Pre-configured display icons with default sizing
 */
export const DisplayIconsPreset: Record<DisplayLayout, React.ReactNode> = {
  small: <Columns3 className="h-4 w-4" />,
  medium: <LayoutGrid className="h-4 w-4" />,
  large: <List className="h-4 w-4" />,
};

/**
 * Get translated labels for display layouts
 */
export const getDisplayLabels = (locale: "en" | "fr"): Record<DisplayLayout, string> => {
  return {
    small: locale === "fr" ? "Compact (3 colonnes)" : "Compact (3 columns)",
    medium: locale === "fr" ? "Standard (2 colonnes)" : "Standard (2 columns)",
    large: locale === "fr" ? "Détaillé (1 colonne)" : "Detailed (1 column)",
  };
};

export default DisplayIcons;
