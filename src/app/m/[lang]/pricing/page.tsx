import type { Metadata } from "next";
import MobileSectionTitle from "@/components/m/MobileSectionTitle";
import MobilePricingCards from "@/components/m/MobilePricingCards";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Pricing",
  robots: { index: false, follow: false },
};

export default function MobilePricingPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const dict = getDictionary(params.lang);
  const { pricing } = dict;

  return (
    <>
      <section className="px-4 pt-4">
        <MobileSectionTitle
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          subtitle={pricing.subtitle}
        />
      </section>

      <section className="pt-2">
        <MobilePricingCards lang={lang} dict={dict} />
      </section>
    </>
  );
}