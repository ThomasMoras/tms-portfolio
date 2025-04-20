import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useGitHub, UseGitHubOptions } from "@/hooks/useGitHub";
import { GitCommit, Code, Clock, ArrowRight, Filter, Search } from "lucide-react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NextLink from "next/link";
import { GITHUB_USERNAME } from "@/constants/githubConstants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { PaginationWrapper } from "@/components/ui/pagination-wrapper";
import { LANGUAGE_COLORS } from "@/types/githubTypes";

export interface ContributionsProps {
  perPage?: number;
  initialPage?: number;
  defaultLanguage?: string;
  defaultRepoFilter?: string;
  defaultBranch?: string;
}

const Contributions = ({
  perPage = 5,
  initialPage = 1,
  defaultLanguage,
  defaultRepoFilter = "",
  defaultBranch = "main",
}: ContributionsProps) => {
  const t = useTranslations("Contributions");
  const [page, setPage] = useState(initialPage);
  const [language, setLanguage] = useState<string | undefined>(defaultLanguage);
  const [repoFilter, setRepoFilter] = useState(defaultRepoFilter);
  const [branch, setBranch] = useState(defaultBranch);
  const [repoSearchInput, setRepoSearchInput] = useState(defaultRepoFilter);
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);

  const githubOptions: UseGitHubOptions = {
    page,
    perPage,
    language,
    repo: repoFilter,
    branch,
  };

  const githubActivity = useGitHub(githubOptions);

  const handleLanguageChange = (value: string) => {
    setLanguage(value === "all" ? undefined : value);
    setPage(1); // Réinitialiser la page lors du changement de filtre
  };

  const handleBranchChange = (value: string) => {
    setBranch(value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleRepoSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRepoSearchInput(value);

    // Utiliser un délai pour éviter trop de requêtes lors de la frappe
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const timeout = setTimeout(() => {
      setRepoFilter(value);
      setPage(1); // Réinitialiser la page lors du changement de filtre
    }, 500);

    setSearchTimeout(timeout);
  };

  return (
    <div>
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t("title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            {t("subtitle")}
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          <div className="w-48">
            <Select value={language || "all"} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <SelectValue placeholder={t("filterByLanguage")} />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("allLanguages")}</SelectItem>
                {githubActivity.allLanguages?.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block w-2 h-2 rounded-full"
                        style={{ backgroundColor: LANGUAGE_COLORS[lang] || "#808080" }}
                      />
                      {lang}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-48">
            <Select value={branch} onValueChange={handleBranchChange}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <FaCodeBranch className="w-4 h-4" />
                  <SelectValue placeholder={t("selectBranch")} />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">main</SelectItem>
                <SelectItem value="master">master</SelectItem>
                <SelectItem value="dev">dev</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-64">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("searchRepositories")}
                value={repoSearchInput}
                onChange={handleRepoSearchChange}
                className="pl-8"
              />
            </div>
          </div>
        </div>

        {githubActivity.error && (
          <div className="text-red-500 text-center mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            {t("errorMessage")}: {githubActivity.error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Stats Card */}
          <Card className="border border-border hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg md:text-xl font-semibold">{t("statsTitle")}</h3>
                <FaGithub className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
              </div>

              {githubActivity.loading ? (
                <div className="flex justify-center py-6 md:py-8">
                  <div className="animate-spin rounded-full h-6 w-6 md:h-8 md:w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-amber-400" />
                    <span className="font-medium">{githubActivity.totalStars}</span>
                    <span className="text-muted-foreground text-xs md:text-sm">{t("stars")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitCommit className="text-green-500" size={18} />
                    <span className="font-medium">{githubActivity.totalContributions}</span>
                    <span className="text-muted-foreground text-xs md:text-sm">
                      {t("contributions")}
                    </span>
                  </div>
                  {githubActivity.repoCount && (
                    <div className="flex items-center gap-2">
                      <FaCodeBranch className="text-blue-500" size={16} />
                      <span className="font-medium">{githubActivity.repoCount}</span>
                      <span className="text-muted-foreground text-xs md:text-sm">
                        {t("repositories")}
                      </span>
                    </div>
                  )}
                  <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                    <NextLink href={`https://github.com/${GITHUB_USERNAME}`} target="_blank">
                      {t("viewProfile")}
                    </NextLink>
                  </Button>
                </div>
              )}

              {/* Language Stats (if available) */}
              {githubActivity.topLanguages && githubActivity.topLanguages.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="text-sm font-medium mb-2">{t("topLanguages")}</h4>
                  <div className="space-y-2">
                    {githubActivity.topLanguages.map((lang) => (
                      <div key={lang.name} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span
                            className="inline-block w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: lang.color || "#808080" }}
                          />
                          <span className="text-xs">{lang.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{lang.count} repos</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Commits */}
          <Card className="border border-border hover:shadow-md transition-shadow md:col-span-2">
            <CardContent className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg md:text-xl font-semibold">{t("recentCommits")}</h3>
                <Code className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
              </div>

              {githubActivity.loading ? (
                <div className="flex justify-center py-6 md:py-8">
                  <div className="animate-spin rounded-full h-6 w-6 md:h-8 md:w-8 border-b-2 border-primary"></div>
                </div>
              ) : githubActivity.recentCommits && githubActivity.recentCommits.length > 0 ? (
                <div className="space-y-3 md:space-y-4">
                  {githubActivity.recentCommits.map((commit, index) => (
                    <a
                      key={index}
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 md:p-3 rounded-md border border-border hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <p className="font-medium text-sm md:text-base">{commit.message}</p>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <p className="text-xs md:text-sm text-muted-foreground">
                              {commit.repo}
                            </p>
                            {commit.language && (
                              <span
                                className="text-xs px-1.5 py-0.5 rounded-full flex items-center gap-1"
                                style={{
                                  backgroundColor: `${getLanguageColor(commit.language)}20`, // Ajout d'opacité en hexa (12.5%)
                                  color: getLanguageColor(commit.language),
                                  borderColor: getLanguageColor(commit.language),
                                }}
                              >
                                <span
                                  className="w-2 h-2 rounded-full inline-block"
                                  style={{ backgroundColor: getLanguageColor(commit.language) }}
                                />
                                {commit.language}
                              </span>
                            )}
                          </div>
                          {commit.description && (
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                              {commit.description}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                          <Clock size={12} className="mr-1 flex-shrink-0" />
                          {commit.date}
                        </div>
                      </div>
                    </a>
                  ))}

                  {/* Pagination avec le composant shadcn */}
                  {githubActivity.pagination && githubActivity.pagination.totalPages > 1 && (
                    <div className="flex justify-center mt-6">
                      <PaginationWrapper
                        currentPage={page}
                        totalPages={githubActivity.pagination.totalPages}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  )}

                  <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                    <NextLink
                      href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                      target="_blank"
                    >
                      {t("viewAllProjects")}
                      <ArrowRight size={14} className="md:h-4 md:w-4" />
                    </NextLink>
                  </Button>
                </div>
              ) : (
                <div className="py-8 text-center text-muted-foreground">{t("noCommits")}</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Fonction utilitaire pour obtenir la couleur d'un langage
function getLanguageColor(language: string): string {
  return LANGUAGE_COLORS[language] || "#808080"; // Gris par défaut
}

export default Contributions;
