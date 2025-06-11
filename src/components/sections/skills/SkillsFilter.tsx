import React from "react";
import { Input } from "@/components/ui/input";
import { useSkillsStore } from "@/stores/skillsStore";

export const SkillsFilter: React.FC = () => {
  const { searchTerm, setSearchTerm, showFilters, locale } = useSkillsStore();

  if (!locale) return null;

  const currentLocale = locale.currentLocale;
  if (!showFilters) return null;

  return (
    <div className="mb-8">
      <Input
        type="text"
        placeholder={currentLocale === "fr" ? "Rechercher des compétences..." : "Search skills..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
    </div>
  );
};
