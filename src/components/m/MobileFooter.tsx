import Link from "next/link";
import type { Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

type MobileFooterProps = {
  lang: Lang;
  dict: Dictionary;
};

export default function MobileFooter({ lang, dict }: MobileFooterProps) {
  const base = `/m/${lang}`;

  return (
    <footer className="border-t border-white/10 px-4 pb-28 pt-10">
      <div className="mx-auto max-w-md">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
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
        </div>

        <p className="mt-3 text-xs leading-relaxed text-surface/50">
          {dict.footer.tagline}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link
            href={`${base}/services`}
            className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-brand-400/50"
          >
            {dict.nav.services}
          </Link>
          <Link
            href={`${base}/pricing`}
            className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-brand-400/50"
          >
            {dict.nav.pricing}
          </Link>
          <Link
            href={`${base}/portfolio`}
            className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-brand-400/50"
          >
            {dict.nav.portfolio}
          </Link>
          <Link
            href={`${base}/contact`}
            className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-brand-400/50"
          >
            {dict.nav.contact}
          </Link>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-ink-700/40 p-4">
          <p className="text-xs text-surface/50">{dict.footer.fullExperience}</p>
          <a
            href="/api/view?to=full"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-accent"
          >
            {dict.footer.switchFull}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-center text-[10px] text-surface/35">
          © 2026 MakeIt. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}