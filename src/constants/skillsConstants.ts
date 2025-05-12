import { mapSkillData, mapTechData } from "@/lib/mapper";
import {
  SkillCategory,
  SkillData,
  SkillLevel,
  SkillLevelInfo,
  TechCategory,
} from "@/types/skillsTypes";

// Skill level definitions remain the same
export const SKILL_LEVELS: Record<SkillLevel, SkillLevelInfo> = {
  beginner: { label: "Débutant", range: [0, 40] },
  intermediate: { label: "Intermédiaire", range: [41, 70] },
  advanced: { label: "Avancé", range: [71, 90] },
  expert: { label: "Expert", range: [91, 100] },
};

// Unified skills data structure
export const SKILLS_DATA = [
  {
    id: "backend",
    title: "Back-end",
    iconType: "server",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    progressColor: "bg-blue-500",
    bannerColor: "bg-blue-500/10 text-blue-500 border-blue-200 dark:border-blue-800/30",
    link: "/skills?tab=backend",
    skills: [
      {
        name: "Node.js",
        iconType: "nodejs",
        level: "advanced",
        percentage: 85,
        color: "#339933",
        showInBanner: true,
      },
      {
        name: "Express",
        iconType: "server",
        level: "advanced",
        percentage: 80,
        color: "#000000",
        showInBanner: true,
      },
      {
        name: "PostgreSQL",
        iconType: "postgresql",
        level: "intermediate",
        percentage: 70,
        color: "#4169E1",
        showInBanner: false,
      },
      {
        name: "MongoDB",
        iconType: "mongodb",
        level: "intermediate",
        percentage: 75,
        color: "#47A248",
        showInBanner: false,
      },
      {
        name: "Rust",
        iconType: "rust",
        level: "beginner",
        percentage: 30,
        learning: true,
        color: "#000000",
        showInBanner: true,
      },
      {
        name: "Docker",
        iconType: "docker",
        level: "intermediate",
        percentage: 60,
        color: "#2496ED",
        showInBanner: true,
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
    bannerColor: "bg-purple-500/10 text-purple-500 border-purple-200 dark:border-purple-800/30",
    link: "/skills?tab=frontend",
    skills: [
      {
        name: "React",
        iconType: "react",
        level: "advanced",
        percentage: 90,
        color: "#61DAFB",
        showInBanner: true,
      },
      {
        name: "Next.js",
        iconType: "nextjs",
        level: "advanced",
        percentage: 75,
        color: "#000000",
        showInBanner: true,
      },
      {
        name: "TypeScript",
        iconType: "typescript",
        level: "advanced",
        percentage: 80,
        color: "#3178C6",
        showInBanner: true,
      },
      {
        name: "Tailwind CSS",
        iconType: "tailwind",
        level: "advanced",
        percentage: 85,
        color: "#06B6D4",
        showInBanner: true,
      },
      {
        name: "Git",
        iconType: "git",
        level: "advanced",
        percentage: 85,
        color: "#F05032",
        showInBanner: false,
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
    bannerColor: "bg-amber-500/10 text-amber-500 border-amber-200 dark:border-amber-800/30",
    link: "/skills?tab=blockchain",
    skills: [
      {
        name: "Solidity",
        iconType: "solidity",
        level: "advanced",
        percentage: 75,
        color: "#363636",
        showInBanner: true,
      },
      {
        name: "EVM",
        iconType: "binary",
        level: "intermediate",
        percentage: 70,
        color: "#3C3C3D",
        showInBanner: true,
      },
      {
        name: "Hardhat",
        iconType: "hardhat",
        level: "intermediate",
        percentage: 65,
        color: "#F6851B",
        showInBanner: true,
      },
      {
        name: "Web3.js",
        iconType: "code",
        level: "intermediate",
        percentage: 60,
        color: "#F6851B",
        showInBanner: true,
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = SKILLS_DATA.map((category) =>
  mapSkillData({
    id: category.id,
    title: category.title,
    iconType: category.iconType,
    color: category.color,
    bgColor: category.bgColor,
    progressColor: category.progressColor,
    skills: category.skills as SkillData[],
  })
);

// Generate TECH_CATEGORIES for the TechBanner component
export const TECH_CATEGORIES: TechCategory[] = SKILLS_DATA.map((category) =>
  mapTechData({
    title: category.title,
    iconType: category.iconType,
    color: category.bannerColor,
    link: category.link,
    techs: category.skills
      .filter((skill) => skill.showInBanner)
      .map((skill) => ({
        name: skill.name,
        iconType: skill.iconType,
        color: skill.color,
        learning: skill.learning,
      })),
  })
);
