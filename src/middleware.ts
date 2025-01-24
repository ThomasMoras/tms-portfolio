// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "fr"],
//   defaultLocale: "en",
//   localePrefix: "always",
// });

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };

// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(fr|en)/:path*"],
// };

// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   matcher: [
//     // Enable a redirect to a matching locale at the root
//     "/",

//     // Set a cookie to remember the previous locale for
//     // all requests that have a locale prefix
//     "/(fr|en)/:path*",

//     // Enable redirects that add missing locales
//     // (e.g. `/pathnames` -> `/en/pathnames`)
//     "/((?!_next|_vercel|.*\\..*).*)",
//   ],
// };

// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   matcher: [
//     // Enable a redirect to a matching locale at the root
//     "/",

//     // Set a cookie to remember the previous locale for
//     // all requests that have a locale prefix
//     "/(fr|en)/:path*",

//     // Enable redirects that add missing locales
//     // (e.g. `/pathnames` -> `/en/pathnames`)
//     "/((?!_next|_vercel|.*\\..*).*)",
//   ],
// };
// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(fr|en)/:path*"],
// };
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(fr|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
