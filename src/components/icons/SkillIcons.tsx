import React from "react";
import { Code, Boxes, Binary, Database, Server, Layout, ArrowRight, HardHat } from "lucide-react";
import { FaReact, FaHardHat, FaEthereum, FaJava } from "react-icons/fa";
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
} from "react-icons/si";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { TiVendorMicrosoft } from "react-icons/ti";

type IconProps = {
  className?: string;
  size?: number;
};

/**
 * Get an icon component by its type with customizable size
 * @param iconType - The type identifier for the icon
 * @param props - Optional properties including size and className
 * @returns React component for the icon
 */
export const getIconByType = (iconType: string, props: IconProps = {}): React.ReactNode => {
  const { size = 24, className = "" } = props;

  // Function to get appropriate className based on size if not provided
  const getClassName = () => {
    if (className) return className;

    // Convert size to appropriate Tailwind class or return inline size
    if (size <= 16) return "h-4 w-4";
    if (size <= 20) return "h-5 w-5";
    if (size <= 24) return "h-6 w-6";
    if (size <= 32) return "h-8 w-8";
    if (size <= 40) return "h-10 w-10";
    if (size <= 48) return "h-12 w-12";
    return `h-[${size}px] w-[${size}px]`;
  };

  const iconClassName = getClassName();

  switch (iconType) {
    // Lucide Icons
    case "server":
      return <Server className={iconClassName} size={size} />;
    case "layout":
      return <Layout className={iconClassName} size={size} />;
    case "boxes":
      return <Boxes className={iconClassName} size={size} />;
    case "binary":
      return <Binary className={iconClassName} size={size} />;
    case "database":
      return <Database className={iconClassName} size={size} />;
    case "code":
      return <Code className={iconClassName} size={size} />;
    case "arrow-right":
      return <ArrowRight className={iconClassName} size={size} />;
    case "hardhat-lucide":
      return <HardHat className={iconClassName} size={size} />;

    // React Icons (FA)
    case "react-fa":
      return <FaReact className={iconClassName} size={size} />;
    case "hardhat":
      return <FaHardHat className={iconClassName} size={size} />;
    case "ethereum":
      return <FaEthereum className={iconClassName} size={size} />;
    case "java":
      return <FaJava className={iconClassName} size={size} />;

    // React Icons (Ri)
    case "nextjs":
      return <RiNextjsFill className={iconClassName} size={size} />;
    case "tailwind":
      return <RiTailwindCssFill className={iconClassName} size={size} />;
    case "notion":
      return <RiNotionFill className={iconClassName} size={size} />;

    // React Icons (Si)
    case "react":
      return <SiReact className={iconClassName} size={size} />;
    case "typescript":
      return <SiTypescript className={iconClassName} size={size} />;
    case "solidity":
      return <SiSolidity className={iconClassName} size={size} />;
    case "rust":
      return <SiRust className={iconClassName} size={size} />;
    case "nodejs":
      return <SiNodedotjs className={iconClassName} size={size} />;
    case "docker":
      return <SiDocker className={iconClassName} size={size} />;
    case "git":
      return <SiGit className={iconClassName} size={size} />;
    case "postgresql":
      return <SiPostgresql className={iconClassName} size={size} />;
    case "mongodb":
      return <SiMongodb className={iconClassName} size={size} />;
    case "ethers":
      return <SiEthers className={iconClassName} size={size} />;
    case "express":
      return <SiExpress className={iconClassName} size={size} />;
    case "golang":
      return <SiGoland className={iconClassName} size={size} />;
    case "javascript":
      return <SiJavascript className={iconClassName} size={size} />;
    case "kubernetes":
      return <SiKubernetes className={iconClassName} size={size} />;
    case "linux":
      return <SiLinux className={iconClassName} size={size} />;
    case "nextjs-si":
      return <SiNextdotjs className={iconClassName} size={size} />;
    case "obsidian":
      return <SiObsidian className={iconClassName} size={size} />;
    case "postman":
      return <SiPostman className={iconClassName} size={size} />;
    case "prisma":
      return <SiPrisma className={iconClassName} size={size} />;
    case "python":
      return <SiPython className={iconClassName} size={size} />;
    case "tailwind-si":
      return <SiTailwindcss className={iconClassName} size={size} />;
    case "vercel":
      return <SiVercel className={iconClassName} size={size} />;

    // React Icons (Di)
    case "sqlserver":
      return <DiMsqlServer className={iconClassName} size={size} />;
    case "vscode":
      return <DiVisualstudio className={iconClassName} size={size} />;

    // React Icons (Tb)
    case "csharp":
      return <TbBrandCSharp className={iconClassName} size={size} />;

    // React Icons (Ti)
    case "microsoft":
      return <TiVendorMicrosoft className={iconClassName} size={size} />;

    default:
      console.warn(`Icon type "${iconType}" not found`);
      return null;
  }
};

/**
 * Pre-configured technology icons with colors and standard sizing
 */
export const technologies = {
  blockchain: [
    {
      name: "Solidity",
      icon: <SiSolidity className="h-6 w-6" />,
      color: "#363636",
    },
    {
      name: "Ethereum",
      icon: <FaEthereum className="h-6 w-6" />,
      color: "#3C3C3D",
    },
    {
      name: "Web3.js",
      icon: <HardHat className="h-6 w-6" />,
      color: "#F6851B",
    },
    {
      name: "Ethers.js",
      icon: <SiEthers className="h-6 w-6" />,
      color: "#2535a0",
    },
  ],
  frontend: [
    { name: "React", icon: <SiReact className="h-6 w-6" />, color: "#61DAFB" },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-6 w-6" />,
      color: "#000000",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-6 w-6" />,
      color: "#3178C6",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-6 w-6" />,
      color: "#F7DF1E",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="h-6 w-6" />,
      color: "#06B6D4",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="h-6 w-6" />,
      color: "#339933",
    },
    {
      name: "Express",
      icon: <SiExpress className="h-6 w-6" />,
      color: "#000000",
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="h-6 w-6" />,
      color: "#2D3748",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="h-6 w-6" />,
      color: "#4169E1",
    },
    {
      name: "SQL Server",
      icon: <DiMsqlServer className="h-6 w-6" />,
      color: "#CC2927",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-6 w-6" />,
      color: "#47A248",
    },
  ],
  tools: [
    { name: "Linux", icon: <SiLinux className="h-6 w-6" />, color: "#000000" },
    {
      name: "VS Code",
      icon: <DiVisualstudio className="h-6 w-6" />,
      color: "#007ACC",
    },
    {
      name: "Postman",
      icon: <SiPostman className="h-6 w-6" />,
      color: "#FF6C37",
    },
    {
      name: "Obsidian",
      icon: <SiObsidian className="h-6 w-6" />,
      color: "#483699",
    },
    {
      name: "Notion",
      icon: <RiNotionFill className="h-6 w-6" />,
      color: "#000000",
    },
    {
      name: "Suite Office",
      icon: <TiVendorMicrosoft className="h-6 w-6" />,
      color: "#E04C23",
    },
  ],
  deployment_devops: [
    {
      name: "Vercel",
      icon: <SiVercel className="h-6 w-6" />,
      color: "#000000",
    },
    {
      name: "Docker",
      icon: <SiDocker className="h-6 w-6" />,
      color: "#2496ED",
    },
    { name: "Git", icon: <SiGit className="h-6 w-6" />, color: "#F05032" },
  ],
  working: [
    { name: "Rust", icon: <SiRust className="h-6 w-6" />, color: "#000000" },
    { name: "Go", icon: <SiGoland className="h-6 w-6" />, color: "#00ADD8" },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="h-6 w-6" />,
      color: "#326CE5",
    },
  ],
  others: [
    {
      name: "C#",
      icon: <TbBrandCSharp className="h-6 w-6" />,
      color: "#68217A",
    },
    { name: "Java", icon: <FaJava className="h-6 w-6" />, color: "#f89820" },
    {
      name: "Python",
      icon: <SiPython className="h-6 w-6" />,
      color: "#3776AB",
    },
  ],
};
