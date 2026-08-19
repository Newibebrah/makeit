import type { Metadata } from "next";
import Link from "next/link";
import MobileSectionTitle from "@/components/m/MobileSectionTitle";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Services",
  robots: { index: false, follow: false },
};

const colorMap: Record<string, string> = {
  static: "from-[#6C2BD9] to-[#8B5CF6]",
  cms: "from-[#8B5CF6] to-[#6C2BD9]",
  custom: "from-[#FF2D78] to-[#F472B6]",
};

export default function MobileServicesPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const dict = getDictionary(lang);
  const { services } = dict;
  const base = `/m/${lang}`;

  return (
    <>
      <section className="px-4 pt-4">
        <MobileSectionTitle
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />
      </section>

      <section className="space-y-4 px-4 pt-2">
        {services.items.map((service) => (
          <article
            key={service.id}
            className="rounded-2xl border border-white/10 bg-ink-700/40 p-5"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[service.id]} text-xl`}
              >
                {service.icon}
              </span>
              <div className="min-w-0">
                <h2 className="font-display text-lg font-bold text-white">
                  {service.name}
                </h2>
                <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-brand-300">
                  {service.tagline}
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-surface/60">
              {service.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {service.perfectFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-surface/60"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-white/10 bg-ink/60 p-3">
                <p className="text-[10px] uppercase tracking-wider text-surface/40">
                  {services.timelineLabel}
                </p>
                <p className="mt-0.5 font-display text-sm font-bold text-white">
                  {service.timeline}
                </p>
              </div>
              <div className="rounded-xl border border-brand-400/30 bg-brand-400/10 p-3">
                <p className="text-[10px] uppercase tracking-wider text-brand-300">
                  {services.startingAtLabel}
                </p>
                <p className="mt-0.5 font-display text-base font-bold text-gradient">
                  ${service.price.usd.toLocaleString()}
                </p>
                <p className="text-[10px] text-surface/55">
                  ¥{service.price.jpy.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-3 space-y-1.5">
              {service.features.map((feature) => (
                <p
                  key={feature}
                  className="flex items-start gap-2 text-xs text-surface/65"
                >
                  <svg className="mt-0.5 shrink-0 text-brand-300" width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature}
                </p>
              ))}
            </div>

            <Link
              href={`${base}/contact?plan=${service.id}`}
              className="mt-4 flex h-11 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-white shadow-glow"
            >
              {service.cta}
            </Link>
          </article>
        ))}
      </section>

      {/* ADD-ONS */}
      <section className="px-4 pt-10">
        <MobileSectionTitle
          eyebrow={services.addOnsEyebrow}
          title={services.addOnsTitle}
        />
        <div className="grid grid-cols-2 gap-2.5">
          {services.addOns.map((addon) => (
            <div
              key={addon.name}
              className="rounded-2xl border border-white/10 bg-ink-700/40 p-4"
            >
              <p className="font-display text-[13px] font-bold text-white">
                {addon.name}
              </p>
              <p className="mt-0.5 font-display text-lg font-bold text-gradient">
                {addon.price}
              </p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-surface/55">
                {addon.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pt-8">
        <Link
          href={`${base}/contact`}
          className="flex h-12 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-white shadow-glow"
        >
          {dict.pricing.customCta}
        </Link>
      </section>
    </>
  );
}