import { ProjectType, ProjectFeature, ProjectChallenge } from "@/types/projectTypes";

export const PROJECT_CATEGORIES = {
  FULL_STACK: "Full Stack",
  BLOCKCHAIN: "Blockchain",
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
  SUPABASE: "Supabase",
  FIREBASE: "Firebase",
  GCP: "Google Cloud",
  PRISMA: "Prisma",
  AUTH_JS: "Auth.js",
  ZOD: "Zod",
  RADIX_UI: "Radix UI",
} as const;

export const PROJECT_FEATURES: Record<string, ProjectFeature[]> = {
  "lyonmarquage": [
    {
      title: {
        fr: "Interface d'administration",
        en: "Admin Interface",
      },
      description: {
        fr: "Panneau d'administration sécurisé permettant au client de modifier le contenu du site sans connaissance technique.",
        en: "Secure admin panel allowing the client to modify website content without technical knowledge.",
      },
    },
    {
      title: {
        fr: "Carrousel d'images éditable",
        en: "Editable Image Carousel",
      },
      description: {
        fr: "Carrousel dynamique sur la page d'accueil avec fonctionnalité d'édition pour ajouter, supprimer ou réorganiser les images.",
        en: "Dynamic carousel on the homepage with editing functionality to add, remove, or rearrange images.",
      },
    },
    {
      title: {
        fr: "Sections de contenu personnalisables",
        en: "Customizable Content Sections",
      },
      description: {
        fr: "Sections modulaires permettant au client de modifier les textes, images et mise en page sans intervention technique.",
        en: "Modular sections allowing the client to modify text, images, and layout without technical intervention.",
      },
    },
    {
      title: {
        fr: "Formulaire de contact sécurisé",
        en: "Secure Contact Form",
      },
      description: {
        fr: "Formulaire de contact avec protection contre les spams et validation des données en temps réel.",
        en: "Contact form with spam protection and real-time data validation.",
      },
    },
    {
      title: {
        fr: "Multi-langue",
        en: "Multi-language Support",
      },
      description: {
        fr: "Support complet pour le français et l'anglais avec capacité d'étendre à d'autres langues facilement.",
        en: "Complete support for French and English with the ability to easily extend to other languages.",
      },
    },
    {
      title: {
        fr: "Design responsive",
        en: "Responsive Design",
      },
      description: {
        fr: "Interface entièrement adaptative offrant une expérience optimale sur tous les appareils, du mobile au grand écran.",
        en: "Fully adaptive interface offering an optimal experience on all devices, from mobile to large screens.",
      },
    },
  ],
  "nft-marketplace": [
    {
      title: {
        fr: "Création et minting de NFT",
        en: "NFT Creation and Minting",
      },
      description: {
        fr: "Interface conviviale pour créer et déployer des NFT sur la blockchain sans connaissances techniques.",
        en: "User-friendly interface for creating and deploying NFTs on the blockchain without technical knowledge.",
      },
    },
    {
      title: {
        fr: "Enchères et ventes fixes",
        en: "Auctions and Fixed Sales",
      },
      description: {
        fr: "Support pour les enchères temporisées et les ventes à prix fixe avec notifications en temps réel.",
        en: "Support for timed auctions and fixed-price sales with real-time notifications.",
      },
    },
    {
      title: {
        fr: "Galeries personnalisées",
        en: "Customizable Galleries",
      },
      description: {
        fr: "Les utilisateurs peuvent créer et personnaliser leurs propres galeries pour présenter leurs collections.",
        en: "Users can create and customize their own galleries to showcase their collections.",
      },
    },
    {
      title: {
        fr: "Royalties pour les créateurs",
        en: "Creator Royalties",
      },
      description: {
        fr: "Système automatisé de paiement de royalties aux créateurs lors des ventes secondaires.",
        en: "Automated royalty payment system to creators on secondary sales.",
      },
    },
  ],
  "defi-platform": [
    {
      title: {
        fr: "Système de prêts et d'emprunts",
        en: "Lending and Borrowing System",
      },
      description: {
        fr: "Permet aux utilisateurs de déposer des actifs comme garantie et d'emprunter d'autres tokens avec des taux d'intérêt dynamiques.",
        en: "Allows users to deposit assets as collateral and borrow other tokens with dynamic interest rates.",
      },
    },
    {
      title: {
        fr: "Staking de tokens",
        en: "Token Staking",
      },
      description: {
        fr: "Les utilisateurs peuvent staker leurs tokens pour recevoir des récompenses générées par les frais de la plateforme.",
        en: "Users can stake their tokens to receive rewards generated by platform fees.",
      },
    },
    {
      title: {
        fr: "Échange décentralisé",
        en: "Decentralized Exchange",
      },
      description: {
        fr: "Interface intuitive pour échanger des tokens sans intermédiaire avec un minimum de slippage.",
        en: "Intuitive interface for exchanging tokens without intermediaries with minimal slippage.",
      },
    },
    {
      title: {
        fr: "Tableaux de bord analytiques",
        en: "Analytical Dashboards",
      },
      description: {
        fr: "Visualisation des performances des actifs, historique des transactions et positions actuelles.",
        en: "Visualization of asset performance, transaction history, and current positions.",
      },
    },
  ],
};

export const PROJECT_CHALLENGES: Record<string, ProjectChallenge[]> = {
  "lyonmarquage": [
    {
      challenge: {
        fr: "Création d'une interface d'administration intuitive",
        en: "Building an intuitive admin interface",
      },
      solution: {
        fr: "Développement d'un panneau d'administration sur mesure intégré directement au site, avec authentification sécurisée et permissions modulables selon les besoins du client.",
        en: "Development of a custom admin panel integrated directly into the site, with secure authentication and modular permissions according to client needs.",
      },
    },
    {
      challenge: {
        fr: "Optimisation des performances avec contenu dynamique",
        en: "Performance optimization with dynamic content",
      },
      solution: {
        fr: "Implémentation d'une stratégie de mise en cache avancée et génération statique incrémentale (ISR) pour maintenir des temps de chargement rapides tout en permettant l'édition du contenu.",
        en: "Implementation of an advanced caching strategy and Incremental Static Regeneration (ISR) to maintain fast loading times while allowing content editing.",
      },
    },
    {
      challenge: {
        fr: "Gestion du stockage d'images",
        en: "Image storage management",
      },
      solution: {
        fr: "Intégration de Supabase Storage avec optimisation automatique des images téléchargées, incluant le redimensionnement, la compression et la génération de formats modernes comme WebP.",
        en: "Integration of Supabase Storage with automatic optimization of uploaded images, including resizing, compression, and generation of modern formats like WebP.",
      },
    },
    {
      challenge: {
        fr: "Déploiement et maintenance simplifiés",
        en: "Simplified deployment and maintenance",
      },
      solution: {
        fr: "Configuration d'un pipeline CI/CD complet avec déploiement automatisé sur Vercel, migrations de base de données automatiques, et système de sauvegarde régulière des données.",
        en: "Setup of a complete CI/CD pipeline with automated deployment on Vercel, automatic database migrations, and regular data backup system.",
      },
    },
  ],
  "nft-marketplace": [
    {
      challenge: {
        fr: "Coûts de gas élevés pour le minting",
        en: "High gas costs for minting",
      },
      solution: {
        fr: "Implémentation du lazy minting permettant de différer les coûts de déploiement jusqu'à la première vente du NFT.",
        en: "Implementation of lazy minting to defer deployment costs until the first sale of the NFT.",
      },
    },
    {
      challenge: {
        fr: "Stockage décentralisé des métadonnées",
        en: "Decentralized metadata storage",
      },
      solution: {
        fr: "Utilisation d'IPFS avec pinning redondant pour garantir la persistance des métadonnées des NFT indépendamment de la plateforme.",
        en: "Use of IPFS with redundant pinning to ensure persistence of NFT metadata independently of the platform.",
      },
    },
    {
      challenge: {
        fr: "Vérification de l'authenticité",
        en: "Authentication verification",
      },
      solution: {
        fr: "Système de vérification des créateurs avec badges de confiance et historique transparent de provenance pour chaque NFT.",
        en: "Creator verification system with trust badges and transparent provenance history for each NFT.",
      },
    },
  ],
  "defi-platform": [
    {
      challenge: {
        fr: "Sécurité des smart contracts",
        en: "Smart contract security",
      },
      solution: {
        fr: "Implémentation de tests unitaires exhaustifs, audit externe par une entreprise spécialisée en sécurité blockchain, et utilisation de bibliothèques éprouvées comme OpenZeppelin.",
        en: "Implementation of comprehensive unit tests, external audit by a blockchain security specialized company, and use of proven libraries like OpenZeppelin.",
      },
    },
    {
      challenge: {
        fr: "Gestion des taux d'intérêt dynamiques",
        en: "Dynamic interest rate management",
      },
      solution: {
        fr: "Développement d'un algorithme basé sur l'utilisation des pools de liquidité avec des courbes de rendement ajustables selon l'offre et la demande.",
        en: "Development of an algorithm based on liquidity pool utilization with yield curves adjustable according to supply and demand.",
      },
    },
    {
      challenge: {
        fr: "Expérience utilisateur simplifiée",
        en: "Simplified user experience",
      },
      solution: {
        fr: "Abstraction de la complexité blockchain via une interface intuitive avec estimation des frais de gaz et confirmation en une étape.",
        en: "Abstraction of blockchain complexity via an intuitive interface with gas fee estimation and one-step confirmation.",
      },
    },
  ],
};

// Project related projects mapping
export const RELATED_PROJECTS: Record<string, string[]> = {
  "lyonmarquage": [],
  "nft-marketplace": [],
  "defi-platform": [],
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
    shortDescription: {
      fr: "Site vitrine moderne et éditable pour une entreprise française de sérigraphie",
      en: "Modern editable showcase website for a French screen printing company",
    },
    fullDescription: {
      fr: "Le site Lyon Marquage est une application web moderne et responsive construite avec Next.js, un framework React populaire pour le développement d'applications React rendues côté serveur. Ce projet présente les produits et services offerts par l'entreprise de sérigraphie Lyon Marquage tout en permettant au client de gérer lui-même le contenu de son site.\n\nLe site intègre une interface d'administration personnalisée permettant la modification des sections, carrousels d'images et textes sans connaissance technique. Il utilise Prisma comme ORM pour interagir avec une base de données PostgreSQL, offrant ainsi une solution complète et performante. \n\nLe déploiement est automatisé via CI/CD sur Vercel avec des migrations de base de données gérées automatiquement. L'architecture du projet suit les meilleures pratiques actuelles de développement web, utilisant TypeScript pour la sécurité du type, Tailwind CSS pour le styling, et les composants Radix UI pour une interface utilisateur accessible et responsive.",
      en: "Lyon Marquage website is a modern and responsive web application built using Next.js, a popular React framework for server-rendered React applications. This project showcases the products and services offered by the Lyon Marquage screen printing company while allowing the client to manage their website content themselves.\n\nThe site incorporates a custom administration interface for modifying sections, image carousels, and text without technical knowledge. It uses Prisma as an ORM to interact with a PostgreSQL database, providing a complete and performant solution.\n\nDeployment is automated via CI/CD on Vercel with automatically managed database migrations. The project architecture follows current web development best practices, using TypeScript for type safety, Tailwind CSS for styling, and Radix UI components for an accessible and responsive user interface.",
    },
    category: PROJECT_CATEGORIES.FULL_STACK,
    technologies: [
      PROJECT_TECHNOLOGIES.NEXT_JS,
      PROJECT_TECHNOLOGIES.NODE_JS,
      PROJECT_TECHNOLOGIES.POSTGRESQL,
      PROJECT_TECHNOLOGIES.TYPESCRIPT,
      PROJECT_TECHNOLOGIES.TAILWIND,
      PROJECT_TECHNOLOGIES.SUPABASE,
      PROJECT_TECHNOLOGIES.PRISMA,
      PROJECT_TECHNOLOGIES.AUTH_JS,
      PROJECT_TECHNOLOGIES.RADIX_UI,
      PROJECT_TECHNOLOGIES.ZOD,
    ],
    thumbnailImage: "/projects/lyonmarquage/home.png",
    images: [
      "/projects/lyonmarquage/home.png",
      "/projects/lyonmarquage/carousel_editable.png",
      "/projects/lyonmarquage/contact.png",
      "/projects/lyonmarquage/section.png",
      "/projects/lyonmarquage/section_editable.png",
    ],
    demoUrl: "https://www.lyonmarquage.fr",
    repoUrl: "https://github.com/username/lyon-marquage-services",
    featured: true,
    completionDate: "2025-04",
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    shortDescription: {
      fr: "Une plateforme pour créer, acheter et vendre des NFT",
      en: "A platform for creating, buying and selling NFTs",
    },
    fullDescription: {
      fr: "Une marketplace complète pour les NFT permettant aux créateurs de mint leurs œuvres digitales, de les mettre en vente et aux collectionneurs d'acheter, d'enchérir et de revendre des tokens non fongibles. La plateforme intègre un système de portefeuille numérique et supporte plusieurs collections et standards de NFT.",
      en: "A complete NFT marketplace allowing creators to mint their digital works, list them for sale, and collectors to buy, bid on, and resell non-fungible tokens. The platform integrates a digital wallet system and supports multiple NFT collections and standards.",
    },
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
    shortDescription: {
      fr: "Une plateforme de finance décentralisée pour la gestion d'actifs crypto",
      en: "A decentralized finance platform for crypto assets management",
    },
    fullDescription: {
      fr: "Une plateforme de finance décentralisée permettant aux utilisateurs de gérer, échanger et faire fructifier leurs actifs cryptographiques avec un système de prêts et d'emprunts intégré. L'application offre une interface intuitive pour interagir avec différents smart contracts sur la blockchain Ethereum.",
      en: "A decentralized finance platform allowing users to manage, exchange, and grow their cryptographic assets with an integrated lending and borrowing system. The application offers an intuitive interface for interacting with various smart contracts on the Ethereum blockchain.",
    },
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
