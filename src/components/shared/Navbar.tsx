"use client";

import { ModeToggle } from "./ToogleTheme";
import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "./LocalSwitcher";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="relative w-full">
      <nav className="flex flex-col sm:flex-row justify-between items-center w-full p-5">
        <div className="flex gap-5 items-center order-1 sm:order-none sm:mr-auto pl-10">
          <FaGithub
            className="w-7 h-7 cursor-pointer transition-transform hover:scale-125"
            onClick={() =>
              window.open("https://github.com/ThomasMoras", "_blank")
            }
          />
          <FaLinkedin
            className="w-7 h-7 cursor-pointer transition-transform hover:scale-125"
            color="#0A66C2"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/thomas-moras-48006213b",
                "_blank"
              )
            }
          />
        </div>

        <div className="flex order-3 gap-4 sm:order-none  sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <NavigationLink
            href="/"
            className="block p-3 text-center font-medium hover:bg-accent rounded-md"
          >
            {t("home")}
          </NavigationLink>
          <NavigationLink
            href="/work"
            className="block p-3 text-center font-medium hover:bg-accent rounded-md"
          >
            {t("work")}
          </NavigationLink>
          <NavigationLink
            href="/projects"
            className="block p-3 text-center font-medium hover:bg-accent rounded-md"
          >
            {t("projects")}
          </NavigationLink>
          <NavigationLink
            href="/contact"
            className="block p-3 text-center font-medium hover:bg-accent rounded-md"
          >
            {t("contact")}
          </NavigationLink>
        </div>

        <div className="flex gap-2 items-center order-2 sm:order-none sm:ml-auto">
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
