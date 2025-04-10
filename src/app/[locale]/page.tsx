"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/constants";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypeWriter from "@/components/shared/TypeWritter";
import DownloadButton from "@/components/shared/DownloadButton";
import TechStackPreview from "@/components/shared/TechStackPreview";
import SkillsSection from "@/components/sections/SkillsSections";

const HomePage = () => {
  const t = useTranslations("Home");

  return (
    <div className="min-h-screen bg-background flex flex-col justify-start pt-4">
      <div className="container max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Carte principale du portfolio */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-full max-w-5xl bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            {/* En-tête avec nom et titre */}
            <div className="w-full px-6 py-4 border-b border-border">
              <h1 className="text-3xl md:text-4xl font-bold text-center">
                {PROFILE.fullName} -{" "}
                <span className="text-primary">Full Stack Developer</span>
              </h1>
            </div>

            {/* Contenu principal - Photo et description */}
            <div className="flex flex-col md:flex-row p-6 gap-8">
              {/* Photo de profil */}
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-2xl animate-pulse" />
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile picture"
                    fill
                    priority
                    className="rounded-2xl object-cover border-4 border-background relative z-10 transition-transform hover:scale-105"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="w-full md:w-3/5 flex flex-col">
                <div className="flex flex-col items-start gap-2 mb-6">
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-bold">
                    I&apos;m a
                  </h2>
                  <TypeWriter
                    strings={[
                      { text: "Blockchain Developer", color: "cyan-500" },
                      { text: "Full Stack Developer", color: "purple-500" },
                      {
                        text: "Smart Contract Developer",
                        color: "emerald-500",
                      },
                      { text: "Web3 Enthusiast", color: "orange-500" },
                    ]}
                    className="text-xl md:text-2xl lg:text-3xl font-bold"
                  />
                </div>

                <blockquote className="text-base md:text-lg italic relative px-4 md:px-6 mb-6">
                  <span className="absolute left-0 top-0 text-2xl md:text-3xl text-primary leading-none">
                    &ldquo;
                  </span>
                  <p className="text-muted-foreground font-medium px-2">
                    {t("citation")}
                  </p>
                  <span className="absolute right-0 bottom-0 text-2xl md:text-3xl text-primary leading-none">
                    &rdquo;
                  </span>
                </blockquote>

                <div className="flex gap-4 mb-6">
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

            {/* Section Stacks Techniques - Preview simplifiée */}
            <div className="border-t border-border p-6">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                {t("titleExpertises")}
                <Button
                  variant="link"
                  asChild
                  className="text-primary font-normal"
                >
                  <a href="#skills-section">Voir en détail ↓</a>
                </Button>
              </h3>
              <TechStackPreview />
            </div>
          </div>
        </div>

        {/* Section des compétences détaillées */}
        <div id="skills-section">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
