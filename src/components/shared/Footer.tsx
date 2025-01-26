import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return <footer className="footer">{t("description")}</footer>;
};

export default Footer;
