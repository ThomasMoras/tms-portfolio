import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes";
import { inter, robotoMono } from "../fonts";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/navigation/Layout";
import Script from "next/script";
import { PROFILE } from "@/constants/profileConstants";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.FullName,
    jobTitle: PROFILE.Titles[0],
    description: PROFILE.Description,
    url: PROFILE.WebSiteUrl,
    image: PROFILE.AvatarUrl,
    sameAs: [PROFILE.GitHubUrl, PROFILE.LinkedinUrl],
  };

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} ${robotoMono.className} antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
            <Layout>
              {children}
              <Toaster />
            </Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
