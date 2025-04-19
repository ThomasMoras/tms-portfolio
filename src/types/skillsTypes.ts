import { ReactNode } from "react";

// Types de base
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface SkillLevelInfo {
  label: string;
  range: [number, number];
}

// Types pour les données brutes
export interface SkillData {
  name: string;
  iconType: string;
  level: SkillLevel;
  percentage: number;
  color: string;
  learning?: boolean;
  description?: string;
  icon?: ReactNode;
}

export interface SkillCategoryData {
  id: string;
  title: string;
  iconType: string;
  color: string;
  bgColor: string;
  progressColor: string;
  skills: SkillData[];
}

export interface TechData {
  name: string;
  iconType: string;
  color: string;
  learning?: boolean;
  icon?: ReactNode;
}

export interface TechCategoryData {
  title: string;
  iconType: string;
  color: string;
  link: string;
  techs: TechData[];
}

// Types pour les composants React
export interface SkillCategory extends Omit<SkillCategoryData, "iconType" | "skills"> {
  icon: ReactNode;
  skills: (SkillData & { icon: ReactNode })[];
}

export interface TechCategory extends Omit<TechCategoryData, "iconType" | "techs"> {
  icon: ReactNode;
  techs: (TechData & { icon: ReactNode })[];
}
