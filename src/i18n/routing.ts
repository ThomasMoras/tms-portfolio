// import { createNavigation } from "next-intl/navigation";
// import { defineRouting } from "next-intl/routing";

// export const routing = defineRouting({
//   locales: ["en", "fr"],
//   defaultLocale: "en",
//   localePrefix: "as-needed",
// });

// export const { Link, redirect, usePathname, useRouter, getPathname } =
//   createNavigation(routing);
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      en: "/en",
      fr: "/fr",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
