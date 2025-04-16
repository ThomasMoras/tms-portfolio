"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { FaWrench } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { Code, Boxes } from "lucide-react";
import { FaToolbox } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import TechCard from "./TechCard";
import { technologies } from "../icons/SkillIcons";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("Home");

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
        <p className="text-lg text-muted-foreground mb-4">{t("description")}</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Blockchain Development</Badge>
          <Badge variant="secondary">DeFi Protocols</Badge>
          <Badge variant="secondary">Smart Contracts</Badge>
          <Badge variant="secondary">Full Stack Development</Badge>
          <Badge variant="secondary">System Architecture</Badge>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">{t("expertiseTitle")}</h3>
        {/* Main technologies */}
        <div className="grid gap-6 md:grid-cols-2">
          <TechCard
            logo={<Boxes size={24} />}
            title="Blockchain & Web3"
            items={technologies.blockchain}
          />
          <TechCard
            logo={<Code size={24} />}
            title="Frontend Development"
            items={technologies.frontend}
          />
          <TechCard
            logo={<FaGear size={24} />}
            title="Backend Development"
            items={technologies.backend}
          />
          <TechCard
            logo={<IoRocketOutline size={24} />}
            title="Deployment & DevOps"
            items={technologies.deployment_devops}
          />
        </div>

        {/* Additional technologies and tools */}
        <div className="grid gap-6 md:grid-cols-2">
          <TechCard
            logo={<FaToolbox size={24} />}
            title="Tools & Documentation"
            items={technologies.tools}
          />
          <TechCard
            logo={<FaWrench size={24} />}
            title="Currently Learning"
            items={technologies.working}
          />
        </div>

        {/* Other technologies */}
        <div className="grid gap-6">
          <TechCard
            logo={<FaBook size={24} />}
            title="Previous & Other Stack"
            items={technologies.others}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
