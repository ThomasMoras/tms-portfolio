import {
  Code,
  Boxes,
  Binary,
  Database,
  Server,
  Layout,
  ArrowRight,
  HardHat,
  Search,
  ArrowUpDown,
  CheckSquare,
  MessageSquare,
  Users,
  Lightbulb,
  GitBranch,
  File,
  FileText,
  Send,
  BarChart,
  Award,
  Package,
  Cloud,
  LucideIcon,
} from "lucide-react";

// React Icons
import { FaReact, FaHardHat, FaEthereum, FaJava, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiNotionFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiSolidity,
  SiRust,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiEthers,
  SiExpress,
  SiGoland,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiNextdotjs,
  SiObsidian,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiGithub,
} from "react-icons/si";

import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { TiVendorMicrosoft } from "react-icons/ti";
import { ReactIcon, IconRegistryStructure } from "@/types/iconTypes";

// Create a mapping of icon names to their components with proper typing
export const LucideIconsRegistry: Record<string, LucideIcon> = {
  Code,
  Boxes,
  Binary,
  Database,
  Server,
  Layout,
  ArrowRight,
  HardHat,
  Search,
  ArrowUpDown,
  CheckSquare,
  MessageSquare,
  Users,
  Lightbulb,
  GitBranch,
  File,
  FileText,
  Send,
  BarChart,
  Award,
  Package,
  Cloud,
};

// React Icons - FA
export const FaIconsRegistry: Record<string, ReactIcon> = {
  FaReact,
  FaHardHat,
  FaEthereum,
  FaJava,
  FaGithub,
};

// React Icons - Ri
export const RiIconsRegistry: Record<string, ReactIcon> = {
  RiNextjsFill,
  RiNotionFill,
  RiTailwindCssFill,
};

// React Icons - Si
export const SiIconsRegistry: Record<string, ReactIcon> = {
  SiTypescript,
  SiSolidity,
  SiRust,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiEthers,
  SiExpress,
  SiGoland,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiNextdotjs,
  SiObsidian,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiGithub,
};

// React Icons - Di
export const DiIconsRegistry: Record<string, ReactIcon> = {
  DiMsqlServer,
  DiVisualstudio,
};

// React Icons - Tb
export const TbIconsRegistry: Record<string, ReactIcon> = {
  TbBrandCSharp,
};

// React Icons - Ti
export const TiIconsRegistry: Record<string, ReactIcon> = {
  TiVendorMicrosoft,
};

// Legacy mapping (compatibility for existing code)
export const LegacyIconMapping: Record<string, string> = {
  // Lucide mappings
  "server": "Server",
  "layout": "Layout",
  "boxes": "Boxes",
  "binary": "Binary",
  "database": "Database",
  "code": "Code",
  "arrow-right": "ArrowRight",
  "hardhat-lucide": "HardHat",
  "check-square": "CheckSquare",
  "message-square": "MessageSquare",
  "git-branch": "GitBranch",
  "file": "File",
  "file-text": "FileText",
  "send": "Send",
  "bar-chart": "BarChart",
  "award": "Award",
  "package": "Package",
  "cloud": "Cloud",
  "search": "Search",
  "arrow-up-down": "ArrowUpDown",
  "users": "Users",
  "lightbulb": "Lightbulb",

  // React Icons - FA mappings
  "react-fa": "FaReact",
  "hardhat": "FaHardHat",
  "ethereum": "FaEthereum",
  "java": "FaJava",

  // React Icons - Ri mappings
  "nextjs": "RiNextjsFill",
  "tailwind": "RiTailwindCssFill",
  "notion": "RiNotionFill",

  // React Icons - Si mappings
  "react": "SiReact",
  "typescript": "SiTypescript",
  "solidity": "SiSolidity",
  "rust": "SiRust",
  "nodejs": "SiNodedotjs",
  "docker": "SiDocker",
  "git": "SiGit",
  "postgresql": "SiPostgresql",
  "mongodb": "SiMongodb",
  "ethers": "SiEthers",
  "express": "SiExpress",
  "golang": "SiGoland",
  "javascript": "SiJavascript",
  "kubernetes": "SiKubernetes",
  "linux": "SiLinux",
  "nextjs-si": "SiNextdotjs",
  "obsidian": "SiObsidian",
  "postman": "SiPostman",
  "prisma": "SiPrisma",
  "python": "SiPython",
  "tailwind-si": "SiTailwindcss",
  "vercel": "SiVercel",
  "github": "SiGithub",

  // React Icons - Di mappings
  "sqlserver": "DiMsqlServer",
  "vscode": "DiVisualstudio",

  // React Icons - Tb mappings
  "csharp": "TbBrandCSharp",

  // React Icons - Ti mappings
  "microsoft": "TiVendorMicrosoft",

  // Common fallbacks
  "help-circle": "MessageSquare",
  "tool": "Package",
  "cursor-text": "Code",
};

// All icon registries combined with proper typing
export const IconRegistries: IconRegistryStructure = {
  Lucide: LucideIconsRegistry,
  Fa: FaIconsRegistry,
  Ri: RiIconsRegistry,
  Si: SiIconsRegistry,
  Di: DiIconsRegistry,
  Tb: TbIconsRegistry,
  Ti: TiIconsRegistry,
};

// Helper function to detect icon source library
export function detectIconLibrary(iconName: string): {
  library: keyof IconRegistryStructure | null;
  componentName: string;
} {
  // If it's a legacy name, map it first
  const mappedName = LegacyIconMapping[iconName] || iconName;

  // Check if the icon belongs to a specific library
  if (mappedName.startsWith("Fa")) {
    return { library: "Fa", componentName: mappedName };
  } else if (mappedName.startsWith("Ri")) {
    return { library: "Ri", componentName: mappedName };
  } else if (mappedName.startsWith("Si")) {
    return { library: "Si", componentName: mappedName };
  } else if (mappedName.startsWith("Di")) {
    return { library: "Di", componentName: mappedName };
  } else if (mappedName.startsWith("Tb")) {
    return { library: "Tb", componentName: mappedName };
  } else if (mappedName.startsWith("Ti")) {
    return { library: "Ti", componentName: mappedName };
  } else {
    // Default to Lucide icons, which don't have a prefix
    return { library: "Lucide", componentName: mappedName };
  }
}

// Create a comprehensive type for all available icon names
export type IconName =
  | keyof typeof LucideIconsRegistry
  | keyof typeof FaIconsRegistry
  | keyof typeof RiIconsRegistry
  | keyof typeof SiIconsRegistry
  | keyof typeof DiIconsRegistry
  | keyof typeof TbIconsRegistry
  | keyof typeof TiIconsRegistry
  | keyof typeof LegacyIconMapping;
