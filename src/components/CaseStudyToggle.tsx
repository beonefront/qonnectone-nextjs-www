'use client';

import { useState } from 'react';

export default function CaseStudyToggle() {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Toggle Switch */}
      <div className="flex items-center justify-center mb-8 p-4 bg-gray-50 rounded-lg border">
        <div className="flex items-center space-x-4">
          <span className={`text-sm font-medium ${!isExtended ? 'text-gray-900' : 'text-gray-500'}`}>
            Wersja podstawowa
          </span>
          <button
            onClick={() => setIsExtended(!isExtended)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isExtended ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            role="switch"
            aria-checked={isExtended}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isExtended ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isExtended ? 'text-gray-900' : 'text-gray-500'}`}>
            Wersja rozszerzona
          </span>
        </div>
      </div>

      {/* Case Studies Content */}
      {isExtended ? (
        <div className="text-center p-8 bg-blue-50 rounded-lg">
          <div className="mb-4">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rozszerzona wersja</h3>
            <p className="text-gray-600">
              Pełne, szczegółowe analizy business cases z dodatkowymi informacjami, diagramami i rozszerzonymi opisami będą dostępne wkrótce.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Obecnie prezentujemy wersję podstawową z kluczowymi informacjami.
          </div>
        </div>
      ) : (
        <>
          {/* Basic Case Study 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Instytucje płatnicze
                </div>
                <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                  Rozszerzenie Oferty Płatniczej dla Krajowej Instytucji Płatniczej X
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Wprowadzenie */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Wprowadzenie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Krajowa Instytucja Płatnicza (KIP) X, posiadająca podstawową licencję na realizację przekazu płatniczego,
                  stoi przed strategiczną decyzją o rozszerzeniu swojej oferty o nowe, kluczowe produkty, takie jak karty płatnicze
                  i konta IBAN dla swoich klientów.
                </p>
              </div>

              {/* Wyzwania */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Wyzwania tradycyjnego podejścia</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Długotrwały proces licencyjny</div>
                      <div className="text-sm text-gray-600">Kilkanaście miesięcy oczekiwania na rozszerzenie licencji</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Znaczące nakłady finansowe</div>
                      <div className="text-sm text-gray-600">Budowa systemu i zespołu od podstaw</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Wysokie ryzyko biznesowe</div>
                      <div className="text-sm text-gray-600">Brak gwarancji sukcesu i zgodności z regulacjami</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rozwiązanie */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Rozwiązanie QonnectOne</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Gotowy system transakcyjny</div>
                      <div className="text-sm text-gray-600">Kompletne rozwiązanie gotowe do integracji</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Partnerstwo z licencjonowaną instytucją</div>
                      <div className="text-sm text-gray-600">Dostęp do rozszerzonych licencji przez partnera</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Szybkie wejście na rynek</div>
                      <div className="text-sm text-gray-600">4-6 tygodni zamiast 12-18 miesięcy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rezultaty */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kluczowe rezultaty</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">4-6 tygodni</div>
                  <div className="text-sm text-gray-600">Time-to-Market</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">70%</div>
                  <div className="text-sm text-gray-600">Redukcja nakładów</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Minimalizacja</div>
                  <div className="text-sm text-gray-600">Ryzyka biznesowego</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Fokus na biznes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Case Study 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Kryptowaluty i aktywa cyfrowe
                </div>
                <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                  Ciągłość Działalności i Zgodność z MiCA dla Instytucji Kryptowalutowej Y
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Wprowadzenie */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Wprowadzenie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Instytucja Nadzorowana Y, posiadająca podstawową licencję na obrót kryptoaktywami, stoi w obliczu znaczących zmian
                  regulacyjnych związanych z wejściem w życie dyrektywy MiCA.
                </p>
              </div>

              {/* Wyzwania */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Wyzwania związane z MiCA</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Długotrwały proces licencyjny</div>
                      <div className="text-sm text-gray-600">Kilka do kilkunastu miesięcy bez gwarancji</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 18M5.636 5.636L6 6" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Blokada działalności operacyjnej</div>
                      <div className="text-sm text-gray-600">Niemożność obsługi klientów bez licencji MiCA</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Ryzyko utraty pozycji rynkowej</div>
                      <div className="text-sm text-gray-600">Konkurenci mogą zyskać przewagę w czasie oczekiwania</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rozwiązanie */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Rozwiązanie QonnectOne</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Gotowy system do integracji</div>
                      <div className="text-sm text-gray-600">Kompletny system zgodny z wymogami MiCA</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Partnerstwo z depozytariuszem</div>
                      <div className="text-sm text-gray-600">Działalność pod licencją partnera</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Ciągłość działalności</div>
                      <div className="text-sm text-gray-600">Kontynuacja obsługi klientów od pierwszego dnia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rezultaty */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kluczowe rezultaty</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Ciągłość działalności</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Zabezpieczone</div>
                  <div className="text-sm text-gray-600">Przychody i pozycja</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Bez presji</div>
                  <div className="text-sm text-gray-600">Własna licencja MiCA</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">Pełna zgodność</div>
                  <div className="text-sm text-gray-600">Od pierwszego dnia</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
