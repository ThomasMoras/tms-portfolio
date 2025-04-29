import { PROJECTS, PROJECT_CATEGORIES } from "@/constants/projectsConstants";
import ProjectCard from "@/components/projects/ProjectCard";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Mes Projets | Portfolio",
  description:
    "Découvrez mes projets de développement web, applications mobiles et solutions blockchain.",
};

export default function ProjectsPage() {
  // Get unique categories from projects
  const categories = Object.values(PROJECT_CATEGORIES);

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="mb-10 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Mes Projets</h1>
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
          Découvrez l'ensemble de mes projets dans différents domaines technologiques, du
          développement web aux applications blockchain.
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
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {/* Category tabs */}
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {PROJECTS.filter((project) => project.category === category).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
