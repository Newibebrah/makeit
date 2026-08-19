import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SetHtmlLang from "@/components/SetHtmlLang";
import { getDictionary, generateStaticParams } from "@/i18n/dictionaries";
import { languages, isLang, defaultLang } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

export { generateStaticParams };

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const dict = getDictionary(params.lang);
  return {
    title: { default: dict.meta.home.title, template: "%s | MakeIt" },
    description: dict.meta.home.description,
    alternates: {
      languages: {
        en: "/en",
        id: "/id",
        ja: "/jpn",
      },
    },
  };
}

export default function LangLayout({
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
      <Navbar lang={lang} dict={dict} />
      {children}
      <Footer lang={lang} dict={dict} />
    </>
  );
}