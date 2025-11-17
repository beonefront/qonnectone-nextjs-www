import "./globals.css";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Inter, Montserrat } from "next/font/google";
import { locales } from "@/i18n/locales";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const localeNames: Record<string, string> = {
  pl: "pl",
  en: "en",
  ua: "uk",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  const defaultLocale = locales[0];
  const htmlLang = localeNames[defaultLocale] ?? defaultLocale ?? "pl";

  return (
    <html
      lang={htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <head>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="QonnectOne" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/favicon/favicon.ico" as="image" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon/favicon.png" sizes="96x96" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon.png" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
