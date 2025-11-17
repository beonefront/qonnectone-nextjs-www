'use server';

import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const floatingOrbs = Array.from({ length: 12 });
  const t = await getTranslations("notFound");
  const hintItemKeys = ["hintItems.first", "hintItems.second", "hintItems.third"];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(147,51,234,0.2),_transparent_55%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {floatingOrbs.map((_, index) => (
          <div
            key={`orb-${index}`}
            className="absolute h-2 w-2 animate-pulse rounded-full bg-white/20"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
              animationDelay: `${index * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-10 flex flex-col items-center space-y-3">
          <Image
            src="/logo-white.png"
            width={180}
            height={60}
            alt="QonnectOne"
            className="animate-pulse-slow drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]"
            priority
          />
          <div className="flex items-center space-x-2 text-xs font-medium uppercase tracking-[0.4em] text-blue-200/70">
            <span className="h-1 w-1 animate-ping rounded-full bg-blue-300" />
            <span>QonnectOne</span>
            <span className="h-1 w-1 animate-ping rounded-full bg-purple-300 animation-delay-200" />
          </div>
        </div>

        <div className="mb-12 space-y-6">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-2 text-sm text-blue-100/80 backdrop-blur">
            <span className="mr-2 h-2 w-2 animate-ping rounded-full bg-blue-400" />
            {t("badge")}
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-200/80 md:text-xl">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02] hover:from-blue-600 hover:to-purple-600"
          >
            {t("ctaPrimary")}
          </Link>
        </div>

        <div className="mt-16 grid w-full gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-slate-300/70">
              {t("hintTitle")}
            </p>
            <ul className="text-slate-200/80">
              {hintItemKeys.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

