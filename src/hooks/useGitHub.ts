import { useState, useEffect } from "react";
import { GitHubActivity } from "@/types/githubTypes";

export function useGitHub() {
  const [activity, setActivity] = useState<GitHubActivity>({
    totalStars: 0,
    totalContributions: 0,
    recentCommits: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("call api !");
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        const data = await response.json();
        setActivity(data);
      } catch (error) {
        console.error("Error:", error);
        setActivity((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, []);

  return activity;
}
