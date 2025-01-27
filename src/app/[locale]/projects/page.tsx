import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Calendar,
  Laptop,
  Brain,
  Code,
  Palette,
} from "lucide-react";

const page = () => {
  const projects = [
    {
      title: "Decentralized Application on EVM",
      description: "Certification RS6515 - Social DApp on Base Sepolia",
      icon: <Laptop className="h-8 w-8 text-primary" />,
      tags: [
        "Solidity",
        "Hardhat",
        "Wagmi",
        "Next.js",
        "TypeScript",
        "Tailwind",
      ],
      date: "2024-01",
      github: "https://github.com/ThomasMoras/pulse",
      demo: "https://pulse-dapp.vercel.app",
      category: "Blockchain",
    },
    {
      title: "Showcase website - Lyon Marquage Service",
      description:
        "A showcase website for the French screen printing company Lyon Marquage Service",
      icon: <Laptop className="h-8 w-8 text-primary" />,
      tags: ["Python", "PyTorch", "React"],
      date: "2024-02",
      github: "https://github.com/username/ai-gen",
      demo: "https://ai-gen-demo.com",
      category: "AI/ML",
    },
    {
      title: "Portfolio Template",
      description: "Modern portfolio template with animations",
      icon: <Palette className="h-8 w-8 text-primary" />,
      tags: ["React", "Framer Motion", "Tailwind"],
      date: "2024-03",
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio-demo.com",
      category: "Design",
    },
    {
      title: "CLI Tool",
      description: "Developer productivity CLI tool",
      icon: <Code className="h-8 w-8 text-primary" />,
      tags: ["Node.js", "TypeScript"],
      date: "2024-04",
      github: "https://github.com/username/cli-tool",
      category: "Developer Tools",
    },
  ];

  return (
    <div className="container mx-auto mt-5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <p className="text-lg text-muted-foreground mb-4">
          A collection of my recent work and experiments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <Card className="cursor-pointer transition-all hover:shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {project.icon}
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm">{project.description}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default page;
