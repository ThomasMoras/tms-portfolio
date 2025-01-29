"use client";
import { Button } from "../ui/button";
import { FaDownload } from "react-icons/fa";

type DownloadButtonProps = {
  name: string;
};

const DownloadButton = ({ name }: DownloadButtonProps) => {
  return (
    <Button asChild size="lg" variant="resume">
      <a
        href="/resume_en.pdf"
        download="Resume.pdf"
        className="flex items-center"
      >
        {name}
        <FaDownload className="h-5 w-5 ml-2" />
      </a>
    </Button>
  );
};

export default DownloadButton;
