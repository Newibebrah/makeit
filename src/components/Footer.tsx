import Link from "next/link";
import Logo from "./Logo";
import type { Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

type FooterProps = {
  lang: Lang;
  dict: Dictionary;
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@makeit.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export default function Footer({ lang, dict }: FooterProps) {
  const serviceLinks = [
    { href: `/${lang}/services#static`, label: dict.services.items[0].name },
    { href: `/${lang}/services#cms`, label: dict.services.items[1].name },
    { href: `/${lang}/services#custom`, label: dict.services.items[2].name },
  ];

  const companyLinks = [
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/portfolio`, label: dict.nav.portfolio },
    { href: `/${lang}/pricing`, label: dict.nav.pricing },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo href={`/${lang}`} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-surface/50">
              {dict.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-surface/60 transition-all duration-300 hover:border-brand-400 hover:text-white hover:shadow-glow"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.servicesTitle}
            </h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.companyTitle}
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.connectTitle}
            </h4>
            <p className="mt-5 text-sm text-surface/50">
              hello@makeit.com
              <br />
              {dict.contact.responseValue}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-accent"
            >
              {dict.contact.callCta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-surface/40">
            © 2026 MakeIt. {dict.footer.rights}
          </p>
          <p className="text-xs text-surface/40">
            {dict.footer.madeWith}{" "}
            <span className="text-accent" aria-hidden="true">
              &#9829;
            </span>{" "}
            {dict.footer.forBusinesses}{" "}
            <a
              href="/api/view?to=mobile"
              className="font-semibold text-brand-300 transition-colors hover:text-accent"
            >
              {dict.footer.viewMobile}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}