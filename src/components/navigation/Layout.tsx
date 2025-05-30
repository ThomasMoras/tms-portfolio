"use client";

import React from "react";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePageTransition } from "@/hooks/usePageTransition";
import { ProgressBar } from "../shared/ProgressBar";
import Footer from "./Footer";
import { ActiveSectionProvider } from "@/contexts/ActiveSectionContext";
import { GhibliModeProvider } from "@/contexts/GhibliModeContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname, initial, animate, exit, transition } = usePageTransition();

  return (
    <div className="app">
      <GhibliModeProvider>
        <ActiveSectionProvider>
          <ProgressBar />
          <Header />
          <main className="main relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={pathname}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={transition}
                className="w-full h-full"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </ActiveSectionProvider>
      </GhibliModeProvider>
    </div>
  );
};

export default Layout;
