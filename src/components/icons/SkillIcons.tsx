import React from "react";
import {
  Code,
  Boxes,
  Binary,
  Database,
  Server,
  Layout,
  ArrowRight,
} from "lucide-react";
import { FaReact, FaHardHat } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiSolidity,
  SiRust,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

type IconProps = {
  className?: string;
  size?: number;
};

export const getIconByType = (
  iconType: string,
  props: IconProps = {}
): React.ReactNode => {
  const { size = 16, className = "" } = props;

  switch (iconType) {
    // Lucide Icons
    case "server":
      return <Server className={className || "h-5 w-5"} size={size} />;
    case "layout":
      return <Layout className={className || "h-5 w-5"} size={size} />;
    case "boxes":
      return <Boxes className={className || "h-5 w-5"} size={size} />;
    case "binary":
      return <Binary className={className} size={size} />;
    case "database":
      return <Database className={className} size={size} />;
    case "code":
      return <Code className={className} size={size} />;
    case "arrow-right":
      return <ArrowRight className={className} size={size} />;

    // React Icons (FA)
    case "react":
      return <FaReact className={className} size={size} />;
    case "hardhat":
      return <FaHardHat className={className} size={size} />;

    // React Icons (Ri)
    case "nextjs":
      return <RiNextjsFill className={className} size={size} />;
    case "tailwind":
      return <RiTailwindCssFill className={className} size={size} />;

    // React Icons (Si)
    case "typescript":
      return <SiTypescript className={className} size={size} />;
    case "solidity":
      return <SiSolidity className={className} size={size} />;
    case "rust":
      return <SiRust className={className} size={size} />;
    case "nodejs":
      return <SiNodedotjs className={className} size={size} />;
    case "docker":
      return <SiDocker className={className} size={size} />;
    case "git":
      return <SiGit className={className} size={size} />;
    case "postgresql":
      return <SiPostgresql className={className} size={size} />;
    case "mongodb":
      return <SiMongodb className={className} size={size} />;

    default:
      return null;
  }
};
