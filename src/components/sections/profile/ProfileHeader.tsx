"use client";

import React from "react";
import { PROFILE } from "@/constants/profile";
import { MapPin } from "lucide-react";

const ProfileHeader: React.FC = () => {
  return (
    <div className="w-full py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-bold">{PROFILE.FullName}</h1>

          {/* Title */}
          <p className="text-xl text-primary md:ml-2 md:border-l md:border-border md:pl-4">
            {PROFILE.Title}
          </p>

          {/* Location */}
          <div className="flex items-center text-muted-foreground md:ml-4">
            <MapPin size={16} className="mr-1" />
            <span>{PROFILE.Location || ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
