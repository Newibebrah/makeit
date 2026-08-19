"use client";

import { useState } from "react";
import Link from "next/link";
import type { Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

type Currency = "USD" | "JPY";

type MobilePricingCardsProps = {
  lang: Lang;
  dict: Dictionary;
};

export default function MobilePricingCards({
  lang,
  dict,
}: MobilePricingCardsProps) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const base = `/m/${lang}`;

  const format = (value: number) =>
    currency === "JPY" ? "¥" + value.toLocaleString() : "$" + value.toLocaleString();

  return (
    <div className="px-4">
      <div className="mb-5 flex justify-center">
        <div className="inline-flex rounded-full border border-white/15 p-1">
          {(["USD", "JPY"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`rounded-full px-6 py-2 font-display text-xs font-semibold transition-colors ${
                currency === c
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "text-surface/60"
              }`}
              aria-pressed={currency === c}
            >
              {c === "JPY" ? dict.pricing.jpy : dict.pricing.usd}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {dict.pricing.plans.map((plan) => {
          const featured = plan.id === "cms";
          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-5 ${
                featured ? "bg-gradient-brand p-[1px]" : "border border-white/10 bg-ink-700/40"
              }`}
            >
              <div className={featured ? "rounded-2xl bg-ink p-5" : ""}>
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-base font-bold uppercase tracking-wider text-white">
                    {plan.name}
                  </h2>
                  {featured && (
                    <span className="rounded-full bg-gradient-brand px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                      {dict.pricing.recommended}
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <p className="font-display text-3xl font-extrabold text-gradient">
                    {format(plan.price[currency.toLowerCase() as "usd" | "jpy"])}
                  </p>
                  <span className="text-[11px] text-surface/45">
                    / {dict.pricing.oneTime}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-surface/65"
                    >
                      <svg className="mt-0.5 shrink-0 text-brand-300" width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`${base}/contact?plan=${plan.id}`}
                  className={`mt-4 flex h-11 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    featured
                      ? "bg-gradient-brand text-white shadow-glow"
                      : "border border-white/20 text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-[11px] leading-relaxed text-surface/40">
        {dict.pricing.footnote}
      </p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-ink-700/40 p-5 text-center">
        <h2 className="font-display text-base font-bold text-white">
          {dict.pricing.customTitle}
        </h2>
        <p className="mt-1.5 text-xs text-surface/55">{dict.pricing.customDesc}</p>
        <Link
          href={`${base}/contact`}
          className="mt-4 flex h-11 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-white shadow-glow"
        >
          {dict.pricing.customCta}
        </Link>
      </div>
    </div>
  );
}