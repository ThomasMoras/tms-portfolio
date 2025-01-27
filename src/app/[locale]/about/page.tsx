import AboutSection from "@/components/shared/About";
import StudiesTimeLine from "@/components/shared/StudiesTimeLine";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto mt-5">
      <AboutSection />
      <StudiesTimeLine />
    </div>
  );
};

export default page;
