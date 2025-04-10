"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import NavbarMobileView from "./NavbarMobileView";
import NavbarStandardView from "./NavbarStandardView";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener(" scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-[73px]" />
      <div
        className={`fixed top-0 left-0 right-0 w-full bg-background z-50 transition-all duration-200 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <NavbarStandardView t={t} />
        <NavbarMobileView t={t} />
      </div>
    </>
  );
};

export default Navbar;
