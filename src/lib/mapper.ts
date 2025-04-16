import { getIconByType } from "@/components/icons/SkillIcons";
import {
  Skill,
  SkillCategory,
  SkillCategoryData,
  TechCategory,
  TechCategoryData,
  TechItem,
  TechItemData,
} from "@/types/skillsTypes";

// Map skill data to include React components
export const mapSkillData = (categoryData: SkillCategoryData): SkillCategory => {
  const mappedSkills: Skill[] = categoryData.skills.map((skill) => ({
    name: skill.name,
    // Apply size 20 for skill icons
    icon: getIconByType(skill.iconType, { size: 20, className: "h-5 w-5" }),
    level: skill.level,
    percentage: skill.percentage,
    learning: skill.learning || false,
  }));

  return {
    id: categoryData.id,
    title: categoryData.title,
    // Apply size 24 for category icons
    icon: getIconByType(categoryData.iconType, { size: 24, className: "h-6 w-6" }),
    color: categoryData.color,
    bgColor: categoryData.bgColor,
    progressColor: categoryData.progressColor,
    skills: mappedSkills,
  };
};

// Map tech data to include React components with configurable sizes
export const mapTechData = (categoryData: TechCategoryData): TechCategory => {
  const mappedTechs: TechItem[] = categoryData.techs.map((tech: TechItemData) => ({
    name: tech.name,
    // Apply larger size (32px) for tech icons in the banner
    icon: getIconByType(tech.iconType, { size: 32, className: "h-6 w-6" }),
    color: tech.color,
    learning: tech.learning || false,
  }));

  return {
    title: categoryData.title,
    // Size for category icons in header
    icon: getIconByType(categoryData.iconType, { size: 24, className: "h-6 w-6" }),
    color: categoryData.color,
    link: categoryData.link,
    techs: mappedTechs,
  };
};
