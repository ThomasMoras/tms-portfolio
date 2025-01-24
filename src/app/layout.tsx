import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Thomas Moras's Portfolio",
  description:
    "Contents personnals and professionnels projects, describes my interest, skills and my passions for Blockchain & IA 🚀",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export { inter, robotoMono };
