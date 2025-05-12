export interface ProjectType {
  id: string;
  title: string;
  shortDescription: {
    fr: string;
    en: string;
  };
  fullDescription: {
    fr: string;
    en: string;
  };
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
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
}

export interface ProjectChallenge {
  challenge: {
    fr: string;
    en: string;
  };
  solution: {
    fr: string;
    en: string;
  };
}

export interface RelatedProject {
  id: string;
  title: string;
  thumbnailImage: string;
}

export interface ProjectCardProps {
  title: string;
  category: string;
  tech: string[];
  image: string;
  href: string;
}
