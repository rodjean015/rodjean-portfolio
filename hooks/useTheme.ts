import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState<boolean | null>(null);

  // Initialize theme once
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark" || saved === "light") {
      setDark(saved === "dark");
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDark(systemDark);
    }
  }, []);

  // Apply + persist (only when initialized)
  useEffect(() => {
    if (dark === null) return;

    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return {
    dark: dark ?? false, // safe fallback for UI
    setDark,
    isReady: dark !== null, // optional: helps avoid flicker
  };
}