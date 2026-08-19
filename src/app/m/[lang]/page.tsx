import Link from "next/link";
import MobileSectionTitle from "@/components/m/MobileSectionTitle";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export default function MobileHomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const dict = getDictionary(lang);
  const { hero, trust, services, whyUs, portfolio, testimonials, clients } =
    dict;
  const base = `/m/${lang}`;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-6">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div
          className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-brand-500/25 blur-[90px]"
          aria-hidden="true"
        />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {hero.badge}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tightest2 text-white">
            {hero.title1} <span className="text-gradient">{hero.title2}</span>
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-surface/60">
            {hero.sub}
          </p>
          <div className="mt-6 flex flex-col gap-2.5">
            <Link
              href={`${base}/contact`}
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-brand text-sm font-semibold text-white shadow-glow"
            >
              {hero.ctaStart}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href={`${base}/portfolio`}
              className="flex h-12 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white"
            >
              {hero.ctaWork}
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-ink-700/40 p-3 text-center"
              >
                <p className="font-display text-xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-surface/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="mt-8 border-y border-white/5 bg-ink-800/40 py-5">
        <p className="px-4 text-center text-[11px] font-semibold uppercase tracking-widest text-surface/40">
          {trust.title}
        </p>
        <div className="mt-3 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {clients.map((client) => (
            <span
              key={client.name}
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-ink/60 px-3.5 py-1.5 text-xs font-semibold text-surface/55"
            >
              <span aria-hidden="true">{client.flag}</span>
              {client.name}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 pt-10">
        <MobileSectionTitle
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />
        <div className="space-y-3">
          {services.items.map((service) => (
            <Link
              key={service.id}
              href={`${base}/services`}
              className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-ink-700/40 p-4 active:scale-[0.98]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft text-xl">
                {service.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[15px] font-bold text-white">
                  {service.name}
                </span>
                <span className="block truncate text-xs text-surface/50">
                  {services.from} ${service.price.usd} · ¥
                  {service.price.jpy.toLocaleString()}
                </span>
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-surface/40" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="px-4 pt-10">
        <MobileSectionTitle eyebrow={whyUs.eyebrow} title={whyUs.title} />
        <div className="space-y-2.5">
          {whyUs.items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-ink-700/30 p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-lg">
                {item.icon}
              </span>
              <div>
                <h3 className="font-display text-sm font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-surface/55">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="pt-10">
        <div className="px-4">
          <MobileSectionTitle
            eyebrow={portfolio.eyebrow}
            title={portfolio.title}
            subtitle={portfolio.subtitle}
          />
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolio.projects.map((project) => (
            <Link
              key={project.title}
              href={`${base}/portfolio`}
              className="w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-ink-700/40"
            >
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <span className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold text-white/25">
                  {project.title[0]}
                </span>
              </div>
              <div className="p-3.5">
                <p className="font-display text-sm font-bold text-white">
                  {project.title}
                </p>
                <p className="mt-0.5 line-clamp-1 text-[11px] text-surface/50">
                  {project.description}
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-300">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 pt-10">
        <MobileSectionTitle
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
        />
        <div className="space-y-3">
          {testimonials.items.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-ink-700/40 p-4"
            >
              <div className="text-sm text-accent" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="mt-2 text-sm leading-relaxed text-surface/70">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-3 border-t border-white/10 pt-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-display text-xs font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-display text-xs font-semibold text-white">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-surface/50">
                    {t.role} · {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pt-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-[1px]">
          <div className="rounded-3xl bg-ink p-6 text-center">
            <h2 className="text-2xl font-bold text-white">{dict.cta.title}</h2>
            <p className="mt-2 text-sm text-surface/55">{dict.cta.subtitle}</p>
            <Link
              href={`${base}/contact`}
              className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-brand text-sm font-semibold text-white shadow-glow"
            >
              {dict.cta.start}
            </Link>
            <a
              href="mailto:hello@makeit.com"
              className="mt-2.5 flex h-11 items-center justify-center text-sm font-semibold text-surface/70"
            >
              hello@makeit.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}