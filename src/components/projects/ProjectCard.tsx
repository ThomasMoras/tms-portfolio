import { ProjectCardProps } from "@/types/projectTypes";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ title, category, tech, image, href }: ProjectCardProps) => {
  return (
    <div>
      <Link href={href} className="block">
        <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all hover:translate-y-[-5px]">
          <div className="h-40 md:h-48 relative bg-slate-200 dark:bg-slate-800">
            {/* Image would go here in production */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground text-xs md:text-sm">Image Preview</span>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <span className="inline-block px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2 md:mb-3">
              {category}
            </span>
            <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>

            <div className="flex flex-wrap gap-1 md:gap-2 mt-3 md:mt-4">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 md:py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
