"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Button from "./Button";
import LangSwitcher from "./LangSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import type { Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

type NavbarProps = {
  lang: Lang;
  dict: Dictionary;
};

export default function Navbar({ lang, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/portfolio`, label: dict.nav.portfolio },
    { href: `/${lang}/pricing`, label: dict.nav.pricing },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo href={`/${lang}`} />

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-surface/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-4 bottom-1 h-px origin-left bg-gradient-brand transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeSwitcher
              label={dict.themeSwitcher.label}
              darkLabel={dict.themeSwitcher.dark}
              lightLabel={dict.themeSwitcher.light}
            />
            <LangSwitcher lang={lang} label={dict.langSwitcher.label} />
            <Button href={`/${lang}/contact`} size="md">
              {dict.nav.getStarted}
              <svg
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <div className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded bg-white transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded bg-white transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded bg-white transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-2xl px-4 py-4 font-display text-3xl font-bold tracking-tight ${
                      pathname === link.href
                        ? "text-gradient"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.3 }}
                className="mt-8 space-y-4 px-2"
              >
                <Button href={`/${lang}/contact`} size="lg" className="w-full">
                  {dict.nav.getStarted}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <div className="flex flex-wrap items-center gap-3">
                  <LangSwitcher
                    compact
                    lang={lang}
                    label={dict.langSwitcher.label}
                  />
                  <ThemeSwitcher
                    compact
                    label={dict.themeSwitcher.label}
                    darkLabel={dict.themeSwitcher.dark}
                    lightLabel={dict.themeSwitcher.light}
                  />
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}