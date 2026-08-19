import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PricingCards from "@/components/PricingCards";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const meta = getDictionary(params.lang).meta.pricing;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/pricing",
        id: "/id/pricing",
        ja: "/jpn/pricing",
      },
    },
  };
}

export default function PricingPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const dict = getDictionary(lang);
  const { pricing } = dict;

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
            {pricing.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg text-surface/60">
            {pricing.subtitle}
          </p>
        </div>
      </section>

      <PricingCards lang={lang} dict={dict} />

      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-ink-700/40 p-10 text-center">
          <h2 className="text-2xl font-bold text-white">{pricing.customTitle}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-surface/60">
            {pricing.customDesc}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-display font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-pink"
            >
              {pricing.customCta}
            </a>
            <a
              href="mailto:hello@makeit.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-display font-semibold text-white transition-all duration-300 hover:border-brand-400 hover:bg-brand-400/10"
            >
              hello@makeit.com
            </a>
          </div>
        </div>
      </section>

      <CtaBanner lang={lang} dict={dict} />
    </main>
  );
}