// components/shared/TechStackPreview.tsx
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TECH_CATEGORIES } from "@/constants/section-skills";

const TechStackPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {TECH_CATEGORIES.map((category, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-shadow overflow-hidden"
        >
          <CardContent className="p-0">
            <div
              className={`flex items-center gap-2 p-4 border-b ${category.color}`}
            >
              <div className="bg-background rounded-md p-2">
                {category.icon}
              </div>
              <h4 className="text-lg font-semibold">{category.title}</h4>
            </div>

            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {category.techs.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant={tech.learning ? "outline" : "secondary"}
                    className={`flex items-center gap-1 ${
                      tech.learning
                        ? "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-500"
                        : ""
                    }`}
                  >
                    <span className="text-xs">{tech.icon}</span>
                    <span>{tech.name}</span>
                    {tech.learning && (
                      <span className="text-[10px] italic">(en cours)</span>
                    )}
                  </Badge>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-full justify-between"
              >
                <Link href={category.link}>
                  Voir les détails
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TechStackPreview;
