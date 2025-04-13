import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export type SectionName = "home" | "skills" | "projects" | "contact" | null;

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionName>("home");

  // Create refs for each section with inView flag
  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  // Update active section based on which section is in view
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
    console.log("activeSection : ", activeSection);
  }, [homeInView, skillsInView, projectsInView, contactInView]);

  // Function to scroll to a specific section
  const scrollToSection = (section: SectionName) => {
    if (!section) return;

    const element = document.getElementById(`${section}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    activeSection,
    scrollToSection,
    refs: {
      homeRef,
      skillsRef,
      projectsRef,
      contactRef,
    },
  };
};
