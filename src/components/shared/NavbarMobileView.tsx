import { useState } from "react";
import NavigationLink from "./NavigationLink";

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
      {/* ... rest of your navbar code ... */}
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
