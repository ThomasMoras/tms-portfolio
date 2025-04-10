"use client";

import { ModeToggle } from "../shared/ToogleTheme";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "../shared/LocalSwitcher";
import { FaEthereum } from "react-icons/fa";

interface NavbarProps {
  t: (key: string) => string;
}

const NavbarStandardView = ({ t }: NavbarProps) => {
  return (
    <nav className="hidden lg:flex flex-row justify-between items-center w-full p-5 backdrop-blur-sm">
      {/* Left section - empty to maintain space */}
      <div className="w-32" />

      {/* Center section - Navigation */}
      <div className="flex gap-4 items-center justify-center">
        <FaEthereum color="#627EEA" className="h-5 w-5" />
        <NavigationLink
          href="/"
          className="block p-3 text-center font-medium rounded-md transition-transform hover:scale-125"
        >
          {t("home")}
        </NavigationLink>
        <NavigationLink
          href="/about"
          className="block p-3 text-center font-medium rounded-md transition-transform hover:scale-125"
        >
          {t("about")}
        </NavigationLink>
        <NavigationLink
          href="/career"
          className="block p-3 text-center font-medium rounded-md transition-transform hover:scale-125"
        >
          {t("career")}
        </NavigationLink>
        <NavigationLink
          href="/projects"
          className="block p-3 text-center font-medium rounded-md transition-transform hover:scale-125"
        >
          {t("projects")}
        </NavigationLink>
        <NavigationLink
          href="/contact"
          className="block p-3 text-center font-medium rounded-md transition-transform hover:scale-125"
        >
          {t("contact")}
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
