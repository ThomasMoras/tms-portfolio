// import { getIconByType } from "@/components/icons/SkillIcons";
// import {
//   SkillCategory,
//   SkillCategoryData,
//   TechCategory,
//   TechCategoryData,
//   TechData,
//   SoftSkillCategory,
// } from "@/types/skillsTypes";

// // Map skill data to include React components
// export const mapSkillData = (categoryData: SkillCategoryData): SkillCategory => {
//   const mappedSkills = categoryData.skills.map((skill) => ({
//     ...skill,
//     icon: getIconByType(skill.iconType, { size: 20, className: "h-5 w-5" }),
//   }));

//   return {
//     id: categoryData.id,
//     title: categoryData.title,
//     icon: getIconByType(categoryData.iconType, { size: 24, className: "h-6 w-6" }),
//     color: categoryData.color,
//     bgColor: categoryData.bgColor,
//     progressColor: categoryData.progressColor,
//     skills: mappedSkills,
//   };
// };

// // Map tech data to include React components with configurable sizes
// export const mapTechData = (categoryData: TechCategoryData): TechCategory => {
//   const mappedTechs = categoryData.techs.map((tech: TechData) => ({
//     ...tech,
//     icon: getIconByType(tech.iconType, { size: 32, className: "h-6 w-6" }),
//   }));

//   return {
//     id: categoryData.id,
//     title: categoryData.title,
//     icon: getIconByType(categoryData.iconType, { size: 24, className: "h-6 w-6" }),
//     color: categoryData.color,
//     link: categoryData.link,
//     techs: mappedTechs,
//   };
// };

// // Map soft skills data to include React components
// export const mapSoftSkillData = (categoryData: SoftSkillCategory): SoftSkillCategory => {
//   // For soft skills, we don't need to add icons to the individual items
//   // Just add the main icon to the category

//   return {
//     id: categoryData.id,
//     title: categoryData.title,
//     iconType: categoryData.iconType,
//     icon: getIconByType(categoryData.iconType, { size: 24, className: "h-6 w-6" }),
//     color: categoryData.color,
//     techs: categoryData.techs,
//   };
// };

// // Enhanced handlers for special case mapping
// export const mapSpecializedData = {
//   // Handle different tech data structures (for data that doesn't fit the standard pattern)
//   mapCustomTechData: (data: any, config: { iconSize?: number } = {}): any => {
//     const iconSize = config.iconSize || 32;

//     // Handle different tech data structures based on their properties
//     if (data.techs && Array.isArray(data.techs)) {
//       // If techs have text property (soft skills style)
//       if (data.techs[0]?.text) {
//         return {
//           ...data,
//           icon: getIconByType(data.iconType, { size: 24, className: "h-6 w-6" }),
//         };
//       }

//       // Standard tech data with icons
//       return {
//         ...data,
//         icon: getIconByType(data.iconType, { size: 24, className: "h-6 w-6" }),
//         techs: data.techs.map((tech: any) => ({
//           ...tech,
//           icon: tech.iconType
//             ? getIconByType(tech.iconType, {
//                 size: iconSize,
//                 className: `h-${iconSize / 4} w-${iconSize / 4}`,
//               })
//             : null,
//         })),
//       };
//     }

//     // Fallback for other data structures
//     return {
//       ...data,
//       icon: data.iconType ? getIconByType(data.iconType, { size: 24, className: "h-6 w-6" }) : null,
//     };
//   },
// };
