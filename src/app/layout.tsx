import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://makeit.dev"),
  title: {
    default: "MakeIt — Premium Web Development for Global Businesses",
    template: "%s | MakeIt",
  },
  description:
    "MakeIt builds premium websites for businesses ready to go international. Beautiful, fast, and easy to manage — we handle everything.",
  keywords: [
    "web development",
    "premium website",
    "global business",
    "Japan",
    "CMS website",
    "custom web app",
    "ecommerce",
    "SEO",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MakeIt",
    title: "MakeIt — Premium Web Development for Global Businesses",
    description:
      "Websites that make your business global. Premium development for companies ready to scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MakeIt — Premium Web Development for Global Businesses",
    description:
      "Websites that make your business global. Premium development for companies ready to scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MakeIt",
  url: "https://makeit.dev",
  email: "hello@makeit.com",
  description:
    "Premium web development for global businesses. Websites that make your business global.",
  areaServed: ["Japan", "United States", "Germany"],
  knowsLanguage: ["en", "ja"],
  offers: [
    {
      "@type": "Offer",
      name: "Static Websites",
      price: "650",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "CMS Websites",
      price: "1300",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Custom Web Applications",
      price: "2600",
      priceCurrency: "USD",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased bg-ink text-surface`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("makeit-theme");if(t)document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}