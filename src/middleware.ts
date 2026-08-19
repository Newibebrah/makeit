import { NextRequest, NextResponse } from "next/server";
import { defaultLang } from "@/i18n/config";

const LANGS = ["en", "id", "jpn"];

const MOBILE_RE =
  /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Silk|Kindle|webOS/i;

const DESKTOP_ONLY = /iPad|Macintosh|Windows|Linux x86/i;

function isMobileDevice(ua: string) {
  return MOBILE_RE.test(ua) && !DESKTOP_ONLY.test(ua);
}

function parseLang(acceptLanguage: string): string {
  const first = acceptLanguage.split(",")[0].trim().toLowerCase();
  if (first.startsWith("ja")) return "jpn";
  if (first.startsWith("id")) return "id";
  return defaultLang;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ua = request.headers.get("user-agent") || "";
  const mobile = isMobileDevice(ua);
  const viewPref = request.cookies.get("view")?.value;

  const parts = pathname.split("/").filter(Boolean);
  let routeMobile = false;
  if (parts[0] === "m") {
    routeMobile = true;
    parts.shift();
  }
  let lang: string | undefined;
  if (parts.length && LANGS.includes(parts[0])) {
    lang = parts.shift();
  }
  const rest = parts.join("/");

  const preferredMobile =
    viewPref === "mobile" ? true : viewPref === "full" ? false : mobile;

  if (!lang) {
    const resolvedLang = parseLang(request.headers.get("accept-language") || "");
    const target = `/${preferredMobile ? "m/" : ""}${resolvedLang}${
      rest ? "/" + rest : ""
    }`;
    if (target !== pathname) {
      return NextResponse.redirect(new URL(target, request.url), 302);
    }
    return NextResponse.next();
  }

  if (routeMobile !== preferredMobile) {
    const target = `/${preferredMobile ? "m/" : ""}${lang}${
      rest ? "/" + rest : ""
    }`;
    return NextResponse.redirect(new URL(target, request.url), 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|txt|xml|webmanifest|woff|woff2)$|api).*)",
  ],
};