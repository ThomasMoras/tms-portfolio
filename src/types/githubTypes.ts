export interface GitHubActivity {
  totalStars: number;
  totalContributions: number;
  recentCommits: {
    repo: string;
    message: string;
    date: string;
    url: string;
  }[];
  loading: boolean;
}
