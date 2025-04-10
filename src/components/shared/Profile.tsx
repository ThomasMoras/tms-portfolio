import { PROFILE } from "@/constants";
import { Link } from "lucide-react";
import React from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";
import DownloadButton from "./DownloadButton";
import TypeWriter from "./TypeWritter";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Profile = () => {
  const t = useTranslations("Home");

  return (
    <div>
      {" "}
      {/* Profile Section */}
      <div className="w-full md:w-auto shrink-0 text-center md:sticky md:top-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          {PROFILE.fullName}
        </h1>
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full animate-pulse" />
          <Image
            src="/images/profile.jpg"
            alt="Profile picture"
            fill
            priority
            className="rounded-full object-cover border-4 border-background relative z-10 transition-transform hover:scale-105"
          />
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <FaGithub
            className="w-6 h-6 md:w-7 md:h-7 cursor-pointer transition-transform hover:scale-125"
            onClick={() => window.open(PROFILE.GitHubUrl)}
          />
          <FaLinkedin
            className="w-6 h-6 md:w-7 md:h-7 cursor-pointer transition-transform hover:scale-125"
            color="#0A66C2"
            onClick={() => window.open(PROFILE.LinkedinUrl)}
          />
        </div>
      </div>
      {/* Description Content */}
      <div className="flex-1 text-center md:text-left max-w-2xl lg:max-w-3xl md:pl-0 lg:pl-8">
        <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-bold">
            I&apos;m a
          </h2>
          <TypeWriter
            strings={[
              { text: "Blockchain Developer", color: "cyan-500" },
              { text: "Full Stack Developer", color: "purple-500" },
              { text: "Smart Contract Developer", color: "emerald-500" },
              { text: "Web3 Enthusiast", color: "orange-500" },
            ]}
            className="text-xl md:text-2xl lg:text-3xl font-bold"
          />
        </div>

        <blockquote className="text-base md:text-lg italic relative px-4 md:px-6 mb-6 md:mb-12">
          <span className="absolute left-0 top-0 text-2xl md:text-3xl text-primary leading-none">
            &ldquo;
          </span>
          <p className="text-muted-foreground font-medium px-2">
            {t("citation")}
          </p>
          <span className="absolute right-0 bottom-0 text-2xl md:text-3xl text-primary leading-none">
            &rdquo;
          </span>
        </blockquote>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-5">
          <DownloadButton name={t("resumeButton")} />
          <Button
            asChild
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white shadow-lg dark:shadow-cyan-900/30 flex items-center gap-2 transition-colors"
          >
            <Link href="/about" className="flex items-center gap-2">
              <span>{t("detailButton")}</span>
              <BiSolidUserDetail className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
