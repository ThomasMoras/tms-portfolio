// Define the possible types for localized text
export type LocalizedText =
  | string
  | { en: string; fr: string }
  | { en?: string; fr?: string }
  | null
  | undefined;

export interface LocalizationUtils {
  currentLocale: string;
  translations: Record<string, string>;
  getLocalizedText: (textObj: LocalizedText) => string;
  t: (key: string) => string;
}

/**
 * Creates a set of localization utility functions
 */
export const createLocalizationUtils = (
  locale: string,
  translations: Record<string, string> = {}
): LocalizationUtils => {
  // Ensure locale is properly typed and has a fallback
  const currentLocale = locale === "fr" || locale === "en" ? locale : "en";

  /**
   * Safely retrieves localized text from an object or string
   */
  const getLocalizedText = (textObj: LocalizedText): string => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;

    // Type guard to ensure we have an object with string properties
    if (typeof textObj === "object" && textObj !== null) {
      return (
        textObj[currentLocale as keyof typeof textObj] ||
        textObj["en" as keyof typeof textObj] ||
        ""
      );
    }

    return "";
  };

  /**
   * Translation helper function - wraps around useTranslations
   */
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return {
    currentLocale,
    translations,
    getLocalizedText,
    t,
  };
};

/**
 * Direct function to get localized text without creating utils object
 * Useful for one-off usage
 */
export const getLocalizedText = (textObj: LocalizedText, locale: string = "en"): string => {
  const { getLocalizedText: getText } = createLocalizationUtils(locale);
  return getText(textObj);
};

/**
 * Type guard to check if an object is a localized text object
 */
export const isLocalizedText = (obj: unknown): obj is LocalizedText => {
  if (typeof obj === "string" || obj === null || obj === undefined) {
    return true;
  }

  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  const record = obj as Record<string, unknown>;
  return typeof record.en === "string" || typeof record.fr === "string";
};
