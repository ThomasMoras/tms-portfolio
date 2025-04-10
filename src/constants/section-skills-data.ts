import { SkillLevel, SkillLevelInfo } from "@/types/section-skills";

// Informations sur les niveaux de compétence
export const SKILL_LEVELS: Record<SkillLevel, SkillLevelInfo> = {
  beginner: { label: "Débutant", range: [0, 40] },
  intermediate: { label: "Intermédiaire", range: [41, 70] },
  advanced: { label: "Avancé", range: [71, 90] },
  expert: { label: "Expert", range: [91, 100] },
};

// Fonction utilitaire pour déterminer le niveau de compétence
export const getSkillLevel = (percentage: number): SkillLevel => {
  if (percentage <= 40) return "beginner";
  if (percentage <= 70) return "intermediate";
  if (percentage <= 90) return "advanced";
  return "expert";
};

// Type pour les données sans JSX
export type SkillCategoryData = {
  id: string;
  title: string;
  iconType: string;
  color: string;
  bgColor: string;
  progressColor: string;
  skills: SkillData[];
};

export type SkillData = {
  name: string;
  iconType: string;
  level: SkillLevel;
  percentage: number;
  learning?: boolean;
};

export type TechCategoryData = {
  title: string;
  iconType: string;
  color: string;
  link: string;
  techs: TechItemData[];
};

export type TechItemData = {
  name: string;
  iconType: string;
  learning?: boolean;
};

// Catégories de technologie pour TechStackPreview (sans JSX)
export const TECH_CATEGORIES_DATA: TechCategoryData[] = [
  {
    title: "Back-end",
    iconType: "server",
    color:
      "bg-blue-500/10 text-blue-500 border-blue-200 dark:border-blue-800/30",
    link: "/skills?tab=backend",
    techs: [
      { name: "Node.js", iconType: "nodejs" },
      { name: "Express", iconType: "server" },
      { name: "API REST", iconType: "arrow-right" },
      { name: "Rust", iconType: "rust", learning: true },
      { name: "Docker", iconType: "docker" },
    ],
  },
  {
    title: "Front-end",
    iconType: "layout",
    color:
      "bg-purple-500/10 text-purple-500 border-purple-200 dark:border-purple-800/30",
    link: "/skills?tab=frontend",
    techs: [
      { name: "React", iconType: "react" },
      { name: "Next.js", iconType: "nextjs" },
      { name: "TypeScript", iconType: "typescript" },
      { name: "Tailwind CSS", iconType: "tailwind" },
    ],
  },
  {
    title: "Blockchain",
    iconType: "boxes",
    color:
      "bg-amber-500/10 text-amber-500 border-amber-200 dark:border-amber-800/30",
    link: "/skills?tab=blockchain",
    techs: [
      { name: "Solidity", iconType: "solidity" },
      { name: "EVM", iconType: "binary" },
      { name: "Hardhat", iconType: "hardhat" },
      { name: "Web3.js", iconType: "code" },
    ],
  },
];

// Catégories de compétences pour SkillsSection (sans JSX)
export const SKILL_CATEGORIES_DATA: SkillCategoryData[] = [
  {
    id: "backend",
    title: "Back-end",
    iconType: "server",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    progressColor: "bg-blue-500",
    skills: [
      {
        name: "Node.js",
        iconType: "nodejs",
        level: "advanced",
        percentage: 85,
      },
      {
        name: "Express",
        iconType: "server",
        level: "advanced",
        percentage: 80,
      },
      {
        name: "PostgreSQL",
        iconType: "postgresql",
        level: "intermediate",
        percentage: 70,
      },
      {
        name: "MongoDB",
        iconType: "mongodb",
        level: "intermediate",
        percentage: 75,
      },
      {
        name: "Rust",
        iconType: "rust",
        level: "beginner",
        percentage: 30,
        learning: true,
      },
      {
        name: "Docker",
        iconType: "docker",
        level: "intermediate",
        percentage: 60,
      },
    ],
  },
  {
    id: "frontend",
    title: "Front-end",
    iconType: "layout",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    progressColor: "bg-purple-500",
    skills: [
      { name: "React", iconType: "react", level: "advanced", percentage: 90 },
      {
        name: "Next.js",
        iconType: "nextjs",
        level: "advanced",
        percentage: 75,
      },
      {
        name: "TypeScript",
        iconType: "typescript",
        level: "advanced",
        percentage: 80,
      },
      {
        name: "Tailwind CSS",
        iconType: "tailwind",
        level: "advanced",
        percentage: 85,
      },
      { name: "Git", iconType: "git", level: "advanced", percentage: 85 },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    iconType: "boxes",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    progressColor: "bg-amber-500",
    skills: [
      {
        name: "Solidity",
        iconType: "solidity",
        level: "advanced",
        percentage: 75,
      },
      {
        name: "EVM",
        iconType: "binary",
        level: "intermediate",
        percentage: 70,
      },
      {
        name: "Hardhat",
        iconType: "hardhat",
        level: "intermediate",
        percentage: 65,
      },
      {
        name: "Web3.js",
        iconType: "code",
        level: "intermediate",
        percentage: 60,
      },
    ],
  },
];
