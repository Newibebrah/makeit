"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import LangSwitcher from "../LangSwitcher";
import type { Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

type MobileHeaderProps = {
  lang: Lang;
  dict: Dictionary;
};

export default function MobileHeader({ lang, dict }: MobileHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const base = `/m/${lang}`;

  const links = [
    { href: base, label: dict.nav.home },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/portfolio`, label: dict.nav.portfolio },
    { href: `${base}/pricing`, label: dict.nav.pricing },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-white/10 py-2.5" : "bg-transparent py-3.5"
        }`}
      >
        <div className="flex items-center justify-between px-4">
          <Link href={base} className="flex items-center gap-2" aria-label="MakeIt home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 19L12 5L20 19"
                  stroke="white"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="15" r="1.6" fill="white" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Make<span className="text-gradient">It</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href={`${base}/contact`}
              className="hidden rounded-full bg-gradient-brand px-4 py-2 font-display text-xs font-semibold text-white shadow-glow sm:block"
            >
              {dict.nav.getStarted}
            </Link>
            <LangSwitcher lang={lang} label={dict.langSwitcher.label} />
            <button
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <div className="relative flex h-3.5 w-4.5 flex-col justify-between">
                <span
                  className={`h-0.5 w-full rounded bg-white transition-all duration-300 ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded bg-white transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded bg-white transition-all duration-300 ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col justify-start bg-ink/95 px-6 pt-24 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-3 py-3.5 font-display text-2xl font-bold tracking-tight ${
                      pathname === link.href ? "text-gradient" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 px-3">
              <LangSwitcher compact lang={lang} label={dict.langSwitcher.label} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}