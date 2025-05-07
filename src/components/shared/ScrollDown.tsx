import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const ScrollDown = ({ sectionName }: { sectionName: string }) => {
  return (
    <div className="w-full flex justify-center absolute bottom-4 left-0">
      <button
        className="cursor-pointer transform transition-transform hover:translate-y-1 focus:outline-none"
        onClick={() => {
          const section = document.getElementById(sectionName);
          if (section) {
            const navbarHeight = 80; // Adjust based on your navbar height
            const sectionPosition = section.getBoundingClientRect().top;
            const offsetPosition = sectionPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }}
        aria-label={`Scroll to ${sectionName}`}
      >
        <FaArrowDown className="animate-bounce w-6 h-6 text-primary" />
      </button>
    </div>
  );
};

export default ScrollDown;
