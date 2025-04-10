"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Boxes,
  Binary,
  Database,
  Server,
  Layout,
  Share2,
  ArrowUpDown,
} from "lucide-react";
import { FaReact, FaHardHat } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSolidity, SiRust } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";

type TechCategory = {
  title: string;
  icon: React.ReactNode;
  techs: {
    name: string;
    icon: React.ReactNode;
    level?: number; // Niveau d'expertise sur 100
  }[];
};

const techCategories: TechCategory[] = [
  {
    title: "Back-end",
    icon: <Server className="h-5 w-5" />,
    techs: [
      { name: "Node.js", icon: <TbBrandNodejs />, level: 85 },
      { name: "Express", icon: <Server />, level: 80 },
      { name: "API REST", icon: <ArrowUpDown />, level: 90 },
      { name: "MongoDB", icon: <Database />, level: 75 },
      { name: "PostgreSQL", icon: <Database />, level: 70 },
      { name: "Rust", icon: <SiRust />, level: 30 }, // Niveau débutant en Rust
    ],
  },
  {
    title: "Front-end",
    icon: <Layout className="h-5 w-5" />,
    techs: [
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <RiNextjsFill />, level: 75 },
      { name: "TypeScript", icon: <SiTypescript />, level: 80 },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill />, level: 85 },
      { name: "UI/UX", icon: <Layout />, level: 70 },
    ],
  },
  {
    title: "Blockchain",
    icon: <Boxes className="h-5 w-5" />,
    techs: [
      { name: "Solidity", icon: <SiSolidity />, level: 75 },
      { name: "EVM", icon: <Binary />, level: 70 },
      { name: "Hardhat", icon: <FaHardHat />, level: 65 },
      { name: "Web3.js", icon: <Code />, level: 60 },
      { name: "Ethers.js", icon: <Code />, level: 65 },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {techCategories.map((category, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-md text-primary">
                {category.icon}
              </div>
              <h4 className="text-lg font-semibold">{category.title}</h4>
            </div>

            <div className="space-y-4">
              {category.techs.map((tech, techIndex) => (
                <div key={techIndex} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                    {tech.level && (
                      <Badge
                        variant={tech.level < 50 ? "outline" : "default"}
                        className={
                          tech.level < 50
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
                            : ""
                        }
                      >
                        {tech.level < 50 ? "En apprentissage" : "Maîtrisé"}
                      </Badge>
                    )}
                  </div>
                  {tech.level && (
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TechStack;
