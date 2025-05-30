"use client";

import { createLocalizationUtils } from "@/lib/localizationUtils";
import { ProjectCardProps } from "@/types/projectTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  project,
  locale,
  translations = { noImage: "No Image" },
}: ProjectCardProps) => {
  const { id, title, category, technologies, thumbnailImage, shortDescription } = project;
  const { getLocalizedText } = createLocalizationUtils(locale, {});

  return (
    <Link href={`/projects/${id}`} className="block">
      <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all hover:translate-y-[-5px]">
        <div className="h-48 relative">
          {thumbnailImage ? (
            <Image src={thumbnailImage} alt={title} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800">
              <span className="text-muted-foreground text-sm">{translations.noImage}</span>
            </div>
          )}
        </div>

        <div className="p-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
            {category}
          </span>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {getLocalizedText(shortDescription)}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
