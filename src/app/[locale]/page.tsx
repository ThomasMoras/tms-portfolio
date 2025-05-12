"use client";

import React from "react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import Contributions from "@/components/sections/Contributions";
import Home from "@/components/sections/Home";
import Skills from "@/components/sections/Skills";
import GlobalTimeLine from "@/components/shared/GlobalTimeLine";
import Projects from "@/components/sections/Projects";
import SectionLayout from "@/components/navigation/SectionLayout";

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

      {/* GitHub Activity Section */}
      <SectionLayout id="github-section" ref={refs.github} nextSectionId="skills-section">
        <Contributions perPage={5} initialPage={1} defaultBranch="main" />
      </SectionLayout>

      {/* Skills Section */}
      <SectionLayout id="skills-section" ref={refs.skills} nextSectionId="career-section">
        <Skills tabSize="medium" />
      </SectionLayout>

      {/* Career Section */}
      <SectionLayout id="career-section" ref={refs.career} nextSectionId="projects-section">
        <GlobalTimeLine />
      </SectionLayout>

      {/* Projects Section Preview */}
      <SectionLayout id="projects-section" ref={refs.projects} isLastSection={true}>
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <Projects />
        </div>
      </SectionLayout>
    </div>
  );
};

export default HomePage;
