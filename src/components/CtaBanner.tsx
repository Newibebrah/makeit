import Button from "./Button";
import Reveal from "./Reveal";
import type { Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

type CtaBannerProps = {
  lang: Lang;
  dict: Dictionary;
  title?: string;
  subtitle?: string;
};

export default function CtaBanner({
  lang,
  dict,
  title,
  subtitle,
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          {title ?? dict.cta.title}
        </h2>
        <p className="mt-5 text-lg text-surface/60">{subtitle ?? dict.cta.subtitle}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`/${lang}/contact`} size="lg">
            {dict.cta.start}
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
          <Button href="mailto:hello@makeit.com" variant="outline" size="lg">
            hello@makeit.com
          </Button>
        </div>
      </Reveal>
    </section>
  );
}