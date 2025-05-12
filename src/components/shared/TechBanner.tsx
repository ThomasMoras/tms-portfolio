"use client";

import React from "react";
import { TECH_CATEGORIES } from "@/constants/skillsConstants";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TechCategory, TechData } from "@/types/skillsTypes";
import { useActiveSection } from "@/contexts/ActiveSectionContext";

const TechBanner = () => {
  const { scrollToSection } = useActiveSection();

  const handleCategoryClick = (category: TechCategory) => {
    // Store the category id in sessionStorage to be picked up by the Skills component
    sessionStorage.setItem("selectedSkillTab", category.title.toLocaleLowerCase());

    // Scroll to the skills section
    scrollToSection("skills");

    // Fire a custom event to notify the Skills component about the tab change
    setTimeout(() => {
      const tabChangeEvent = new CustomEvent("skill-tab-change", {
        detail: { tabId: category.title.toLocaleLowerCase() },
      });
      window.dispatchEvent(tabChangeEvent);
    }, 200);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_CATEGORIES.map((category: TechCategory, index: number) => {
          return (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 overflow-hidden border border-border hover:translate-y-[-5px]"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="block w-full text-left cursor-pointer"
                >
                  <div className={`flex items-center gap-2 p-2 ${category.color}`}>
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xl">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <ExternalLink className="ml-auto" size={18} />
                  </div>
                </button>

                <div className="p-6">
                  <div className="flex flex-wrap gap-4 justify-center">
                    {category.techs.map((tech: TechData, techIndex: number) => (
                      <div
                        key={techIndex}
                        className="flex flex-col items-center gap-2 px-3 rounded-lg transition-transform duration-200 hover:scale-110"
                      >
                        <div
                          style={{ color: tech.color }}
                          className="flex items-center justify-center"
                        >
                          {tech.icon}
                        </div>
                        <span className="text-sm font-medium text-center">{tech.name}</span>
                        {tech.learning && (
                          <span className="text-xs bg-amber-200 dark:bg-amber-800/50 text-amber-800 dark:text-amber-300 rounded-full px-1.5 py-0.5">
                            learning
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TechBanner;
