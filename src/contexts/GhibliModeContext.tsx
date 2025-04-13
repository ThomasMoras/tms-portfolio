"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type GhibliModeContextType = {
  isGhibliMode: boolean;
  toggleGhibliMode: () => void;
};

// Create context with default values
const GhibliModeContext = createContext<GhibliModeContextType>({
  isGhibliMode: false,
  toggleGhibliMode: () => {},
});

export function GhibliModeProvider({ children }: { children: ReactNode }) {
  const [isGhibliMode, setIsGhibliMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load preference from localStorage on component mount
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const savedPreference = localStorage.getItem("ghibliMode");
      console.log("Loading saved preference:", savedPreference);

      if (savedPreference === "enabled") {
        setIsGhibliMode(true);
      }

      setIsInitialized(true);
    }
  }, []);

  const toggleGhibliMode = () => {
    console.log("Toggling Ghibli mode, current:", isGhibliMode);

    setIsGhibliMode((prevMode) => {
      const newMode = !prevMode;
      console.log("New mode:", newMode);

      // Store the preference in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("ghibliMode", newMode ? "enabled" : "disabled");
      }

      return newMode;
    });
  };

  // Debug output
  useEffect(() => {
    console.log("GhibliModeContext state updated:", isGhibliMode);
  }, [isGhibliMode]);

  return (
    <GhibliModeContext.Provider value={{ isGhibliMode, toggleGhibliMode }}>
      {isInitialized ? children : <div>Loading...</div>}
    </GhibliModeContext.Provider>
  );
}

export function useGhibliMode() {
  return useContext(GhibliModeContext);
}
