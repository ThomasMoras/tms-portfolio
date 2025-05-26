import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Skill } from "@/types/skillsTypes";
import { useSkillsContext } from "@/contexts/SkillsContext";
import { safeCss } from "@/lib/uiUtils";
import Icon from "@/components/icons/Icon";

interface SkillItemProps {
  skill: Skill;
  categoryColor?: string;
  progressColor?: string;
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill, progressColor }) => {
  const {
    hoveredSkill,
    setHoveredSkill,
    animate,
    locale: { getLocalizedText, currentLocale },
  } = useSkillsContext();

  const skillName = skill.name;
  const isHovered = hoveredSkill === skillName;

  return (
    <div
      className={cn(
        "space-y-2 p-3 rounded-lg transition-all duration-200",
        isHovered ? "bg-slate-100 dark:bg-slate-800/70" : ""
      )}
      onMouseEnter={() => setHoveredSkill(skillName)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <Icon name={skill.iconType || "code"} size={20} color={skill.color} />
          </div>
          <span className="font-medium">{skillName}</span>
          {skill.learning && (
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
              {currentLocale === "fr" ? "En apprentissage" : "Learning"}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium w-10 text-right">{skill.percentage || 0}%</span>
        </div>
      </div>

      <div className="relative w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
        <div
          className={cn(
            "h-3 rounded-full transition-all duration-1000 ease-out",
            skill.learning ? "bg-amber-500" : safeCss(progressColor),
            animate ? "animate-skill-width" : ""
          )}
          style={{ width: `${skill.percentage || 0}%` }}
        />
      </div>

      {skill.description && (
        <p className="text-sm text-muted-foreground mt-1">{getLocalizedText(skill.description)}</p>
      )}
    </div>
  );
};
