"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypeWriter from "@/components/shared/TypeWritter";
import DownloadButton from "@/components/shared/DownloadButton";
import { PROFILE, TYPEWRITER_STRINGS } from "@/constants/profile-data";

const ProfileBio: React.FC = () => {
  const t = useTranslations("Home");

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col items-start gap-2 mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-bold">
          I&apos;m a
        </h2>
        <TypeWriter
          strings={TYPEWRITER_STRINGS}
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
        <SocialButton
          icon={<FaGithub className="w-6 h-6" />}
          url={PROFILE.GitHubUrl}
        />
        <SocialButton
          icon={<FaLinkedin className="w-6 h-6 text-[#0A66C2]" />}
          url={PROFILE.LinkedinUrl}
        />
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
  );
};

type SocialButtonProps = {
  icon: React.ReactNode;
  url: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ icon, url }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => window.open(url)}
      className="hover:bg-slate-200 dark:hover:bg-slate-800"
    >
      {icon}
    </Button>
  );
};

export default ProfileBio;
