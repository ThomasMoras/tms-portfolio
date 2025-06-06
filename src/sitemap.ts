import { MetadataRoute } from "next";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFrequency;
  priority: number;
  alternates?: {
    languages: Record<string, string>;
  };
}

// Configuration des langues supportées
const supportedLocales = ["en", "fr"];
const defaultLocale = "en";

// Fonction pour récupérer la liste des projets
async function getProjectIds(): Promise<string[]> {
  // Remplacez cette fonction par votre logique pour récupérer les IDs de projets
  // Exemples possibles :
  // - Lecture d'un fichier JSON
  // - Requête API
  // - Lecture d'un dossier de fichiers markdown

  // Temporaire :
  return ["lyonmarquage"];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thomasmoras.dev";
  const WEEKLY: ChangeFrequency = "weekly";
  const MONTHLY: ChangeFrequency = "monthly";

  const pages: SitemapEntry[] = [];

  // 1. Pages principales multilingues
  const mainPages = [
    { path: "", priority: 1.0 }, // Page d'accueil
  ];

  // Ajouter les pages principales pour chaque langue
  mainPages.forEach((page) => {
    supportedLocales.forEach((locale) => {
      const url =
        locale === defaultLocale ? `${baseUrl}${page.path}` : `${baseUrl}/${locale}${page.path}`;

      // Créer les URLs alternatives pour chaque langue
      const alternates: Record<string, string> = {};
      supportedLocales.forEach((altLocale) => {
        const altUrl =
          altLocale === defaultLocale
            ? `${baseUrl}${page.path}`
            : `${baseUrl}/${altLocale}${page.path}`;
        alternates[altLocale] = altUrl;
      });

      pages.push({
        url,
        lastModified: new Date(),
        changeFrequency: WEEKLY,
        priority: page.priority,
        alternates: {
          languages: alternates,
        },
      });
    });
  });

  // 2. Pages de projets individuels
  try {
    const projectIds = await getProjectIds();

    projectIds.forEach((projectId) => {
      supportedLocales.forEach((locale) => {
        const url =
          locale === defaultLocale
            ? `${baseUrl}/projects/${projectId}`
            : `${baseUrl}/${locale}/projects/${projectId}`;

        // Créer les URLs alternatives pour chaque projet
        const alternates: Record<string, string> = {};
        supportedLocales.forEach((altLocale) => {
          const altUrl =
            altLocale === defaultLocale
              ? `${baseUrl}/projects/${projectId}`
              : `${baseUrl}/${altLocale}/projects/${projectId}`;
          alternates[altLocale] = altUrl;
        });

        pages.push({
          url,
          lastModified: new Date(),
          changeFrequency: MONTHLY,
          priority: 0.8,
          alternates: {
            languages: alternates,
          },
        });
      });
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
  }

  return pages;
}
