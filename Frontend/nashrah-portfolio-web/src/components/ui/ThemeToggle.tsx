"use client";

import { useTheme } from "@/lib/ThemeContext";

export default function ThemeToggle() {
  const {mode, toggleMode} = useTheme();
  const isDark = mode === "dark";

  return(
    <button
      onClick = {toggleMode}
      className="flex items-center justify-center rounded-full border px-3 py-1.5 text-xs transition hover:opacity-80"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--surface)",
        color: "var(--text)",
      }}
      title={'switch to ${isDark ? "Light" : "Dark"} mode'}
      >
        {isDark ? "🌙" : "☀️"}
      </button>
  );
}