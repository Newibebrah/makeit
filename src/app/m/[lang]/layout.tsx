import type { Metadata } from "next";
import MobileHeader from "@/components/m/MobileHeader";
import MobileFooter from "@/components/m/MobileFooter";
import BottomNav from "@/components/m/BottomNav";
import SetHtmlLang from "@/components/SetHtmlLang";
import { getDictionary, generateStaticParams } from "@/i18n/dictionaries";
import { languages, isLang, defaultLang } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

export { generateStaticParams };

export const metadata: Metadata = {
  title: {
    default: "MakeIt — Mobile",
    template: "%s | MakeIt",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MobileLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const lang: Lang = isLang(params.lang) ? params.lang : defaultLang;
  const dict = getDictionary(params.lang);
  const htmlLang = languages.find((l) => l.code === lang)?.htmlLang ?? "en";

  return (
    <>
      <SetHtmlLang lang={htmlLang} />
      <div className="min-h-screen bg-ink text-surface">
        <MobileHeader lang={lang} dict={dict} />
        <main className="mx-auto max-w-md pb-24 pt-14">{children}</main>
        <MobileFooter lang={lang} dict={dict} />
        <BottomNav lang={lang} dict={dict} />
      </div>
    </>
  );
}