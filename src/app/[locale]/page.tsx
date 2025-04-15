"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaArrowDown, FaGithub, FaStar } from "react-icons/fa";
import { ArrowRight, Clock, Code, GitCommit } from "lucide-react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import ProfilePicture from "@/components/sections/profile/ProfilePicture";
import ProfileBio from "@/components/sections/profile/ProfileBio";
import { TECH_CATEGORIES } from "@/constants/section-skills";
import TechBanner from "@/components/shared/TechBanner";
import OtherTechBanner from "@/components/shared/OtherTechBanner";
import TypeWriter from "@/components/shared/TypeWritter";
import { TYPEWRITER_STRINGS } from "@/constants/profile";

// GitHub activity interface
interface GitHubActivity {
  totalStars: number;
  totalContributions: number;
  recentCommits: {
    repo: string;
    message: string;
    date: string;
    url: string;
  }[];
  loading: boolean;
}

const HomePage: React.FC = () => {
  const t = useTranslations("Home");
  const { refs } = useActiveSection();

  // State for GitHub activity
  const [githubActivity, setGithubActivity] = useState<GitHubActivity>({
    totalStars: 0,
    totalContributions: 0,
    recentCommits: [],
    loading: true,
  });

  // Fetch GitHub activity (mock implementation)
  useEffect(() => {
    // In a real implementation, this would be a fetch to your API
    const fetchGitHubData = () => {
      // Mock data - would be replaced with actual API call
      setTimeout(() => {
        setGithubActivity({
          totalStars: 124,
          totalContributions: 847,
          recentCommits: [
            {
              repo: "my-project/portfolio",
              message: "Refactor: Improve skills section with badge components",
              date: "2 days ago",
              url: "https://github.com/my-project/portfolio/commit/123456",
            },
            {
              repo: "open-source/some-library",
              message: "Fix: Resolve issue with responsive layout on mobile",
              date: "5 days ago",
              url: "https://github.com/open-source/some-library/commit/789012",
            },
            {
              repo: "my-project/api-service",
              message: "Feature: Add caching for external API calls",
              date: "1 week ago",
              url: "https://github.com/my-project/api-service/commit/345678",
            },
          ],
          loading: false,
        });
      }, 1000);
    };

    fetchGitHubData();
  }, []);

  // Selected top technologies (showing your strongest skills)
  const topTechnologies = TECH_CATEGORIES.flatMap((category) =>
    category.techs.filter((tech) => !tech.learning).slice(0, 2)
  ).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="home-section"
        ref={refs.homeRef}
        className="min-h-screen flex flex-col pt-24 pb-10 items-center relative px-4"
      >
        <div className="container max-w-full mx-auto flex flex-col md:flex-row gap-8">
          {/* Left side - Profile Image */}
          <div className="w-full md:w-1/5 justify-items-center">
            <ProfilePicture className="" />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-3/5">
            <ProfileBio />
          </div>
        </div>

        <div className="mt-2">
          <OtherTechBanner />
        </div>

        {/* Scroll down indicator */}
        <button
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() =>
            document.getElementById("github-section")?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Scroll to activity section"
        >
          <FaArrowDown className="animate-bounce w-6 h-6 text-primary" />
        </button>
      </section>

      {/* GitHub Activity Section */}
      <section
        id="github-section"
        className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-border"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon Activité GitHub</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un aperçu de ma contribution au code source et de mes projets open-source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stats Card */}
            <Card className="border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Statistiques</h3>
                  <FaGithub className="w-6 h-6 text-muted-foreground" />
                </div>

                {githubActivity.loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <FaStar className="text-amber-400" />
                      <span className="font-medium">{githubActivity.totalStars}</span>
                      <span className="text-muted-foreground text-sm">Étoiles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitCommit className="text-green-500" size={18} />
                      <span className="font-medium">{githubActivity.totalContributions}</span>
                      <span className="text-muted-foreground text-sm">Contributions en 2024</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                      <Link href="https://github.com/your-username" target="_blank">
                        Voir mon profil GitHub
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Commits */}
            <Card className="border border-border hover:shadow-md transition-shadow md:col-span-2">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Commits Récents</h3>
                  <Code className="w-5 h-5 text-muted-foreground" />
                </div>

                {githubActivity.loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {githubActivity.recentCommits.map((commit, index) => (
                      <Link
                        key={index}
                        href={commit.url}
                        target="_blank"
                        className="block p-3 rounded-md border border-border hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium">{commit.message}</p>
                            <p className="text-sm text-muted-foreground mt-1">{commit.repo}</p>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock size={12} className="mr-1" />
                            {commit.date}
                          </div>
                        </div>
                      </Link>
                    ))}

                    <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                      <Link
                        href="https://github.com/your-username?tab=repositories"
                        target="_blank"
                      >
                        Voir tous mes projets
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button
              onClick={() =>
                document.getElementById("skills-section")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary/10 hover:bg-primary/20 text-primary font-medium"
            >
              Découvrir mes expertises <FaArrowDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills-section"
        ref={refs.skillsRef}
        className="py-20 border-t border-border"
      ></section>

      {/* Projects Section Preview */}
      <section
        id="projects-section"
        ref={refs.projectsRef}
        className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-border"
      >
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
