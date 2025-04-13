"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaArrowDown, FaEthereum } from "react-icons/fa";
import { TbBrandReact, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiSolidity, SiTypescript, SiNodedotjs } from "react-icons/si";
import TypeWriter from "@/components/shared/TypeWritter";
import DownloadButton from "@/components/shared/DownloadButton";
import { PROFILE, TYPEWRITER_STRINGS } from "@/constants/profile-data";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import ProfilePicture from "@/components/sections/profile/ProfilePicture";

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">{PROFILE.FullName}</h1>
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6">{PROFILE.Title}</h2>

            <div className="flex flex-col items-start gap-2 mb-6">
              <h3 className="text-xl md:text-2xl text-muted-foreground font-medium">I&apos;m a</h3>
              <TypeWriter
                strings={TYPEWRITER_STRINGS}
                className="text-xl md:text-2xl font-bold text-primary"
              />
            </div>

            <blockquote className="text-base md:text-lg italic relative px-6 mb-8">
              <span className="absolute left-0 top-0 text-3xl text-primary leading-none">
                &ldquo;
              </span>
              <p className="text-muted-foreground font-medium px-2">{t("citation")}</p>
              <span className="absolute right-0 bottom-0 text-3xl text-primary leading-none">
                &rdquo;
              </span>
            </blockquote>

            <div className="flex gap-4 mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(PROFILE.GitHubUrl)}
                className="hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <FaGithub className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(PROFILE.LinkedinUrl)}
                className="hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <FaLinkedin className="w-6 h-6 text-[#0A66C2]" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <DownloadButton name={t("resumeButton")} />
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white shadow-md transition-colors"
              >
                <Link href="/about">{t("detailButton")}</Link>
              </Button>
            </div>
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

      {/* Skills Section */}
      <section
        id="skills-section"
        ref={refs.skillsRef}
        className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-border"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Expertises</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des compétences pointues dans des domaines variés pour répondre aux défis techniques
              modernes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Category */}
            <SkillCategory
              title="Frontend"
              description="Création d'interfaces modernes, interactives et responsive"
              skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
              icon={<TbBrandReact className="w-8 h-8" />}
              color="text-blue-500"
              bgColor="bg-blue-100 dark:bg-blue-900/30"
              linkHref="/projects?category=frontend"
            />

            {/* Backend Category */}
            <SkillCategory
              title="Backend"
              description="Architecture robuste et scalable pour vos applications"
              skills={["Node.js", "Express", "GraphQL", "Bases de données"]}
              icon={<SiNodedotjs className="w-8 h-8" />}
              color="text-green-500"
              bgColor="bg-green-100 dark:bg-green-900/30"
              linkHref="/projects?category=backend"
            />

            {/* Blockchain Category */}
            <SkillCategory
              title="Blockchain"
              description="Solutions décentralisées pour les nouveaux défis du Web3"
              skills={["Solidity", "Ethereum", "Smart Contracts", "DApps"]}
              icon={<FaEthereum className="w-8 h-8" />}
              color="text-purple-500"
              bgColor="bg-purple-100 dark:bg-purple-900/30"
              linkHref="/projects?category=blockchain"
            />
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
            <TechIcon icon={<TbBrandReact className="w-10 h-10" />} name="React" />
            <TechIcon icon={<TbBrandNextjs className="w-10 h-10" />} name="Next.js" />
            <TechIcon icon={<SiTypescript className="w-10 h-10" />} name="TypeScript" />
            <TechIcon icon={<TbBrandTailwind className="w-10 h-10" />} name="Tailwind" />
            <TechIcon icon={<SiNodedotjs className="w-10 h-10" />} name="Node.js" />
            <TechIcon icon={<SiSolidity className="w-10 h-10" />} name="Solidity" />
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

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  linkHref: string;
}

// Skill Category Component
const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  description,
  skills,
  icon,
  color,
  bgColor,
  linkHref,
}) => {
  return (
    <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`flex items-center gap-3 p-4 ${bgColor}`}>
        <div className={`p-2 rounded-full ${color}`}>{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground mb-6">{description}</p>

        <ul className="space-y-2 mb-6">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>{skill}</span>
            </li>
          ))}
        </ul>

        <Button asChild variant="outline" className="w-full">
          <Link href={linkHref}>Voir projets {title}</Link>
        </Button>
      </div>
    </div>
  );
};

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
