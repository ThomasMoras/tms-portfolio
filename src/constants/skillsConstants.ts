import { mapSkillData, mapTechData } from "@/lib/mapper";
import {
  SkillCategory,
  SkillCategoryData,
  SkillLevel,
  SkillLevelInfo,
  TechCategory,
  TechCategoryData,
} from "@/types/skillsTypes";

// Informations sur les niveaux de compétence
export const SKILL_LEVELS: Record<SkillLevel, SkillLevelInfo> = {
  beginner: { label: "Débutant", range: [0, 40] },
  intermediate: { label: "Intermédiaire", range: [41, 70] },
  advanced: { label: "Avancé", range: [71, 90] },
  expert: { label: "Expert", range: [91, 100] },
};

// Catégories de technologie pour TechStackPreview
export const TECH_CATEGORIES_DATA: TechCategoryData[] = [
  {
    title: "Back-end",
    iconType: "server",
    color: "bg-blue-500/10 text-blue-500 border-blue-200 dark:border-blue-800/30",
    link: "/skills?tab=backend",
    techs: [
      {
        name: "Node.js",
        iconType: "nodejs",
        color: "#339933",
      },
      {
        name: "Express",
        iconType: "server",
        color: "#000000",
      },
      {
        name: "Rust",
        iconType: "rust",
        learning: true,
        color: "#000000",
      },
      {
        name: "Docker",
        iconType: "docker",
        color: "#2496ED",
      },
    ],
  },
  {
    title: "Front-end",
    iconType: "layout",
    color: "bg-purple-500/10 text-purple-500 border-purple-200 dark:border-purple-800/30",
    link: "/skills?tab=frontend",
    techs: [
      {
        name: "React",
        iconType: "react",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        iconType: "nextjs",
        color: "#000000",
      },
      {
        name: "TypeScript",
        iconType: "typescript",
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        iconType: "tailwind",
        color: "#06B6D4",
      },
    ],
  },
  {
    title: "Blockchain",
    iconType: "boxes",
    color: "bg-amber-500/10 text-amber-500 border-amber-200 dark:border-amber-800/30",
    link: "/skills?tab=blockchain",
    techs: [
      {
        name: "Solidity",
        iconType: "solidity",
        color: "#363636",
      },
      {
        name: "EVM",
        iconType: "binary",
        color: "#3C3C3D",
      },
      {
        name: "Hardhat",
        iconType: "hardhat",
        color: "#F6851B",
      },
      {
        name: "Web3.js",
        iconType: "code",
        color: "#F6851B",
      },
    ],
  },
];

// Catégories de compétences pour SkillsSection
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
        color: "#339933",
      },
      {
        name: "Express",
        iconType: "server",
        level: "advanced",
        percentage: 80,
        color: "#000000",
      },
      {
        name: "PostgreSQL",
        iconType: "postgresql",
        level: "intermediate",
        percentage: 70,
        color: "#4169E1",
      },
      {
        name: "MongoDB",
        iconType: "mongodb",
        level: "intermediate",
        percentage: 75,
        color: "#47A248",
      },
      {
        name: "Rust",
        iconType: "rust",
        level: "beginner",
        percentage: 30,
        learning: true,
        color: "#000000",
      },
      {
        name: "Docker",
        iconType: "docker",
        level: "intermediate",
        percentage: 60,
        color: "#2496ED",
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
      {
        name: "React",
        iconType: "react",
        level: "advanced",
        percentage: 90,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        iconType: "nextjs",
        level: "advanced",
        percentage: 75,
        color: "#000000",
      },
      {
        name: "TypeScript",
        iconType: "typescript",
        level: "advanced",
        percentage: 80,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        iconType: "tailwind",
        level: "advanced",
        percentage: 85,
        color: "#06B6D4",
      },
      {
        name: "Git",
        iconType: "git",
        level: "advanced",
        percentage: 85,
        color: "#F05032",
      },
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
        color: "#363636",
      },
      {
        name: "EVM",
        iconType: "binary",
        level: "intermediate",
        percentage: 70,
        color: "#3C3C3D",
      },
      {
        name: "Hardhat",
        iconType: "hardhat",
        level: "intermediate",
        percentage: 65,
        color: "#F6851B",
      },
      {
        name: "Web3.js",
        iconType: "code",
        level: "intermediate",
        percentage: 60,
        color: "#F6851B",
      },
    ],
  },
];

// Exporter les constantes avec composants React intégrés
export const SKILL_CATEGORIES: SkillCategory[] = SKILL_CATEGORIES_DATA.map(mapSkillData);
export const TECH_CATEGORIES: TechCategory[] = TECH_CATEGORIES_DATA.map(mapTechData);
