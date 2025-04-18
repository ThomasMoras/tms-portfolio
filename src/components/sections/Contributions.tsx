import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useGitHub } from "@/hooks/useGitHub";
import { GitCommit, Link, Code, Clock, ArrowRight } from "lucide-react";
import { FaGithub, FaStar, FaArrowDown } from "react-icons/fa";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const Contributions = () => {
  const t = useTranslations("Contributions");
  const githubActivity = useGitHub();

  useEffect(() => {
    console.log("Github actibity : ", githubActivity);
  }, []);
  // const [activity, setActivity] = useState({
  //   totalStars: 0,
  //   totalContributions: 0,
  //   recentCommits: [],
  //   loading: true,
  // });
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/github");
  //       if (!response.ok) {
  //         throw new Error(t("fetchError"));
  //       }
  //       const data = await response.json();

  //       // Apply translations to date strings if needed
  //       const localizedCommits = data.recentCommits.map((commit: { date: any }) => ({
  //         ...commit,
  //         date: t("timeAgo", { time: commit.date }),
  //       }));

  //       setActivity({
  //         ...data,
  //         recentCommits: localizedCommits,
  //         loading: false,
  //       });
  //     } catch (err) {
  //       setError(err);
  //       setActivity((prev) => ({ ...prev, loading: false }));
  //     }
  //   };

  //   fetchData();
  // }, [t]);

  return (
    <div>
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Mon Activité GitHub
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Un aperçu de ma contribution au code source et de mes projets open-source.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Stats Card */}
          <Card className="border border-border hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg md:text-xl font-semibold">Statistiques</h3>
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
                    <span className="text-muted-foreground text-xs md:text-sm">Étoiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitCommit className="text-green-500" size={18} />
                    <span className="font-medium">{githubActivity.totalContributions}</span>
                    <span className="text-muted-foreground text-xs md:text-sm">
                      Contributions en 2024
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                    <Link href="https://github.com/your-username" target="_blank">
                      Voir mon profil GitHub
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Commits */}
          <Card className="border border-border hover:shadow-md transition-shadow md:col-span-2">
            <CardContent className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg md:text-xl font-semibold">Commits Récents</h3>
                <Code className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
              </div>

              {githubActivity.loading ? (
                <div className="flex justify-center py-6 md:py-8">
                  <div className="animate-spin rounded-full h-6 w-6 md:h-8 md:w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  {githubActivity.recentCommits.map((commit, index) => (
                    <Link
                      key={index}
                      href={commit.url}
                      target="_blank"
                      className="block p-2 md:p-3 rounded-md border border-border hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <p className="font-medium text-sm md:text-base">{commit.message}</p>
                          <p className="text-xs md:text-sm text-muted-foreground mt-1">
                            {commit.repo}
                          </p>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                          <Clock size={12} className="mr-1 flex-shrink-0" />
                          {commit.date}
                        </div>
                      </div>
                    </Link>
                  ))}

                  <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                    <Link href="https://github.com/your-username?tab=repositories" target="_blank">
                      Voir tous mes projets
                      <ArrowRight size={14} className="md:size-16" />
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 md:mt-10 text-center">
          <Button
            onClick={() =>
              document.getElementById("skills-section")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm md:text-base"
          >
            Découvrir mes expertises <FaArrowDown className="ml-2 w-3 h-3 md:w-4 md:h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
