"use client";

import { ModeToggle } from "./ToogleTheme";
import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "./LocalSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="relative w-full">
      <nav className="flex flex-col sm:flex-row justify-between items-center w-full p-5">
        <div className="flex order-2 gap-4 sm:order-none  sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <NavigationLink
            href="/"
            className="block p-3 text-center font-medium hover:bg-accent rounded-md"
          >
            {t("home")}
          </NavigationLink>
          <NavigationLink
            href="/about"
            className="block p-3 text-center font-medium hover:bg-accent rounded-md"
          >
            {t("about")}
          </NavigationLink>
        </div>

        <div className="flex gap-2 items-center order-1 sm:order-none sm:ml-auto">
          <LocaleSwitcher />
          <div className="w-10">
            <ModeToggle />
          </div>
        </div>
      </nav>
      <div className="absolute bottom-0 w-full h-px bg-gray-200" />
    </div>
  );
};
export default Navbar;
