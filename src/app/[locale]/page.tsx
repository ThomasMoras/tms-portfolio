"use client";

import React from "react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import Contributions from "@/components/sections/Contributions";
import Home from "@/components/sections/home/Home";
import Skills from "@/components/sections/skills/Skills";
import SectionLayout from "@/components/navigation/SectionLayout";
import Projects from "@/components/sections/projects/Projects";
import CareerTimeLine from "@/components/sections/CareerTimeLine";

const HomePage: React.FC = () => {
  const { refs } = useActiveSection();

  return (
    <div className="min-h-screen bg-background">
      {/* Home Section */}
      <SectionLayout
        id="home-section"
        ref={refs.home}
        isFirstSection={true}
        nextSectionId="github-section"
      >
        <Home />
      </SectionLayout>

      {/* Career Section */}
      <SectionLayout id="career-section" ref={refs.career} nextSectionId="skills-section">
        <CareerTimeLine />
      </SectionLayout>

      {/* Skills Section */}
      <SectionLayout id="skills-section" ref={refs.skills} nextSectionId="projects-section">
        <Skills tabSize="medium" />
      </SectionLayout>

      {/* Projects Section Preview */}
      <SectionLayout id="projects-section" ref={refs.projects} nextSectionId="github-section">
        <Projects />
      </SectionLayout>

      {/* GitHub Activity Section */}
      <SectionLayout id="github-section" ref={refs.github} isLastSection={true}>
        <Contributions perPage={5} initialPage={1} defaultBranch="main" />
      </SectionLayout>
    </div>
  );
};

export default HomePage;
