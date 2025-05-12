import { ReactNode } from "react";

// Basic types
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface SkillLevelInfo {
  label: string;
  range: [number, number];
}

// Types for raw data
export interface SkillData {
  name: string;
  iconType: string;
  level: SkillLevel;
  percentage: number;
  color: string;
  learning?: boolean;
  description?: string;
  icon?: ReactNode;
  showInBanner?: boolean;
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

// Types for the unified skills data structure
export interface UnifiedSkillCategory {
  id: string;
  title: string;
  iconType: string;
  color: string;
  bgColor: string;
  progressColor: string;
  bannerColor: string;
  link: string;
  skills: SkillData[];
}

// Types for React components
export interface SkillCategory extends Omit<SkillCategoryData, "iconType" | "skills"> {
  icon: ReactNode;
  skills: (SkillData & { icon: ReactNode })[];
}

export interface TechCategory extends Omit<TechCategoryData, "iconType" | "techs"> {
  icon: ReactNode;
  techs: (TechData & { icon: ReactNode })[];
}
