"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import LocaleSwitcher from "../shared/LocalSwitcher";
import { ModeToggle } from "../shared/ToogleTheme";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { NAV_ITEMS, NAVBAR_ICON } from "@/constants/navbarConstants";
import {
  navbar,
  navSection,
  logoContainer,
  controlsContainer,
  toggleContainer,
  navButton,
  menuButton,
} from "../ui/styles/navbar";
import GhibliToggleButton from "../shared/GhibliToggleButton";

interface NavbarProps {
  t: (key: string) => string;
}

const NavbarMobileView = ({ t }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useActiveSection();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const renderNavItem = (item: (typeof NAV_ITEMS)[0]) => {
    if (item.type === "section") {
      return (
        <button
          key={item.key}
          onClick={() => {
            scrollToSection(item.key);
            handleNavClick();
          }}
          className={navButton({ mobile: true })}
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
    //       className={MOBILE_STYLES.navItem}
    //       onClick={handleNavClick}
    //     >
    //       {t(item.key)}
    //     </NavigationLink>
    //   );
    // }
  };

  return (
    <nav className={navbar({ variant: "mobile" })}>
      <div className={navSection({ position: "mobileHeader" })}>
        <div className={menuButton()}>
          <GhibliToggleButton />
        </div>

        <div className={logoContainer()}>
          <NAVBAR_ICON.logo color={NAVBAR_ICON.logoColor} className={NAVBAR_ICON.logoSize} />
          {NAVBAR_ICON.emoji}
        </div>

        <div className={controlsContainer()}>
          <LocaleSwitcher />
          <div className={toggleContainer()}>
            <ModeToggle />
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={menuButton()}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={navSection({ position: "mobilePanel" })}>
          {[...NAV_ITEMS].sort((a, b) => a.order - b.order).map(renderNavItem)}
        </div>
      )}
    </nav>
  );
};

export default NavbarMobileView;
