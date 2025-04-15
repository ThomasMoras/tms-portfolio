import { ReactNode } from "react";

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

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
