import { IconType } from "react-icons";
import { FaEthereum } from "react-icons/fa";

export interface NavItem {
  key: string;
  type: "section" | "link";
  href?: string;
  icon?: IconType;
  order: number;
  threshold?: number;
}

export const NAV_ITEMS: NavItem[] = [
  {
    key: "home",
    type: "section",
    order: 1,
    threshold: 0.5,
  },
  {
    key: "github",
    type: "section",
    order: 2,
    threshold: 0.3,
  },
  {
    key: "skills",
    type: "section",
    order: 3,
    threshold: 0.3,
  },
  {
    key: "career",
    type: "section",
    order: 4,
    threshold: 0.3,
  },
  {
    key: "projects",
    type: "section",
    order: 5,
    threshold: 1,
  },
];

export const SECTION_ITEMS = NAV_ITEMS.filter(
  (item): item is (typeof NAV_ITEMS)[number] & { type: "section" } => item.type === "section"
);

export const NAVBAR_ICON = {
  logo: FaEthereum,
  logoColor: "#627EEA",
  logoSize: "h-5 w-5",
  emoji: "🍁",
};
