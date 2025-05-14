"use client";

import React, { useState } from "react";
import {
  TECH_CATEGORIES,
  SOFT_SKILLS_CATEGORIES,
  TOOLS_CATEGORIES,
  CERTIFICATIONS,
} from "@/constants/skillsConstants";
import {
  ExternalLink,
  CheckCircle2,
  Briefcase,
  GitBranch,
  Users,
  MessageSquare,
  Brain,
  Clock,
  Lightbulb,
  Coffee,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TechCategory } from "@/types/skillsTypes";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import Image from "next/image";
import Link from "next/link";

// Define the filter types
type FilterType = "hardskills" | "softskills" | "tools" | "certification";

const HomeBanner = () => {
  const { scrollToSection } = useActiveSection();
  const [activeFilter, setActiveFilter] = useState<FilterType>("hardskills");

  const handleCategoryClick = (category: TechCategory) => {
    // Store the category id in sessionStorage to be picked up by the Skills component
    sessionStorage.setItem("selectedSkillTab", category.id.toLowerCase());

    // Scroll to the skills section
    scrollToSection("skills");

    // Fire a custom event to notify the Skills component about the tab change
    setTimeout(() => {
      const tabChangeEvent = new CustomEvent("skill-tab-change", {
        detail: { tabId: category.id.toLowerCase() },
      });
      window.dispatchEvent(tabChangeEvent);
    }, 200);
  };

  // Function to handle filter button clicks
  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  // Render Hard Skills (Original 3-card layout)
  const renderHardSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TECH_CATEGORIES.map((category: TechCategory, index: number) => (
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
                {category.techs.map((tech, techIndex: number) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center gap-2 px-3 rounded-lg transition-transform duration-200 hover:scale-110"
                  >
                    <div style={{ color: tech.color }} className="flex items-center justify-center">
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
      ))}
    </div>
  );

  // Render Soft Skills (Redesigned with more visual elements)
  const renderSoftSkills = () => {
    // Define our professional skills sections
    const softSkillSections = [
      {
        title: "Communication & Collaboration",
        icon: <MessageSquare className="w-6 h-6" />,
        color: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300",
        items: [
          "Clearly expressing complex technical concepts to all stakeholders",
          "Working effectively with diverse cross-functional teams",
          "Active listening to understand requirements and feedback",
          "Addressing disagreements professionally and constructively",
        ],
      },
      {
        title: "Leadership & Mentoring",
        icon: <Users className="w-6 h-6" />,
        color: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300",
        items: [
          "Providing technical guidance to teams and junior developers",
          "Strong documentation and clear communication focused",
          "Helping less experienced team members grow and develop",
          "Leading projects with organization and accountability",
        ],
      },
      {
        title: "Problem Solving & Innovation",
        icon: <Lightbulb className="w-6 h-6" />,
        color: "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300",
        items: [
          "Approaching challenges with creativity and persistence",
          "Analytical mindset for efficient technical solutions",
          "Understanding user needs to build better solutions",
          "Self-driven approach with continuous learning",
        ],
      },
      {
        title: "Quality & Adaptability",
        icon: <GitBranch className="w-6 h-6" />,
        color: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300",
        items: [
          "Emphasis on code quality and testing standards",
          "Embracing new technologies and methodologies",
          "Prioritizing tasks and meeting deadlines consistently",
          "Being open to constructive feedback for improvement",
        ],
      },
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {softSkillSections.map((section, index) => (
          <Card
            key={index}
            className="overflow-hidden border-border hover:shadow-lg transition-all"
          >
            <div
              className={`p-4 ${section.color.split(" ").slice(0, 2).join(" ")} border-b border-border`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-full bg-white/60 dark:bg-black/20 ${section.color.split(" ").slice(2).join(" ")}`}
                >
                  {section.icon}
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

  // Render Tools (Grid of tool boxes with icons)
  const renderTools = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {TOOLS_CATEGORIES.flatMap((category) =>
        category.techs.map((tech, techIndex) => (
          <div
            key={`${category.id}-${techIndex}`}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            <div
              className="w-12 h-12 flex items-center justify-center mb-3 rounded-full"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
            <span className="text-sm font-medium text-center">{tech.name}</span>
            {tech.learning && (
              <Badge variant="outline" className="mt-1 text-xs text-amber-500 border-amber-500">
                learning
              </Badge>
            )}
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
            <span>{category.title}</span>
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
                    onClick={() => cert.school && window.open(cert.schoolUrl, "_blank")}
                    role="button"
                    tabIndex={0}
                    aria-label={`Visit ${cert.school} website`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        cert.schoolUrl && window.open(cert.schoolUrl, "_blank");
                      }
                    }}
                  >
                    <Image
                      src={cert.img}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      quality={90}
                    />
                  </div>
                  {/* {cert.learning ? (
                    <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center shadow-sm border-2 border-white dark:border-gray-800">
                      <Clock className="w-3 h-3 text-white" />
                    </div>
                  ) : (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-6 h-6 flex items-center justify-center shadow-sm border-2 border-white dark:border-gray-800">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  )} */}
                </div>
                <div className="flex-1">
                  <Link
                    href={cert.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                      {cert.name}
                    </h4>
                  </Link>

                  <Link
                    href={cert.schoolUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    <h2 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {cert.school}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.learning
                      ? `In progress • Started ${cert.complete || new Date().getFullYear()}`
                      : `Completed • ${cert.complete}`}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full h-8 w-8 p-0 ml-2"
                  aria-label="View certificate details"
                  onClick={() => window.open(cert.link, "_blank")}
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

  return (
    <div className="container mx-auto mb-10">
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button
          variant={activeFilter === "hardskills" ? "hardskills" : "outline"}
          onClick={() => handleFilterClick("hardskills")}
          className="min-w-24"
        >
          Hard Skills
        </Button>
        <Button
          variant={activeFilter === "softskills" ? "softskills" : "outline"}
          onClick={() => handleFilterClick("softskills")}
          className="min-w-24"
        >
          Soft Skills
        </Button>
        <Button
          variant={activeFilter === "tools" ? "tools" : "outline"}
          onClick={() => handleFilterClick("tools")}
          className="min-w-24"
        >
          Tools
        </Button>
        <Button
          variant={activeFilter === "certification" ? "certification" : "outline"}
          onClick={() => handleFilterClick("certification")}
          className="min-w-24"
        >
          Certification
        </Button>
      </div>

      {/* Dynamic content based on active filter */}
      {renderContent()}
    </div>
  );
};

export default HomeBanner;
