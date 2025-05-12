import { NextResponse } from "next/server";

// Cache control: This helps prevent hitting GitHub API rate limits
export const revalidate = 3600; // Revalidate every hour

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "your-username";
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  // Paramètres de pagination et de filtrage
  const page = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("perPage") || "10");
  const languageFilter = searchParams.get("language"); // Filtre par langage
  const repoFilter = searchParams.get("repo"); // Filtre par nom de repository
  const branchName = searchParams.get("branch") || "main"; // Branche pour les commits

  try {
    const headers: HeadersInit = {
      "Accept": "application/vnd.github.v3+json",
    };

    if (GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
    }

    // Fetch user data for contributions count via the GraphQL API
    const contributionsCount = await fetchContributionsCount(GITHUB_USERNAME, GITHUB_TOKEN);

    // Fetch repos with better typing and pagination
    const reposResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`,
      {
        headers,
        next: { revalidate },
      }
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status} ${await reposResponse.text()}`);
    }

    const repos = (await reposResponse.json()) as Array<{
      name: string;
      stargazers_count: number;
      fork: boolean;
      html_url: string;
      language: string | null;
      description: string | null;
      created_at: string;
      updated_at: string;
      topics: string[];
    }>;

    // Filter out forks if you want only original repos
    const ownRepos = repos.filter((repo) => !repo.fork);

    // Appliquer les filtres (langage et/ou nom de repository)
    const filteredRepos = ownRepos.filter((repo) => {
      // Filtre par langage
      const matchesLanguage =
        !languageFilter ||
        (repo.language && repo.language.toLowerCase() === languageFilter.toLowerCase());

      // Filtre par nom de repository (recherche partielle)
      const matchesRepoName =
        !repoFilter || repo.name.toLowerCase().includes(repoFilter.toLowerCase());

      // Le repository doit satisfaire tous les filtres activés
      return matchesLanguage && matchesRepoName;
    });

    // Calculate total stars
    const totalStars = filteredRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    // Paginate repositories
    const startIndex = (page - 1) * perPage;
    const totalPages = Math.ceil(filteredRepos.length / perPage);

    // Find the most active repositories (most recently updated)
    const activeRepos = [...filteredRepos]
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(startIndex, startIndex + perPage);

    // Get recent commits in parallel
    const commitPromises = activeRepos.map(async (repo) => {
      try {
        // Spécifiez la branche pour les commits
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1&sha=${branchName}`,
          { headers, next: { revalidate } }
        );

        if (!commitsResponse.ok) {
          return null;
        }

        const commits = (await commitsResponse.json()) as Array<{
          commit: {
            message: string;
            author: {
              date: string;
            };
          };
          html_url: string;
        }>;

        if (commits.length > 0) {
          return {
            repo: repo.name,
            message: commits[0].commit.message,
            date: formatDate(new Date(commits[0].commit.author.date)),
            url: commits[0].html_url,
            language: repo.language,
            description: repo.description,
          };
        }
        return null;
      } catch (e) {
        console.error(`Error fetching commits for ${repo.name}:`, e);
        return null;
      }
    });

    // Wait for all commit fetches to complete
    const commitsResults = await Promise.all(commitPromises);
    const recentCommits = commitsResults.filter((commit) => commit !== null);

    // Get primary language distribution
    const languages = filteredRepos
      .filter((repo) => repo.language)
      .reduce(
        (acc, repo) => {
          const lang = repo.language as string;
          acc[lang] = (acc[lang] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>
      );

    const languageStats = Object.entries(languages)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    // Get all unique languages for filtering options
    const allLanguages = Array.from(
      new Set(ownRepos.filter((repo) => repo.language).map((repo) => repo.language as string))
    ).sort();

    // Return complete GitHub activity data with pagination info
    return NextResponse.json({
      totalStars,
      totalContributions: contributionsCount,
      recentCommits,
      repoCount: filteredRepos.length,
      topLanguages: languageStats.slice(0, 5),
      allLanguages,
      pagination: {
        currentPage: page,
        totalPages,
        perPage,
        totalItems: filteredRepos.length,
        hasMore: page < totalPages,
      },
      loading: false,
    });
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch GitHub data",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
// Fetch real contributions count using GitHub GraphQL API
async function fetchContributionsCount(username: string, token?: string): Promise<number> {
  if (!token) {
    console.warn("No GitHub token provided. Cannot fetch contributions count.");
    return 0;
  }

  try {
    // GraphQL query to get contribution count
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    return data.data.user.contributionsCollection.contributionCalendar.totalContributions;
  } catch (error) {
    console.error("Error fetching contributions count:", error);
    // Fallback to a reasonable estimate if GraphQL fails
    return 0;
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
