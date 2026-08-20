"use client";

import { useEffect, useState } from "react";

type Theme = {
  id: string;
  name: string;
  color: string;
};

const themes: Theme[] = [
  { id: "purple", name: "Purple", color: "#8B5CF6" },
  { id: "blue", name: "Blue", color: "#60A5FA" },
  { id: "emerald", name: "Emerald", color: "#34D399" },
  { id: "rose", name: "Rose", color: "#FB7185" },
  { id: "amber", name: "Amber", color: "#FBBF24" },
  { id: "cyan", name: "Cyan", color: "#22D3EE" },
  { id: "pink", name: "Pink", color: "#F472B6" },
  { id: "light", name: "Light", color: "#F8FAFC" },
  { id: "day", name: "Day", color: "#F59E0B" },
];

type ThemeSwitcherProps = {
  label: string;
  compact?: boolean;
};

export default function ThemeSwitcher({
  label,
  compact = false,
}: ThemeSwitcherProps) {
  const [theme, setTheme] = useState("purple");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "purple");
  }, []);

  const apply = (id: string) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem("makeit-theme", id);
    } catch {
      // ignore storage errors (e.g. private mode)
    }
    setOpen(false);
  };

  const current = themes.find((t) => t.id === theme) ?? themes[0];

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={label}>
        {themes.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => apply(t.id)}
            title={t.name}
            aria-label={t.name}
            aria-pressed={t.id === theme}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-transform hover:scale-110 ${
              t.id === theme ? "border-white" : "border-transparent"
            }`}
            style={{
              backgroundColor: t.color,
              boxShadow:
                t.id === "light"
                  ? "inset 0 0 0 1px rgba(15,23,42,0.25)"
                  : undefined,
            }}
          >
            {t.id === theme && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={label}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm font-medium text-surface/70 transition-colors hover:border-brand-400/50 hover:text-white"
      >
        <span
          aria-hidden="true"
          className="h-3.5 w-3.5 rounded-full ring-1 ring-white/20"
          style={{
            backgroundColor: current.color,
            boxShadow:
              current.id === "light"
                ? "inset 0 0 0 1px rgba(15,23,42,0.25)"
                : undefined,
          }}
        />
        <span className="hidden xl:inline">{current.name}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/95 shadow-card backdrop-blur-xl">
          <p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-surface/50">
            {label}
          </p>
          <div className="grid grid-cols-4 gap-2 p-3">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => apply(t.id)}
                title={t.name}
                aria-label={t.name}
                aria-pressed={t.id === theme}
                className={`flex h-10 w-full items-center justify-center rounded-full border-2 transition-transform hover:scale-110 ${
                  t.id === theme ? "border-white" : "border-transparent"
                }`}
                style={{
                  backgroundColor: t.color,
                  boxShadow:
                    t.id === "light"
                      ? "inset 0 0 0 1px rgba(15,23,42,0.25)"
                      : undefined,
                }}
              >
                {t.id === theme && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}