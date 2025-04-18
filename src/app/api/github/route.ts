// app/api/github/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "your-username";
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  try {
    const headers: HeadersInit = {
      "Accept": "application/vnd.github.v3+json",
    };

    if (GITHUB_TOKEN) {
      headers["Authorization"] = `token ${GITHUB_TOKEN}`;
    }

    // Fetch repos
    const reposResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      { headers }
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }

    const repos = await reposResponse.json();

    // Calculate total stars
    const totalStars = repos.reduce(
      (sum: any, repo: { stargazers_count: any }) => sum + repo.stargazers_count,
      0
    );

    // Get recent commits
    const recentCommits = [];
    for (let i = 0; i < Math.min(3, repos.length); i++) {
      try {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${repos[i].name}/commits?per_page=1`,
          { headers }
        );

        if (commitsResponse.ok) {
          const commits = await commitsResponse.json();
          if (commits.length > 0) {
            recentCommits.push({
              repo: repos[i].name,
              message: commits[0].commit.message,
              date: formatDate(new Date(commits[0].commit.author.date)),
              url: commits[0].html_url,
            });
          }
        }
      } catch (e) {
        console.error(`Error fetching commits for ${repos[i].name}:`, e);
      }
    }

    return NextResponse.json({
      totalStars,
      totalContributions: 847, // Mock value
      recentCommits,
      loading: false,
    });
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}

function formatDate(date: Date): string {
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}
