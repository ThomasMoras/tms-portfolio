"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { CATEGORIES, SKILLS } from "@/constants/skillsConstants";
import { useSkillsFilter } from "@/hooks/useSkillsFilter";
import { TabSize, useSkillsDisplay } from "@/hooks/useSkillsDisplay";
import { useSkillsTab } from "@/hooks/useSkillsTab";
import { SkillsProvider } from "@/contexts/SkillsContext";
import { createLocalizationUtils } from "@/lib/localizationUtils";
import { SkillsFilter } from "./SkillsFilter";
import { SkillsHeader } from "./SkillsHeader";
import { SkillsTabs } from "./SkillsTabs";

// Types for the component props
export interface SkillsProps {
  tabSize?: TabSize;
  defaultTab?: string;
  showLevels?: boolean;
  showFilters?: boolean;
  animate?: boolean;
}

const Skills: React.FC<SkillsProps> = ({
  tabSize: initialTabSize = "medium",
  defaultTab = "all",
  showLevels = true,
  showFilters = true,
  animate = true,
}) => {
  // Get locale and translations
  const t = useTranslations("Skills");
  const locale = useLocale();

  // Create utility functions for localization
  const localizationUtils = createLocalizationUtils(locale, {
    title: t("title"),
    description: t("description"),
    // Add other translations as needed
  });

  // Initialize custom hooks
  const { activeTab, handleTabChange } = useSkillsTab({ defaultTab });

  const {
    searchTerm,
    setSearchTerm,
    sortBy,
    sortOrder,
    selectedLevel,
    setSelectedLevel,
    filterSkills,
    toggleSort,
    clearLevelFilter,
  } = useSkillsFilter({
    getLocalizedText: localizationUtils.getLocalizedText,
  });

  const { tabSize, setTabSize, hoveredSkill, setHoveredSkill, cardLayoutClasses } =
    useSkillsDisplay({
      initialTabSize,
    });

  // Create context value that will be provided to all child components
  const contextValue = {
    // Tab state
    activeTab,
    handleTabChange,

    // Filter state
    searchTerm,
    setSearchTerm,
    sortBy,
    sortOrder,
    selectedLevel,
    setSelectedLevel,
    filterSkills,
    toggleSort,
    clearLevelFilter,

    // Display state
    tabSize,
    setTabSize,
    hoveredSkill,
    setHoveredSkill,
    cardLayoutClasses,

    // Configuration
    showLevels,
    showFilters,
    animate,

    // Localization
    locale: localizationUtils,

    // Data
    categories: CATEGORIES,
    skills: SKILLS,
  };

  return (
    <SkillsProvider value={contextValue}>
      <section id="skills-section">
        <div className="container max-w-7xl mx-auto">
          <SkillsHeader />
          <SkillsFilter />
          <SkillsTabs />
        </div>
      </section>
    </SkillsProvider>
  );
};

export default Skills;
