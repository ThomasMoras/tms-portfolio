import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/work": {
      en: "/work",
      fr: "/travail",
    },
    "/projects": {
      en: "/projects",
      fr: "/projets",
    },
    "/about": {
      en: "/about",
      fr: "/a-propos",
    },
    "/contact": {
      en: "/contact",
      fr: "/contact",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
