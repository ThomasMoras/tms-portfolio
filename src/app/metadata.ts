import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Thomas Moras | Full Stack Developer",
    template: "%s | Thomas Moras",
  },
  description:
    "Full Stack Developer specializing in modern web technologies. Portfolio showcasing projects, skills, and professional experience.",
  keywords: "Full Stack Developer, Web Development, Next.js, React, TypeScript, Portfolio",
  authors: [{ name: "Thomas Moras" }],
  creator: "Thomas Moras",
  publisher: "Thomas Moras",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thomasmoras.dev",
    title: "Thomas Moras | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web technologies. Portfolio showcasing projects, skills, and professional experience.",
    siteName: "Thomas Moras",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thomas Moras Portfolio",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Thomas Moras | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web technologies. Portfolio showcasing projects, skills, and professional experience.",
    images: ["/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
