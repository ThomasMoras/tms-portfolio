"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/constants/section-skills";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TechBanner: React.FC = () => {
  return (
    <div className="w-full py-6">
      <div className="container max-w-6xl mx-auto px-4">
        <Card className="shadow-md border overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Technologies principales</h3>
              <Link
                href="/skills"
                className="text-sm text-primary hover:underline flex items-center"
              >
                Voir toutes mes compétences
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {SKILL_CATEGORIES.map((category) => {
                // Get top 3 skills by percentage (non-learning)
                const topSkills = category.skills
                  .filter((skill) => !skill.learning)
                  .sort((a, b) => b.percentage - a.percentage)
                  .slice(0, 3);

                return (
                  <div key={category.id} className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={cn("p-1.5 rounded-full", category.bgColor)}>
                        <div className={category.color}>{category.icon}</div>
                      </div>
                      <h3 className="font-medium">{category.title}</h3>
                    </div>

                    <div className="space-y-3">
                      {topSkills.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between group">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{skill.icon}</span>
                            <span>{skill.name}</span>
                          </div>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-xs font-normal",
                              category.color.replace("text-", "border-").replace("-500", "-200"),
                              category.color
                            )}
                          >
                            {skill.percentage}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechBanner;
