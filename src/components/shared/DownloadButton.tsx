"use client";
import { useLocale } from "next-intl";
import { Button } from "../ui/button";
import { FaDownload } from "react-icons/fa";

type DownloadButtonProps = {
  name: string;
};

const DownloadButton = ({ name }: DownloadButtonProps) => {
  const locale = useLocale() as "fr" | "en";

  const resumePaths = {
    en: "/resume_en.pdf",
    fr: "/resume_fr.pdf",
  };

  const downloadNames = {
    en: "Resume.pdf",
    fr: "CV.pdf",
  };

  return (
    <Button asChild size="lg" variant="resume">
      <a href={resumePaths[locale]} download={downloadNames[locale]} className="flex items-center">
        {name}
        <FaDownload className="h-5 w-5 ml-2" />
      </a>
    </Button>
  );
};

export default DownloadButton;
