"use client";

import Link from "next/link";
import { ModeToggle } from "./ToogleTheme";

const Navbar = () => {
  return (
    <div className="relative w-full">
      <nav className="flex justify-between items-center w-full p-5">
        <div className="flex items-center gap-2 ml-auto">
          <ModeToggle />
          <Link
            href="/about"
            className="block p-3 text-center font-medium hover:bg-accent rounded-md"
          >
            About
          </Link>
        </div>
      </nav>
      <div className="absolute bottom-0 w-full h-px bg-gray-200" />
    </div>
  );
};

export default Navbar;
