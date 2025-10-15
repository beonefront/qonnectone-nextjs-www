/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

interface Company {
  name: string;
  logo: string;
  height: number;
  url: string;
}

const LogoSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const partners: Company[] = [
    { name: 'QSecurities', url: 'https://qsecurities.com/pl/', logo: '/partners/qsecurities.png', height: 40 },
    { name: 'SIBS', url: 'https://www.sibs.com/', logo: '/partners/sibs.png', height: 25 },
    { name: 'vlayer', url: 'https://www.vlayer.xyz/', logo: '/partners/vlayer.png', height: 34 },
    { name: 'vouch', url: 'https://www.getvouch.io/', logo: '/partners/vouch.svg', height: 25 },
  ];

  // Create 4 sets for continuous scrolling
  const allLogos = [...partners];
  const logoSets = Array(4).fill(allLogos);

  return (
    <section id="logos" className="bg-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 py-24 pb-16">
        <h3 className="text-center text-sm font-semibold text-gray-500 transition-colors duration-300">
          NASI PARTNERZY
        </h3>

        <div className="relative mt-6">
          <div
            className={`group flex overflow-hidden p-2 gap-10 flex-row max-w-full ${
              isPaused ? '[animation-play-state:paused]' : ''
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {logoSets.map((logos, setIndex) => (
              <div
                key={setIndex}
                className="flex shrink-0 justify-around gap-10 animate-marquee flex-row items-center"
                style={{
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              >
                {logos.map((logo: Company, index: number) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="group/logo cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      window.open(logo.url, '_blank');
                    }}
                  >
                    <img
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      className="object-contain grayscale-100 hover:grayscale-0 opacity-30 hover:opacity-80 transition-all duration-300 ease-in-out"
                      style={{ height: `${logo.height}px`, width: 'auto' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-gray-50" />
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-gray-50" />
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
