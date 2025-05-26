/**
 * skillsConstants.ts
 * This file contains all skill-related data for the portfolio.
 * It's organized with internationalization support for English and French.
 */

import {
  SkillLevel,
  SkillLevelInfo,
  Category,
  Skill,
  ToolCategory,
  CertificationCategory,
  SoftSkillsData,
} from "@/types/skillsTypes";

/**
 * Skill level definitions with internationalized labels
 */
export const SKILL_LEVELS: Record<SkillLevel, SkillLevelInfo> = {
  beginner: {
    label: {
      en: "Beginner",
      fr: "Débutant",
    },
    range: [0, 40],
  },
  intermediate: {
    label: {
      en: "Intermediate",
      fr: "Intermédiaire",
    },
    range: [41, 70],
  },
  advanced: {
    label: {
      en: "Advanced",
      fr: "Avancé",
    },
    range: [71, 90],
  },
  expert: {
    label: {
      en: "Expert",
      fr: "Expert",
    },
    range: [91, 100],
  },
};

/**
 * Technical skills data organized by category
 */
export const CATEGORIES: Category[] = [
  {
    id: "back-end",
    title: "Back-end",
    iconType: "server",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    progressColor: "bg-blue-500",
  },
  {
    id: "front-end",
    title: "Front-end",
    iconType: "layout",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    progressColor: "bg-purple-500",
  },
  {
    id: "blockchain",
    title: "Blockchain",
    iconType: "boxes",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    progressColor: "bg-amber-500",
  },
];

export const SKILLS: Skill[] = [
  // Back-end skills
  {
    id: "nodejs",
    categoryId: "back-end",
    name: "Node.js",
    iconType: "nodejs",
    level: "advanced",
    percentage: 85,
    color: "#339933",
    showInBanner: true,
  },
  {
    id: "express",
    categoryId: "back-end",
    name: "Express",
    iconType: "server",
    level: "advanced",
    percentage: 80,
    color: "#000000",
    showInBanner: true,
  },
  {
    id: "postgresql",
    categoryId: "back-end",
    name: "PostgreSQL",
    iconType: "postgresql",
    level: "intermediate",
    percentage: 70,
    color: "#4169E1",
    showInBanner: false,
  },
  {
    id: "mongodb",
    categoryId: "back-end",
    name: "MongoDB",
    iconType: "mongodb",
    level: "intermediate",
    percentage: 75,
    color: "#47A248",
    showInBanner: false,
  },
  {
    id: "rust",
    categoryId: "back-end",
    name: "Rust",
    iconType: "rust",
    level: "beginner",
    percentage: 30,
    learning: true,
    color: "#000000",
    showInBanner: true,
  },
  {
    id: "docker",
    categoryId: "back-end",
    name: "Docker",
    iconType: "docker",
    level: "intermediate",
    percentage: 60,
    color: "#2496ED",
    showInBanner: true,
  },

  // Front-end skills
  {
    id: "react",
    categoryId: "front-end",
    name: "React",
    iconType: "react",
    level: "advanced",
    percentage: 90,
    color: "#61DAFB",
    showInBanner: true,
  },
  {
    id: "nextjs",
    categoryId: "front-end",
    name: "Next.js",
    iconType: "nextjs",
    level: "advanced",
    percentage: 75,
    color: "#000000",
    showInBanner: true,
  },
  {
    id: "typescript",
    categoryId: "front-end",
    name: "TypeScript",
    iconType: "typescript",
    level: "advanced",
    percentage: 80,
    color: "#3178C6",
    showInBanner: true,
  },
  {
    id: "tailwindcss",
    categoryId: "front-end",
    name: "Tailwind CSS",
    iconType: "tailwind",
    level: "advanced",
    percentage: 85,
    color: "#06B6D4",
    showInBanner: true,
  },
  {
    id: "git",
    categoryId: "front-end",
    name: "Git",
    iconType: "git",
    level: "advanced",
    percentage: 85,
    color: "#F05032",
    showInBanner: false,
  },

  // Blockchain skills
  {
    id: "solidity",
    categoryId: "blockchain",
    name: "Solidity",
    iconType: "solidity",
    level: "advanced",
    percentage: 75,
    color: "#363636",
    showInBanner: true,
  },
  {
    id: "evm",
    categoryId: "blockchain",
    name: "EVM",
    iconType: "binary",
    level: "intermediate",
    percentage: 70,
    color: "#3C3C3D",
    showInBanner: true,
  },
  {
    id: "hardhat",
    categoryId: "blockchain",
    name: "Hardhat",
    iconType: "hardhat",
    level: "intermediate",
    percentage: 65,
    color: "#F6851B",
    showInBanner: true,
  },
  {
    id: "web3js",
    categoryId: "blockchain",
    name: "Web3.js",
    iconType: "code",
    level: "intermediate",
    percentage: 60,
    color: "#F6851B",
    showInBanner: true,
  },
];

/**
 * Tools data organized by category
 */
export const TOOLS: ToolCategory[] = [
  {
    id: "development-tools",
    title: {
      en: "Development Tools",
      fr: "Outils de Développement",
    },
    techs: [
      {
        name: "VS Code",
        iconType: "code",
        color: "#007ACC",
      },
      {
        name: "Cursor",
        iconType: "cursor-text",
        color: "#00BFFF",
      },
      {
        name: "IntelliJ",
        iconType: "code",
        color: "#000000",
      },
      {
        name: "GitHub",
        iconType: "github",
        color: "#181717",
      },
      {
        name: "GitHub Enterprise",
        iconType: "github",
        color: "#181717",
      },
    ],
  },
  {
    id: "productivity",
    title: {
      en: "Productivity",
      fr: "Productivité",
    },
    techs: [
      {
        name: "Notion",
        iconType: "file-text",
        color: "#000000",
      },
      {
        name: "Obsidian",
        iconType: "file-text",
        color: "#483699",
      },
      {
        name: "Postman",
        iconType: "send",
        color: "#FF6C37",
      },
      {
        name: "Power BI",
        iconType: "bar-chart",
        color: "#F2C811",
      },
      {
        name: "MS Office Suite",
        iconType: "file",
        color: "#0078D4",
      },
    ],
  },
  {
    id: "devops",
    title: {
      en: "DevOps",
      fr: "DevOps",
    },
    techs: [
      {
        name: "Docker",
        iconType: "docker",
        color: "#2496ED",
      },
      {
        name: "Jenkins",
        iconType: "server",
        color: "#D24939",
      },
      {
        name: "Maven",
        iconType: "package",
        color: "#C71A36",
      },
      {
        name: "Nginx",
        iconType: "server",
        color: "#009639",
      },
      {
        name: "AWS",
        iconType: "cloud",
        color: "#FF9900",
      },
    ],
  },
];

/**
 * Certification data
 */
export const CERTIFICATIONS: CertificationCategory[] = [
  {
    title: "Blockchain",
    techs: [
      {
        name: {
          en: "Developing a decentralized application with blockchain technologies",
          fr: "Développer une application décentralisée avec les technologies blockchain",
        },
        school: {
          en: "Alyra, blockchain & AI school",
          fr: "Alyra, l'école blockchain & IA",
        },
        schoolUrl: "https://www.alyra.fr",
        link: "https://certificate.alyra.fr/check/3C0A846D0843379C7305D6C31EA640F346608AA773FAC5B1E4F1D70E1AF37A2DM05jamJnYXFRdTBFT09pamQvZ0lBeUU0RTFBSWovRmtaS25MMDdNTW1WZDZOM1E1",
        img: "/images/certifications/alyra.png",
        learning: false,
        complete: "2025",
      },
    ],
  },
];

/**
 * Soft skills data organized by locale
 */
export const SOFT_SKILLS: SoftSkillsData = {
  en: [
    {
      title: "Communication & Collaboration",
      iconType: "message-square",
      color: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300",
      items: [
        "Clearly expressing complex technical concepts to all stakeholders",
        "Working effectively with diverse cross-functional teams",
        "Active listening to understand requirements and feedback",
        "Addressing disagreements professionally and constructively",
      ],
    },
    {
      title: "Leadership & Mentoring",
      iconType: "users",
      color: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300",
      items: [
        "Providing technical guidance to teams and junior developers",
        "Strong documentation and clear communication focused",
        "Helping less experienced team members grow and develop",
        "Leading projects with organization and accountability",
      ],
    },
    {
      title: "Problem Solving & Innovation",
      iconType: "lightbulb",
      color: "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300",
      items: [
        "Approaching challenges with creativity and persistence",
        "Analytical mindset for efficient technical solutions",
        "Understanding user needs to build better solutions",
        "Self-driven approach with continuous learning",
      ],
    },
    {
      title: "Quality & Adaptability",
      iconType: "git-branch",
      color: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300",
      items: [
        "Emphasis on code quality and testing standards",
        "Embracing new technologies and methodologies",
        "Prioritizing tasks and meeting deadlines consistently",
        "Being open to constructive feedback for improvement",
      ],
    },
  ],
  fr: [
    {
      title: "Communication & Collaboration",
      iconType: "message-square",
      color: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300",
      items: [
        "Expression claire des concepts techniques complexes à toutes les parties prenantes",
        "Travail efficace avec des équipes interfonctionnelles diverses",
        "Écoute active pour comprendre les exigences et les retours",
        "Résolution professionnelle et constructive des désaccords",
      ],
    },
    {
      title: "Leadership & Mentorat",
      iconType: "users",
      color: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300",
      items: [
        "Fournir des conseils techniques aux équipes et aux développeurs juniors",
        "Documentation solide et communication claire",
        "Aider les membres moins expérimentés de l'équipe à se développer",
        "Diriger des projets avec organisation et responsabilité",
      ],
    },
    {
      title: "Résolution de Problèmes & Innovation",
      iconType: "lightbulb",
      color: "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300",
      items: [
        "Aborder les défis avec créativité et persévérance",
        "Mentalité analytique pour des solutions techniques efficaces",
        "Comprendre les besoins des utilisateurs pour construire de meilleures solutions",
        "Approche autodidacte avec apprentissage continu",
      ],
    },
    {
      title: "Qualité & Adaptabilité",
      iconType: "git-branch",
      color: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300",
      items: [
        "Accent sur la qualité du code et les normes de test",
        "Adoption de nouvelles technologies et méthodologies",
        "Priorisation des tâches et respect cohérent des délais",
        "Ouverture aux retours constructifs pour l'amélioration",
      ],
    },
  ],
};

// Utility functions to work with the data
export function getCategoryWithSkills(categoryId: string) {
  const category = CATEGORIES.find((cat) => cat.id === categoryId);
  if (!category) return null;

  const skills = SKILLS.filter((skill) => skill.categoryId === categoryId);

  return {
    ...category,
    skills,
  };
}

export function getAllCategoriesWithSkills() {
  return CATEGORIES.map((category) => ({
    ...category,
    skills: SKILLS.filter((skill) => skill.categoryId === category.id),
  }));
}

export function getSkillByCategory(categoryId: string) {
  return SKILLS.filter((skill) => skill.categoryId === categoryId);
}
