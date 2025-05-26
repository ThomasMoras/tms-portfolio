"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import DownloadButton from "@/components/shared/DownloadButton";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { NAV_ITEMS } from "@/constants/navbarConstants";
import { MdOutlineWork } from "react-icons/md";
import { BsFillPersonVcardFill } from "react-icons/bs";

const ProfileBio: React.FC = () => {
  const t = useTranslations("Home");
  const { scrollToSection } = useActiveSection();

  return (
    <div className="w-full flex flex-col justify-center gap-6">
      <p className="max-w-4xl text-base text-center italic text-muted-foreground">
        {t("description")}
      </p>

      <div className="flex flex-wrap ml-5 gap-6 mt-6">
        <DownloadButton name={t("resumeButton")} />
        <Button
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white shadow-md transition-colors"
          onClick={() => scrollToSection(NAV_ITEMS[3].key)}
        >
          {t("detailButton")}
          <BsFillPersonVcardFill className="ml-2" />
        </Button>
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white shadow-md transition-colors"
          onClick={() => scrollToSection(NAV_ITEMS[4].key)}
        >
          {t("projectButton")}
          <MdOutlineWork className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileBio;
