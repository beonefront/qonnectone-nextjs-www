'use client';

import React, { useState } from 'react';
import { Modal } from './ui/Modal';
import { EmailForm } from './ui/EmailForm';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    // Tutaj możesz dodać logikę wysyłania emaila do API
    alert(`Dziękujemy! Skontaktujemy się z Tobą na adres: ${email}`);
  };

  return (
    <section id="cta">
      <div className="bg-primary/10 rounded-xl py-16">
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
              Gotowy, aby zacząć?
            </h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Skontaktuj się z nami już dziś.
            </h3>
          </div>
          <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto text-background flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
              </svg>
              Zostaw swój e-mail
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <EmailForm
          onSubmit={handleEmailSubmit}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </section>
  );
};

export default CTASection;
