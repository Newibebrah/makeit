import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const meta = getDictionary(params.lang).meta.contact;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/contact",
        id: "/id/contact",
        ja: "/jpn/contact",
      },
    },
  };
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const dict = getDictionary(lang);
  const { contact } = dict;

  return (
    <main>
      <section className="relative overflow-hidden pt-36 pb-12">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-center text-5xl font-extrabold tracking-tightest2 text-gradient sm:text-6xl">
            {contact.pageTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg text-surface/60">
            {contact.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <Reveal>
          <ContactForm dict={contact} />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex h-full flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-ink-700/50 p-8">
              <h2 className="font-display text-lg font-bold text-white">
                {contact.infoTitle}
              </h2>
              <div className="mt-6 space-y-6">
                <a
                  href="mailto:hello@makeit.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-xl transition-transform duration-300 group-hover:scale-110">
                    ✉️
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-surface/40">
                      {contact.emailLabel}
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-brand-300">
                      {contact.emailValue}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-xl">
                    ⚡
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-surface/40">
                      {contact.responseLabel}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {contact.responseValue}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-xl">
                    🗺️
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-surface/40">
                      {contact.areaLabel}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {contact.areaValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-ink-700/50 p-8">
              <h2 className="font-display text-lg font-bold text-white">
                {contact.callTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-surface/60">
                {contact.callDesc}
              </p>
              <a
                href={`/${lang}/contact`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-accent"
              >
                {contact.callCta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="rounded-3xl bg-gradient-brand p-[1px]">
              <div className="rounded-3xl bg-ink p-8">
                <p className="font-display text-lg font-bold text-white">
                  {contact.nextTitle}
                </p>
                <ol className="mt-4 space-y-3 text-sm text-surface/60">
                  {contact.nextSteps.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-display font-bold text-brand-300">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}