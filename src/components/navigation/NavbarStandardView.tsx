"use client";

import { ModeToggle } from "../shared/ToogleTheme";
import LocaleSwitcher from "../shared/LocalSwitcher";
import GhibliToggleButton from "../shared/GhibliToggleButton";
import { NAV_ITEMS, NAVBAR_ICON } from "@/constants/navbarConstants";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { navbar, navButton, navSection, toggleContainer } from "../ui/styles/navbar";

interface NavbarProps {
  t: (key: string) => string;
}

const NavbarStandardView = ({ t }: NavbarProps) => {
  const { activeSection, scrollToSection } = useActiveSection();

  const renderNavItem = (item: (typeof NAV_ITEMS)[0]) => {
    if (item.type === "section") {
      return (
        <button
          key={item.key}
          onClick={() => scrollToSection(item.key)}
          className={navButton({ active: activeSection === item.key })}
        >
          {t(item.key)}
        </button>
      );
    }
    // else {
    //   return (
    //     <NavigationLink
    //       key={item.key}
    //       href={item.href || "/"}
    //       className={NAVBAR_STYLES.navigationLink}
    //     >
    //       {t(item.key)}
    //     </NavigationLink>
    //   );
    // }
  };

  return (
    <nav className={navbar({ variant: "desktop" })}>
      {/* Left section - Ghibli toggle button */}
      <div className={navSection({ position: "left" })}>
        <GhibliToggleButton />
      </div>

      {/* Center section - Navigation */}
      <div className={navSection({ position: "center" })}>
        <NAVBAR_ICON.logo color={NAVBAR_ICON.logoColor} className={NAVBAR_ICON.logoSize} />

        {[...NAV_ITEMS].sort((a, b) => a.order - b.order).map(renderNavItem)}

        {NAVBAR_ICON.emoji}
      </div>

      {/* Right section - Controls */}
      <div className={navSection({ position: "right" })}>
        <LocaleSwitcher />
        <div className={toggleContainer()}>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavbarStandardView;
