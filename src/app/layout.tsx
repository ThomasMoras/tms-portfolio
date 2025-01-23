import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/shared/Layout";
import { ThemeProvider } from "next-themes";
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${robotoMono.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
