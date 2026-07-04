"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("theme") === "dark";
    }

    return false;
});

  useEffect(() => {
    if (isDark) {
        document.documentElement.classList.add(
        "dark"
        );
    } else {
        document.documentElement.classList.remove(
        "dark"
        );
    }
   }, [isDark]);

  

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    } else {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    }

    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
      rounded-full
      border
      px-4
      py-2
      "
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}