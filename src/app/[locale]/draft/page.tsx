"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaArrowDown } from "react-icons/fa";
import { TbBrandReact, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiSolidity, SiTypescript, SiNodedotjs } from "react-icons/si";
import { ArrowRight } from "lucide-react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import ProfilePicture from "@/components/sections/profile/ProfilePicture";
import ProfileBio from "@/components/sections/profile/ProfileBio";
import { TECH_CATEGORIES } from "@/constants/section-skills";

const HomePage: React.FC = () => {
  const t = useTranslations("Home");
  const { refs } = useActiveSection();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="home-section"
        ref={refs.homeRef}
        className="min-h-screen flex flex-col pt-24 pb-10 items-center relative px-4"
      >
        <div className="container max-w-full mx-auto flex flex-col md:flex-row items-center">
          {/* Left side - Profile Image */}
          <ProfilePicture className="w-full md:w-2/5" />

          {/* Right side - Content */}
          <div className="w-full md:w-3/5">
            <ProfileBio />
          </div>
        </div>

        {/* Scroll down indicator */}
        <button
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() =>
            document.getElementById("skills-section")?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Scroll to skills section"
        >
          <FaArrowDown className="animate-bounce w-6 h-6 text-primary" />
        </button>
      </section>

      {/* Skills Section - Updated with TechStackPreview */}
      <section
        id="skills-section"
        ref={refs.skillsRef}
        className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-border"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Expertises</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TECH_CATEGORIES.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow overflow-hidden border border-border"
              >
                <CardContent className="p-0">
                  <div
                    className={`flex items-center gap-3 p-4 ${
                      category.color.includes("bg-") ? category.color : category.bgColor
                    }`}
                  >
                    <div className={`p-2 rounded-full ${category.color}`}>{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      {getDescriptionForCategory(category.title)}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.techs.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant={tech.learning ? "outline" : "secondary"}
                          className={`flex items-center gap-1 ${
                            tech.learning
                              ? "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-500"
                              : ""
                          }`}
                        >
                          <span className="text-xs">{tech.icon}</span>
                          <span>{tech.name}</span>
                          {tech.learning && <span className="text-[10px] italic">(en cours)</span>}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full justify-between">
                      <Link href={category.link || `/skills?tab=${category.title.toLowerCase()}`}>
                        Voir les détails
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() =>
                document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary/10 hover:bg-primary/20 text-primary font-medium"
            >
              Voir mes projets <FaArrowDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section Preview */}
      <section id="projects-section" ref={refs.projectsRef} className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets Récents</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une sélection de mes réalisations les plus pertinentes dans différents domaines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards would go here - simplified for brevity */}
            <ProjectCard
              title="DeFi Platform"
              category="Blockchain"
              tech={["Solidity", "React", "Web3.js"]}
              image="/placeholder-project-1.jpg"
              href="/projects/defi-platform"
            />
            <ProjectCard
              title="E-commerce Dashboard"
              category="Full Stack"
              tech={["Next.js", "Node.js", "MongoDB"]}
              image="/placeholder-project-2.jpg"
              href="/projects/ecommerce-dashboard"
            />
            <ProjectCard
              title="NFT Marketplace"
              category="Blockchain"
              tech={["Ethereum", "IPFS", "React"]}
              image="/placeholder-project-3.jpg"
              href="/projects/nft-marketplace"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/projects">Voir tous mes projets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-cyan-500/20 border-t border-b border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* We'll use the actual tech icons from each category */}
            {TECH_CATEGORIES.flatMap((category) =>
              category.techs
                .filter((_, index) => index < 2) // Take just 2 techs from each category to avoid overcrowding
                .map((tech, techIndex) => (
                  <TechIcon
                    key={`${category.title}-${techIndex}`}
                    icon={tech.icon}
                    name={tech.name}
                  />
                ))
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact-section" ref={refs.contactRef} className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Un projet en tête ?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Je suis disponible pour discuter de vos projets et vous aider à les concrétiser avec
              les meilleures technologies.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get descriptions for categories from the original code
function getDescriptionForCategory(title: string): string {
  switch (title) {
    case "Front-end":
      return "Création d'interfaces modernes, interactives et responsive";
    case "Back-end":
      return "Architecture robuste et scalable pour vos applications";
    case "Blockchain":
      return "Solutions décentralisées pour les nouveaux défis du Web3";
    default:
      return "Technologies et compétences spécialisées";
  }
}

interface ProjectCardProps {
  title: string;
  category: string;
  tech: string[];
  image: string;
  href: string;
}

// Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, tech, image, href }) => {
  return (
    <div>
      <Link href={href} className="block">
        <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all hover:translate-y-[-5px]">
          <div className="h-48 relative bg-slate-200 dark:bg-slate-800">
            {/* Image would go here in production */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground">Image Preview</span>
            </div>
          </div>

          <div className="p-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
              {category}
            </span>
            <h3 className="text-xl font-bold mb-2">{title}</h3>

            <div className="flex flex-wrap gap-2 mt-4">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

interface TechIconProps {
  icon: React.ReactNode;
  name: string;
}

// Tech Icon Component
const TechIcon: React.FC<TechIconProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center hover:scale-110 transition-transform">
      <div className="text-muted-foreground hover:text-primary transition-colors">{icon}</div>
      <span className="mt-2 text-sm font-medium">{name}</span>
    </div>
  );
};

export default HomePage;
