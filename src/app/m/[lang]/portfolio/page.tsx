import type { Metadata } from "next";
import MobileSectionTitle from "@/components/m/MobileSectionTitle";
import MobilePortfolioGrid from "@/components/m/MobilePortfolioGrid";
import { getDictionary } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: "Portfolio",
  robots: { index: false, follow: false },
};

export default function MobilePortfolioPage({ params }: { params: { lang: string } }) {
  const dict = getDictionary(params.lang);
  const { portfolio } = dict;

  return (
    <>
      <section className="px-4 pt-4">
        <MobileSectionTitle
          eyebrow={portfolio.pageEyebrow}
          title={portfolio.pageTitle}
          subtitle={portfolio.pageSubtitle}
        />
      </section>

      <section className="pt-2">
        <MobilePortfolioGrid dict={dict} />
      </section>
    </>
  );
}