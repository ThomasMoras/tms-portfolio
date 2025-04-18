import React from "react";
import ProjectCard from "../projects/ProjectCard";
import { Button } from "../ui/button";
import Link from "next/link";

const ProjectsList = () => {
  return (
    <div>
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Projets Récents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Une sélection de mes réalisations les plus pertinentes dans différents domaines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProjectCard
            title="DeFi Platform"
            category="Blockchain"
            tech={["Solidity", "React", "Web3.js"]}
            image="/placeholder-project-1.jpg"
            href="/projects/defi-platform"
          />
          <ProjectCard
            title="E-commerce Dashboard"
            category="Full Stack"
            tech={["Next.js", "Node.js", "MongoDB"]}
            image="/placeholder-project-2.jpg"
            href="/projects/ecommerce-dashboard"
          />
          <ProjectCard
            title="NFT Marketplace"
            category="Blockchain"
            tech={["Ethereum", "IPFS", "React"]}
            image="/placeholder-project-3.jpg"
            href="/projects/nft-marketplace"
          />
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/projects">Voir tous mes projets</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
