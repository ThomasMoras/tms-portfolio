import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSkillsStore } from "@/stores/skillsStore";
import { SkillCategoryCard } from "./SkillCategoryCard";

export const SkillsTabs: React.FC = () => {
  const {
    activeTab,
    setTab: handleTabChange,
    cardLayoutClasses,
    tabSize,
    searchTerm,
    categories,
    locale,
  } = useSkillsStore();

  if (!locale) return null;

  const getLocalizedText = locale.getLocalizedText;
  const currentLocale = locale.currentLocale;

  return (
    <Tabs value={activeTab} className="space-y-8" onValueChange={handleTabChange}>
      <TabsList className="grid grid-cols-4 w-full">
        <TabsTrigger value="all">{currentLocale === "fr" ? "Tous" : "All"}</TabsTrigger>
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {getLocalizedText(category.title)}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* All categories tab */}
      <TabsContent value="all">
        <div className={cardLayoutClasses[tabSize]}>
          {categories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} searchTerm={searchTerm} />
          ))}
        </div>
      </TabsContent>

      {/* Individual category tabs */}
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <SkillCategoryCard category={category} searchTerm={searchTerm} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
