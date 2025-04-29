import { getProjectById, PROJECTS } from "@/constants/projectsConstants";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectTemplate from "@/components/shared/ProjectTemplate";

interface ProjectPageProps {
  params: {
    id: string;
    locale: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
