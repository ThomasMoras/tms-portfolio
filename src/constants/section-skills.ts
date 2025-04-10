import { getIconByType } from "@/components/icons/SkillIcons";
import {
  SKILL_CATEGORIES_DATA,
  TECH_CATEGORIES_DATA,
  SKILL_LEVELS,
  getSkillLevel,
  type SkillCategoryData,
  type TechCategoryData,
} from "@/constants/section-skills-data";
import { SkillCategory, TechCategory } from "@/types/section-skills";

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

// Exporter les constantes avec composants React intégrés
export const SKILL_CATEGORIES: SkillCategory[] =
  SKILL_CATEGORIES_DATA.map(mapSkillData);
export const TECH_CATEGORIES: TechCategory[] =
  TECH_CATEGORIES_DATA.map(mapTechData);

// Ré-exporter les constantes qui n'ont pas besoin de transformation
export { SKILL_LEVELS, getSkillLevel };
