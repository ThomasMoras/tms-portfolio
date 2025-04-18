import { NAV_ITEMS, SECTION_ITEMS } from "@/constants/navbarConstants";
import {
  ActiveSectionContextType,
  ActiveSectionProviderProps,
  SectionName,
} from "@/types/sectionTypes";
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

// Only include the section types from NAV_ITEMS
const sectionItems = NAV_ITEMS.filter((item) => item.type === "section");

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

const getThreshold = (key: string) =>
  sectionItems.find((item) => item.key === key)?.threshold || 0.3;

const useSectionRefs = () => {
  // Create individual refs for each section with their specific threshold
  const homeData = useInView({ threshold: getThreshold("home") });
  const githubData = useInView({ threshold: getThreshold("github") });
  const skillsData = useInView({ threshold: getThreshold("skills") });
  const careerData = useInView({ threshold: getThreshold("career") });
  const projectsData = useInView({ threshold: getThreshold("projects") });
  const contactData = useInView({ threshold: getThreshold("contact") });

  // Create a map of section refs
  const sectionRefs = useMemo(() => {
    return {
      home: homeData,
      github: githubData,
      skills: skillsData,
      career: careerData,
      projects: projectsData,
      contact: contactData,
    } as Record<SectionName, ReturnType<typeof useInView>>;
  }, [homeData, githubData, skillsData, careerData, projectsData, contactData]);

  // Extract refs and inView states into separate objects
  const refs = useMemo(() => {
    return Object.fromEntries(Object.entries(sectionRefs).map(([key, value]) => [key, value[0]]));
  }, [sectionRefs]);

  const inViewStates = useMemo(() => {
    return Object.fromEntries(Object.entries(sectionRefs).map(([key, value]) => [key, value[1]]));
  }, [sectionRefs]);

  return { refs, inViewStates };
};

export const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("home");
  const { refs, inViewStates } = useSectionRefs();

  useEffect(() => {
    // Sort sections by their order for checking priority
    const orderedSections = [...SECTION_ITEMS].sort((a, b) => a.order - b.order);

    // Find the first section that is in view based on the ordered sections
    for (const section of orderedSections) {
      if (inViewStates[section.key]) {
        console.log(`Setting active section to: ${section.key}`);
        setActiveSection(section.key);
        return;
      }
    }
  }, [inViewStates]);

  const scrollToSection = (section: SectionName) => {
    if (!section) return;

    const element = document.getElementById(`${section}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        scrollToSection,
        refs,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error("useActiveSection must be used within an ActiveSectionProvider");
  }
  return context;
};
