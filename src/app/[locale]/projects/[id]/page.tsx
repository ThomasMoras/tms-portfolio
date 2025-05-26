import ProjectTemplate from "@/components/shared/ProjectTemplate";
import { PROJECTS } from "@/constants/projectsConstants";
import { createLocalizationUtils } from "@/lib/localizationUtils";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

// For metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const locale = (await getLocale()) as "fr" | "en";

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  const { getLocalizedText } = createLocalizationUtils(locale, {});

  return {
    title: `${project.title} | Portfolio`,
    description: getLocalizedText(project.shortDescription),
  };
}

// For the page component
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) {
    notFound();
  }

  return (
    <div>
      <ProjectTemplate project={project} />
    </div>
  );
}
