'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Play, ChevronRight, ChevronLeft, Phone } from "lucide-react";
import { Modal } from "./ui/Modal";
import { EmailForm } from "./ui/EmailForm";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    // Tutaj można dodać logikę wysyłania emaila
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <section id="hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
          <Link
            href="/moduly"
            className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre"
          >
            <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
              📣 Nowość
            </div>
            <p className="text-xs font-medium text-primary sm:text-sm">Poznaj moduły QonnectOne</p>
            <ChevronRight className="ml-1 w-3 h-3 text-primary" />
          </Link>

          <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">QonnectOne</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              QonnectOne to kompleksowa platforma, która rewolucjonizuje rynek, umożliwiając firmom niefinansowym oraz nadzorowanym natychmiastowe płatności.
            </p>
          </div>

          <div className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button
              onClick={openModal}
              className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-primary/50 focus-visible:ring-[3px] bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto text-background flex gap-2 cursor-pointer"
            >
              <Phone className="size-4 text-background" />
              Skontaktuj się z nami
            </button>
          </div>

          <p className="mt-5 text-sm text-foreground/70">Odblokuj potencjał biznesowy i zarabiaj więcej</p>

          <div className="relative mx-auto flex w-full items-center justify-center">
            <div className="relative border rounded-lg shadow-lg max-w-screen-lg mt-16">
              <div className="relative cursor-pointer group rounded-md p-0 ring-1 ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10 backdrop-blur-md">
                <Image
                  alt="Hero Video"
                  src="/admin-panel.webp"
                  width={1920}
                  height={600}
                  className="transition-all duration-200 ease-out group-hover:brightness-[0.8] rounded-md border"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl">
                  <div className="z-30 bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28">
                    <div className="flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100">
                      <Play className="size-8 text-white fill-white transition-transform duration-200 ease-out group-hover:scale-105 scale-100" style={{ filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EmailForm onSubmit={handleEmailSubmit} onClose={closeModal} />
      </Modal>
  </>
  );
}
