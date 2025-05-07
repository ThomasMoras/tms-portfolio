import React, { forwardRef } from "react";
import ScrollDown from "../shared/ScrollDown";

interface SectionLayoutProps {
  id: string;
  children: React.ReactNode;
  isFirstSection?: boolean;
  isLastSection?: boolean;
  alternateBackground?: boolean;
  nextSectionId?: string;
}

// Use forwardRef to properly handle the ref passing
const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  (
    {
      id,
      children,
      isFirstSection = false,
      isLastSection = false,
      alternateBackground = false,
      nextSectionId = "",
    },
    ref
  ) => {
    // Base classes for all sections
    const baseClasses = "border-t border-border scroll-mt-20";
    const paddingClasses = "py-12 md:py-20";

    // First section has special styling
    const firstSectionClasses =
      "min-h-screen flex flex-col md:pt-16 pb-10 items-center relative px-4 md:px-6 scroll-mt-20";

    // Background classes for alternating sections
    const bgClasses = alternateBackground ? "bg-slate-50 dark:bg-slate-900/50" : "";

    // Combine classes based on whether this is the first section
    const sectionClasses = isFirstSection
      ? firstSectionClasses
      : `${baseClasses} ${paddingClasses} ${bgClasses}`;

    return (
      <section id={id} ref={ref} className={`${sectionClasses} relative`}>
        {children}
        {!isLastSection && nextSectionId && <ScrollDown sectionName={nextSectionId} />}
      </section>
    );
  }
);

// Add display name for debugging
SectionLayout.displayName = "SectionLayout";

export default SectionLayout;
