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

interface ProjectTemplateProps {
  project: ProjectType;
}

const ProjectTemplate = ({ project }: ProjectTemplateProps) => {
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

  const formattedDate = new Date(completionDate).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="container max-w-5xl mx-auto px-4 py-12 md:py-20">
      {/* Back button */}
      <Button
        asChild
        variant="ghost"
        className="mb-6 flex items-center gap-1 hover:bg-transparent hover:text-primary"
      >
        <Link href="/projects">
          <ArrowLeft className="h-4 w-4" />
          <span>Retour aux projets</span>
        </Link>
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
                  <span>Live Demo</span>
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
                  <span>GitHub</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Project content with tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="gallery">Galerie</TabsTrigger>
          <TabsTrigger value="technical">Détails techniques</TabsTrigger>
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
            <h2 className="text-2xl font-bold mb-4">À propos du projet</h2>
            <p className="whitespace-pre-line">{fullDescription}</p>
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
              <h2 className="text-2xl font-bold mb-4">Technologies utilisées</h2>
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
              <h2 className="text-2xl font-bold mb-4">Fonctionnalités clés</h2>
              {PROJECT_FEATURES[project.id] && PROJECT_FEATURES[project.id].length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROJECT_FEATURES[project.id].map((feature, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Informations sur les fonctionnalités à venir.
                </p>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Défis et Solutions</h2>
              {PROJECT_CHALLENGES[project.id] && PROJECT_CHALLENGES[project.id].length > 0 ? (
                <div className="space-y-4">
                  {PROJECT_CHALLENGES[project.id].map((item, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-5">
                      <h3 className="font-semibold text-lg mb-2">
                        Défi: <span className="text-primary">{item.challenge}</span>
                      </h3>
                      <div className="pl-4 border-l-2 border-primary/30 mt-3">
                        <h4 className="font-medium mb-1 text-sm uppercase tracking-wide">
                          Solution:
                        </h4>
                        <p className="text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Informations sur les défis et solutions à venir.
                </p>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Projects Section */}
      <div className="mt-16 pt-10 border-t border-border">
        <h2 className="text-2xl font-bold mb-6">Projets similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {getRelatedProjects(project.id).map((relatedProject) => {
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
                        <span className="text-muted-foreground text-sm">No Image</span>
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
    </div>
  );
};

export default ProjectTemplate;
