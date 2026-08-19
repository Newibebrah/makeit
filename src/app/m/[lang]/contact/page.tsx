import type { Metadata } from "next";
import MobileSectionTitle from "@/components/m/MobileSectionTitle";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: "Contact",
  robots: { index: false, follow: false },
};

export default function MobileContactPage({ params }: { params: { lang: string } }) {
  const dict = getDictionary(params.lang);
  const { contact } = dict;

  return (
    <>
      <section className="px-4 pt-4">
        <MobileSectionTitle
          eyebrow={contact.pageEyebrow}
          title={contact.pageTitle}
          subtitle={contact.pageSubtitle}
        />
      </section>

      <section className="px-4 pt-2">
        <ContactForm dict={contact} />

        <div className="mt-4 space-y-2.5">
          <a
            href="mailto:hello@makeit.com"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-700/40 p-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-lg">
              ✉️
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-surface/40">
                {contact.emailLabel}
              </p>
              <p className="text-sm font-semibold text-white">{contact.emailValue}</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-700/40 p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-lg">
              ⚡
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-surface/40">
                {contact.responseLabel}
              </p>
              <p className="text-sm font-semibold text-white">{contact.responseValue}</p>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-brand p-[1px]">
            <div className="rounded-2xl bg-ink p-5">
              <p className="font-display text-sm font-bold text-white">
                {contact.nextTitle}
              </p>
              <ol className="mt-3 space-y-2 text-xs text-surface/60">
                {contact.nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-2">
                    <span className="font-display font-bold text-brand-300">
                      {i + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}