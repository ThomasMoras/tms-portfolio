import { ReactNode } from "react";

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

// Types pour TechStackPreview
export type TechItem = {
  name: string;
  icon: ReactNode;
  learning?: boolean;
};

export type TechCategory = {
  title: string;
  icon: ReactNode;
  color: string;
  link: string;
  techs: TechItem[];
};

// Types pour SkillsSection
export type Skill = {
  name: string;
  icon: ReactNode;
  level: SkillLevel;
  percentage: number;
  learning?: boolean;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: ReactNode;
  color: string;
  bgColor: string;
  progressColor: string;
  skills: Skill[];
};

export type SkillLevelInfo = {
  label: string;
  range: [number, number];
};

// Type pour les données GitHub (pour utilisation future)
export type GithubSkill = {
  name: string;
  proficiency: number;
  experience: number;
  commits?: number;
  repos: number;
};
