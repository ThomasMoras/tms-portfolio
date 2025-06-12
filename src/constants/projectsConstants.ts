import { ProjectType, ProjectFeature, ProjectChallenge } from "@/types/projectTypes";

export const PROJECT_CATEGORIES = {
  FULL_STACK: "Full Stack",
  BLOCKCHAIN: "Blockchain",
  WEB3: "Web3",
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
  HARDHAT: "Hardhat",
  OPENZEPPELIN: "OpenZeppelin",
  VERCEL: "Vercel",
  SHADCN_UI: "Shadcn/UI",
  RAINBOW_KIT: "Rainbow Kit",
  LIT_PROTOCOL: "Lit Protocol",
  WAGMI: "Wagmi",
  WORLD_ID: "World ID",
} as const;

export const PROJECT_FEATURES: Record<string, ProjectFeature[]> = {
  "pulse": [
    {
      title: {
        fr: "Gestion de profil utilisateur (SBT)",
        en: "User Profile Management (SBT)",
      },
      description: {
        fr: "Création et modification de profils utilisateur en connectant les portefeuilles, avec stockage d'images sur IPFS et implémentation de Soulbound Token (SBT) pour une vérification unique du profil.",
        en: "Create and modify user profiles by connecting wallets, with IPFS-based image storage and Soulbound Token (SBT) implementation for unique profile verification.",
      },
    },
    {
      title: {
        fr: "Recherche avancée d'utilisateurs",
        en: "Advanced User Search",
      },
      description: {
        fr: "Système de filtrage multi-critères permettant la recherche par genre, intérêts et évaluations avec des combinaisons de filtres personnalisables et des résultats en temps réel.",
        en: "Multi-criteria filtering system enabling search by gender, interests, and ratings with customizable filter combinations and real-time search results.",
      },
    },
    {
      title: {
        fr: "Interactions de profil",
        en: "Profile Interactions",
      },
      description: {
        fr: "Fonctionnalités J'aime, Je n'aime pas et Super J'aime avec limites d'interaction basées sur le niveau NFT de l'utilisateur et suivi des statistiques d'engagement.",
        en: "Like, Dislike, and Super Like functionality with interaction limits based on user NFT tier and engagement tracking statistics.",
      },
    },
    {
      title: {
        fr: "Messagerie chiffrée",
        en: "Encrypted Messaging",
      },
      description: {
        fr: "Conversations chiffrées de bout en bout utilisant le protocole Lit avec stockage des messages on-chain et capacités de messagerie en temps réel.",
        en: "End-to-end encrypted conversations using Lit Protocol with on-chain message storage and real-time messaging capabilities.",
      },
    },
    {
      title: {
        fr: "Proof of Personhood (Concept)",
        en: "Proof of Personhood (Concept)",
      },
      description: {
        fr: "Système de vérification unique des utilisateurs avec World ID conçu et planifié pour éliminer les faux profils, mais non implémenté dans cette version du projet.",
        en: "Unique user verification system with World ID designed and planned to eliminate fake profiles, but not implemented in this version of the project.",
      },
    },
    {
      title: {
        fr: "Preuves de connaissance zéro (Concept)",
        en: "Zero Knowledge Proofs (Concept)",
      },
      description: {
        fr: "Architecture planifiée pour la vérification d'informations privées sans divulgation, conçue pour les données sensibles mais non développée dans l'implémentation actuelle.",
        en: "Planned architecture for private information verification without disclosure, designed for sensitive data but not developed in the current implementation.",
      },
    },
    {
      title: {
        fr: "Niveaux d'abonnement NFT",
        en: "NFT Subscription Tiers",
      },
      description: {
        fr: "Plusieurs niveaux d'abonnement via NFT avec système de bénéfices échelonnés, déverrouillage de fonctionnalités premium et contrôle d'accès basé sur NFT.",
        en: "Multiple subscription levels via NFTs with tiered benefits system, premium features unlock, and NFT-based access control.",
      },
    },
    {
      title: {
        fr: "Programme partenaire",
        en: "Partner Program",
      },
      description: {
        fr: "Rôle utilisateur partenaire dédié avec capacités de création d'événements, accès aux événements protégés par NFT et outils de tableau de bord partenaire.",
        en: "Dedicated partner user role with event creation capabilities, NFT-gated event access, and partner dashboard management tools.",
      },
    },
  ],
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
};

export const PROJECT_CHALLENGES: Record<string, ProjectChallenge[]> = {
  "pulse": [
    {
      challenge: {
        fr: "Sécurité des smart contracts et gestion des données sensibles",
        en: "Smart contract security and sensitive data management",
      },
      solution: {
        fr: "Implémentation de tests unitaires exhaustifs avec audit externe, utilisation d'OpenZeppelin pour les contrats sécurisés, et intégration du protocole Lit pour le chiffrement de bout en bout des messages.",
        en: "Implementation of comprehensive unit tests with external audit, use of OpenZeppelin for secure contracts, and Lit Protocol integration for end-to-end message encryption.",
      },
    },
    {
      challenge: {
        fr: "Conception d'un système de vérification d'identité robuste",
        en: "Designing a robust identity verification system",
      },
      solution: {
        fr: "Architecture conceptuelle développée pour intégrer World ID et les preuves de connaissance zéro, avec documentation technique détaillée pour une implémentation future.",
        en: "Conceptual architecture developed to integrate World ID and Zero Knowledge proofs, with detailed technical documentation for future implementation.",
      },
    },
    {
      challenge: {
        fr: "Expérience utilisateur fluide dans un environnement décentralisé",
        en: "Smooth user experience in a decentralized environment",
      },
      solution: {
        fr: "Utilisation de Rainbow Kit pour une connexion wallet simplifiée, Wagmi pour les hooks React optimisés, et Shadcn/UI pour une interface moderne et accessible.",
        en: "Use of Rainbow Kit for simplified wallet connection, Wagmi for optimized React hooks, and Shadcn/UI for a modern and accessible interface.",
      },
    },
    {
      challenge: {
        fr: "Scalabilité et performance des interactions utilisateur",
        en: "Scalability and performance of user interactions",
      },
      solution: {
        fr: "Architecture hybride combinant stockage on-chain pour les données critiques et IPFS pour les images, avec système de cache intelligent et optimisation des requêtes blockchain.",
        en: "Hybrid architecture combining on-chain storage for critical data and IPFS for images, with intelligent caching system and blockchain query optimization.",
      },
    },
    {
      challenge: {
        fr: "Monétisation et système de niveaux équitable",
        en: "Fair monetization and tier system",
      },
      solution: {
        fr: "Système d'abonnement basé sur NFT avec niveaux progressifs, programme partenaire pour les créateurs d'événements, et limites d'interaction ajustables selon le niveau de l'utilisateur.",
        en: "NFT-based subscription system with progressive tiers, partner program for event creators, and adjustable interaction limits based on user level.",
      },
    },
  ],
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
};

// Project related projects mapping
export const RELATED_PROJECTS: Record<string, string[]> = {
  "lyonmarquage": [],
  "pulse": [],
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
    id: "pulse",
    title: "Pulse - Decentralized Dating App",
    shortDescription: {
      fr: "Application de rencontres décentralisée avec preuve d'humanité et messagerie chiffrée",
      en: "Decentralized dating application with proof of personhood and encrypted messaging",
    },
    fullDescription: {
      fr: "Pulse est une application de rencontres décentralisée qui redéfinit les interactions en ligne en préservant la vie privée des utilisateurs tout en garantissant l'authenticité de leur identité. Construite sur la blockchain Ethereum, Pulse utilise des technologies de pointe pour créer un écosystème de rencontres sécurisé et transparent.\n\nL'application intègre un système de Proof of Personhood via World ID pour s'assurer qu'un seul compte par personne existe, éliminant ainsi les faux profils et les comptes multiples. Les utilisateurs peuvent créer des profils authentifiés stockés dans des Soulbound Tokens (SBT), garantissant l'unicité et la persistance des identités.\n\nLa messagerie utilise le protocole Lit pour un chiffrement de bout en bout, assurant que seuls les utilisateurs concernés peuvent lire leurs conversations. Le système de niveaux basé sur NFT offre différents avantages selon l'engagement de l'utilisateur, tandis que le programme partenaire permet aux organisateurs d'événements de créer des expériences exclusives.\n\nAvec son architecture moderne combinant Next.js, TypeScript et les dernières innovations Web3, Pulse offre une expérience utilisateur fluide tout en maintenant les principes de décentralisation et de confidentialité.",
      en: "Pulse is a decentralized dating application that redefines online interactions by preserving user privacy while ensuring the authenticity of their identity. Built on the Ethereum blockchain, Pulse uses cutting-edge technologies to create a secure and transparent dating ecosystem.\n\nThe application integrates a Proof of Personhood system via World ID to ensure only one account per person exists, eliminating fake profiles and multiple accounts. Users can create authenticated profiles stored in Soulbound Tokens (SBT), guaranteeing the uniqueness and persistence of identities.\n\nMessaging uses the Lit protocol for end-to-end encryption, ensuring that only the concerned users can read their conversations. The NFT-based tier system offers different benefits based on user engagement, while the partner program allows event organizers to create exclusive experiences.\n\nWith its modern architecture combining Next.js, TypeScript, and the latest Web3 innovations, Pulse provides a smooth user experience while maintaining the principles of decentralization and privacy.",
    },
    category: PROJECT_CATEGORIES.BLOCKCHAIN,
    technologies: [
      PROJECT_TECHNOLOGIES.NEXT_JS,
      PROJECT_TECHNOLOGIES.REACT,
      PROJECT_TECHNOLOGIES.TYPESCRIPT,
      PROJECT_TECHNOLOGIES.TAILWIND,
      PROJECT_TECHNOLOGIES.NODE_JS,
      PROJECT_TECHNOLOGIES.SOLIDITY,
      PROJECT_TECHNOLOGIES.HARDHAT,
      PROJECT_TECHNOLOGIES.OPENZEPPELIN,
      PROJECT_TECHNOLOGIES.VERCEL,
      PROJECT_TECHNOLOGIES.SHADCN_UI,
      PROJECT_TECHNOLOGIES.RAINBOW_KIT,
      PROJECT_TECHNOLOGIES.LIT_PROTOCOL,
      PROJECT_TECHNOLOGIES.WAGMI,
      PROJECT_TECHNOLOGIES.IPFS,
    ],
    thumbnailImage: "/projects/pulse/home.png",
    images: [
      "/projects/pulse/home.png",
      "/projects/pulse/profile.png",
      "/projects/pulse/conversation.png",
      "/projects/pulse/dashboard.png",
    ],
    demoUrl: "https://pulse-dapp.vercel.app",
    repoUrl: "https://github.com/ThomasMoras/pulse",
    featured: true,
    completionDate: "2025-06",
  },
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
    repoUrl: "https://github.com/ThomasMoras/lyon-marquage-services",
    featured: true,
    completionDate: "2025-04",
  },
];

export const getFeaturedProjects = () => PROJECTS.filter((project) => project.featured);
export const getProjectById = (id: string) => PROJECTS.find((project) => project.id === id);
export const getProjectsByCategory = (category: string) =>
  PROJECTS.filter((project) => project.category === category);
