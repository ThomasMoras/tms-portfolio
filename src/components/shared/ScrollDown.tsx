import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const ScrollDown = ({ sectionName }: { sectionName: string }) => {
  return (
    <div>
      <button
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById(sectionName)?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to activity section"
      >
        <FaArrowDown className="animate-bounce w-6 h-6 text-primary" />
      </button>
    </div>
  );
};

export default ScrollDown;
