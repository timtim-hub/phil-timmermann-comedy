"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CookieConsentContextType {
  hasConsent: boolean;
  instagramConsent: boolean;
  analyticsConsent: boolean;
  setConsent: (type: "instagram" | "analytics" | "all", value: boolean) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [instagramConsent, setInstagramConsent] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check for existing consent
    const savedConsent = localStorage.getItem("cookie-consent");
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent);
      setInstagramConsent(parsed.instagram || false);
      setAnalyticsConsent(parsed.analytics || false);
    } else {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const setConsent = (type: "instagram" | "analytics" | "all", value: boolean) => {
    let newState = { instagram: instagramConsent, analytics: analyticsConsent };

    if (type === "all") {
      newState = { instagram: value, analytics: value };
    } else if (type === "instagram") {
      newState.instagram = value;
    } else if (type === "analytics") {
      newState.analytics = value;
    }

    setInstagramConsent(newState.instagram);
    setAnalyticsConsent(newState.analytics);
    localStorage.setItem("cookie-consent", JSON.stringify(newState));
  };

  return (
    <CookieConsentContext.Provider
      value={{
        hasConsent: instagramConsent || analyticsConsent,
        instagramConsent,
        analyticsConsent,
        setConsent,
        showBanner,
        setShowBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}
