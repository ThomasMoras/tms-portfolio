import React from "react";
import ProjectCard from "../projects/ProjectCard";
import { PROJECT_CATEGORIES, getFeaturedProjects } from "@/constants/projectsConstants";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Projects = () => {
  const t = useTranslations("Projects");
  const categories = Object.values(PROJECT_CATEGORIES);
  const projects = getFeaturedProjects();

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t("title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          {t("subtitle")}
        </p>
      </div>
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
              <ProjectCard key={project.id} project={project} locale={"en"} />
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
                  <ProjectCard key={project.id} project={project} locale={"en"} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Projects;
