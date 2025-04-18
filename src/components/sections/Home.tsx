import React from "react";
import TechBanner from "../shared/TechBanner";
import ProfileBio from "./profile/ProfileBio";
import ProfileHeader from "./profile/ProfileHeader";
import ProfilePicture from "./profile/ProfilePicture";

const Home = () => {
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto">
        {/* Mobile Header (above image) */}
        <div className="md:hidden md:mb-0">
          <ProfileHeader />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="col-span-1 flex items-center justify-center">
            <ProfilePicture />
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between text-center md:text-left">
            {/* Desktop Header (beside image) - hidden on mobile */}
            <div className="hidden md:block">
              <ProfileHeader />
            </div>
            <div className="mt-8 md:mt-0">
              <ProfileBio />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 mt-10 md:mt-20">
            <TechBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
