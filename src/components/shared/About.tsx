"use client";

import React, { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SiSolidity,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiRust,
  SiVercel,
  SiLinux,
  SiEthers,
} from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { HardHat } from "lucide-react";
import { useTranslations } from "next-intl";
import { DiMsqlServer } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { SiObsidian } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { TiVendorMicrosoft } from "react-icons/ti";
import { SiKubernetes } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { Code, Boxes } from "lucide-react";
import { FaToolbox } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

const technologies = {
  blockchain: [
    {
      name: "Solidity",
      icon: <SiSolidity className="h-6 w-6" />,
      color: "#363636",
    },
    {
      name: "Ethereum",
      icon: <FaEthereum className="h-6 w-6" />,
      color: "#3C3C3D",
    },
    {
      name: "Web3.js",
      icon: <HardHat className="h-6 w-6" />,
      color: "#F6851B",
    },
    {
      name: "Ethers.js",
      icon: <SiEthers className="h-6 w-6" />,
      color: "#2535a0",
    },
  ],
  frontend: [
    { name: "React", icon: <SiReact className="h-6 w-6" />, color: "#61DAFB" },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-6 w-6" />,
      color: "#000000",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-6 w-6" />,
      color: "#3178C6",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-6 w-6" />,
      color: "#F7DF1E",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="h-6 w-6" />,
      color: "#06B6D4",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="h-6 w-6" />,
      color: "#339933",
    },
    {
      name: "Express",
      icon: <SiExpress className="h-6 w-6" />,
      color: "#000000",
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="h-6 w-6" />,
      color: "#2D3748",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="h-6 w-6" />,
      color: "#4169E1",
    },
    {
      name: "SQL Server",
      icon: <DiMsqlServer className="h-6 w-6" />,
      color: "#CC2927",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-6 w-6" />,
      color: "#47A248",
    },
  ],
  tools: [
    { name: "Linux", icon: <SiLinux className="h-6 w-6" />, color: "#FCC624" },
    {
      name: "VS Code",
      icon: <DiVisualstudio className="h-6 w-6" />,
      color: "#007ACC",
    },
    {
      name: "Postman",
      icon: <SiPostman className="h-6 w-6" />,
      color: "#FF6C37",
    },
    {
      name: "Obsidian",
      icon: <SiObsidian className="h-6 w-6" />,
      color: "#483699",
    },
    {
      name: "Notion",
      icon: <RiNotionFill className="h-6 w-6" />,
      color: "#000000",
    },
    {
      name: "Suite Office",
      icon: <TiVendorMicrosoft className="h-6 w-6" />,
      color: "#E04C23",
    },
  ],
  deployment_devops: [
    {
      name: "Vercel",
      icon: <SiVercel className="h-6 w-6" />,
      color: "#000000",
    },
    {
      name: "Docker",
      icon: <SiDocker className="h-6 w-6" />,
      color: "#2496ED",
    },
    { name: "Git", icon: <SiGit className="h-6 w-6" />, color: "#F05032" },
  ],
  working: [
    { name: "Rust", icon: <SiRust className="h-6 w-6" />, color: "#000000" },
    {
      name: "Kubernetes",
      icon: <SiKubernetes className="h-6 w-6" />,
      color: "#326CE5",
    },
  ],
  others: [
    {
      name: "C#",
      icon: <TbBrandCSharp className="h-6 w-6" />,
      color: "#68217A",
    },
    { name: "Java", icon: <FaJava className="h-6 w-6" />, color: "#f89820" },
    {
      name: "Python",
      icon: <SiPython className="h-6 w-6" />,
      color: "#3776AB",
    },
  ],
};
const TechCard = ({
  title,
  items,
  logo,
}: {
  title: string;
  items: { name: string; icon: JSX.Element; color: string }[];
  logo: JSX.Element;
}) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader className="flex items-center gap-4 flex-row justify-center">
      <div className="flex-shrink-0">{logo}</div>
      <CardTitle className="text-xl leading-none">{title}</CardTitle>
    </CardHeader>

    <CardContent>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-3 rounded-lg transition-transform duration-200 hover:scale-110"
          >
            <div style={{ color: item.color }}>{item.icon}</div>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const AboutSection = () => {
  const t = useTranslations("About");

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
        <h3 className="text-2xl font-bold text-center">
          {t("expertiseTitle")}
        </h3>
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
