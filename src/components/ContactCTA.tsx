'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Modal } from '@/components/ui/Modal';
import { EmailForm } from '@/components/ui/EmailForm';

export default function ContactCTA() {
  const t = useTranslations('contactCTA');
  const tCommon = useTranslations('common');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-md flex text-sm font-medium transition-all outline-none focus-visible:border-ring bg-white shadow-xs hover:bg-gray-100 h-9 px-4 py-2 text-black cursor-pointer"
              >
                {tCommon('contact')}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EmailForm
          onSubmit={handleEmailSubmit}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}
