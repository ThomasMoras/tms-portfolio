"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypeWriter from "@/components/shared/TypeWritter";
import DownloadButton from "@/components/shared/DownloadButton";
import { PROFILE, TYPEWRITER_STRINGS } from "@/constants/profile";
import ProfileHeader from "./ProfileHeader";

const ProfileBio: React.FC = () => {
  const t = useTranslations("Home");

  return (
    <div className="w-full flex flex-col">
      <ProfileHeader />

      <p className="text-base text-muted-foreground">{t("description")}</p>

      <div className="flex gap-4 mb-8">
        <Button
          variant="ghost"
          className="p-3 h-auto w-auto hover:bg-slate-200 dark:hover:bg-slate-800"
          onClick={() => window.open(PROFILE.GitHubUrl)}
        >
          <FaGithub className="w-8 h-8" />
        </Button>
        <Button
          variant="ghost"
          className="p-3 h-auto w-auto hover:bg-slate-200 dark:hover:bg-slate-800"
          onClick={() => window.open(PROFILE.LinkedinUrl)}
        >
          <FaLinkedin className="w-16 h-16 text-[#0A66C2]" />
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
      className="p-3 h-auto w-auto hover:bg-slate-200 dark:hover:bg-slate-800"
      onClick={() => window.open(url)}
    >
      {icon}
    </Button>
  );
};

export default ProfileBio;
