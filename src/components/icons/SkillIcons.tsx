// import React from "react";
// import { Icon, IconProps } from "./Icon";
// import { cn } from "@/lib/utils";

// export interface SkillIconProps extends Omit<IconProps, "className"> {
//   variant?: "small" | "medium" | "large";
//   colorClassName?: string;
//   isHovered?: boolean;
//   rounded?: boolean;
// }

// /**
//  * Specialized icon component for skills display
//  * Handles proper sizing, coloring, and hover effects
//  */
// export const SkillIcon: React.FC<SkillIconProps> = ({
//   variant = "medium",
//   colorClassName,
//   isHovered = false,
//   rounded = true,
//   ...props
// }) => {
//   // Sizing classes based on variant
//   const variantClasses = {
//     small: "h-4 w-4",
//     medium: "h-6 w-6",
//     large: "h-8 w-8",
//   };

//   // Build className with all the options
//   const className = cn(variantClasses[variant], colorClassName, {
//     "p-1 rounded-full": rounded,
//     "transition-all duration-200": isHovered,
//     "scale-110": isHovered,
//   });

//   return <Icon {...props} className={className} />;
// };

// /**
//  * Renders a skill icon with a label
//  */
// export const SkillIconWithLabel: React.FC<SkillIconProps & { label: string }> = ({
//   label,
//   ...iconProps
// }) => {
//   return (
//     <div className="flex items-center gap-2">
//       <SkillIcon {...iconProps} />
//       <span className="font-medium">{label}</span>
//     </div>
//   );
// };

// export default SkillIcon;
