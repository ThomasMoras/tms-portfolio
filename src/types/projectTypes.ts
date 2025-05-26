import { LocalizedText } from "@/lib/localizationUtils";

export interface ProjectType {
  id: string;
  title: string;
  shortDescription: LocalizedText;
  fullDescription: LocalizedText;
  category: string;
  technologies: string[];
  thumbnailImage: string;
  images: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  completionDate: string;
}

export interface ProjectFeature {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProjectChallenge {
  challenge: LocalizedText;
  solution: LocalizedText;
}

export interface RelatedProject {
  id: string;
  title: string;
  thumbnailImage: string;
  category?: string;
}

export interface ProjectCardProps {
  project: ProjectType;
  locale: "fr" | "en";
  translations?: {
    noImage: string;
  };
}
