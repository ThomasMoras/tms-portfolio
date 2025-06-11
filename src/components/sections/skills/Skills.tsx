"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSkillsStore } from "@/stores/skillsStore";
import { createLocalizationUtils } from "@/lib/localizationUtils";
import { SkillsFilter } from "./SkillsFilter";
import { SkillsHeader } from "./SkillsHeader";
import { SkillsTabs } from "./SkillsTabs";

// Types for the component props
import { TabSize } from '@/hooks/useSkillsDisplay';

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

  // Initialize store
  const store = useSkillsStore();
  
  // Set initial values
  React.useEffect(() => {
    store.setTab(defaultTab);
    store.setTabSize(initialTabSize);
    store.setShowLevels(showLevels);
    store.setShowFilters(showFilters);
    store.setAnimate(animate);
    store.setLocale(createLocalizationUtils(locale, {
      title: t("title"),
      description: t("description"),
    }));
  }, [defaultTab, initialTabSize, showLevels, showFilters, animate, locale, t]);

  return (
    <section id="skills-section">
      <div className="container max-w-7xl mx-auto">
        <SkillsHeader />
        <SkillsFilter />
        <SkillsTabs />
      </div>
    </section>
  );
};

export default Skills;
