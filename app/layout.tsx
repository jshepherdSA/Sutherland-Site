import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";

import { CookieConsentBanner } from "@/components/cookie-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "It's our city. Let's build it together. Re-elect Aaron Sutherland on Tuesday, November 3.",
    images: [
      {
        url: "/images/hero-headshot.jpg",
        width: 933,
        height: 1400,
        alt: "Aaron Sutherland",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#2F5E9E",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${publicSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-[4px] bg-navy px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
