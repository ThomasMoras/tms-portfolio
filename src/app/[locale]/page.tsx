"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ExpertiseSection from "@/components/shared/Expertise";
import DownloadButton from "@/components/shared/DownloadButton";
import { BiSolidUserDetail } from "react-icons/bi";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-10xl mx-auto px-4 py-16">
        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mb-20">
          {/* Profile Section */}
          <div className="shrink-0 text-center md:sticky md:top-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">John Doe</h1>
            <div className="w-56 h-56 md:w-64 md:h-64 relative mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full animate-pulse" />
              <Image
                src="/images/profile.jpg"
                alt="Profile picture"
                fill
                priority
                className="rounded-full object-cover border-4 border-background relative z-10"
              />
            </div>
            <div className="flex gap-4 justify-center mt-6">
              <FaGithub
                className="w-7 h-7 cursor-pointer transition-transform hover:scale-125"
                onClick={() => window.open("b", "_blank")}
              />
              <FaLinkedin
                className="w-7 h-7 cursor-pointer transition-transform hover:scale-125"
                color="#0A66C2"
                onClick={() => window.open("a", "_blank")}
              />
            </div>
          </div>

          {/* Description Content */}
          <div className="flex-1 text-center max-w-4xl pl-10">
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Blockchain & Full Stack Developer
            </h2>
            <p className="text-lg mb-8">
              Building the future of decentralized applications with modern web
              technologies and blockchain solutions. Specialized in smart
              contracts, DApps, and full-stack development.
            </p>

            {/* Quote */}
            <Card className="bg-accent/50 mb-8">
              <CardContent className="py-6 px-4">
                <blockquote className="text-lg md:text-xl italic">
                  &quot;Code is poetry, blockchain is the future, and I&apos;m
                  here to combine both into meaningful solutions. &quot;
                </blockquote>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-5 space-x-5">
              <DownloadButton />
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg flex items-center gap-2"
              >
                <Link href="/about" className="flex items-center gap-2">
                  <span>More detail</span>
                  <BiSolidUserDetail
                    style={{ height: "24px", width: "24px" }}
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <ExpertiseSection />
      </div>
    </div>
  );
};

export default HomePage;
