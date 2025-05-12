"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import DownloadButton from "@/components/shared/DownloadButton";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { NAV_ITEMS } from "@/constants/navbarConstants";

const ProfileBio: React.FC = () => {
  const t = useTranslations("Home");
  const { scrollToSection } = useActiveSection();

  return (
    <div className="w-full flex flex-col justify-center gap-6">
      <p className="max-w-3xl text-base text-center italic text-muted-foreground">
        {t("description")}
      </p>

      <div className="flex flex-wrap ml-6 gap-10 mt-6">
        <DownloadButton name={t("resumeButton")} />
        <Button
          asChild
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white shadow-md transition-colors"
        >
          <Link href="/about">{t("detailButton")}</Link>
        </Button>
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white shadow-md transition-colors"
          onClick={() => scrollToSection(NAV_ITEMS[4].key)}
        >
          {t("projectButton")}
        </Button>
      </div>
    </div>
  );
};

export default ProfileBio;
