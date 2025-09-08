'use client';

import React, { useState } from "react";

const faqs = [
  {
    question: "Dlaczego właśnie Qonnect?",
    answer: "Ponieważ oferta dopasowana jest do konkretnych wymagań Twojej firmy. Nasi programiści są w stanie szybko dopasować fragmenty aplikacji do twojej branży oraz indywidualnych wymagań."
  },
  {
    question: "Dlaczego korzystać z zewnętrznego partnera zamiast własnego systemu?",
    answer: "Prace nad dedykowanym systemem informatycznym to koszty oraz ryzyko. Z nami jesteś w stanie zrobić to w rekordowym czasie, wyprzedzić konkurencję i korzystać z benefitów dopracowanego już systemu."
  },
  {
    question: "Czym jest aplikacja SAAS?",
    answer: "Aplikacja SaaS (Software as a Service) to oprogramowanie udostępniane użytkownikom przez Internet w modelu abonamentowym. Nie wymaga instalacji na komputerze – korzystasz z niego przez przeglądarkę. Wszystkie dane i aktualizacje są utrzymywane w chmurze przez dostawcę usługi."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 tracking-tight">
            3 <span className="text-primary">KLUCZOWE PYTANIA</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start">
                  <span className="text-primary font-bold text-xl mr-4 mt-1 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-montserrat pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <i
                    className={`fas fa-chevron-down text-primary text-lg transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  ></i>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 pl-16">
                  <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 font-inter mb-6">
            Masz więcej pytań? Skontaktuj się z nami
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold font-inter transition-all duration-200 hover:scale-105 shadow-lg">
            Skontaktuj się z nami <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
