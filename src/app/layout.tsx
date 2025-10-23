import type { Metadata } from "next";
import { Inter, Montserrat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";

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

export const metadata: Metadata = {
  title: "QonnectOne",
  description: "Kompleksowe rozwiązania płatnicze dla firm i nadzorowanych instytucji finansowych.",
  openGraph: {
    title: "QonnectOne",
    description: "Kompleksowe rozwiązania płatnicze dla firm i nadzorowanych instytucji finansowych.",
    images: [
      {
        url: "https://qonnectone.com/logo.png",
        width: 1200,
        height: 630,
        alt: "QonnectOne Logo",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QonnectOne",
    description: "Kompleksowe rozwiązania płatnicze dla firm i nadzorowanych instytucji finansowych.",
    images: ["https://qonnectone.com/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="QonnectOne" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/favicon/favicon.ico" as="image" />
        {/* Font Awesome removed - use Lucide React icons instead */}
        {/* Favicon from realfavicongenerator.net */}
        <link rel="manifest" href="/favicon/manifest.json" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon/favicon.png" sizes="96x96" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon.png" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <CookieConsent />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
