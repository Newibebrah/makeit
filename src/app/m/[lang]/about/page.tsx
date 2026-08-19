import type { Metadata } from "next";
import MobileSectionTitle from "@/components/m/MobileSectionTitle";
import { getDictionary } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: "About",
  robots: { index: false, follow: false },
};

export default function MobileAboutPage({ params }: { params: { lang: string } }) {
  const dict = getDictionary(params.lang);
  const { about } = dict;

  return (
    <>
      <section className="px-4 pt-4">
        <MobileSectionTitle
          eyebrow={about.eyebrow}
          title={about.title}
          subtitle={about.subtitle}
        />
        <div className="rounded-2xl border border-white/10 bg-ink-700/40 p-5">
          <p className="text-sm leading-relaxed text-surface/70">
            {about.story}
          </p>
          <p className="mt-3 text-xs italic text-surface/50">
            &ldquo;{about.storyQuote}&rdquo;
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-4 pt-8">
        <div className="rounded-2xl bg-gradient-brand p-[1px]">
          <div className="rounded-2xl bg-ink p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand font-display text-2xl font-bold text-white shadow-glow">
                {about.founderName[0]}
              </span>
              <div>
                <p className="font-display text-lg font-bold text-white">
                  {about.founderName}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-300">
                  {about.founderRole}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-surface/60">
              {about.founderBio}
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 pt-8">
        <MobileSectionTitle eyebrow={about.valuesEyebrow} title={about.valuesTitle} />
        <div className="space-y-2.5">
          {about.values.map((value) => (
            <div
              key={value.title}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-ink-700/30 p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-lg">
                {value.icon}
              </span>
              <div>
                <h3 className="font-display text-sm font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-surface/55">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 pt-8">
        <MobileSectionTitle eyebrow={about.processEyebrow} title={about.processTitle} />
        <div className="space-y-0">
          {about.process.map((p, i) => (
            <div key={p.step} className="relative flex gap-4 pb-6">
              {i < about.process.length - 1 && (
                <span
                  className="absolute left-[17px] top-9 h-full w-px bg-gradient-to-b from-brand-400/60 to-transparent"
                  aria-hidden="true"
                />
              )}
              <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-brand font-display text-xs font-bold text-white">
                {p.step}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-sm font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-surface/55">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}