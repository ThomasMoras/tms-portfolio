import { SkillLevel } from "@/types/skillsTypes";

/**
 * Convert skill level to percentage range
 */
export const getSkillLevelRange = (level: SkillLevel): [number, number] => {
  const ranges: Record<SkillLevel, [number, number]> = {
    beginner: [0, 40],
    intermediate: [41, 70],
    advanced: [71, 90],
    expert: [91, 100],
  };

  return ranges[level];
};

/**
 * Get skill level from percentage
 */
export const getSkillLevelFromPercentage = (percentage: number): SkillLevel => {
  if (percentage <= 40) return "beginner";
  if (percentage <= 70) return "intermediate";
  if (percentage <= 90) return "advanced";
  return "expert";
};

/**
 * Sort skills by level
 */
export const sortSkillsByLevel = <T extends { level?: SkillLevel | string }>(skills: T[]): T[] => {
  const levelOrder: Record<string, number> = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4,
  };

  return [...skills].sort((a, b) => {
    const levelA = typeof a.level === "string" ? levelOrder[a.level] || 0 : 0;
    const levelB = typeof b.level === "string" ? levelOrder[b.level] || 0 : 0;
    return levelB - levelA; // Descending order (expert first)
  });
};

/**
 * Filter skills by level
 */
export const filterSkillsByLevel = <T extends { level?: SkillLevel | string }>(
  skills: T[],
  targetLevel: SkillLevel
): T[] => {
  return skills.filter((skill) => skill.level === targetLevel);
};

/**
 * Get color class for skill level
 */
export const getSkillLevelColor = (level: SkillLevel): string => {
  const colorMap: Record<SkillLevel, string> = {
    beginner: "text-red-500",
    intermediate: "text-yellow-500",
    advanced: "text-blue-500",
    expert: "text-green-500",
  };

  return colorMap[level];
};
