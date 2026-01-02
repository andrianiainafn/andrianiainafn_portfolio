"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import enTranslations from "@/utils/translations/en.json";
import frTranslations from "@/utils/translations/fr.json";

export type Language = "en" | "fr";

type Translations = typeof enTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  en: enTranslations,
  fr: frTranslations,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
        setLanguageState(savedLanguage);
      } else {
        // Detect browser language
        const browserLang = navigator.language.split("-")[0];
        if (browserLang === "fr") {
          setLanguageState("fr");
        } else {
          setLanguageState("en");
        }
      }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mounted) {
      localStorage.setItem("language", language);
      document.documentElement.setAttribute("lang", language);
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

