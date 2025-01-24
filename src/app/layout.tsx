import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Moras's Portfolio",
  description:
    "Contents personnals and professionnels projects, describes my interest, skills and my passions for Blockchain & IA 🚀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
