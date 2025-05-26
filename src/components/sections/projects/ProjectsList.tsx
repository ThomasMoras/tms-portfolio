import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { getFeaturedProjects } from "@/constants/projectsConstants";
import { Button } from "@/components/ui/button";

const ProjectsList = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-12 md:py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Projets Récents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Une sélection de mes réalisations les plus pertinentes dans différents domaines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={"en"} />
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/projects">Voir tous mes projets</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
