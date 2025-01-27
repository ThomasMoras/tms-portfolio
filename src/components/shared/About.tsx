// components/about/TechStack.tsx
"use client";

import React, { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SiSolidity,
  SiEthereum,
  SiWeb3Dotjs,
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
} from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { Trophy, Brain, Rocket, Target } from "lucide-react";
import StudiesTimeLine from "./StudiesTimeLine";

const technologies = {
  blockchain: [
    { name: "Solidity", icon: <SiSolidity className="h-6 w-6" /> },
    { name: "Ethereum", icon: <FaEthereum className="h-6 w-6" /> },
    { name: "Web3.js", icon: <SiWeb3Dotjs className="h-6 w-6" /> },
    { name: "Smart Contracts", icon: <SiEthereum className="h-6 w-6" /> },
  ],
  frontend: [
    { name: "React", icon: <SiReact className="h-6 w-6" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-6 w-6" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-6 w-6" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="h-6 w-6" /> },
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6" /> },
    { name: "Express", icon: <SiExpress className="h-6 w-6" /> },
    { name: "Prisma", icon: <SiPrisma className="h-6 w-6" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6" /> },
    { name: "MongoDB", icon: <SiMongodb className="h-6 w-6" /> },
  ],
  other: [
    { name: "Python", icon: <SiPython className="h-6 w-6" /> },
    { name: "Rust", icon: <SiRust className="h-6 w-6" /> },
    { name: "Docker", icon: <SiDocker className="h-6 w-6" /> },
    { name: "Git", icon: <SiGit className="h-6 w-6" /> },
    { name: "Linux", icon: <SiLinux className="h-6 w-6" /> },
  ],
  deployment: [{ name: "Vercel", icon: <SiVercel className="h-6 w-6" /> }],
};

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    title: "DeFi Protocol Development",
    description:
      "Successfully developed and deployed multiple DeFi protocols with over $1M TVL",
  },
  {
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    title: "Smart Contract Auditing",
    description: "Conducted security audits for 10+ blockchain projects",
  },
  {
    icon: <Rocket className="h-8 w-8 text-purple-500" />,
    title: "Full Stack Applications",
    description: "Built and deployed 20+ production-grade web applications",
  },
  {
    icon: <Target className="h-8 w-8 text-green-500" />,
    title: "Open Source Contributions",
    description:
      "Active contributor to blockchain and web3 open source projects",
  },
];

const TechCard = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; icon: JSX.Element }[];
}) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const AboutSection = () => {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-muted-foreground mb-4">
          With over 5 years of experience in blockchain and full-stack
          development, I specialize in building secure, scalable, and
          user-friendly applications. My expertise spans from smart contract
          development to modern web technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Blockchain Development</Badge>
          <Badge variant="secondary">DeFi Protocols</Badge>
          <Badge variant="secondary">Smart Contracts</Badge>
          <Badge variant="secondary">Full Stack Development</Badge>
          <Badge variant="secondary">System Architecture</Badge>
        </div>
      </div>

      {/* Achievements */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                {achievement.icon}
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Skills */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">Technical Expertise</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <TechCard title="Blockchain & Web3" items={technologies.blockchain} />
          <TechCard
            title="Frontend Development"
            items={technologies.frontend}
          />
          <TechCard title="Backend Development" items={technologies.backend} />
          <TechCard title="Other Technologies" items={technologies.other} />
        </div>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Development & Deployment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {technologies.deployment.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
