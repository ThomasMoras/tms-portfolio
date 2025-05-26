import React, { createContext, useContext, ReactNode } from "react";
import { TabSize } from "@/hooks/useSkillsDisplay";
import { Skill, Category } from "@/types/skillsTypes";
import { LocalizationUtils } from "@/lib/localizationUtils";

interface SkillsContextProps {
  // Tab state
  activeTab: string;
  handleTabChange: (value: string) => void;

  // Filter state
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: "name" | "level" | "percentage";
  sortOrder: "asc" | "desc";
  selectedLevel: string | null;
  setSelectedLevel: (level: string | null) => void;
  filterSkills: (skills: Skill[]) => Skill[];
  toggleSort: (key: "name" | "level" | "percentage") => void;
  clearLevelFilter: () => void;

  // Display state
  tabSize: TabSize;
  setTabSize: (size: TabSize) => void;
  hoveredSkill: string | null;
  setHoveredSkill: (name: string | null) => void;
  cardLayoutClasses: Record<TabSize, string>;

  // Configuration
  showLevels: boolean;
  showFilters: boolean;
  animate: boolean;

  // Localization
  locale: LocalizationUtils;

  // Data
  categories: Category[];
  skills: Skill[];
}

const SkillsContext = createContext<SkillsContextProps | undefined>(undefined);

export const SkillsProvider: React.FC<{
  children: ReactNode;
  value: SkillsContextProps;
}> = ({ children, value }) => {
  return <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>;
};

export const useSkillsContext = () => {
  const context = useContext(SkillsContext);
  if (context === undefined) {
    throw new Error("useSkillsContext must be used within a SkillsProvider");
  }
  return context;
};
