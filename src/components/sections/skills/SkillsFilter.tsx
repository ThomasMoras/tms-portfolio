import React from "react";
import { Input } from "@/components/ui/input";
import { useSkillsContext } from "@/contexts/SkillsContext";

export const SkillsFilter: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    showFilters,
    locale: { currentLocale },
  } = useSkillsContext();

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
