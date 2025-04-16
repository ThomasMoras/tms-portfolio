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

// Custom hook to create section refs
// const useSectionRefs = () => {
//   // Get threshold values from NAV_ITEMS
//   const getThreshold = (key: string) =>
//     sectionItems.find((item) => item.key === key)?.threshold || 0.3;

//   // Create a ref and inView state for each section with its threshold
//   const homeData = useInView({ threshold: getThreshold("home") });
//   const contributionsData = useInView({ threshold: getThreshold("contributions") });
//   const skillsData = useInView({ threshold: getThreshold("skills") });
//   const careerData = useInView({ threshold: getThreshold("career") });
//   const projectsData = useInView({ threshold: getThreshold("projects") });
//   const contactData = useInView({ threshold: getThreshold("contact") });

//   // Map section keys to their respective ref and inView state
//   const refs = useMemo(
//     () => ({
//       home: homeData[0],
//       contributions: contributionsData[0],
//       skills: skillsData[0],
//       career: careerData[0],
//       projects: projectsData[0],
//       contact: contactData[0],
//     }),
//     [homeData, contributionsData, skillsData, careerData, projectsData, contactData]
//   );

//   // Map section keys to their respective inView state
//   const inViewStates = useMemo(
//     () => ({
//       home: homeData[1],
//       contributions: contributionsData[1],
//       skills: skillsData[1],
//       career: careerData[1],
//       projects: projectsData[1],
//       contact: contactData[1],
//     }),
//     [homeData, contributionsData, skillsData, careerData, projectsData, contactData]
//   );

//   return { refs, inViewStates };
// };

const getThreshold = (key: string) =>
  sectionItems.find((item) => item.key === key)?.threshold || 0.3;

const useSectionRefs = () => {
  // Appeler useInView pour chaque section individuellement
  const homeData = useInView({ threshold: getThreshold("home") });
  const contributionsData = useInView({ threshold: getThreshold("contributions") });
  const skillsData = useInView({ threshold: getThreshold("skills") });
  const careerData = useInView({ threshold: getThreshold("career") });
  const projectsData = useInView({ threshold: getThreshold("projects") });
  const contactData = useInView({ threshold: getThreshold("contact") });

  // Construire l'objet sectionRefs après avoir appelé tous les hooks
  const sectionRefs = useMemo(() => {
    return {
      home: homeData,
      contributions: contributionsData,
      skills: skillsData,
      career: careerData,
      projects: projectsData,
      contact: contactData,
    } as Record<SectionName, ReturnType<typeof useInView>>;
  }, [homeData, contributionsData, skillsData, careerData, projectsData, contactData]);

  // Extraire les refs et inView states
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

    // Find the first section that is in view
    for (const section of orderedSections) {
      if (inViewStates[section.key]) {
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
