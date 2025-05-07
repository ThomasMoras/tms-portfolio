import { NAV_ITEMS, SECTION_ITEMS } from "@/constants/navbarConstants";
import {
  ActiveSectionContextType,
  ActiveSectionProviderProps,
  SectionName,
} from "@/types/sectionTypes";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const router = useRouter();

  // Set active section based on URL path
  // In your ActiveSectionContext.tsx
  // Handle scroll to section after navigation
  useEffect(() => {
    // Only run this on home page
    if (pathname !== "/" && pathname !== "/en" && pathname !== "/fr") {
      return;
    }

    const savedSection = localStorage.getItem("scrollToSection") as SectionName | null;

    if (savedSection) {
      // Use a longer timeout to ensure everything is fully loaded
      const timer = setTimeout(() => {
        const sectionElement = document.getElementById(`${savedSection}-section`);
        if (sectionElement) {
          // Use element.scrollIntoView with an offset via scroll-margin-top CSS
          sectionElement.scrollIntoView({ behavior: "smooth" });
          setActiveSection(savedSection);
        }
        localStorage.removeItem("scrollToSection");
      }, 800); // Increased timeout for more reliable positioning

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Only detect sections by scroll when on the home page
  useEffect(() => {
    console.log("refs ", refs);
    // Don't detect sections by visibility when not on home page
    if (pathname !== "/" && pathname !== "/en" && pathname !== "/fr") {
      return;
    }

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
  }, [inViewStates, pathname]);

  // Function to scroll to section (or navigate + scroll)
  const scrollToSection = (section: SectionName) => {
    // If we're not on the home page, navigate to home and then scroll
    if (pathname !== "/" && pathname !== "/en" && pathname !== "/fr") {
      // Save section to localStorage to scroll after navigation
      localStorage.setItem("scrollToSection", section);
      router.push("/");
      return;
    }

    // If we're on the home page, just scroll using section ID
    const sectionElement = document.getElementById(`${section}-section`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  // Handle scroll to section after navigation
  useEffect(() => {
    // Only run this on home page
    if (pathname !== "/" && pathname !== "/en" && pathname !== "/fr") {
      return;
    }

    const savedSection = localStorage.getItem("scrollToSection") as SectionName | null;

    if (savedSection) {
      // Wait a bit for the page to fully load then scroll
      const timer = setTimeout(() => {
        const sectionElement = document.getElementById(`${savedSection}-section`);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" });
          setActiveSection(savedSection);
        }
        localStorage.removeItem("scrollToSection");
      }, 300); // Increased timeout to ensure DOM is fully loaded

      return () => clearTimeout(timer);
    }
  }, [pathname]);

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
