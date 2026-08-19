import { NextRequest, NextResponse } from "next/server";

const LANGS = ["en", "id", "jpn"];

export function GET(request: NextRequest) {
  const to = request.nextUrl.searchParams.get("to");
  const mobile = to === "mobile";

  let path = "/";
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.origin === request.nextUrl.origin) {
        path = refererUrl.pathname;
      }
    } catch {
      // ignore malformed referer
    }
  }

  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "m") parts.shift();
  let lang = "en";
  if (parts.length && LANGS.includes(parts[0])) {
    lang = parts[0];
    parts.shift();
  }
  const rest = parts.join("/");

  const target = `/${mobile ? "m/" : ""}${lang}${rest ? "/" + rest : ""}`;

  const res = NextResponse.redirect(new URL(target, request.url), 302);
  res.cookies.set("view", mobile ? "mobile" : "full", {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
  });
  return res;
}