import { useState, useEffect, useCallback } from "react";
import { useSearchParams, usePathname } from "next/navigation";

interface UseSkillsTabProps {
  defaultTab: string;
}

export const useSkillsTab = ({ defaultTab }: UseSkillsTabProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get active tab from URL, sessionStorage, or default
  const [activeTab, setActiveTab] = useState<string>(() => {
    // First check URL parameters
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl) return tabFromUrl;

    // Then check sessionStorage (only on client side)
    if (typeof window !== "undefined") {
      const storedTab = sessionStorage.getItem("selectedSkillTab");
      if (storedTab) {
        sessionStorage.removeItem("selectedSkillTab"); // Clear after use
        return storedTab;
      }
    }

    // Fall back to default
    return defaultTab;
  });

  // Listen for custom events to change the tab
  useEffect(() => {
    const handleTabChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.tabId) {
        setActiveTab(customEvent.detail.tabId);
        updateUrl(customEvent.detail.tabId);
      }
    };

    window.addEventListener("skill-tab-change", handleTabChange);
    return () => {
      window.removeEventListener("skill-tab-change", handleTabChange);
    };
  }, [pathname, searchParams]);

  // Update URL without page reload
  const updateUrl = useCallback(
    (tab: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tab);
      window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
    },
    [pathname, searchParams]
  );

  const handleTabChange = useCallback(
    (value: string): void => {
      setActiveTab(value);
      updateUrl(value);
    },
    [updateUrl]
  );

  return {
    activeTab,
    handleTabChange,
  };
};
