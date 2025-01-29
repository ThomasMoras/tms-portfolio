"use client";

import { ModeToggle } from "./ToogleTheme";
import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "./LocalSwitcher";
import { useState, useEffect } from "react";
import { FaEthereum } from "react-icons/fa";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Placeholder div to prevent content jump when navbar becomes fixed */}
      <div className="h-[73px]" />{" "}
      {/* Adjust height to match your navbar height */}
      <div
        className={`fixed top-0 left-0 right-0 w-full bg-background z-50 transition-all duration-200 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <nav className="flex flex-col sm:flex-row justify-between items-center w-full p-5 backdrop-blur-sm">
          <div className="flex order-3 gap-4 items-center sm:order-none sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
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

          <div className="flex gap-2 items-center order-2 sm:order-none sm:ml-auto">
            <LocaleSwitcher />
            <div className="w-10">
              <ModeToggle />
            </div>
          </div>
        </nav>
        {/* <div className="w-full h-px bg-gray-200" /> */}
      </div>
    </>
  );
};

export default Navbar;
