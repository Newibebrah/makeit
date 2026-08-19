import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PortfolioGrid from "@/components/PortfolioGrid";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const meta = getDictionary(params.lang).meta.portfolio;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/portfolio",
        id: "/id/portfolio",
        ja: "/jpn/portfolio",
      },
    },
  };
}

export default function PortfolioPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const dict = getDictionary(lang);
  const { portfolio } = dict;

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
            {portfolio.pageTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg text-surface/60">
            {portfolio.pageSubtitle}
          </p>
        </div>
      </section>

      <PortfolioGrid dict={dict} />

      <CtaBanner lang={lang} dict={dict} />
    </main>
  );
}