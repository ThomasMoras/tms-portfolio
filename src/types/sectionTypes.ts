import { ReactNode } from "react";
import { NAV_ITEMS } from "@/constants/navbarConstants";

// Filter at the type level for only section-type items
export type SectionName = Extract<(typeof NAV_ITEMS)[number]["key"], string>;

export interface SectionRef {
  ref: (node?: Element | null) => void;
  inView: boolean;
  threshold: number;
}

export interface SectionRefs {
  [key: string]: SectionRef;
}

export interface ActiveSectionContextType {
  activeSection: SectionName;
  scrollToSection: (section: SectionName) => void;
  refs: Record<string, (node?: Element | null) => void>;
}

export interface ActiveSectionProviderProps {
  children: ReactNode;
}
