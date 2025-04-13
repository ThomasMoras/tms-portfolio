import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type SectionName = "home" | "skills" | "projects" | "contact" | null;

interface ActiveSectionContextType {
  activeSection: SectionName;
  scrollToSection: (section: SectionName) => void;
  refs: {
    homeRef: (node?: Element | null) => void;
    skillsRef: (node?: Element | null) => void;
    projectsRef: (node?: Element | null) => void;
    contactRef: (node?: Element | null) => void;
  };
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export const ActiveSectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("home");

  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (homeInView) {
      setActiveSection("home");
    } else if (skillsInView) {
      setActiveSection("skills");
    } else if (projectsInView) {
      setActiveSection("projects");
    } else if (contactInView) {
      setActiveSection("contact");
    }
  }, [homeInView, skillsInView, projectsInView, contactInView]);

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
        refs: {
          homeRef,
          skillsRef,
          projectsRef,
          contactRef,
        },
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
