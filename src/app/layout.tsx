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
        url: "/logo.png",
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
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="QonnectOne" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <CookieConsent />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
