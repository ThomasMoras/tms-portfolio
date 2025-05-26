"use client";

import React from "react";
import { PROFILE } from "@/constants/profileConstants";
import { MapPin } from "lucide-react";

const ProfileHeader: React.FC = () => {
  return (
    <div className="w-full py-2 sm:py-3 md:py-4">
      <div className="w-full">
        <div className="flex flex-col items-center text-center sm:items-start gap-3 sm:gap-2">
          {/* Name and Title on same line */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{PROFILE.FullName}</h1>

            <p className="text-lg sm:text-xl text-primary ml-2 pl-2 border-l border-border">
              {PROFILE.Title}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center text-muted-foreground text-sm sm:text-base">
            <MapPin size={16} className="mr-1 flex-shrink-0" />
            <span>{PROFILE.Location || ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
