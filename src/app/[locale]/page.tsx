"use client";

import React from "react";
import SkillsSection from "@/components/sections/skills/SkillsSections";
import ProfileCard from "@/components/sections/profile/ProfileCard";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-start pt-4">
      <div className="container max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Carte principale du portfolio */}
        <div className="flex flex-col items-center mb-16">
          <ProfileCard />
        </div>

        {/* Section des compétences détaillées */}
        <div id="skills-section">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
