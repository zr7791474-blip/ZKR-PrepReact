import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "prepreact.theme";

function initialTheme() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch (error) {
    /* le stockage peut etre indisponible : on retombe sur le systeme. */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* ignore: mode sans stockage local. */
    }

    const overlay = window.getComputedStyle(root).getPropertyValue('--bg-overlay').trim();
    document.body.style.backgroundColor = window.getComputedStyle(document.body).getPropertyValue('--paper').trim() || '#f4f0e6';
    document.body.style.backgroundImage = 'linear-gradient(' + overlay + ', ' + overlay + '), url("/bg/bg.jpg")';
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme doit etre utilise dans un ThemeProvider");
  }
  return context;
}
