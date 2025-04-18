// hooks/useGitHub.ts
import { useState, useEffect } from "react";
import { GitHubActivity } from "@/types/githubTypes";

export function useGitHub() {
  const [activity, setActivity] = useState<GitHubActivity>({
    totalStars: 0,
    totalContributions: 0,
    recentCommits: [],
    repoCount: 0,
    topLanguages: [],
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching GitHub data...");
        const response = await fetch("/api/github");

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `API error: ${response.status}`);
        }

        const data = await response.json();
        console.log("GitHub data received:", data);

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

    fetchData();
  }, []);

  return activity;
}
