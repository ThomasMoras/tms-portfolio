import { ProjectType, ProjectFeature, ProjectChallenge } from "@/types/projectTypes";

export const PROJECT_CATEGORIES = {
  // BLOCKCHAIN: "Blockchain",
  FULL_STACK: "Full Stack",
  // MOBILE: "Mobile",
  // UI_UX: "UI/UX",
  // MACHINE_LEARNING: "Machine Learning",
  // WEB3: "Web3",
} as const;

export const PROJECT_TECHNOLOGIES = {
  REACT: "React",
  NEXT_JS: "Next.js",
  TYPESCRIPT: "TypeScript",
  TAILWIND: "TailwindCSS",
  NODE_JS: "Node.js",
  EXPRESS: "Express.js",
  MONGODB: "MongoDB",
  POSTGRESQL: "PostgreSQL",
  SOLIDITY: "Solidity",
  ETHEREUM: "Ethereum",
  WEB3_JS: "Web3.js",
  IPFS: "IPFS",
  REACT_NATIVE: "React Native",
  FLUTTER: "Flutter",
  DOCKER: "Docker",
  AWS: "AWS",
  FIREBASE: "Firebase",
  GCP: "Google Cloud",
} as const;

export const PROJECT_FEATURES: Record<string, ProjectFeature[]> = {
  "lyonmarquage": [
    {
      title: "Gestion des commandes",
      description:
        "Suivi en temps réel des commandes, de leur statut et des historiques de transaction.",
    },
    {
      title: "Gestion des stocks",
      description:
        "Suivi des niveaux de stock, alertes de réapprovisionnement et prévisions basées sur les données historiques.",
    },
    {
      title: "Rapports et analyses",
      description:
        "Tableaux de bord personnalisables avec des graphiques interactifs pour analyser les ventes, les produits et le comportement des clients.",
    },
    {
      title: "Intégration multi-paiement",
      description:
        "Support pour plusieurs passerelles de paiement avec réconciliation automatique des transactions.",
    },
  ],
  "nft-marketplace": [
    {
      title: "Création et minting de NFT",
      description:
        "Interface conviviale pour créer et déployer des NFT sur la blockchain sans connaissances techniques.",
    },
    {
      title: "Enchères et ventes fixes",
      description:
        "Support pour les enchères temporisées et les ventes à prix fixe avec notifications en temps réel.",
    },
    {
      title: "Galeries personnalisées",
      description:
        "Les utilisateurs peuvent créer et personnaliser leurs propres galeries pour présenter leurs collections.",
    },
    {
      title: "Royalties pour les créateurs",
      description:
        "Système automatisé de paiement de royalties aux créateurs lors des ventes secondaires.",
    },
  ],
  "defi-platform": [
    {
      title: "Système de prêts et d'emprunts",
      description:
        "Permet aux utilisateurs de déposer des actifs comme garantie et d'emprunter d'autres tokens avec des taux d'intérêt dynamiques.",
    },
    {
      title: "Staking de tokens",
      description:
        "Les utilisateurs peuvent staker leurs tokens pour recevoir des récompenses générées par les frais de la plateforme.",
    },
    {
      title: "Échange décentralisé",
      description:
        "Interface intuitive pour échanger des tokens sans intermédiaire avec un minimum de slippage.",
    },
    {
      title: "Tableaux de bord analytiques",
      description:
        "Visualisation des performances des actifs, historique des transactions et positions actuelles.",
    },
  ],
};

// Project challenges and solutions
export const PROJECT_CHALLENGES: Record<string, ProjectChallenge[]> = {
  "lyonmarquage": [
    {
      challenge: "Performance avec de grandes quantités de données",
      solution:
        "Mise en place d'une architecture de cache multi-niveaux et pagination côté serveur pour gérer efficacement les grands jeux de données.",
    },
    {
      challenge: "Synchronisation en temps réel",
      solution:
        "Utilisation de WebSockets pour les mises à jour instantanées et implementation d'une logique de réconciliation optimiste pour une expérience fluide.",
    },
    {
      challenge: "Compatibilité multi-appareils",
      solution:
        "Design responsive avec des composants adaptables et tests systématiques sur différentes tailles d'écran et navigateurs.",
    },
  ],
  "nft-marketplace": [
    {
      challenge: "Coûts de gas élevés pour le minting",
      solution:
        "Implémentation du lazy minting permettant de différer les coûts de déploiement jusqu'à la première vente du NFT.",
    },
    {
      challenge: "Stockage décentralisé des métadonnées",
      solution:
        "Utilisation d'IPFS avec pinning redondant pour garantir la persistance des métadonnées des NFT indépendamment de la plateforme.",
    },
    {
      challenge: "Vérification de l'authenticité",
      solution:
        "Système de vérification des créateurs avec badges de confiance et historique transparent de provenance pour chaque NFT.",
    },
  ],
  "defi-platform": [
    {
      challenge: "Sécurité des smart contracts",
      solution:
        "Implémentation de tests unitaires exhaustifs, audit externe par une entreprise spécialisée en sécurité blockchain, et utilisation de bibliothèques éprouvées comme OpenZeppelin.",
    },
    {
      challenge: "Gestion des taux d'intérêt dynamiques",
      solution:
        "Développement d'un algorithme basé sur l'utilisation des pools de liquidité avec des courbes de rendement ajustables selon l'offre et la demande.",
    },
    {
      challenge: "Expérience utilisateur simplifiée",
      solution:
        "Abstraction de la complexité blockchain via une interface intuitive avec estimation des frais de gaz et confirmation en une étape.",
    },
  ],
};

// Project related projects mapping
export const RELATED_PROJECTS: Record<string, string[]> = {
  "lyonmarquage": ["nft-marketplace", "defi-platform"],
};

// Get related projects
export const getRelatedProjects = (projectId: string) => {
  const relatedIds = RELATED_PROJECTS[projectId] || [];
  return relatedIds
    .map((id) => {
      const project = getProjectById(id);
      if (!project) return null;
      return {
        id: project.id,
        title: project.title,
        thumbnailImage: project.thumbnailImage,
        category: project.category,
      };
    })
    .filter(Boolean);
};

export const PROJECTS: ProjectType[] = [
  {
    id: "lyonmarquage",
    title: "Lyon Marquage Website",
    shortDescription: "short description",
    fullDescription: "full description",
    category: PROJECT_CATEGORIES.FULL_STACK,
    technologies: [
      PROJECT_TECHNOLOGIES.NEXT_JS,
      PROJECT_TECHNOLOGIES.NODE_JS,
      PROJECT_TECHNOLOGIES.POSTGRESQL,
      PROJECT_TECHNOLOGIES.TYPESCRIPT,
    ],
    thumbnailImage: "/projects/lyonmarquage/thumbnail.jpg",
    images: [
      "/projects/lyonmarquage/screenshot-1.jpg",
      "/projects/lyonmarquage/screenshot-2.jpg",
      "/projects/lyonmarquage/screenshot-3.jpg",
    ],
    demoUrl: "https://www.lyonmarquage.fr",
    repoUrl: "https://github.com/myrepo/lyon-marquage-services",
    featured: true,
    completionDate: "2025-04",
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    shortDescription: "A platform for creating, buying and selling NFTs",
    fullDescription:
      "Une marketplace complète pour les NFT permettant aux créateurs de mint leurs œuvres digitales, de les mettre en vente et aux collectionneurs d'acheter, d'enchérir et de revendre des tokens non fongibles. La plateforme intègre un système de portefeuille numérique et supporte plusieurs collections et standards de NFT.",
    category: PROJECT_CATEGORIES.BLOCKCHAIN,
    technologies: [
      PROJECT_TECHNOLOGIES.ETHEREUM,
      PROJECT_TECHNOLOGIES.IPFS,
      PROJECT_TECHNOLOGIES.REACT,
      PROJECT_TECHNOLOGIES.SOLIDITY,
    ],
    thumbnailImage: "/projects/nft-marketplace/thumbnail.jpg",
    images: [
      "/projects/nft-marketplace/screenshot-1.jpg",
      "/projects/nft-marketplace/screenshot-2.jpg",
      "/projects/nft-marketplace/screenshot-3.jpg",
    ],
    demoUrl: "https://nft-marketplace-demo.example.com",
    repoUrl: "https://github.com/yourusername/nft-marketplace",
    featured: false,
    completionDate: "2025-05",
  },
  {
    id: "defi-platform",
    title: "DeFi Platform",
    shortDescription: "A decentralized finance platform for crypto assets management",
    fullDescription:
      "Une plateforme de finance décentralisée permettant aux utilisateurs de gérer, échanger et faire fructifier leurs actifs cryptographiques avec un système de prêts et d'emprunts intégré. L'application offre une interface intuitive pour interagir avec différents smart contracts sur la blockchain Ethereum.",
    category: PROJECT_CATEGORIES.BLOCKCHAIN,
    technologies: [
      PROJECT_TECHNOLOGIES.SOLIDITY,
      PROJECT_TECHNOLOGIES.REACT,
      PROJECT_TECHNOLOGIES.WEB3_JS,
      PROJECT_TECHNOLOGIES.ETHEREUM,
    ],
    thumbnailImage: "/projects/defi-platform/thumbnail.jpg",
    images: [
      "/projects/defi-platform/screenshot-1.jpg",
      "/projects/defi-platform/screenshot-2.jpg",
      "/projects/defi-platform/screenshot-3.jpg",
    ],
    demoUrl: "https://defi-platform-demo.example.com",
    repoUrl: "https://github.com/yourusername/defi-platform",
    featured: false,
    completionDate: "2025-05",
  },
];

export const getFeaturedProjects = () => PROJECTS.filter((project) => project.featured);
export const getProjectById = (id: string) => PROJECTS.find((project) => project.id === id);
export const getProjectsByCategory = (category: string) =>
  PROJECTS.filter((project) => project.category === category);
