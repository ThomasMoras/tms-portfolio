export interface ProjectCardProps {
  title: string;
  category: string;
  tech: string[];
  image: string;
  href: string;
}

// Project features
export interface ProjectFeature {
  title: string;
  description: string;
}

// Project challenges and solutions
export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

// Related projects
export interface RelatedProject {
  id: string;
  title: string;
  thumbnailImage: string;
}

// Comprehensive project type
export interface ProjectType {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  thumbnailImage: string;
  images: string[];
  demoUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
  completionDate: string;
}
