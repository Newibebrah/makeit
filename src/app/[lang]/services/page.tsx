import type { Metadata } from "next";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const meta = getDictionary(params.lang).meta.services;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/services",
        id: "/id/services",
        ja: "/jpn/services",
      },
    },
  };
}

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const dict = getDictionary(lang);
  const { services, contact } = dict;

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
            eyebrow={services.eyebrow}
            title={services.title}
            subtitle={services.subtitle}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-6 pb-24 lg:px-8">
        {services.items.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="scroll-mt-28"
          >
            <Reveal>
              <article className="group grid gap-8 rounded-[2rem] border border-white/10 bg-ink-700/40 p-8 transition-all duration-300 hover:border-brand-400/40 hover:shadow-glow sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:p-14">
                <div>
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-3xl`}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                    {service.name}
                  </h2>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-brand-300">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-surface/60">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.perfectFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-surface/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-surface/40">
                        {services.featuresLabel}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
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
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-5">
                      <div className="rounded-2xl border border-white/10 bg-ink/60 p-5">
                        <p className="text-xs uppercase tracking-wider text-surface/40">
                          {services.timelineLabel}
                        </p>
                        <p className="mt-1 font-display text-lg font-bold text-white">
                          {service.timeline}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-brand-400/30 bg-brand-400/10 p-5">
                        <p className="text-xs uppercase tracking-wider text-brand-300">
                          {services.startingAtLabel}
                        </p>
                        <p className="mt-1 font-display text-3xl font-bold text-gradient">
                          ${service.price.usd.toLocaleString()}
                        </p>
                        <p className="mt-1 text-sm text-surface/60">
                          ¥{service.price.jpy.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <Button href={`/${lang}/contact`} size="md">
                      {service.cta}
                    </Button>
                    <span className="text-sm text-surface/50">
                      {services.paymentNote}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        ))}
      </section>

      {/* ADD-ONS */}
      <section className="border-t border-white/5 bg-ink-800/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={services.addOnsEyebrow}
            title={services.addOnsTitle}
            subtitle={services.addOnsSubtitle}
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.addOns.map((addon) => (
              <StaggerItem key={addon.name}>
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-pink">
                  <p className="font-display text-lg font-bold text-white">
                    {addon.name}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-gradient">
                    {addon.price}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-surface/60">
                    {addon.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-12 text-center">
            <Button href={`/${lang}/contact`} variant="outline" size="lg">
              {contact.callCta}
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBanner lang={lang} dict={dict} />
    </main>
  );
}