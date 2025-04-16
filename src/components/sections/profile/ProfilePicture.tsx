"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PROFILE } from "@/constants/profile";
import { useGhibliMode } from "@/contexts/GhibliModeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type ProfilePictureProps = {
  className?: string;
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ className = "" }) => {
  const { isGhibliMode } = useGhibliMode();
  const [isFlipped, setIsFlipped] = useState(false);

  // When Ghibli mode changes, trigger the flip
  useEffect(() => {
    setIsFlipped(isGhibliMode);
  }, [isGhibliMode]);

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
        {/* Background gradient */}
        {/* bg-gradient-to-r from-primary to-primary/50 */}
        <div className="absolute inset-0 rounded-2xl animate-pulse" />

        {/* Card with flip effect */}
        <div className="relative w-full h-full flip-card">
          <div
            className={`relative w-full h-full flip-card-inner ${isFlipped ? "flip-rotate" : ""}`}
          >
            {/* Front side - Standard image */}
            <div className="absolute w-full h-full rounded-2xl overflow-hidden flip-card-front">
              <Image
                src={PROFILE.AvatarUrl}
                alt="Profile picture"
                fill
                priority
                className="object-cover rounded-2xl border-4 border-background transition-transform hover:scale-105"
              />
            </div>

            {/* Back side - Ghibli image */}
            <div className="absolute  w-full h-full rounded-2xl overflow-hidden flip-card-back">
              <Image
                src={PROFILE.GhibliProfileUrl}
                alt="Profile picture (Ghibli)"
                fill
                priority
                className="object-cover rounded-2xl border-4 border-background transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="cursor-pointer p-3" onClick={() => window.open(PROFILE.GitHubUrl)}>
            <FaGithub className="w-10 h-10 transition-all duration-300 ease-in-out hover:scale-125" />
          </div>
          <div className="cursor-pointer p-3" onClick={() => window.open(PROFILE.LinkedinUrl)}>
            <FaLinkedin className="w-10 h-10 text-[#0A66C2] transition-all duration-300 ease-in-out hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
