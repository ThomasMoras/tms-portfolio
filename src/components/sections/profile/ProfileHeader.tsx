"use client";

import React from "react";
import { PROFILE } from "@/constants/profile-data";

const ProfileHeader: React.FC = () => {
  return (
    <div className="w-full px-6 py-4 border-b border-border">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        {PROFILE.fullName} -{" "}
        <span className="text-primary">{PROFILE.title}</span>
      </h1>
    </div>
  );
};

export default ProfileHeader;
