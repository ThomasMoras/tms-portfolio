import { useState } from "react";

export type TabSize = "small" | "medium" | "large";

interface UseSkillsDisplayProps {
  initialTabSize: TabSize;
}

export const useSkillsDisplay = ({ initialTabSize }: UseSkillsDisplayProps) => {
  const [tabSize, setTabSize] = useState<TabSize>(initialTabSize);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Classes for the layout based on tab size
  const cardLayoutClasses: Record<TabSize, string> = {
    small: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    medium: "grid grid-cols-1 md:grid-cols-2 gap-4",
    large: "grid grid-cols-1 gap-4",
  };

  return {
    tabSize,
    setTabSize,
    hoveredSkill,
    setHoveredSkill,
    cardLayoutClasses,
  };
};
