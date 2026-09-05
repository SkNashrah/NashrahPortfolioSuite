"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/lib/ThemeContext";
import { THEMES, ThemeId } from "@/constants/theme";

export default function ThemePopover() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={popoverRef}>
      {/* Palette Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition hover:opacity-80"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--surface)",
          color: "var(--text)",
        }}
        title="Choose Theme Palette"
      >
        <span>🎨</span>
        <span className="hidden sm:inline">Theme</span>
      </button>

      {/* Popover Panel */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 rounded-2xl border p-3 shadow-2xl backdrop-blur-xl z-50 transition-all"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--text)",
          }}
        >
          <div className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider opacity-60">
            Color Palette
          </div>

          <div className="flex flex-col gap-1">
            {THEMES.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id as ThemeId);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-between rounded-xl p-2 text-left text-xs transition hover:opacity-90"
                  style={{
                    backgroundColor: isActive ? "var(--card)" : "transparent",
                    border: isActive ? "1px solid var(--border)" : "1px solid transparent",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Gradient color dot */}
                    <span
                      className="h-4 w-4 rounded-full shadow-sm"
                      style={{ background: t.gradient }}
                    />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-[10px] opacity-60">{t.tag}</div>
                    </div>
                  </div>
                  {isActive && <span className="text-xs font-bold" style={{ color: "var(--secondary)" }}>✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}