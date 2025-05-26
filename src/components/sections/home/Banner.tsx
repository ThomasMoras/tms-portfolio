"use client";

import React, { useState } from "react";
import {
  CATEGORIES,
  SKILLS,
  TOOLS,
  CERTIFICATIONS,
  SOFT_SKILLS,
} from "@/constants/skillsConstants";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import Icon from "@/components/icons/Icon";
import { createLocalizationUtils } from "@/lib/localizationUtils";
import { safeCss } from "@/lib/uiUtils";
import { cn } from "@/lib/utils";

// Define the filter types
type FilterType = "hardskills" | "softskills" | "tools" | "certification";

const Banner = () => {
  const { scrollToSection } = useActiveSection();
  const [activeFilter, setActiveFilter] = useState<FilterType>("hardskills");
  const locale = useLocale();

  // Use the centralized localization utilities
  const { getLocalizedText, currentLocale } = createLocalizationUtils(locale, {});

  const handleCategoryClick = (categoryId: string) => {
    // Store the category id in sessionStorage to be picked up by the Skills component
    sessionStorage.setItem("selectedSkillTab", categoryId.toLowerCase());

    // Scroll to the skills section
    scrollToSection("skills");

    // Fire a custom event to notify the Skills component about the tab change
    setTimeout(() => {
      const tabChangeEvent = new CustomEvent("skill-tab-change", {
        detail: { tabId: categoryId.toLowerCase() },
      });
      window.dispatchEvent(tabChangeEvent);
    }, 200);
  };

  // Function to handle filter button clicks
  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  // Get skills for a category
  const getSkillsByCategory = (categoryId: string) => {
    return SKILLS.filter((skill) => skill.categoryId === categoryId);
  };

  // Render Hard Skills (Technical skills organized by category)
  const renderHardSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CATEGORIES.map((category, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-all duration-300 overflow-hidden border border-border hover:translate-y-[-5px]"
        >
          <CardContent className="p-0">
            <button
              onClick={() => handleCategoryClick(category.id)}
              className="block w-full text-left cursor-pointer"
            >
              <div className={`flex items-center gap-2 p-2 ${safeCss(category.bgColor)}`}>
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon
                    name={category.iconType || "code"}
                    className={safeCss(category.color)}
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold">{getLocalizedText(category.title)}</h3>
                <ExternalLink className="ml-auto" size={18} />
              </div>
            </button>

            <div className="p-6">
              <div className="flex flex-wrap gap-4 justify-center">
                {getSkillsByCategory(category.id)
                  .filter((skill) => skill.showInBanner)
                  .slice(0, 6) // Limit to 6 skills for display
                  .map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-2 px-3 rounded-lg transition-transform duration-200 hover:scale-110"
                    >
                      <div
                        style={{ color: skill.color }}
                        className="flex items-center justify-center"
                      >
                        <Icon name={skill.iconType || "code"} size={24} />
                      </div>
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                      {skill.learning && (
                        <span className="text-xs bg-amber-200 dark:bg-amber-800/50 text-amber-800 dark:text-amber-300 rounded-full px-1.5 py-0.5">
                          {currentLocale === "fr" ? "en cours" : "learning"}
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  // Render Soft Skills (Using the SOFT_SKILLS structure)
  const renderSoftSkills = () => {
    const softSkillsData = SOFT_SKILLS[currentLocale as keyof typeof SOFT_SKILLS];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {softSkillsData.map((section, index) => (
          <Card
            key={index}
            className="overflow-hidden border-border hover:shadow-lg transition-all"
          >
            <div className={`p-4 ${section.color} border-b border-border`}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white/60 dark:bg-black/20">
                  <Icon name={section.iconType || "help-circle"} size={24} />
                </div>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
            </div>
            <CardContent className="p-5">
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3 group">
                    <div className="mt-0.5 rounded-full p-1 dark:bg-gray-800 dark:group-hover:bg-green-900/30">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  // Render Tools
  const renderTools = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {TOOLS.flatMap((category) =>
        category.techs.map((tech, techIndex) => (
          <div
            key={`${category.id}-${techIndex}`}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            <div
              className="w-12 h-12 flex items-center justify-center mb-3 rounded-full"
              style={{ color: tech.color }}
            >
              <Icon name={tech.iconType || "tool"} size={28} />
            </div>
            <span className="text-sm font-medium text-center">{getLocalizedText(tech.name)}</span>
          </div>
        ))
      )}
    </div>
  );

  // Render Certifications
  const renderCertifications = () => (
    <div className="space-y-8">
      {CERTIFICATIONS.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4">
          <h3 className="text-lg font-semibold pl-3 border-l-4 border-blue-500 flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <span>{getLocalizedText(category.title)}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {category.techs.map((cert, certIndex) => (
              <div
                key={certIndex}
                className="flex items-center p-5 bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative mr-5 flex-shrink-0">
                  <div
                    className="w-24 h-24 rounded-lg bg-white dark:bg-gray-900 p-2 shadow-sm overflow-hidden flex items-center justify-center group-hover:shadow-md transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      if (cert.schoolUrl) {
                        window.open(cert.schoolUrl, "_blank");
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Visit ${getLocalizedText(cert.school)} website`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (cert.schoolUrl) {
                          window.open(cert.schoolUrl, "_blank");
                        }
                      }
                    }}
                  >
                    <Image
                      src={cert.img}
                      alt={getLocalizedText(cert.name)}
                      width={80}
                      height={80}
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      quality={90}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Link
                    href={cert.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                      {getLocalizedText(cert.name)}
                    </h4>
                  </Link>

                  <Link
                    href={cert.schoolUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    <h2 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {getLocalizedText(cert.school)}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.learning
                      ? `${currentLocale === "fr" ? "En cours" : "In progress"} • ${currentLocale === "fr" ? "Commencé" : "Started"} ${cert.complete || new Date().getFullYear()}`
                      : `${currentLocale === "fr" ? "Achevé" : "Completed"} • ${cert.complete}`}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full h-8 w-8 p-0 ml-2"
                  aria-label="View certificate details"
                  onClick={() => {
                    if (cert.link) {
                      window.open(cert.link, "_blank");
                    }
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // Render content based on active filter
  const renderContent = () => {
    switch (activeFilter) {
      case "hardskills":
        return renderHardSkills();
      case "softskills":
        return renderSoftSkills();
      case "tools":
        return renderTools();
      case "certification":
        return renderCertifications();
      default:
        return renderHardSkills();
    }
  };

  // Translate filter button labels based on locale
  const getFilterLabel = (filter: FilterType): string => {
    const labels = {
      hardskills: {
        en: "Hard Skills",
        fr: "Compétences Techniques",
      },
      softskills: {
        en: "Soft Skills",
        fr: "Compétences Humaines",
      },
      tools: {
        en: "Tools",
        fr: "Outils",
      },
      certification: {
        en: "Certification",
        fr: "Certification",
      },
    };

    return labels[filter][currentLocale as keyof (typeof labels)[typeof filter]] || filter;
  };

  return (
    <div className="container mx-auto mb-10">
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {(["hardskills", "softskills", "tools", "certification"] as FilterType[]).map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            onClick={() => handleFilterClick(filter)}
            className={cn(
              "min-w-24",
              // Base filter colors (unselected state)
              activeFilter !== filter &&
                filter === "hardskills" &&
                "border-cyan-500 text-cyan-600 hover:bg-cyan-50",
              activeFilter !== filter &&
                filter === "softskills" &&
                "border-emerald-500 text-emerald-600 hover:bg-emerald-50",
              activeFilter !== filter &&
                filter === "tools" &&
                "border-orange-500 text-orange-600 hover:bg-orange-50",
              activeFilter !== filter &&
                filter === "certification" &&
                "border-amber-500 text-amber-600 hover:bg-amber-50",
              // Selected state with your original styling
              activeFilter === filter &&
                filter === "hardskills" &&
                "bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded",
              activeFilter === filter &&
                filter === "softskills" &&
                "bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded",
              activeFilter === filter &&
                filter === "tools" &&
                "bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded",
              activeFilter === filter &&
                filter === "certification" &&
                "bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded"
            )}
          >
            {getFilterLabel(filter)}
          </Button>
        ))}
      </div>

      {/* Dynamic content based on active filter */}
      {renderContent()}
    </div>
  );
};

export default Banner;
