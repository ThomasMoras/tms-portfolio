import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillItem } from "./SkillItem";
import { useSkillsStore } from "@/stores/skillsStore";
import Icon from "@/components/icons/Icon";
import { Category } from "@/types/skillsTypes";
import { safeCss } from "@/lib/uiUtils";

interface SkillCategoryCardProps {
  category: Category;
  searchTerm: string;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, searchTerm }) => {
  const {
    filterSkills,
    animate,
    skills,
    locale,
  } = useSkillsStore();

  const { getLocalizedText, currentLocale } = locale;

  // Get skills that belong to this category
  const categorySkills = skills.filter((skill) => skill.categoryId === category.id);

  // Apply filters to the category skills
  const filteredSkills = filterSkills(categorySkills);

  // Hide empty categories when filtering
  if (filteredSkills.length === 0 && searchTerm) {
    return null;
  }

  // Get the localized category title
  const categoryTitle = getLocalizedText(category.title);

  return (
    <Card className={`overflow-hidden ${animate ? "transition-all duration-300 ease-in-out" : ""}`}>
      <CardContent className="p-0">
        {/* Category Header */}
        <div className={`flex items-center gap-3 p-4 border-b ${safeCss(category.bgColor)}`}>
          <div className="bg-background p-2 rounded-full">
            <Icon
              name={category.iconType || "code"}
              className={safeCss(category.color)}
              size={24}
            />
          </div>
          <h3 className="text-xl font-semibold">{categoryTitle}</h3>
          <Badge variant="outline" className="ml-auto">
            {filteredSkills.length} {currentLocale === "fr" ? "compétence" : "skill"}
            {filteredSkills.length > 1 ? "s" : ""}
          </Badge>
        </div>

        {/* Skills List */}
        <div className="p-6 space-y-6">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <SkillItem
                key={skill.id}
                skill={skill}
                categoryColor={category.color}
                progressColor={category.progressColor}
              />
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              {currentLocale === "fr"
                ? "Aucune compétence trouvée pour vos critères de recherche."
                : "No skills found for your search criteria."}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
