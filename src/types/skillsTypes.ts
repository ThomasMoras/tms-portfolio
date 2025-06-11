import { LocalizedText } from "@/lib/localizationUtils";

// Base interface for items that can have localized content
export interface LocalizableItem {
  title: LocalizedText;
  name?: LocalizedText;
}

// Category interface
export interface Category extends LocalizableItem {
  id: string;
  iconType?: string;
  color?: string;
  bgColor?: string;
  progressColor?: string;
}

// Skill level type
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

// Skill level info interface
export interface SkillLevelInfo {
  label: LocalizedText;
  range: [number, number];
}

// Skill interface
export interface Skill {
  id: string;
  name: string;
  categoryId: string;
  level?: SkillLevel | string; // Allow both for backward compatibility
  percentage?: number;
  color?: string;
  iconType?: string;
  showInBanner?: boolean;
  learning?: boolean;
  description?: LocalizedText;
  order?: number; // For custom ordering
  years?: number; // Years of experience
  proficiency?: number; // Alternative to percentage
}

// Tool interface
export interface Tool {
  name: LocalizedText;
  iconType: string;
  color?: string;
  imgPath?: string;
}

// Tool category interface
export interface ToolCategory {
  id: string;
  title: LocalizedText;
  techs: Tool[];
}

// Certification interface
export interface Certification {
  name: LocalizedText;
  school: LocalizedText;
  img: string;
  link?: string;
  schoolUrl?: string;
  complete?: string;
  learning?: boolean;
}

// Certification category interface
export interface CertificationCategory {
  title: LocalizedText;
  techs: Certification[];
}

// Soft skills section interface
export interface SoftSkillsSection {
  title: string;
  iconType: string;
  color: string;
  items: string[];
}

// Soft skills structure for both locales
export interface SoftSkillsData {
  en: SoftSkillsSection[];
  fr: SoftSkillsSection[];
}
