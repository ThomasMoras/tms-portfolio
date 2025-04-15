"use client";

import React from "react";
import { TECH_CATEGORIES } from "@/constants/section-skills";
import { ArrowRight } from "lucide-react";
import { FaArrowDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const OtherTechBanner = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TECH_CATEGORIES.map((category, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 overflow-hidden border border-border hover:translate-y-[-5px]"
          >
            <CardContent className="p-0">
              <div
                className={`flex items-center gap-3 p-4 ${
                  category.color.includes("bg-") ? category.color : category.bgColor
                }`}
              >
                <div className={`p-2 rounded-full ${category.color}`}>{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
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
                      {tech.learning && <span className="text-[10px] italic">(en cours)</span>}
                    </Badge>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full justify-between">
                  <Link href={category.link || `/skills?tab=${category.title.toLowerCase()}`}>
                    Voir les détails
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OtherTechBanner;
