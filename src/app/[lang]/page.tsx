import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import SectionHeading from "@/components/SectionHeading";
import CursorGlow from "@/components/CursorGlow";
import CtaBanner from "@/components/CtaBanner";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const meta = getDictionary(params.lang).meta.home;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      languages: {
        en: "/en",
        id: "/id",
        ja: "/jpn",
      },
    },
  };
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const dict = getDictionary(lang);
  const { hero, trust, services, whyUs, portfolio, testimonials, clients } =
    dict;

  return (
    <>
      <CursorGlow />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
          <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
          <div
            className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-500/30 blur-[140px]"
            aria-hidden="true"
          />
          <div
            className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[140px]"
            aria-hidden="true"
          />
          <span
            className="absolute right-[12%] top-[18%] text-5xl text-accent"
            aria-hidden="true"
          >
            ✦
          </span>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <Reveal>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  {hero.badge}
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tightest2 text-white sm:text-6xl lg:text-7xl">
                  {hero.title1}{" "}
                  <span className="text-gradient">{hero.title2}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-surface/60 sm:text-xl">
                  {hero.sub}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button href={`/${lang}/contact`} size="lg">
                    {hero.ctaStart}
                    <svg
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      width="18"
                      height="18"
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
                  <Button href={`/${lang}/portfolio`} variant="outline" size="lg">
                    {hero.ctaWork}
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-14 grid max-w-md grid-cols-3 gap-6">
                  {hero.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-3xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-surface/50">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3} className="hidden lg:block">
              <div className="relative">
                <div className="relative aspect-square animate-float-slow">
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-2xl" />
                  <div className="border-gradient relative flex aspect-square items-center justify-center rounded-[2.5rem] shadow-card">
                    <div className="absolute inset-4 rounded-[2rem] bg-gradient-brand-soft" />
                    <div className="relative z-10 grid h-full w-full grid-cols-2 gap-4 p-8">
                      {hero.visual.map((item) => (
                        <div
                          key={item.label}
                          className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-ink/60 p-4 text-center backdrop-blur-sm"
                        >
                          <span className="text-3xl">{item.icon}</span>
                          <p className="mt-2 font-display text-sm font-semibold text-white">
                            {item.label}
                          </p>
                          <p className="text-xs text-surface/50">{item.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-white/5 bg-ink-800/40 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <p className="text-center text-sm font-semibold uppercase tracking-widest text-surface/40">
                {trust.title}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="flex w-max animate-marquee gap-14">
                  {[...clients, ...clients].map((client, i) => (
                    <div
                      key={`${client.name}-${i}`}
                      className="flex items-center gap-2.5 whitespace-nowrap"
                    >
                      <span className="text-2xl" aria-hidden="true">
                        {client.flag}
                      </span>
                      <span className="font-display text-lg font-semibold text-surface/50">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mx-auto mt-10 max-w-xl text-center">
                <div className="text-accent" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="mt-3 text-sm italic leading-relaxed text-surface/60">
                  &ldquo;{trust.quote}&rdquo;
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-surface/40">
                  {trust.author}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow={services.eyebrow}
              title={services.title}
              subtitle={services.subtitle}
            />
            <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
              {services.items.map((service) => (
                <StaggerItem key={service.id}>
                  <Link
                    href={`/${lang}/services#${service.id}`}
                    className="group flex h-full flex-col rounded-3xl border border-white/10 bg-ink-700/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:shadow-glow"
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand-soft text-2xl transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-white">
                      {service.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-surface/60">
                      {service.tagline}
                    </p>
                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <p className="font-display text-2xl font-bold text-gradient">
                          ${service.price.usd}
                        </p>
                        <p className="text-xs text-surface/50">
                          {services.from} ¥
                          {service.price.jpy.toLocaleString()}
                        </p>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-surface/60 transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* WHY US */}
        <section className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute inset-0 bg-gradient-brand-soft" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow={whyUs.eyebrow}
              title={whyUs.title}
              subtitle={whyUs.subtitle}
            />
            <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
              {whyUs.items.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex h-full gap-5 rounded-3xl border border-white/10 bg-ink/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-glow-pink">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-2xl"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-surface/60">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* PORTFOLIO SNIPPET */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow={portfolio.eyebrow}
              title={portfolio.title}
              subtitle={portfolio.subtitle}
            />
            <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
              {portfolio.projects.slice(0, 3).map((project) => (
                <StaggerItem key={project.title}>
                  <Link
                    href={`/${lang}/portfolio`}
                    className="group block overflow-hidden rounded-3xl border border-white/10 bg-ink-700/50"
                  >
                    <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-display font-bold text-white/25 transition-all duration-500 group-hover:scale-125">
                          {project.title[0]}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                          {portfolio.viewProject}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-surface/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-surface/50">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal className="mt-12 text-center" delay={0.1}>
              <Button href={`/${lang}/portfolio`} variant="outline">
                {portfolio.viewAll}
              </Button>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-y border-white/5 bg-ink-800/40 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow={testimonials.eyebrow}
              title={testimonials.title}
              subtitle={testimonials.subtitle}
            />
            <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.items.map((t) => (
                <StaggerItem key={t.name}>
                  <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-ink/70 p-8">
                    <div className="text-accent" aria-label="5 out of 5 stars">
                      ★★★★★
                    </div>
                    <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-surface/70">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-bold text-white">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-white">
                          {t.name}
                        </p>
                        <p className="text-xs text-surface/50">
                          {t.role} · {t.location}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* FINAL CTA */}
        <CtaBanner lang={lang} dict={dict} />
      </main>
    </>
  );
}