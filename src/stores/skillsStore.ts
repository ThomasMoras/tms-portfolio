import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TabSize } from "@/hooks/useSkillsDisplay";
import { Skill, Category } from "@/types/skillsTypes";
import { createLocalizationUtils, LocalizationUtils } from "@/lib/localizationUtils";
import { CATEGORIES, SKILLS } from "@/constants/skillsConstants";

interface SkillsStore {
  activeTab: string;
  searchTerm: string;
  tabSize: TabSize;
  hoveredSkill: string | null;
  selectedLevel: string | null;
  sortBy: keyof Skill;
  sortOrder: "asc" | "desc";
  showLevels: boolean;
  showFilters: boolean;
  animate: boolean;
  categories: Category[];
  skills: Skill[];
  locale: LocalizationUtils | null;
  cardLayoutClasses: Record<TabSize, string>;

  setTab: (tab: string) => void;
  setSearchTerm: (term: string) => void;
  setTabSize: (size: TabSize) => void;
  setHoveredSkill: (skill: string | null) => void;
  setSelectedLevel: (level: string | null) => void;
  setSortBy: (key: keyof Skill) => void;
  setSortOrder: (order: "asc" | "desc") => void;
  setShowLevels: (show: boolean) => void;
  setShowFilters: (show: boolean) => void;
  setAnimate: (animate: boolean) => void;
  setLocale: (locale: LocalizationUtils) => void;
  initializeLocale: () => void; // New method
  filterSkills: (skills: Skill[]) => Skill[];
  toggleSort: (key: keyof Skill) => void;
  clearLevelFilter: () => void;
}

export const useSkillsStore = create<SkillsStore>()(
  devtools((set, get) => ({
    // Initial state
    activeTab: "all",
    searchTerm: "",
    tabSize: "medium" as TabSize,
    hoveredSkill: null,
    selectedLevel: null,
    sortBy: "percentage" as keyof Skill,
    sortOrder: "desc",
    showLevels: true,
    showFilters: true,
    animate: true,
    categories: CATEGORIES,
    skills: SKILLS,
    locale: null,
    cardLayoutClasses: {
      small: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
      medium: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
      large: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
    },

    // Actions
    setTab: (tab: string) => set({ activeTab: tab }),
    setSearchTerm: (term: string) => set({ searchTerm: term }),
    setTabSize: (size: TabSize) => set({ tabSize: size }),
    setHoveredSkill: (skill: string | null) => set({ hoveredSkill: skill }),
    setSelectedLevel: (level: string | null) => set({ selectedLevel: level }),
    setSortBy: (key: keyof Skill) => set({ sortBy: key }),
    setSortOrder: (order: "asc" | "desc") => set({ sortOrder: order }),
    setShowLevels: (show: boolean) => set({ showLevels: show }),
    setShowFilters: (show: boolean) => set({ showFilters: show }),
    setAnimate: (animate: boolean) => set({ animate: animate }),
    setLocale: (locale: LocalizationUtils) => set({ locale }),

    // Initialize locale with default values
    initializeLocale: () => {
      const state = get();
      if (!state.locale) {
        // Create a default LocalizationUtils instance
        const defaultLocale = createLocalizationUtils("en"); // or your default language
        console.log("Default locale:", defaultLocale);
        set({ locale: defaultLocale });
      }
    },

    // Derived state
    filterSkills: (skills: Skill[]) => {
      const state = get();
      let filteredSkills = [...skills];

      // Check if locale exists before using it
      if (state.searchTerm && state.locale) {
        filteredSkills = filteredSkills.filter((skill) =>
          state
            .locale!.getLocalizedText(skill.name)
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        );
      }

      if (state.selectedLevel) {
        filteredSkills = filteredSkills.filter((skill) => skill.level === state.selectedLevel);
      }

      return filteredSkills.sort((a, b) => {
        const aValue = a[state.sortBy];
        const bValue = b[state.sortBy];

        // Handle different types of values
        const compareValues = (val1: any, val2: any): number => {
          if (val1 === undefined || val2 === undefined) {
            return 0;
          }
          if (typeof val1 === "string" && typeof val2 === "string") {
            return val1.localeCompare(val2);
          }
          if (typeof val1 === "number" && typeof val2 === "number") {
            return val1 - val2;
          }
          return 0;
        };

        const comparison = compareValues(aValue, bValue);

        if (state.sortOrder === "asc") {
          return comparison;
        }
        return -comparison;
      });
    },

    toggleSort: (key: keyof Skill) => {
      const state = get();
      if (state.sortBy === key) {
        set({ sortOrder: state.sortOrder === "asc" ? "desc" : "asc" });
      } else {
        set({ sortBy: key, sortOrder: "desc" });
      }
    },

    clearLevelFilter: () => set({ selectedLevel: null }),
  }))
);
