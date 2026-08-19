"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

type BottomNavProps = {
  lang: Lang;
  dict: Dictionary;
};

export default function BottomNav({ lang, dict }: BottomNavProps) {
  const pathname = usePathname();
  const base = `/m/${lang}`;

  const tabs = [
    {
      href: base,
      label: dict.nav.home,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
        </svg>
      ),
    },
    {
      href: `${base}/services`,
      label: dict.nav.services,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
    },
    {
      href: `${base}/pricing`,
      label: dict.nav.pricing,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2v20M17 7c0-1.5-2-2.5-5-2.5S7 5.5 7 7s2 2.5 5 3 5 1.5 5 3-2 2.5-5 2.5S7 13.5 7 12" />
        </svg>
      ),
    },
    {
      href: `${base}/portfolio`,
      label: dict.nav.portfolio,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="8" height="8" rx="2" />
          <rect x="13" y="3" width="8" height="8" rx="2" />
          <rect x="3" y="13" width="8" height="8" rx="2" />
          <rect x="13" y="13" width="8" height="8" rx="2" />
        </svg>
      ),
    },
    {
      href: `${base}/contact`,
      label: dict.nav.contact,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
  ];

  const isActive = (href: string) =>
    href === base ? pathname === href || pathname === `${href}/` : pathname.startsWith(href);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/85 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]"
      aria-label="Mobile navigation"
    >
      <div className="mx-auto grid max-w-md grid-cols-5">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative flex min-h-[58px] flex-col items-center justify-center gap-1 pt-2 pb-1.5 text-[10px] font-semibold transition-colors ${
                active ? "text-white" : "text-surface/45 hover:text-surface/80"
              }`}
            >
              {active && (
                <span className="absolute top-0 h-0.5 w-10 rounded-full bg-gradient-brand" />
              )}
              <span className={active ? "text-accent" : ""}>{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}