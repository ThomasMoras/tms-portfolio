import { mapSkillData, mapTechData } from "@/lib/mapper";
import {
  SkillCategory,
  SkillData,
  SkillLevel,
  SkillLevelInfo,
  TechCategory,
} from "@/types/skillsTypes";

// Skill level definitions
export const SKILL_LEVELS: Record<SkillLevel, SkillLevelInfo> = {
  beginner: { label: "Débutant", range: [0, 40] },
  intermediate: { label: "Intermédiaire", range: [41, 70] },
  advanced: { label: "Avancé", range: [71, 90] },
  expert: { label: "Expert", range: [91, 100] },
};

// Unified skills data structure
export const SKILLS_DATA = [
  {
    id: "back-end",
    title: "Back-end",
    iconType: "server",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    progressColor: "bg-blue-500",
    bannerColor: "bg-blue-500/10 text-blue-500 border-blue-200 dark:border-blue-800/30",
    link: "/skills?tab=backend",
    skills: [
      {
        name: "Node.js",
        iconType: "nodejs",
        level: "advanced",
        percentage: 85,
        color: "#339933",
        showInBanner: true,
      },
      {
        name: "Express",
        iconType: "server",
        level: "advanced",
        percentage: 80,
        color: "#000000",
        showInBanner: true,
      },
      {
        name: "PostgreSQL",
        iconType: "postgresql",
        level: "intermediate",
        percentage: 70,
        color: "#4169E1",
        showInBanner: false,
      },
      {
        name: "MongoDB",
        iconType: "mongodb",
        level: "intermediate",
        percentage: 75,
        color: "#47A248",
        showInBanner: false,
      },
      {
        name: "Rust",
        iconType: "rust",
        level: "beginner",
        percentage: 30,
        learning: true,
        color: "#000000",
        showInBanner: true,
      },
      {
        name: "Docker",
        iconType: "docker",
        level: "intermediate",
        percentage: 60,
        color: "#2496ED",
        showInBanner: true,
      },
    ],
  },
  {
    id: "front-end",
    title: "Front-end",
    iconType: "layout",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    progressColor: "bg-purple-500",
    bannerColor: "bg-purple-500/10 text-purple-500 border-purple-200 dark:border-purple-800/30",
    link: "/skills?tab=frontend",
    skills: [
      {
        name: "React",
        iconType: "react",
        level: "advanced",
        percentage: 90,
        color: "#61DAFB",
        showInBanner: true,
      },
      {
        name: "Next.js",
        iconType: "nextjs",
        level: "advanced",
        percentage: 75,
        color: "#000000",
        showInBanner: true,
      },
      {
        name: "TypeScript",
        iconType: "typescript",
        level: "advanced",
        percentage: 80,
        color: "#3178C6",
        showInBanner: true,
      },
      {
        name: "Tailwind CSS",
        iconType: "tailwind",
        level: "advanced",
        percentage: 85,
        color: "#06B6D4",
        showInBanner: true,
      },
      {
        name: "Git",
        iconType: "git",
        level: "advanced",
        percentage: 85,
        color: "#F05032",
        showInBanner: false,
      },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    iconType: "boxes",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    progressColor: "bg-amber-500",
    bannerColor: "bg-amber-500/10 text-amber-500 border-amber-200 dark:border-amber-800/30",
    link: "/skills?tab=blockchain",
    skills: [
      {
        name: "Solidity",
        iconType: "solidity",
        level: "advanced",
        percentage: 75,
        color: "#363636",
        showInBanner: true,
      },
      {
        name: "EVM",
        iconType: "binary",
        level: "intermediate",
        percentage: 70,
        color: "#3C3C3D",
        showInBanner: true,
      },
      {
        name: "Hardhat",
        iconType: "hardhat",
        level: "intermediate",
        percentage: 65,
        color: "#F6851B",
        showInBanner: true,
      },
      {
        name: "Web3.js",
        iconType: "code",
        level: "intermediate",
        percentage: 60,
        color: "#F6851B",
        showInBanner: true,
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = SKILLS_DATA.map((category) =>
  mapSkillData({
    id: category.id,
    title: category.title,
    iconType: category.iconType,
    color: category.color,
    bgColor: category.bgColor,
    progressColor: category.progressColor,
    skills: category.skills as SkillData[],
  })
);

// Generate TECH_CATEGORIES for the TechBanner component
export const TECH_CATEGORIES: TechCategory[] = SKILLS_DATA.map((category) =>
  mapTechData({
    id: category.id,
    title: category.title,
    iconType: category.iconType,
    color: category.bannerColor,
    link: category.link,
    techs: category.skills
      .filter((skill) => skill.showInBanner)
      .map((skill) => ({
        name: skill.name,
        iconType: skill.iconType,
        color: skill.color,
        learning: skill.learning,
      })),
  })
);

// New categories data using your existing icon system
// Soft Skills Categories
const SOFT_SKILLS_DATA = [
  {
    id: "project-management",
    title: "Project Management",
    iconType: "clipboard-check",
    color: "bg-purple-600 text-white",
    link: "/skills?tab=project-management",
    techs: [
      { name: "Agile", iconType: "clipboard-list", color: "#8A2BE2" },
      { name: "Scrum", iconType: "calendar", color: "#8A2BE2" },
      { name: "Kanban", iconType: "kanban", color: "#8A2BE2" },
      { name: "Jira", iconType: "layout", color: "#8A2BE2" },
      { name: "Sprint Planning", iconType: "calendar-clock", color: "#8A2BE2" },
    ],
  },
  {
    id: "best-practices",
    title: "Best Practices",
    iconType: "book",
    color: "bg-indigo-600 text-white",
    link: "/skills?tab=best-practices",
    techs: [
      { name: "Clean Code", iconType: "code", color: "#5A67D8" },
      { name: "TDD", iconType: "test-tube", color: "#5A67D8" },
      { name: "DRY", iconType: "repeat", color: "#5A67D8" },
      { name: "SOLID", iconType: "boxes", color: "#5A67D8" },
      { name: "Code Reviews", iconType: "git-merge", color: "#5A67D8" },
    ],
  },
  {
    id: "ci-cd",
    title: "CI/CD",
    iconType: "git-branch",
    color: "bg-orange-600 text-white",
    link: "/skills?tab=ci-cd",
    techs: [
      { name: "Git Workflow", iconType: "git", color: "#F97316" },
      { name: "Jenkins", iconType: "server", color: "#F97316" },
      { name: "Docker", iconType: "docker", color: "#F97316" },
      { name: "Automated Testing", iconType: "test-tube", color: "#F97316" },
      { name: "GitOps", iconType: "git-branch", color: "#F97316", learning: true },
    ],
  },
];

// Tools Categories
const TOOLS_DATA = [
  {
    id: "development-tools",
    title: "Development Tools",
    iconType: "code",
    color: "bg-sky-600 text-white",
    link: "/skills?tab=development-tools",
    techs: [
      { name: "VS Code", iconType: "code", color: "#007ACC" },
      { name: "Cursor", iconType: "cursor-text", color: "#00BFFF" },
      { name: "IntelliJ", iconType: "code", color: "#000000" },
      { name: "GitHub", iconType: "github", color: "#181717" },
      { name: "GitHub Enterprise", iconType: "github", color: "#181717" },
    ],
  },
  {
    id: "productivity",
    title: "Productivity",
    iconType: "check-square",
    color: "bg-emerald-600 text-white",
    link: "/skills?tab=productivity",
    techs: [
      { name: "Notion", iconType: "file-text", color: "#000000" },
      { name: "Obsidian", iconType: "file-text", color: "#483699" },
      { name: "Postman", iconType: "send", color: "#FF6C37" },
      { name: "Power BI", iconType: "bar-chart", color: "#F2C811" },
      { name: "MS Office Suite", iconType: "file", color: "#0078D4" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    iconType: "server",
    color: "bg-rose-600 text-white",
    link: "/skills?tab=devops",
    techs: [
      { name: "Docker", iconType: "docker", color: "#2496ED" },
      { name: "Jenkins", iconType: "server", color: "#D24939" },
      { name: "Maven", iconType: "package", color: "#C71A36" },
      { name: "Nginx", iconType: "server", color: "#009639" },
      { name: "AWS", iconType: "cloud", color: "#FF9900" },
    ],
  },
];

// Certification Categories
export const CERTIFICATIONS = [
  {
    id: "blockchain-certifications",
    title: "Blockchain",
    iconType: "award",
    color: "bg-teal-600 text-white",
    techs: [
      {
        name: "Développer une application décentralisée avec les technologies blockchain",
        school: "Alyra, l'école blockchain & IA",
        schoolUrl: "https://www.alyra.fr",
        link: "https://certificate.alyra.fr/check/3C0A846D0843379C7305D6C31EA640F346608AA773FAC5B1E4F1D70E1AF37A2DM05jamJnYXFRdTBFT09pamQvZ0lBeUU0RTFBSWovRmtaS25MMDdNTW1WZDZOM1E1",
        img: "/images/certifications/alyra.png",
        learning: false,
        complete: 2025,
      },
    ],
  },

  // {
  //   id: "web-certifications",
  //   title: "Web Development",
  //   iconType: "award",
  //   color: "bg-teal-600 text-white",
  //   link: "/skills?tab=web-certifications",
  //   techs: [
  //     { name: "AWS Certified Developer", iconType: "cloud", color: "#FF9900" },
  //     { name: "React Certification", iconType: "react", color: "#61DAFB" },
  //     { name: "Next.js Certification", iconType: "nextjs", color: "#000000" },
  //     { name: "JavaScript Expert", iconType: "javascript", color: "#F7DF1E" },
  //   ],
  // },
  // {
  //   id: "backend-certifications",
  //   title: "Backend & Cloud",
  //   iconType: "award",
  //   color: "bg-pink-600 text-white",
  //   link: "/skills?tab=backend-certifications",
  //   techs: [
  //     { name: "Azure Fundamentals", iconType: "cloud", color: "#0078D4" },
  //     { name: "Google Cloud Associate", iconType: "cloud", color: "#4285F4" },
  //     { name: "Java Specialist", iconType: "java", color: "#007396" },
  //     { name: "Spring Framework Expert", iconType: "spring", color: "#6DB33F" },
  //   ],
  // },
  // {
  //   id: "other-certifications",
  //   title: "Other Certifications",
  //   iconType: "award",
  //   color: "bg-fuchsia-600 text-white",
  //   link: "/skills?tab=other-certifications",
  //   techs: [
  //     { name: "Scrum Master", iconType: "clipboard-check", color: "#8A2BE2" },
  //     { name: "CompTIA Security+", iconType: "shield", color: "#FF0000" },
  //     { name: "UX/UI Design", iconType: "palette", color: "#FF6B6B" },
  //     { name: "Data Science", iconType: "bar-chart", color: "#4B0082", learning: true },
  //   ],
  // },
];

// Map the raw data to include React components using your existing mapper
export const SOFT_SKILLS_CATEGORIES: TechCategory[] = SOFT_SKILLS_DATA.map((category) =>
  mapTechData(category)
);

export const TOOLS_CATEGORIES: TechCategory[] = TOOLS_DATA.map((category) => mapTechData(category));
