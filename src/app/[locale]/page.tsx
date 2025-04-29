"use client";

import React from "react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import Contributions from "@/components/sections/Contributions";
import ScrollDown from "@/components/shared/ScrollDown";
import Home from "@/components/sections/Home";
import Skills from "@/components/sections/Skills";
import GlobalTimeLine from "@/components/shared/GlobalTimeLine";
import { PROJECT_CATEGORIES, getFeaturedProjects } from "@/constants/projectsConstants";
import ProjectCard from "@/components/projects/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomePage: React.FC = () => {
  const { refs } = useActiveSection();
  const categories = Object.values(PROJECT_CATEGORIES);
  const projects = getFeaturedProjects();

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
        <Contributions perPage={5} initialPage={1} defaultBranch="main" />
        {/* <ScrollDown sectionName="skills-section"></ScrollDown> */}
      </section>

      {/* Skills Section */}
      <section
        id="skills-section"
        ref={refs.skills}
        className="py-12 md:py-20 border-t border-border"
      >
        <Skills tabSize="medium"></Skills>
      </section>

      {/* Skills Section */}
      <section
        id="career-section"
        ref={refs.career}
        className="py-12 md:py-20 border-t border-border"
      >
        <GlobalTimeLine />
      </section>

      {/* Projects Section Preview */}
      <section
        id="projects-section"
        ref={refs.projects}
        className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-border"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Mes Projets</h1>
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
          Découvrez l'ensemble de mes projets dans différents domaines technologiques, du
          développement web aux applications blockchain.
        </p>
        {/* Filter tabs */}
        <Tabs defaultValue="all" className="w-full mb-10">
          <TabsList className="mb-8 flex flex-wrap">
            <TabsTrigger value="all">Tous</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* All projects tab */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          {/* Category tabs */}
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
};

export default HomePage;
