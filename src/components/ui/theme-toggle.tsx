"use client";

import React from "react";
import { useTheme } from "./theme-provider";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-100/80 dark:bg-white/10 hover:bg-gray-200/80 dark:hover:bg-white/20 border border-gray-200 dark:border-white/20 hover:border-blue-500/60 dark:hover:border-blue-500/60 backdrop-blur-sm transition-all duration-300 text-gray-700 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 group"
      aria-label="Toggle theme"
    >
      <MdLightMode
        className={`absolute w-5 h-5 transform transition-all duration-300 ${
          theme === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <MdDarkMode
        className={`absolute w-5 h-5 transform transition-all duration-300 ${
          theme === "light"
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}

