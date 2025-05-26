import { useLocale } from "next-intl";
import { createLocalizationUtils, LocalizationUtils } from "@/lib/localizationUtils";

/**
 * Custom hook for localization utilities
 */
export const useLocalization = (translations: Record<string, string> = {}): LocalizationUtils => {
  const locale = useLocale() as "fr" | "en";
  return createLocalizationUtils(locale, translations);
};

/**
 * Alternative hook that returns just the commonly used functions
 */
export const useLocalizedText = () => {
  const locale = useLocale() as "fr" | "en";
  const { getLocalizedText, currentLocale } = createLocalizationUtils(locale, {});

  return {
    getLocalizedText,
    currentLocale,
  };
};
