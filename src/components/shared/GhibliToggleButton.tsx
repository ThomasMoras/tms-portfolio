"use client";

import { useGhibliMode } from "@/contexts/GhibliModeContext";
import Image from "next/image";

export default function GhibliToggleButton() {
  const { isGhibliMode, toggleGhibliMode } = useGhibliMode();

  // Studio Ghibli brand colors
  const ghibliBlue = "#1a6ea0";

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Button container with perspective */}
      <div className="w-14 h-14 relative" style={{ perspective: "1000px" }}>
        <div
          className="w-full h-full transition-all duration-700 cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
            transform: isGhibliMode ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          onClick={toggleGhibliMode}
          title={isGhibliMode ? "Switch to normal images" : "Switch to Ghibli themed images"}
        >
          {/* Front face - Totoro */}
          <div
            className="absolute w-full h-full rounded-full overflow-hidden flex items-center justify-center shadow-md"
            style={{
              backfaceVisibility: "hidden",
              background: "white",
              border: `1px solid ${ghibliBlue}`,
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={"/images/ghibli/no_color_logo.png"}
                  alt={"Totoro"}
                  width={400} // Set appropriate width
                  height={400} // Set appropriate height
                  className="object-contain"
                  quality={80}
                />
              </div>
            </div>
          </div>

          {/* Back face - Standard icon */}
          <div
            className="absolute w-full h-full rounded-full overflow-hidden flex items-center justify-center shadow-md"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "white",
              border: `1px solid ${ghibliBlue}`,
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/images/ghibli/no_color_logo.png"
                      alt="Totoro"
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
