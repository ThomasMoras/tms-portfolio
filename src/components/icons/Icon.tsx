import React from "react";
import { IconRegistries, detectIconLibrary, IconName } from "./IconRegistry";
import { LucideProps } from "lucide-react";
import { IconBaseProps } from "react-icons";
import { IconProps, IconRegistryStructure } from "@/types/iconTypes";

/**
 * Universal Icon component that renders icons from different libraries
 * with consistent API and styling
 */
export const Icon: React.FC<IconProps> = ({ name, size = 24, className = "", color }) => {
  // Convert size to number for comparison, handling string values
  const getSizeAsNumber = (): number => {
    if (typeof size === "number") return size;
    if (typeof size === "string") {
      const parsed = parseInt(size, 10);
      return isNaN(parsed) ? 24 : parsed; // Default to 24 if parsing fails
    }
    return 24; // Default fallback
  };

  const getClassNameFromSize = (): string => {
    if (className) return className;
    const numericSize = getSizeAsNumber();

    // Convert size to appropriate Tailwind class
    if (numericSize <= 16) return "h-4 w-4";
    if (numericSize <= 20) return "h-5 w-5";
    if (numericSize <= 24) return "h-6 w-6";
    if (numericSize <= 32) return "h-8 w-8";
    if (numericSize <= 40) return "h-10 w-10";
    if (numericSize <= 48) return "h-12 w-12";
    return `h-[${size}px] w-[${size}px]`;
  };

  // Combine className with potential color styling
  const iconClassName = `${getClassNameFromSize()} ${color ? `text-[${color}]` : ""}`.trim();

  // Detect which library this icon belongs to
  const { library, componentName } = detectIconLibrary(name);

  if (!library) {
    console.warn(`Icon "${name}" could not be mapped to any known library`);
    return null;
  }

  // Get the icon component from the appropriate registry
  const IconComponent = IconRegistries[library]?.[componentName];

  if (!IconComponent) {
    console.warn(`Icon "${name}" (mapped to "${componentName}") not found in ${library} library`);
    return null;
  }

  // Render icon based on library type with proper props
  switch (library) {
    case "Lucide": {
      const LucideComponent = IconComponent as React.FC<LucideProps>;
      return (
        <LucideComponent
          className={iconClassName}
          size={typeof size === "number" ? size : undefined}
          color={color}
        />
      );
    }

    case "Fa":
    case "Ri":
    case "Si":
    case "Di":
    case "Tb":
    case "Ti": {
      const ReactIconComponent = IconComponent as React.FC<IconBaseProps>;
      return <ReactIconComponent className={iconClassName} size={size} color={color} />;
    }

    default: {
      // This should never happen due to TypeScript, but good to have for safety
      const exhaustiveCheck: never = library;
      console.error(`Unhandled library type: ${exhaustiveCheck}`);
      return null;
    }
  }
};

/**
 * Utility function to get an icon by its type - for compatibility with existing code
 */
export const getIconByType = (
  iconType: string,
  props: Omit<IconProps, "name"> = {}
): React.ReactNode => {
  return <Icon name={iconType} {...props} />;
};

/**
 * Type guard to check if a string is a valid icon name
 */
export const isValidIconName = (name: string): name is IconName => {
  const { library, componentName } = detectIconLibrary(name);
  return library !== null && IconRegistries[library]?.[componentName] !== undefined;
};

/**
 * Get all available icon names for a specific library
 */
export const getAvailableIcons = (library?: keyof IconRegistryStructure): string[] => {
  if (library) {
    return Object.keys(IconRegistries[library]);
  }

  // Return all icon names from all libraries
  return Object.values(IconRegistries).flatMap((registry) => Object.keys(registry));
};

export default Icon;
