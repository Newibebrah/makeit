"use client";

import { useEffect, useState } from "react";

type ThemeColor = {
  id: string;
  name: string;
  color: string;
};

const colors: ThemeColor[] = [
  { id: "purple", name: "Purple", color: "#8B5CF6" },
  { id: "blue", name: "Blue", color: "#60A5FA" },
  { id: "emerald", name: "Emerald", color: "#34D399" },
  { id: "rose", name: "Rose", color: "#FB7185" },
  { id: "amber", name: "Amber", color: "#FBBF24" },
  { id: "cyan", name: "Cyan", color: "#22D3EE" },
  { id: "pink", name: "Pink", color: "#F472B6" },
];

type ThemeSwitcherProps = {
  label: string;
  darkLabel: string;
  lightLabel: string;
  compact?: boolean;
};

export default function ThemeSwitcher({
  label,
  darkLabel,
  lightLabel,
  compact = false,
}: ThemeSwitcherProps) {
  const [color, setColor] = useState("purple");
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const c = root.dataset.theme || "purple";
    const m = root.dataset.mode === "light" ? "light" : "dark";
    if (colors.some((t) => t.id === c)) setColor(c);
    setMode(m);
  }, []);

  const apply = (nextColor: string, nextMode: "dark" | "light") => {
    setColor(nextColor);
    setMode(nextMode);
    const root = document.documentElement;
    root.dataset.theme = nextColor;
    root.dataset.mode = nextMode;
    try {
      localStorage.setItem("makeit-color", nextColor);
      localStorage.setItem("makeit-mode", nextMode);
    } catch {
      // ignore storage errors (e.g. private mode)
    }
    setOpen(false);
  };

  const current = colors.find((t) => t.id === color) ?? colors[0];

  const swatchClass = (isActive: boolean, isLight: boolean) =>
    `flex h-8 w-8 items-center justify-center rounded-full border transition-transform hover:scale-110 ${
      isActive
        ? isLight
          ? "border-ink-800"
          : "border-white"
        : "border-transparent"
    }`;

  const modeRow = (m: "dark" | "light", sectionLabel: string) => (
    <div>
      <p className="px-4 pb-1.5 pt-2 text-[11px] font-semibold uppercase tracking-wider text-surface/50">
        {sectionLabel}
      </p>
      <div className="flex flex-wrap gap-1.5 px-4 pb-3">
        {colors.map((t) => (
          <button
            key={`${m}-${t.id}`}
            type="button"
            onClick={() => apply(t.id, m)}
            title={`${m === "dark" ? darkLabel : lightLabel} ${t.name}`}
            aria-label={`${m === "dark" ? darkLabel : lightLabel} ${t.name}`}
            aria-pressed={m === mode && t.id === color}
            className={swatchClass(m === mode && t.id === color, m === "light")}
            style={{ backgroundColor: t.color }}
          >
            {m === mode && t.id === color && (
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
    </div>
  );

  if (compact) {
    return (
      <div className="w-full" role="group" aria-label={label}>
        {modeRow("dark", darkLabel)}
        {modeRow("light", lightLabel)}
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
              mode === "light"
                ? "inset 0 0 0 1px rgba(15,23,42,0.25)"
                : undefined,
          }}
        />
        <span className="hidden xl:inline">
          {current.name}
        </span>
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
        <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/95 shadow-card backdrop-blur-xl">
          <p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-surface/50">
            {label}
          </p>
          {modeRow("dark", darkLabel)}
          <div className="mx-4 h-px bg-white/10" />
          {modeRow("light", lightLabel)}
        </div>
      )}
    </div>
  );
}