// import React from "react";
// import { Icon, IconProps } from "./Icon";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";

// export interface TechnologyData {
//   name: string;
//   iconName: string;
//   color: string;
//   learning?: boolean;
// }

// export interface TechnologyIconProps extends Omit<IconProps, "name"> {
//   technology: TechnologyData | string;
//   showLabel?: boolean;
//   showBadge?: boolean;
//   variant?: "compact" | "standard" | "detailed";
//   locale?: "en" | "fr";
// }

// /**
//  * Specialized icon component for technology display
//  * Can show technology with label, color, and badges
//  */
// export const TechnologyIcon: React.FC<TechnologyIconProps> = ({
//   technology,
//   showLabel = false,
//   showBadge = false,
//   variant = "standard",
//   locale = "en",
//   size = 24,
//   ...props
// }) => {
//   // Handle string or object technology
//   const isTechObject = typeof technology !== "string";

//   // Extract data based on tech type
//   const iconName = isTechObject ? technology.iconName : technology;
//   const label = isTechObject ? technology.name : technology;
//   const color = isTechObject ? technology.color : undefined;
//   const isLearning = isTechObject ? technology.learning : false;

//   // Size classes based on variant
//   const variantSizes = {
//     compact: 20,
//     standard: 24,
//     detailed: 32,
//   };

//   // Use variant size or provided size
//   const iconSize = size || variantSizes[variant];

//   // Different layout based on variant
//   if (variant === "detailed" || (showLabel && showBadge)) {
//     return (
//       <div className="flex flex-col items-center gap-2 p-3">
//         <div className="rounded-full bg-background/90 dark:bg-background/70 p-3 shadow-sm">
//           <Icon name={iconName} size={iconSize} color={color} />
//         </div>

//         {showLabel && (
//           <div className="flex flex-col items-center gap-1">
//             <span className="font-medium text-center">{label}</span>

//             {showBadge && isLearning && (
//               <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
//                 {locale === "fr" ? "En apprentissage" : "Learning"}
//               </Badge>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   }

//   // Standard or compact display with optional label
//   return (
//     <div
//       className={cn(
//         "flex items-center",
//         showLabel ? "gap-2" : "",
//         variant === "compact" ? "text-sm" : ""
//       )}
//     >
//       <Icon name={iconName} size={iconSize} color={color} {...props} />

//       {showLabel && (
//         <div className="flex items-center gap-1">
//           <span className="font-medium">{label}</span>

//           {showBadge && isLearning && (
//             <Badge
//               variant="outline"
//               size="sm"
//               className="bg-amber-100 text-amber-800 border-amber-200"
//             >
//               {locale === "fr" ? "En apprentissage" : "Learning"}
//             </Badge>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// /**
//  * Pre-configured technology categories with their icons
//  */
// export const TECHNOLOGY_GROUPS = {
//   blockchain: [
//     { name: "Solidity", iconName: "SiSolidity", color: "#363636" },
//     { name: "Ethereum", iconName: "FaEthereum", color: "#3C3C3D" },
//     { name: "Web3.js", iconName: "hardhat", color: "#F6851B" },
//     { name: "Ethers.js", iconName: "SiEthers", color: "#2535a0" },
//   ],
//   frontend: [
//     { name: "React", iconName: "SiReact", color: "#61DAFB" },
//     { name: "Next.js", iconName: "SiNextdotjs", color: "#000000" },
//     { name: "TypeScript", iconName: "SiTypescript", color: "#3178C6" },
//     { name: "JavaScript", iconName: "SiJavascript", color: "#F7DF1E" },
//     { name: "Tailwind", iconName: "SiTailwindcss", color: "#06B6D4" },
//   ],
//   backend: [
//     { name: "Node.js", iconName: "SiNodedotjs", color: "#339933" },
//     { name: "Express", iconName: "SiExpress", color: "#000000" },
//     { name: "Prisma", iconName: "SiPrisma", color: "#2D3748" },
//     { name: "PostgreSQL", iconName: "SiPostgresql", color: "#4169E1" },
//     { name: "SQL Server", iconName: "DiMsqlServer", color: "#CC2927" },
//     { name: "MongoDB", iconName: "SiMongodb", color: "#47A248" },
//   ],
//   // Add other categories as needed
// };

// /**
//  * Component to render a group of technology icons
//  */
// export const TechnologyGroup: React.FC<{
//   technologies: TechnologyData[];
//   title?: string;
//   variant?: TechnologyIconProps["variant"];
//   showLabels?: boolean;
//   showBadges?: boolean;
//   locale?: "en" | "fr";
// }> = ({
//   technologies,
//   title,
//   variant = "standard",
//   showLabels = true,
//   showBadges = true,
//   locale = "en",
// }) => {
//   return (
//     <div className="space-y-3">
//       {title && <h3 className="text-lg font-semibold">{title}</h3>}

//       <div
//         className={cn(
//           "grid gap-4",
//           variant === "compact"
//             ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
//             : variant === "standard"
//               ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
//               : "grid-cols-1 sm:grid-cols-2"
//         )}
//       >
//         {technologies.map((tech) => (
//           <TechnologyIcon
//             key={tech.name}
//             technology={tech}
//             showLabel={showLabels}
//             showBadge={showBadges}
//             variant={variant}
//             locale={locale}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechnologyIcon;
