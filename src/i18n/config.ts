export const languages = [
  { code: "en", label: "English", short: "EN", flag: "🇺🇸", htmlLang: "en" },
  { code: "id", label: "Indonesia", short: "ID", flag: "🇮🇩", htmlLang: "id" },
  { code: "jpn", label: "日本語", short: "JP", flag: "🇯🇵", htmlLang: "ja" },
] as const;

export type Lang = (typeof languages)[number]["code"];
export type Language = (typeof languages)[number];

export const defaultLang: Lang = "en";
export const LANGS = languages.map((l) => l.code);

export function isLang(value: string): value is Lang {
  return (LANGS as string[]).includes(value);
}