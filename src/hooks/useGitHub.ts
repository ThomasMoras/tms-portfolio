import { useState, useEffect } from "react";
import { GitHubActivity, LANGUAGE_COLORS } from "@/types/githubTypes";

export interface UseGitHubOptions {
  page?: number;
  perPage?: number;
  language?: string;
  repo?: string;
  branch?: string;
}

export function useGitHub(options: UseGitHubOptions = {}) {
  const { page = 1, perPage = 10, language, repo, branch = "main" } = options;

  const [activity, setActivity] = useState<GitHubActivity>({
    totalStars: 0,
    totalContributions: 0,
    recentCommits: [],
    repoCount: 0,
    topLanguages: [],
    allLanguages: [],
    pagination: {
      currentPage: page,
      totalPages: 1,
      perPage,
      totalItems: 0,
      hasMore: false,
    },
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching GitHub data...");
        // Construction de l'URL avec paramètres
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("perPage", perPage.toString());
        if (language) params.append("language", language);
        if (repo) params.append("repo", repo);
        if (branch) params.append("branch", branch);

        const response = await fetch(`/api/github?${params.toString()}`);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `API error: ${response.status}`);
        }

        const data = await response.json();
        console.log("GitHub data received:", data);

        // Ajouter les codes couleur aux langages
        if (data.topLanguages) {
          data.topLanguages = data.topLanguages.map((lang: any) => ({
            ...lang,
            color: LANGUAGE_COLORS[lang.name] || "#808080", // Gris par défaut
          }));
        }

        setActivity({
          ...data,
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setActivity((prev) => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : "Unknown error",
        }));
      }
    };

    setActivity((prev) => ({ ...prev, loading: true }));
    fetchData();
  }, [page, perPage, language, repo, branch]);

  return activity;
}
