"use client";

import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileBio from "./ProfileBio";
import ProfilePicture from "./ProfilePicture";
import TechStackSection from "../tech-stack/TechStackSection";

const ProfileCard: React.FC = () => {
  return (
    <div className="w-full max-w-5xl bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
      {/* En-tête avec nom et titre */}
      <ProfileHeader />

      {/* Contenu principal - Photo et description */}
      <div className="flex flex-col md:flex-row p-6 gap-8">
        {/* Photo de profil */}
        <ProfilePicture className="w-full md:w-2/5" />

        {/* Description */}
        <div className="w-full md:w-3/5">
          <ProfileBio />
        </div>
      </div>

      {/* Section Stacks Techniques - Preview simplifiée */}
      <TechStackSection />
    </div>
  );
};

export default ProfileCard;
