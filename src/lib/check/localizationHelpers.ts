// /**
//  * localizationHelpers.ts
//  * Helper functions to work with localized content throughout the application
//  */

// import { LocalizedText, createLocalizationUtils } from "@/lib/skillsUtils";

// /**
//  * Type guard to check if an object has localized content
//  */
// export const isLocalizedObject = (obj: any): obj is { en: string; fr: string } => {
//   return (
//     typeof obj === "object" &&
//     obj !== null &&
//     typeof obj.en === "string" &&
//     typeof obj.fr === "string"
//   );
// };

// /**
//  * Type guard to check if an object has partial localized content
//  */
// export const isPartialLocalizedObject = (obj: any): obj is { en?: string; fr?: string } => {
//   return (
//     typeof obj === "object" &&
//     obj !== null &&
//     (typeof obj.en === "string" || typeof obj.fr === "string")
//   );
// };

// /**
//  * Create a localized text object from string values
//  */
// export const createLocalizedText = (en: string, fr: string): LocalizedText => ({
//   en,
//   fr,
// });

// /**
//  * Convert any value to LocalizedText format
//  */
// export const toLocalizedText = (value: string | LocalizedText): LocalizedText => {
//   if (typeof value === "string") {
//     return value;
//   }
//   return value;
// };

// /**
//  * Hook-like function for components to get localization utilities
//  * Usage: const { getLocalizedText, currentLocale, t } = useLocalization(locale, translations);
//  */
// export const useLocalization = (locale: string, translations: Record<string, string> = {}) => {
//   return createLocalizationUtils(locale, translations);
// };

// /**
//  * Get all available locales from a localized object
//  */
// export const getAvailableLocales = (obj: LocalizedText): string[] => {
//   if (typeof obj === "string" || !obj) return [];
//   return Object.keys(obj).filter((key) => typeof obj[key as keyof typeof obj] === "string");
// };

// /**
//  * Check if a localized object has content for a specific locale
//  */
// export const hasLocaleContent = (obj: LocalizedText, locale: string): boolean => {
//   if (typeof obj === "string") return true;
//   if (!obj) return false;
//   return Boolean(obj[locale as keyof typeof obj]);
// };

// /**
//  * Merge two localized text objects, with the second taking precedence
//  */
// export const mergeLocalizedText = (base: LocalizedText, override: LocalizedText): LocalizedText => {
//   if (typeof base === "string" && typeof override === "string") {
//     return override;
//   }

//   if (typeof base === "string") {
//     return override || base;
//   }

//   if (typeof override === "string") {
//     return override;
//   }

//   if (!base) return override;
//   if (!override) return base;

//   return {
//     ...base,
//     ...override,
//   };
// };

// /**
//  * Validate that a localized text object has content for required locales
//  */
// export const validateLocalizedText = (
//   obj: LocalizedText,
//   requiredLocales: string[] = ["en", "fr"]
// ): { isValid: boolean; missingLocales: string[] } => {
//   if (typeof obj === "string") {
//     return { isValid: true, missingLocales: [] };
//   }

//   if (!obj) {
//     return { isValid: false, missingLocales: requiredLocales };
//   }

//   const missingLocales = requiredLocales.filter((locale) => !hasLocaleContent(obj, locale));

//   return {
//     isValid: missingLocales.length === 0,
//     missingLocales,
//   };
// };

// /**
//  * Create a fallback localized text object
//  */
// export const createFallbackLocalizedText = (
//   fallbackText: string = "Missing translation"
// ): LocalizedText => ({
//   en: fallbackText,
//   fr: fallbackText,
// });

// /**
//  * Transform an array of objects with localized properties
//  */
// export const transformLocalizedArray = <T extends Record<string, any>>(
//   array: T[],
//   locale: string,
//   localizedProperties: (keyof T)[]
// ): (T & Record<string, string>)[] => {
//   const { getLocalizedText } = useLocalization(locale);

//   return array.map((item) => {
//     const transformed = { ...item };

//     localizedProperties.forEach((prop) => {
//       if (item[prop]) {
//         (transformed as any)[`${String(prop)}Localized`] = getLocalizedText(item[prop]);
//       }
//     });

//     return transformed as T & Record<string, string>;
//   });
// };
