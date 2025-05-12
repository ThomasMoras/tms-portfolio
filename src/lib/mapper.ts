import { getIconByType } from "@/components/icons/SkillIcons";
import {
  SkillCategory,
  SkillCategoryData,
  TechCategory,
  TechCategoryData,
  TechData,
} from "@/types/skillsTypes";

// Map skill data to include React components
export const mapSkillData = (categoryData: SkillCategoryData): SkillCategory => {
  const mappedSkills = categoryData.skills.map((skill) => ({
    ...skill,
    icon: getIconByType(skill.iconType, { size: 20, className: "h-5 w-5" }),
  }));

  return {
    id: categoryData.id,
    title: categoryData.title,
    icon: getIconByType(categoryData.iconType, { size: 24, className: "h-6 w-6" }),
    color: categoryData.color,
    bgColor: categoryData.bgColor,
    progressColor: categoryData.progressColor,
    skills: mappedSkills,
  };
};

// Map tech data to include React components with configurable sizes
export const mapTechData = (categoryData: TechCategoryData): TechCategory => {
  const mappedTechs = categoryData.techs.map((tech: TechData) => ({
    ...tech,
    icon: getIconByType(tech.iconType, { size: 32, className: "h-6 w-6" }),
  }));

  return {
    title: categoryData.title,
    icon: getIconByType(categoryData.iconType, { size: 24, className: "h-6 w-6" }),
    color: categoryData.color,
    link: categoryData.link,
    techs: mappedTechs,
  };
};

// export const extractSkillCategoryData = (
//   unifiedCategory: UnifiedSkillCategory
// ): SkillCategoryData => ({
//   id: unifiedCategory.id,
//   title: unifiedCategory.title,
//   iconType: unifiedCategory.iconType,
//   color: unifiedCategory.color,
//   bgColor: unifiedCategory.bgColor,
//   progressColor: unifiedCategory.progressColor,
//   skills: unifiedCategory.skills.map((skill) => ({
//     name: skill.name,
//     iconType: skill.iconType,
//     level: skill.level,
//     percentage: skill.percentage,
//     color: skill.color,
//     learning: skill.learning,
//     description: skill.description,
//   })),
// });

// export const extractTechCategoryData = (
//   unifiedCategory: UnifiedSkillCategory
// ): TechCategoryData => ({
//   title: unifiedCategory.title,
//   iconType: unifiedCategory.iconType,
//   color: unifiedCategory.bannerColor,
//   link: unifiedCategory.link,
//   techs: unifiedCategory.skills
//     .filter((skill) => skill.showInBanner)
//     .map((skill) => ({
//       name: skill.name,
//       iconType: skill.iconType,
//       color: skill.color,
//       learning: skill.learning,
//     })),
// });
