import { defaultLang, isLang, type Lang } from "./config";
import en from "./en";
import id from "./id";
import jpn from "./jpn";

export type { Dictionary } from "./en";

const dictionaries = { en, id, jpn } as const;

export function getDictionary(lang: string): (typeof en) {
  const safe: Lang = isLang(lang) ? lang : defaultLang;
  return dictionaries[safe];
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }, { lang: "jpn" }];
}