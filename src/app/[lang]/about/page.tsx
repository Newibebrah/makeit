import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const meta = getDictionary(params.lang).meta.about;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/about",
        id: "/id/about",
        ja: "/jpn/about",
      },
    },
  };
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const dict = getDictionary(lang);
  const { about } = dict;

  return (
    <main>
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            subtitle={about.subtitle}
          />
          <Reveal delay={0.2}>
            <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-ink-700/50 p-10 text-center">
              <p className="text-lg leading-relaxed text-surface/70">
                {about.story}
              </p>
              <p className="mt-4 text-base italic text-surface/50">
                &ldquo;{about.storyQuote}&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-2xl" />
              <div className="border-gradient relative flex aspect-square items-center justify-center rounded-[2.5rem]">
                <div className="absolute inset-3 rounded-[2.2rem] bg-gradient-brand-soft" />
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-8 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand font-display text-4xl font-bold text-white shadow-glow">
                    {about.founderName[0]}
                  </div>
                  <p className="mt-6 font-display text-2xl font-bold text-white">
                    {about.founderName}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-300">
                    {about.founderRole}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-surface/60">
                    {about.founderBio}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {about.partnerTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-surface/60">
              {about.partnerP1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-surface/60">
              {about.partnerP2}
            </p>
            <ul className="mt-8 space-y-4">
              {about.bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-surface/70"
                >
                  <svg
                    className="mt-0.5 shrink-0 text-brand-300"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-white/5 bg-ink-800/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={about.valuesEyebrow}
            title={about.valuesTitle}
            subtitle={about.valuesSubtitle}
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
            {about.values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="flex h-full gap-5 rounded-3xl border border-white/10 bg-ink/70 p-8 transition-all duration-300 hover:border-brand-400/40 hover:shadow-glow">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-2xl"
                    aria-hidden="true"
                  >
                    {value.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-surface/60">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={about.processEyebrow}
            title={about.processTitle}
            subtitle={about.processSubtitle}
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {about.process.map((p, i) => (
              <StaggerItem key={p.step}>
                <div className="relative h-full rounded-3xl border border-white/10 bg-ink-700/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-pink">
                  <span className="font-display text-4xl font-bold text-gradient">
                    {p.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface/60">
                    {p.desc}
                  </p>
                  {i < about.process.length - 1 && (
                    <span
                      className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-surface/30 lg:block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBanner
        lang={lang}
        dict={dict}
        title={about.ctaTitle}
        subtitle={about.ctaSubtitle}
      />
    </main>
  );
}