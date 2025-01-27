import AboutSection from "@/components/shared/About";
import StudiesTimeLine from "@/components/shared/StudiesTimeLine";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <AboutSection />
      <StudiesTimeLine />
    </div>
  );
};

export default page;
