"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { SKILL_CATEGORIES, SKILL_LEVELS } from "@/constants/skillsConstants";
import { cn } from "@/lib/utils";
import { Search, ArrowUpDown, LayoutGrid, Columns3, List } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSearchParams, usePathname } from "next/navigation";
import { SkillCategory, SkillData } from "@/types/skillsTypes";

// Types pour les props du composant
export type TabSize = "small" | "medium" | "large";

export interface SkillsProps {
  tabSize?: TabSize;
  defaultTab?: string;
  showLevels?: boolean;
  showFilters?: boolean;
  animate?: boolean;
}

const Skills: React.FC<SkillsProps> = ({
  tabSize: initialTabSize = "medium",
  defaultTab = "all",
  showLevels = true,
  showFilters = true,
  animate = true,
}) => {
  const t = useTranslations("Skills");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get active tab from URL, sessionStorage, or default
  const [activeTab, setActiveTab] = useState<string>(() => {
    // First check URL parameters
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl) return tabFromUrl;

    // Then check sessionStorage (only on client side)
    if (typeof window !== "undefined") {
      const storedTab = sessionStorage.getItem("selectedSkillTab");
      if (storedTab) {
        sessionStorage.removeItem("selectedSkillTab"); // Clear after use
        return storedTab;
      }
    }

    // Fall back to default
    return defaultTab;
  });

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<"name" | "level" | "percentage">("percentage");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tabSize, setTabSize] = useState<TabSize>(initialTabSize);

  // Listen for custom events to change the tab
  useEffect(() => {
    const handleTabChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.tabId) {
        setActiveTab(customEvent.detail.tabId);

        // Update URL to reflect the new tab
        const params = new URLSearchParams(searchParams.toString());
        params.set("tab", customEvent.detail.tabId);
        window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
      }
    };

    window.addEventListener("skill-tab-change", handleTabChange);
    return () => {
      window.removeEventListener("skill-tab-change", handleTabChange);
    };
  }, [pathname, searchParams]);

  // Fonction pour mettre à jour l'URL sans recharger la page
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  // Gestionnaire de changement d'onglet - Modification pour éviter le rechargement
  const handleTabChange = (value: string): void => {
    setActiveTab(value);
    // Utiliser replaceState pour mettre à jour l'URL sans rechargement
    window.history.replaceState(null, "", `${pathname}?${createQueryString("tab", value)}`);
  };

  // Classes pour la disposition des cartes selon la taille
  const cardLayoutClasses: Record<TabSize, string> = {
    small: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    medium: "grid grid-cols-1 md:grid-cols-2 gap-4",
    large: "grid grid-cols-1 gap-4",
  };

  // Icônes pour les options d'affichage
  const displayIcons: Record<TabSize, React.ReactNode> = {
    small: <Columns3 className="h-4 w-4" />,
    medium: <LayoutGrid className="h-4 w-4" />,
    large: <List className="h-4 w-4" />,
  };

  // Libellés pour les options d'affichage
  const displayLabels: Record<TabSize, string> = {
    small: "Compact (3 colonnes)",
    medium: "Standard (2 colonnes)",
    large: "Détaillé (1 colonne)",
  };

  // Fonction pour rendre sûre l'utilisation des classes CSS
  const safeCss = (cssClass: string | undefined): string => cssClass || "";

  // Fonction pour rendre l'icône en toute sécurité
  const safeIcon = (icon: React.ReactNode): React.ReactNode => icon || null;

  // Filtrer et trier les compétences pour chaque catégorie
  const getFilteredSkills = (skills: SkillData[]): SkillData[] => {
    let filteredSkills = [...skills];

    // Recherche
    if (searchTerm) {
      filteredSkills = filteredSkills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtre par niveau
    if (selectedLevel) {
      filteredSkills = filteredSkills.filter((skill) => skill.level === selectedLevel);
    }

    // Tri
    filteredSkills.sort((a, b) => {
      let comparison = 0;

      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "level") {
        const levelOrder = ["beginner", "intermediate", "advanced", "expert"];
        comparison = levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level);
      } else {
        // percentage
        comparison = a.percentage - b.percentage;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filteredSkills;
  };

  // Gestion de l'affichage des badges de niveau
  const renderLevelBadge = (level: string): React.ReactNode => {
    const levelInfo = SKILL_LEVELS[level as keyof typeof SKILL_LEVELS];

    if (!levelInfo) return null;

    const levelColors: Record<string, string> = {
      beginner: "bg-slate-100 text-slate-800 hover:bg-slate-200",
      intermediate: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      advanced: "bg-green-100 text-green-800 hover:bg-green-200",
      expert: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    };

    return (
      <Badge
        key={level}
        className={cn(levelColors[level], "ml-2 cursor-pointer")}
        onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
        variant={selectedLevel === level ? "default" : "outline"}
      >
        {levelInfo.label}
      </Badge>
    );
  };

  // Fonction pour rendre une carte de compétence
  const renderSkillCard = (category: SkillCategory, filteredSkills: SkillData[]) => {
    if (filteredSkills.length === 0 && searchTerm) {
      return null; // Ne pas afficher la catégorie si aucune compétence ne correspond
    }

    return (
      <Card
        key={category.id}
        className={`overflow-hidden ${animate ? "transition-all duration-300 ease-in-out" : ""}`}
      >
        <CardContent className="p-0">
          <div className={`flex items-center gap-3 p-4 border-b ${safeCss(category.bgColor)}`}>
            <div className="bg-background p-2 rounded-full">
              <span className={safeCss(category.color)}>{safeIcon(category.icon)}</span>
            </div>
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <Badge variant="outline" className="ml-auto">
              {filteredSkills.length} compétence{filteredSkills.length > 1 ? "s" : ""}
            </Badge>
          </div>

          <div className="p-6 space-y-6">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={cn(
                    "space-y-2 p-3 rounded-lg transition-all duration-200",
                    hoveredSkill === skill.name ? "bg-slate-100 dark:bg-slate-800/70" : ""
                  )}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          safeCss(category.color),
                          "rounded-full flex items-center justify-center"
                        )}
                      >
                        {safeIcon(skill.icon)}
                      </span>
                      <span className="font-medium">{skill.name}</span>
                      {skill.learning && (
                        <Badge
                          variant="outline"
                          className="bg-amber-100 text-amber-800 border-amber-200"
                        >
                          En apprentissage
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium w-10 text-right">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>

                  <div className="relative w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div
                      className={cn(
                        "h-3 rounded-full transition-all duration-1000 ease-out",
                        skill.learning ? "bg-amber-500" : safeCss(category.progressColor),
                        animate ? "animate-skill-width" : ""
                      )}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>

                  {skill.description && (
                    <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                Aucune compétence trouvée pour vos critères de recherche.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="skills-section">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">{t("description")}</p>
          </div>

          {showLevels && (
            <div className="flex flex-wrap gap-2 justify-end">
              {Object.keys(SKILL_LEVELS).map((level) => renderLevelBadge(level))}
              {selectedLevel && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedLevel(null)}
                  className="ml-2"
                >
                  Effacer le filtre
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Barre de filtres et recherche */}
        {showFilters && (
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher une compétence..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Menu de sélection d'affichage */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  {displayIcons[tabSize]}
                  Affichage
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setTabSize("small")}
                  className="flex items-center gap-2"
                >
                  <Columns3 className="h-4 w-4 mr-2" />
                  {displayLabels.small}
                  {tabSize === "small" && <Badge className="ml-auto">Actif</Badge>}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTabSize("medium")}
                  className="flex items-center gap-2"
                >
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  {displayLabels.medium}
                  {tabSize === "medium" && <Badge className="ml-auto">Actif</Badge>}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTabSize("large")}
                  className="flex items-center gap-2"
                >
                  <List className="h-4 w-4 mr-2" />
                  {displayLabels.large}
                  {tabSize === "large" && <Badge className="ml-auto">Actif</Badge>}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto flex gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  Trier par {sortOrder === "asc" ? "↑" : "↓"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("name");
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  {sortBy === "name" && (sortOrder === "asc" ? "↑ " : "↓ ")}
                  Nom
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("level");
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  {sortBy === "level" && (sortOrder === "asc" ? "↑ " : "↓ ")}
                  Niveau
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("percentage");
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  {sortBy === "percentage" && (sortOrder === "asc" ? "↑ " : "↓ ")}
                  Maîtrise
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        <Tabs value={activeTab} className="space-y-8" onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all">Tous</TabsTrigger>
            {SKILL_CATEGORIES.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className={cardLayoutClasses[tabSize]}>
              {SKILL_CATEGORIES.map((category) => {
                const filteredSkills = getFilteredSkills(category.skills);
                return renderSkillCard(category, filteredSkills);
              })}
            </div>
          </TabsContent>

          {/* Contenu pour chaque catégorie individuelle */}
          {SKILL_CATEGORIES.map((category) => {
            const filteredSkills = getFilteredSkills(category.skills);

            return (
              <TabsContent key={category.id} value={category.id}>
                {renderSkillCard(category, filteredSkills)}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
