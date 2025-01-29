"use client";

import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Boxes,
  Globe,
  Wallet,
  Binary,
  Bitcoin,
  Share2,
  Layout,
  Server,
  Database,
  ArrowUpDown,
} from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { PiGearDuotone } from "react-icons/pi";
import { SiSolidity } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

type ExpertiseItem = {
  name: string;
  icon: JSX.Element;
};

type ExpertiseData = {
  blockchain: ExpertiseItem[];
  frontend: ExpertiseItem[];
  backend: ExpertiseItem[];
};

const expertises: ExpertiseData = {
  blockchain: [
    { name: "EVM", icon: <Binary className="h-6 w-6" /> },
    { name: "Solidity", icon: <SiSolidity className="h-6 w-6" /> },
    { name: "Hardhat", icon: <FaHardHat className="h-6 w-6" /> },
    { name: "DeFi User", icon: <FaUser className="h-6 w-6" /> },
  ],
  frontend: [
    { name: "React", icon: <FaReact className="h-6 w-6" /> },
    { name: "Next JS", icon: <RiNextjsFill className="h-6 w-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-6 w-6" /> },
    { name: "UI/UX", icon: <Layout className="h-6 w-6" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="h-6 w-6" /> },
  ],
  backend: [
    { name: "Node.js", icon: <Server className="h-6 w-6" /> },
    { name: "API", icon: <ArrowUpDown className="h-6 w-6" /> },
    { name: "Database", icon: <Database className="h-6 w-6" /> },
    { name: "Integration", icon: <Share2 className="h-6 w-6" /> },
  ],
};

const ExpertiseCard = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: ExpertiseItem[];
  icon: JSX.Element;
}) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2">
          {React.cloneElement(icon, { className: "h-6 w-6 text-primary" })}
          <h4 className="text-xl font-semibold">{title}</h4>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 pt-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

type ExpertiseSection = {
  name: string;
};

const ExpertiseSection = ({ name }: ExpertiseSection) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-12 text-center">{name}</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <ExpertiseCard
          title="Blockchain"
          items={expertises.blockchain}
          icon={<Boxes />}
        />
        <ExpertiseCard
          title="Frontend"
          items={expertises.frontend}
          icon={<Code />}
        />
        <ExpertiseCard
          title="Backend"
          items={expertises.backend}
          icon={<PiGearDuotone />}
        />
      </div>
    </div>
  );
};

export default ExpertiseSection;
