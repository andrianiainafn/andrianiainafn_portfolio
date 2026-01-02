"use client";

import React, { useState } from "react";
import { useLanguage, Language } from "./language-provider";

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-100/80 dark:bg-white/10 hover:bg-gray-200/80 dark:hover:bg-white/20 border border-gray-200 dark:border-white/20 hover:border-blue-500/60 dark:hover:border-blue-500/60 backdrop-blur-sm transition-all duration-300 text-gray-700 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 group"
        aria-label="Change language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
      </button>
      
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 right-0 bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-lg shadow-xl z-20 min-w-[150px] overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors ${
                  language === lang.code
                    ? "bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-white/70"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

