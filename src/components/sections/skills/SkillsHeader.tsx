import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SKILL_LEVELS } from "@/constants/skillsConstants";
import { useSkillsStore } from "@/stores/skillsStore";
import { safeCss } from "@/lib/uiUtils";

export const SkillsHeader: React.FC = () => {
  const { showLevels, selectedLevel, setSelectedLevel, clearLevelFilter, locale } =
    useSkillsStore();

  if (!locale) return null;

  const t = locale.t;
  const getLocalizedText = locale.getLocalizedText;
  const currentLocale = locale.currentLocale;

  if (!showLevels) return null;

  // Render a level badge with appropriate styling
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
        className={`${safeCss(levelColors[level])} ml-2 cursor-pointer`}
        onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
        variant={selectedLevel === level ? "default" : "outline"}
      >
        {getLocalizedText(levelInfo.label)}
      </Badge>
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">{t("description")}</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-end">
        {Object.keys(SKILL_LEVELS).map((level) => renderLevelBadge(level))}
        {selectedLevel && (
          <Button variant="ghost" size="sm" onClick={clearLevelFilter} className="ml-2">
            {currentLocale === "fr" ? "Effacer le filtre" : "Clear filter"}
          </Button>
        )}
      </div>
    </div>
  );
};
