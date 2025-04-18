export interface GitHubCommit {
  repo: string;
  message: string;
  date: string;
  url: string;
}

export interface GitHubActivity {
  totalStars: number;
  totalContributions: number;
  recentCommits: GitHubCommit[];
  loading: boolean;
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
