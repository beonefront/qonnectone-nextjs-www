'use client';

import React, { useState } from "react";

const comparisons = [
  {
    icon: <i className="fas fa-credit-card text-primary text-xl"></i>,
    bg: "bg-primary/10",
    title: "Płatności",
    desc: "Porównanie tradycyjnych problemów z płatnościami z rozwiązaniami QONNECTONE",
    overlayTitle: "Płatności",
    overlayDesc: "Kompleksowe rozwiązania płatnicze bez barier wejścia",
    problems: [
      "Rygorystyczne obowiązki regulacyjne",
      "Brak wymaganych licencji",
      "Brak popularnych metod płatności",
      "Ręczna obsługa klientów",
      "Wysokie koszty rozbudowy systemu IT",
      "Wdrożenie systemu trwa nawet 18 miesięcy",
      "Konkurencja ze strony gigantów",
      "Brak przestrzeni na dynamiczny rozwój",
      "Utrata potencjalnych klientów"
    ],
    solutions: [
      "Spełnienie wymogi prawnych",
      "Korzystanie z licencji partnerów",
      "Jednoczesna integracja wielu systemów płatniczych",
      "Automatyzacja obsługi klientów",
      "Niskie koszty operacyjne przy pełnym wsparciu technicznym",
      "Minimalne koszty + wsparcie IT",
      "Wdrożenie trwa 2-3 miesiące",
      "Znacznie większa konkurencyjność",
      "Skalowalność i rozwój",
      "Większe przychody"
    ]
  }
];

export default function BlazingAcceptanceSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center w-full mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 tracking-tight">
            BŁYSKAWICZNA AKCEPTACJA <span className="text-primary">PROCESÓW</span>
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Problems vs Solutions Display */}
          <div className="comparison-container fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold font-montserrat text-gray-900 dark:text-white text-center">
                  Problemy i brak popularnych metod ich rozwiązania
                </h3>
              </div>

              {/* Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Problems */}
                <div className="p-6 bg-red-50 dark:bg-red-900/20">
                  <h4 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-4 flex items-center">
                    <i className="fas fa-exclamation-triangle mr-2"></i>
                    PROBLEMY
                  </h4>
                  <ul className="space-y-3">
                    {comparisons[selected].problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start text-red-700 dark:text-red-300">
                        <i className="fas fa-times text-red-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span className="text-sm font-inter">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="p-6 bg-green-50 dark:bg-green-900/20">
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    ROZWIĄZANIE
                  </h4>
                  <ul className="space-y-3">
                    {comparisons[selected].solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start text-green-700 dark:text-green-300">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span className="text-sm font-inter">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Category Control Area */}
          <div>
            <div className="space-y-4">
              {comparisons.map((comparison, idx) => (
                <div
                  key={idx}
                  className={`option-card bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer transition hover:shadow-lg ${
                    selected === idx ? "active-option ring-2 ring-primary border-primary" : ""
                  }`}
                  onClick={() => setSelected(idx)}
                >
                  <div className="flex items-start">
                    <div className={`${comparison.bg} p-3 rounded-lg mr-4`}>{comparison.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-montserrat">{comparison.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 font-inter">{comparison.desc}</p>
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

            {/* Bottom Message */}
            <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
              <div className="text-center">
                <p className="text-gray-800 dark:text-gray-200 font-inter text-lg leading-relaxed">
                  <strong>Zajmujemy się tym, co dla Ciebie jest przeszkodą</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-inter mt-2">
                  – utrzymaniem systemów, formalnościami licencyjnymi, integracją IT oraz
                  technicznym wsparciem rozwoju Twojego biznesu.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        {/* <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold font-inter transition-all duration-200 hover:scale-105 shadow-lg">
              Dowiedz się więcej
            </button>
            <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary px-8 py-4 rounded-lg font-semibold font-inter transition-all duration-200 hover:scale-105">
              Skontaktuj się z nami
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
