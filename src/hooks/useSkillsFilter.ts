import { useState, useCallback } from "react";
import { Skill } from "@/types/skillsTypes";
import { LocalizedText } from "@/lib/localizationUtils";

type SortKey = "name" | "level" | "percentage";
type SortOrder = "asc" | "desc";

interface UseSkillsFilterProps {
  getLocalizedText: (textObj: LocalizedText) => string;
}

export const useSkillsFilter = ({ getLocalizedText }: UseSkillsFilterProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortKey>("percentage");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const filterSkills = useCallback(
    (skills: Skill[]): Skill[] => {
      let filteredSkills = [...skills];

      // Apply search filter
      if (searchTerm) {
        filteredSkills = filteredSkills.filter((skill) => {
          // skill.name is a string, not LocalizedText, so use it directly
          const skillName = skill.name;
          return skillName.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }

      // Apply level filter
      if (selectedLevel) {
        filteredSkills = filteredSkills.filter((skill) => skill.level === selectedLevel);
      }

      // Apply sorting
      filteredSkills.sort((a, b) => {
        let comparison = 0;

        if (sortBy === "name") {
          // Both names are strings, compare directly
          comparison = a.name.localeCompare(b.name);
        } else if (sortBy === "level") {
          const levelOrder = ["beginner", "intermediate", "advanced", "expert"];
          const levelA = typeof a.level === "string" ? a.level : "beginner";
          const levelB = typeof b.level === "string" ? b.level : "beginner";
          comparison = levelOrder.indexOf(levelA) - levelOrder.indexOf(levelB);
        } else if (sortBy === "percentage") {
          // Handle potential undefined percentage values
          const percentageA = a.percentage ?? 0;
          const percentageB = b.percentage ?? 0;
          comparison = percentageA - percentageB;
        }

        return sortOrder === "asc" ? comparison : -comparison;
      });

      return filteredSkills;
    },
    [searchTerm, selectedLevel, sortBy, sortOrder, getLocalizedText]
  );

  const toggleSort = useCallback(
    (key: SortKey) => {
      if (sortBy === key) {
        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
      } else {
        setSortBy(key);
        setSortOrder("desc");
      }
    },
    [sortBy]
  );

  const clearLevelFilter = useCallback(() => {
    setSelectedLevel(null);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    sortBy,
    sortOrder,
    selectedLevel,
    setSelectedLevel,
    filterSkills,
    toggleSort,
    clearLevelFilter,
  };
};
