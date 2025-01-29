"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ExpertiseSection from "@/components/shared/Expertise";
import DownloadButton from "@/components/shared/DownloadButton";
import { BiSolidUserDetail } from "react-icons/bi";
import { useTranslations } from "next-intl";
import TypeWriter from "@/components/shared/TypeWritter";

const HomePage = () => {
  const t = useTranslations("Home");

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center">
      <div className="container max-w-10xl mx-auto flex-1 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-12 mb-20">
          {/* Profile Section */}
          <div className="shrink-0 text-center md:sticky md:top-20">
            <h1 className="text-4xl md:text-4xl font-bold mb-8">
              Thomas Moras
            </h1>
            <div className="w-56 h-56 md:w-64 md:h-64 relative mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full animate-pulse" />
              <Image
                src="/images/profile.jpg"
                alt="Profile picture"
                fill
                priority
                className="rounded-full object-cover border-4 border-background relative z-10 transition-transform hover:scale-105"
              />
            </div>
            <div className="flex gap-4 justify-center mt-6">
              <FaGithub
                className="w-7 h-7 cursor-pointer transition-transform hover:scale-125"
                onClick={() => window.open("b", "_blank")}
              />
              <FaLinkedin
                className="w-7 h-7 cursor-pointer transition-transform hover:scale-125"
                color="#0A66C2"
                onClick={() => window.open("a", "_blank")}
              />
            </div>
          </div>

          {/* Description Content */}
          <div className="flex-1 text-center max-w-4xl pl-10">
            <div className="flex flex-col items-center gap-2 mb-16">
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-bold">
                I&apos;m a
              </h2>
              <TypeWriter
                strings={[
                  { text: "Blockchain Developer", color: "cyan-500" },
                  { text: "Full Stack Developer", color: "purple-500" },
                  { text: "Smart Contract Developer", color: "emerald-500" },
                  { text: "Web3 Enthusiast", color: "orange-500" },
                ]}
                className="text-2xl md:text-3xl font-bold"
              />
            </div>

            <blockquote className="text-lg md:text-lg italic relative px-6 mb-16">
              <span className="absolute left-0 top-0 text-3xl text-primary leading-none">
                &ldquo;
              </span>
              <p className="text-muted-foreground font-medium px-2">
                {t("citation")}
              </p>
              <span className="absolute right-0 bottom-0 text-3xl text-primary leading-none">
                &rdquo;
              </span>
            </blockquote>

            <div className="flex justify-center mt-5 space-x-5">
              <DownloadButton name={t("resumeButton")} />
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white shadow-lg dark:shadow-cyan-900/30 flex items-center gap-2 transition-colors"
              >
                <Link href="/about" className="flex items-center gap-2">
                  <span>{t("detailButton")}</span>
                  <BiSolidUserDetail
                    style={{ height: "24px", width: "24px" }}
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <ExpertiseSection name={t("titleExpertises")} />
      </div>
    </div>
  );
};

export default HomePage;
