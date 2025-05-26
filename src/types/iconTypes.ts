import { LucideProps } from "lucide-react";
import { IconBaseProps } from "react-icons";

// Base interface for all icon props - our common API
export interface BaseIconProps {
  className?: string;
  size?: number | string;
  color?: string;
}

// Icon component props
export interface IconProps extends BaseIconProps {
  name: string;
}

// Registry-specific types
export type LucideIcon = React.FC<LucideProps>;
export type ReactIcon = React.FC<IconBaseProps>;

// Registry structure type
export interface IconRegistryStructure {
  Lucide: Record<string, LucideIcon>;
  Fa: Record<string, ReactIcon>;
  Ri: Record<string, ReactIcon>;
  Si: Record<string, ReactIcon>;
  Di: Record<string, ReactIcon>;
  Tb: Record<string, ReactIcon>;
  Ti: Record<string, ReactIcon>;
}
