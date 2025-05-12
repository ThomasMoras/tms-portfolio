export interface GitHubCommit {
  repo: string;
  message: string;
  date: string;
  url: string;
  language?: string | null;
  description?: string | null;
}

export interface LanguageStat {
  name: string;
  count: number;
  color?: string; // Ajout du code couleur
}

export interface GitHubActivity {
  totalStars: number;
  totalContributions: number;
  recentCommits: GitHubCommit[];
  repoCount?: number;
  topLanguages?: LanguageStat[];
  allLanguages?: string[]; // Liste de tous les langages pour le filtre
  pagination?: {
    currentPage: number;
    totalPages: number;
    perPage: number;
    totalItems: number;
    hasMore: boolean;
  };
  loading: boolean;
  error?: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  created_at: string;
  updated_at: string;
  homepage: string | null;
  size: number;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

// Mapping des couleurs par langage (basé sur les couleurs utilisées par GitHub)
export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Rust: "#DEA584",
  Dart: "#00B4AB",
  Solidity: "#AA6746",
  "C++": "#f34b7d",
  C: "#555555",
  Scala: "#c22d40",
  Shell: "#89e051",
  "Objective-C": "#438eff",
  R: "#198CE7",
  Elixir: "#6e4a7e",
  Clojure: "#db5855",
  Haskell: "#5e5086",
  Vue: "#41b883",
  // Ajouter d'autres langages au besoin
};

export type LanguageKey = keyof typeof LANGUAGE_COLORS;
