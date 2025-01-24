"use client";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import Image from "next/image";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2">
      <Image
        src={`/images/flags/${locale}.png`}
        alt={`${locale} flag`}
        width={20}
        height={20}
        className="inline"
      />
      <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
