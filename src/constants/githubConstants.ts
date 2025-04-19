export const GITHUB_API_BASE_URL = "https://api.github.com";
export const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "";
export const GITHUB_HEADERS = {
  Accept: "application/vnd.github.v3+json",
};

// Optional timeout for API calls
export const API_TIMEOUT = 10000; // 10 seconds

// Define endpoints
export const ENDPOINTS = {
  USER: `/users/${GITHUB_USERNAME}`,
  REPOS: `/users/${GITHUB_USERNAME}/repos`,
  STARRED: `/users/${GITHUB_USERNAME}/starred`,
  COMMITS: `/repos/${GITHUB_USERNAME}/{repo}/commits`,
};
