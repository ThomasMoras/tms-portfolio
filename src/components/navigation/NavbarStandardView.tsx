"use client";

import { ModeToggle } from "../shared/ToogleTheme";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "../shared/LocalSwitcher";
import { FaEthereum } from "react-icons/fa";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import GhibliToggleButton from "../shared/GhibliToggleButton";

interface NavbarProps {
  t: (key: string) => string;
}

const NavbarStandardView = ({ t }: NavbarProps) => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:flex flex-row justify-between items-center w-full p-5 backdrop-blur-sm bg-background/80 border-b border-border">
      {/* Left section - Ghibli toggle button */}
      <div className="flex items-center">
        <GhibliToggleButton />
      </div>

      {/* Center section - Navigation */}
      <div className="flex gap-4 items-center justify-center">
        <FaEthereum color="#627EEA" className="h-5 w-5" />
        <button
          onClick={() => scrollToSection("home")}
          className={`block p-3 text-center font-medium rounded-md transition-all ${
            activeSection === "home"
              ? "text-primary scale-110 border-b-2 border-primary"
              : "text-foreground hover:scale-110"
          }`}
        >
          {t("home")}
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className={`block p-3 text-center font-medium rounded-md transition-all ${
            activeSection === "skills"
              ? "text-primary scale-110 border-b-2 border-primary"
              : "text-foreground hover:scale-110"
          }`}
        >
          {t("skills")}
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`block p-3 text-center font-medium rounded-md transition-all ${
            activeSection === "projects"
              ? "text-primary scale-110 border-b-2 border-primary"
              : "text-foreground hover:scale-110"
          }`}
        >
          {t("projects")}
        </button>
        <NavigationLink
          href="/career"
          className="block p-3 text-center font-medium rounded-md transition-transform hover:scale-110"
        >
          {t("career")}
        </NavigationLink>
        <button
          onClick={() => scrollToSection("contact")}
          className={`block p-3 text-center font-medium rounded-md transition-all ${
            activeSection === "contact"
              ? "text-primary scale-110 border-b-2 border-primary"
              : "text-foreground hover:scale-110"
          }`}
        >
          {t("contact")}
        </button>
        <NavigationLink
          href="/about"
          className="block p-3 text-center font-medium rounded-md transition-transform hover:scale-110"
        >
          {t("about")}
        </NavigationLink>
        🍁
      </div>

      {/* Right section - Controls */}
      <div className="flex gap-7 items-center w-32 justify-end">
        <LocaleSwitcher />
        <div className="w-10">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavbarStandardView;
