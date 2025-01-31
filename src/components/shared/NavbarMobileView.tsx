import { useState } from "react";
import NavigationLink from "./NavigationLink";
import { FaEthereum } from "react-icons/fa";
import LocaleSwitcher from "./LocalSwitcher";
import { ModeToggle } from "./ToogleTheme";
import { Menu } from "lucide-react";

type ValidRoutes = "/" | "/about" | "/career" | "/projects" | "/contact";

interface NavLinkProps {
  href: ValidRoutes;
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({
  href,
  className,
  onClick,
  children,
}: NavLinkProps) => (
  <NavigationLink href={href} className={className} onClick={onClick}>
    {children}
  </NavigationLink>
);

interface NavbarProps {
  t: (key: string) => string;
}

const NavbarMobileView = ({ t }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="lg:hidden flex flex-col w-full backdrop-blur-sm">
      <div className="flex justify-between items-center p-5">
        <div className="flex flex-row gap-6">
          <FaEthereum color="#627EEA" className="h-5 w-5" />
          🍁
        </div>

        <div className="flex gap-2 items-center">
          <LocaleSwitcher />
          <div className="w-10">
            <ModeToggle />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-accent"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col px-4 py-2 bg-background/95 border-t">
          <MobileNavLink
            href="/"
            className="p-3 text-left font-medium hover:bg-accent rounded-md"
            onClick={handleNavClick}
          >
            {t("home")}
          </MobileNavLink>
          <MobileNavLink
            href="/about"
            className="p-3 text-left font-medium hover:bg-accent rounded-md"
            onClick={handleNavClick}
          >
            {t("about")}
          </MobileNavLink>
          <MobileNavLink
            href="/career"
            className="p-3 text-left font-medium hover:bg-accent rounded-md"
            onClick={handleNavClick}
          >
            {t("career")}
          </MobileNavLink>
          <MobileNavLink
            href="/projects"
            className="p-3 text-left font-medium hover:bg-accent rounded-md"
            onClick={handleNavClick}
          >
            {t("projects")}
          </MobileNavLink>
          <MobileNavLink
            href="/contact"
            className="p-3 text-left font-medium hover:bg-accent rounded-md"
            onClick={handleNavClick}
          >
            {t("contact")}
          </MobileNavLink>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobileView;
