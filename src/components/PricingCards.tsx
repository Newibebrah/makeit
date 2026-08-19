"use client";

import { useState } from "react";
import Link from "next/link";
import type { Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

type Currency = "USD" | "JPY";

type PricingCardsProps = {
  lang: Lang;
  dict: Dictionary;
};

export default function PricingCards({ lang, dict }: PricingCardsProps) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const format = (value: number) => {
    if (currency === "JPY") {
      return "¥" + value.toLocaleString();
    }
    return "$" + value.toLocaleString();
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="mb-12 flex justify-center">
        <div className="inline-flex rounded-full border border-white/15 p-1.5">
          {(["USD", "JPY"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`rounded-full px-6 py-2.5 font-display text-sm font-semibold transition-all duration-300 ${
                currency === c
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "text-surface/60 hover:text-white"
              }`}
              aria-pressed={currency === c}
            >
              {c === "JPY" ? dict.pricing.jpy : dict.pricing.usd}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {dict.pricing.plans.map((plan) => {
          const featured = plan.id === "cms";
          return (
            <div
              key={plan.id}
              className={`relative flex h-full flex-col rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                featured
                  ? "border-gradient shadow-glow"
                  : "border border-white/10 bg-ink-700/50 hover:border-brand-400/40"
              }`}
            >
              {featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
                  {dict.pricing.recommended}
                </span>
              )}
              <h2 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                {plan.name}
              </h2>
              <div className="mt-4 flex items-baseline gap-2">
                <p className="font-display text-5xl font-extrabold text-gradient">
                  {format(plan.price[currency.toLowerCase() as "usd" | "jpy"])}
                </p>
              </div>
              <p className="mt-1 text-sm text-surface/50">
                {dict.pricing.startingAt} · {dict.pricing.oneTime}
              </p>

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
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

              <Link
                href={`/${lang}/contact?plan=${plan.id}`}
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-semibold transition-all duration-300 ${
                  featured
                    ? "bg-gradient-brand text-white shadow-glow hover:scale-[1.03] hover:shadow-glow-pink"
                    : "border border-white/20 text-white hover:border-brand-400 hover:bg-brand-400/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          );
        })}
      </div>

      <p className="mt-10 text-center text-xs text-surface/40">
        {dict.pricing.footnote}
      </p>
    </section>
  );
}