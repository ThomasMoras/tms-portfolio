import { getIconByType } from "@/components/icons/SkillIcons";

import {
  SkillCategory,
  SkillCategoryData,
  SkillLevel,
  TechCategory,
  TechCategoryData,
} from "@/types/section-skills";

// Fonction utilitaire pour déterminer le niveau de compétence
export const getSkillLevel = (percentage: number): SkillLevel => {
  if (percentage <= 40) return "beginner";
  if (percentage <= 70) return "intermediate";
  if (percentage <= 90) return "advanced";
  return "expert";
};

// Convertir les données en objets avec composants React
export const mapSkillData = (skillData: SkillCategoryData): SkillCategory => {
  return {
    id: skillData.id,
    title: skillData.title,
    icon: getIconByType(skillData.iconType),
    color: skillData.color,
    bgColor: skillData.bgColor,
    progressColor: skillData.progressColor,
    skills: skillData.skills.map((skill) => ({
      name: skill.name,
      icon: getIconByType(skill.iconType),
      level: skill.level,
      percentage: skill.percentage,
      learning: skill.learning,
    })),
  };
};

export const mapTechData = (techData: TechCategoryData): TechCategory => {
  return {
    title: techData.title,
    icon: getIconByType(techData.iconType),
    color: techData.color,
    link: techData.link,
    techs: techData.techs.map((tech) => ({
      name: tech.name,
      icon: getIconByType(tech.iconType),
      learning: tech.learning,
    })),
  };
};
