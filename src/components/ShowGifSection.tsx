'use client';

import React, { useState } from "react";

const modules = [
  {
    icon: <i className="fas fa-shield-alt text-primary text-xl"></i>,
    bg: "bg-primary/10",
    title: "Moduł AML / KYC",
    desc: "Automatyzuje procesy weryfikacji tożsamości klientów. Monitoruje transakcje pod kątem podejrzanych aktywności. Zapewnia pełną zgodność z przepisami AML/CFT, minimalizując ryzyko prawne i operacyjne.",
    overlayTitle: "Moduł AML / KYC",
    overlayDesc: "Kompleksowa weryfikacja i monitorowanie zgodności",
    features: [
      "Automatyzuje procesy weryfikacji tożsamości klientów",
      "Monitoruje transakcje pod kątem podejrzanych aktywności",
      "Zapewnia pełną zgodność z przepisami AML/CFT"
    ]
  },
  {
    icon: <i className="fas fa-exchange-alt text-purple-500 text-xl"></i>,
    bg: "bg-purple-500/10",
    title: "Moduł transakcyjny",
    desc: "Zapewnia płynną i bezpieczną komunikację z dostawcami płatniczymi. Umożliwia efektywne przetwarzanie transakcji finansowych. Skraca czas operacji i zwiększa niezawodność procesów płatniczych.",
    overlayTitle: "Moduł transakcyjny",
    overlayDesc: "Bezpieczne i efektywne przetwarzanie płatności",
    features: [
      "Zapewnia płynną i bezpieczną komunikację z dostawcami płatniczymi",
      "Umożliwia efektywne przetwarzanie transakcji finansowych",
      "Skraca czas operacji i zwiększa niezawodność procesów płatniczych"
    ]
  },
  {
    icon: <i className="fab fa-bitcoin text-orange-500 text-xl"></i>,
    bg: "bg-orange-500/10",
    title: "Moduł Krypto",
    desc: "Umożliwia kompleksową obsługę operacji związanych z aktywami cyfrowymi. Pozwala na bezpieczne depozyty i wypłaty kryptowalut, sprawną wymianę walut cyfrowych oraz generowanie i zarządzanie portfelami dla klientów.",
    overlayTitle: "Moduł Krypto",
    overlayDesc: "Kompleksowa obsługa aktywów cyfrowych",
    features: [
      "Umożliwia kompleksową obsługę operacji związanych z aktywami cyfrowymi",
      "Pozwala na bezpieczne depozyty i wypłaty kryptowalut",
      "Zapewnia zgodność z normami bezpieczeństwa i regulacjami dotyczącymi kryptoaktywów"
    ]
  },
];

export default function ShowGifSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center w-full mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 tracking-tight">
            FUNKCJE I MODUŁY <span className="text-primary">QONNECTONE</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
            Kompleksowe narzędzia dla nadzorowanych instytucji finansowych
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-inter leading-relaxed mt-4">
            Nasza zintegrowana platforma obejmuje szereg zaawansowanych modułów, które wspierają kluczowe obszary działalności operacyjnej i regulacyjnej. Tym samym QONNECT zapewnia płynne funkcjonowanie, zgodność, wydajność oraz wymierne zyski.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* GIF Display Area */}
          <div className="gif-container fade-in relative">
            <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl w-full h-[500px] flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-code text-7xl text-gray-400 dark:text-gray-500 mb-4"></i>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">API Visualization</p>
                  <p className="text-gray-500 dark:text-gray-500 mt-1">Select an option to preview</p>
                </div>
              </div>
              {/* Overlay */}
              <div className="gif-overlay absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/90 dark:bg-gray-800/90 rounded-xl px-8 py-6 text-white w-[90%] max-w-lg shadow-lg">
                <h3 className="text-xl font-semibold font-montserrat">{modules[selected].overlayTitle}</h3>
                <p className="mt-2 text-gray-200 font-inter">{modules[selected].overlayDesc}</p>
              </div>
            </div>
          </div>

          {/* Options Control Area */}
          <div>
            <div className="space-y-4">
              {modules.map((module, idx) => (
                <div
                  key={idx}
                  className={`option-card bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer transition hover:shadow-lg ${
                    selected === idx ? "active-option ring-2 ring-primary border-primary" : ""
                  }`}
                  onClick={() => setSelected(idx)}
                >
                  <div className="flex items-start">
                    <div className={`${module.bg} p-3 rounded-lg mr-4`}>{module.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-montserrat">{module.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 font-inter">{module.desc}</p>
                    </div>
                    <div className="ml-4">
                      <i
                        className={`fas fa-chevron-right ${
                          selected === idx ? "text-primary" : "text-gray-400"
                        }`}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold font-inter transition-all duration-200 hover:scale-105 shadow-lg">
              Odkryj wszystkie moduły
            </button>
            <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary px-8 py-4 rounded-lg font-semibold font-inter transition-all duration-200 hover:scale-105">
              Sprawdź cennik
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
