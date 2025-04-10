"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import TechStackPreview from "@/components/shared/TechStackPreview";

type TechStackSectionProps = {
  sectionId?: string;
};

const TechStackSection: React.FC<TechStackSectionProps> = ({
  sectionId = "skills-section",
}) => {
  const t = useTranslations("Home");

  return (
    <div className="border-t border-border p-6">
      <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        {t("titleExpertises")}
        <Button variant="link" asChild className="text-primary font-normal">
          <a href={`#${sectionId}`}>Voir en détail ↓</a>
        </Button>
      </h3>
      <TechStackPreview />
    </div>
  );
};

export default TechStackSection;
