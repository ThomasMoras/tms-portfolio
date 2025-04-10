import React from "react";
import Image from "next/image";
import { PROFILE } from "@/constants/profile-data";

type ProfilePictureProps = {
  className?: string;
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ className = "" }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-2xl animate-pulse" />
        <Image
          src={PROFILE.avatarUrl}
          alt="Profile picture"
          fill
          priority
          className="rounded-2xl object-cover border-4 border-background relative z-10 transition-transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
