'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Company {
  name: string;
  logo: string;
}

const LogoSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const companies: Company[] = [
    { name: 'Google', logo: 'https://cdn.magicui.design/companies/Google.svg' },
    { name: 'Microsoft', logo: 'https://cdn.magicui.design/companies/Microsoft.svg' },
    { name: 'Amazon', logo: 'https://cdn.magicui.design/companies/Amazon.svg' },
    { name: 'Netflix', logo: 'https://cdn.magicui.design/companies/Netflix.svg' },
    { name: 'YouTube', logo: 'https://cdn.magicui.design/companies/YouTube.svg' },
    { name: 'Instagram', logo: 'https://cdn.magicui.design/companies/Instagram.svg' },
    { name: 'Uber', logo: 'https://cdn.magicui.design/companies/Uber.svg' },
    { name: 'Spotify', logo: 'https://cdn.magicui.design/companies/Spotify.svg' },
  ];

  // Create 4 sets for continuous scrolling
  const logoSets = Array(4).fill(companies);

  return (
    <section id="logos" className="bg-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500 transition-colors duration-300">
          ZAUFALI NAM
        </h3>

        <div className="relative mt-6">
          <div
            className={`group flex overflow-hidden p-2 gap-4 flex-row max-w-full ${
              isPaused ? '[animation-play-state:paused]' : ''
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {logoSets.map((companies, setIndex) => (
              <div
                key={setIndex}
                className="flex shrink-0 justify-around gap-4 animate-marquee flex-row"
                style={{
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              >
                {companies.map((company: Company, index: number) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="group/logo cursor-pointer transition-all duration-300 hover:scale-110"
                    onClick={() => {
                      console.log(`Clicked on ${company.name}`);
                      // Add click handler logic here
                    }}
                  >
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={112}
                      height={40}
                      className="h-10 w-28 grayscale opacity-30
                               group-hover/logo:opacity-60 group-hover/logo:grayscale-0
                               transition-all duration-300 ease-in-out"
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
