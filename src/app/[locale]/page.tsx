"use client";

import React from "react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import SkillsSection from "@/components/sections/skills/refactor";
import ProjectsList from "@/components/sections/ProjectsList";
import Contributions from "@/components/sections/Contributions";
import ScrollDown from "@/components/shared/ScrollDown";
import Home from "@/components/sections/Home";

const HomePage: React.FC = () => {
  const { refs } = useActiveSection();

  return (
    <div className="min-h-screen bg-background">
      <section
        id="home-section"
        ref={refs.home}
        className="min-h-screen flex flex-col md:pt-16 pb-10 items-center relative px-4 md:px-6"
      >
        <Home></Home>
        <ScrollDown sectionName="github-section"></ScrollDown>
      </section>

      {/* GitHub Activity Section */}
      <section
        id="github-section"
        ref={refs.github}
        className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-border"
      >
        <Contributions></Contributions>
        <ScrollDown sectionName="skills-section"></ScrollDown>
      </section>

      {/* Skills Section */}
      <section
        id="skills-section"
        ref={refs.skills}
        className="py-12 md:py-20 border-t border-border"
      >
        <SkillsSection></SkillsSection>
      </section>

      {/* Projects Section Preview */}
      <section
        id="projects-section"
        ref={refs.projects}
        className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-border"
      >
        <ProjectsList></ProjectsList>
      </section>
    </div>
  );
};

export default HomePage;
