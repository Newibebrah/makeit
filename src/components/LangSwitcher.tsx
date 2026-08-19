"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { languages, type Lang } from "@/i18n/config";

type LangSwitcherProps = {
  lang: Lang;
  label: string;
  compact?: boolean;
};

export default function LangSwitcher({
  lang,
  label,
  compact = false,
}: LangSwitcherProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const match = pathname.match(/^\/(m\/)?((?:en|id|jpn))(?:\/(.*))?$/);
  const prefix = match ? (match[1] ? "/m" : "") : "";
  const rest = match ? (match[3] ? "/" + match[3] : "") : "";
  const current = languages.find((l) => l.code === lang) ?? languages[0];
  const others = languages.filter((l) => l.code !== lang);

  const buildHref = (code: string) => `${prefix}/${code}${rest}`;

  if (compact) {
    return (
      <div className="flex items-center gap-1" role="group" aria-label={label}>
        {languages.map((l) => (
          <Link
            key={l.code}
            href={buildHref(l.code)}
            aria-current={l.code === lang ? "true" : undefined}
            className={`flex h-8 w-9 items-center justify-center rounded-lg border text-xs font-semibold transition-colors ${
              l.code === lang
                ? "border-brand-400/60 bg-brand-400/15 text-white"
                : "border-white/10 text-surface/50 hover:text-white"
            }`}
            title={l.label}
          >
            {l.short}
          </Link>
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
        <span aria-hidden="true">{current.flag}</span>
        <span className="hidden xl:inline">{current.short}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
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
        <div className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/95 shadow-card backdrop-blur-xl">
          {others.map((l) => (
            <Link
              key={l.code}
              href={buildHref(l.code)}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-4 py-3 text-sm text-surface/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              <span aria-hidden="true">{l.flag}</span>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}