"use client";
import { ProjectType } from "@/types/projectTypes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PROJECT_FEATURES,
  PROJECT_CHALLENGES,
  getRelatedProjects,
} from "@/constants/projectsConstants";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { NAV_ITEMS } from "@/constants/navbarConstants";

interface ProjectTemplateProps {
  project: ProjectType;
}

const ProjectTemplate = ({ project }: ProjectTemplateProps) => {
  const t = useTranslations("ProjectDetails");
  const projectsT = useTranslations("Projects");
  const locale = useLocale() as "fr" | "en";
  const { scrollToSection } = useActiveSection();

  const {
    title,
    fullDescription,
    category,
    technologies,
    images,
    demoUrl,
    repoUrl,
    completionDate,
  } = project;

  const relatedProjects = getRelatedProjects(project.id);

  const formattedDate = new Date(completionDate).toLocaleDateString(
    locale === "fr" ? "fr-FR" : "en-US",
    {
      year: "numeric",
      month: "long",
    }
  );

  return (
    <div className="container max-w-5xl mx-auto px-4 py-12 md:py-20">
      {/* Back button */}
      <Button
        variant="ghost"
        className="mb-6 flex items-center gap-1 hover:bg-transparent hover:text-primary"
        onClick={() => {
          scrollToSection(NAV_ITEMS[4].key);
        }}
      >
        <ArrowLeft className="h-4 w-4" />
        {t("backToProjects")}
      </Button>

      {/* Project header */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {category}
              </span>
              <span>{formattedDate}</span>
            </div>
          </div>

          <div className="flex gap-3">
            {demoUrl && (
              <Button asChild>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{projectsT("liveDemo")}</span>
                </a>
              </Button>
            )}

            {repoUrl && (
              <Button asChild variant="outline">
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <span>{projectsT("githubRepo")}</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Project content with tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">{t("overview")}</TabsTrigger>
          <TabsTrigger value="gallery">{t("gallery")}</TabsTrigger>
          <TabsTrigger value="technical">{t("technical")}</TabsTrigger>
        </TabsList>

        {/* Overview tab */}
        <TabsContent value="overview" className="space-y-8">
          {/* Main image */}
          {images && images.length > 0 && (
            <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
              <Image src={images[0]} alt={title} fill className="object-cover" />
            </div>
          )}

          {/* Project description */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">{t("aboutProject")}</h2>
            <p className="whitespace-pre-line">{fullDescription[locale]}</p>
          </div>
        </TabsContent>

        {/* Gallery tab */}
        <TabsContent value="gallery">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images &&
              images.map((image, index) => (
                <div key={index} className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} - Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
          </div>
        </TabsContent>

        {/* Technical details tab */}
        <TabsContent value="technical">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">{t("technologiesUsed")}</h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">{t("keyFeatures")}</h2>
              {PROJECT_FEATURES[project.id] && PROJECT_FEATURES[project.id].length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROJECT_FEATURES[project.id].map((feature, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">{feature.title[locale]}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description[locale]}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">{t("featuresComingSoon")}</p>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">{t("challengesSolutions")}</h2>
              {PROJECT_CHALLENGES[project.id] && PROJECT_CHALLENGES[project.id].length > 0 ? (
                <div className="space-y-4">
                  {PROJECT_CHALLENGES[project.id].map((item, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-5">
                      <h3 className="font-semibold text-lg mb-2">
                        {t("challenge")}:{" "}
                        <span className="text-primary">{item.challenge[locale]}</span>
                      </h3>
                      <div className="pl-4 border-l-2 border-primary/30 mt-3">
                        <h4 className="font-medium mb-1 text-sm uppercase tracking-wide">
                          {t("solution")}:
                        </h4>
                        <p className="text-muted-foreground">{item.solution[locale]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">{t("challengesComingSoon")}</p>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">{t("similarProjects")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject) => {
              if (!relatedProject) return null;

              return (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group block"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all group-hover:translate-y-[-5px]">
                    <div className="h-36 relative">
                      {relatedProject.thumbnailImage ? (
                        <Image
                          src={relatedProject.thumbnailImage}
                          alt={relatedProject.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800">
                          <span className="text-muted-foreground text-sm">{t("noImage")}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                        {relatedProject.category}
                      </span>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTemplate;
