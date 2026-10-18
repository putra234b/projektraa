import React from 'react';
import { Sparkles, Utensils, Sprout, Home, Smile } from 'lucide-react';
import { VALUE_PILLARS } from '../data/restaurantData';

export const ValuesSection: React.FC = () => {
  const icons = [Utensils, Sprout, Home, Smile];

  return (
    <section className="py-20 bg-[#FAF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8B6346] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A66A]" />
            <span>Nilai & Pelayanan</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#87977A]">Filosofi Kami</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#344C3B] tracking-tight">
            Keunggulan Bersantap di Nirwana River
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#77796F]">
            Kami menjaga keaslian rasa dan kehangatan layanan agar setiap kunjungan menjadi kenangan yang menyenangkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-white border border-[#87977A]/20 shadow-2xs hover:shadow-xs transition-shadow flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F1] border border-[#87977A]/25 flex items-center justify-center text-[#344C3B] mb-5">
                  <Icon className="w-5 h-5 text-[#87977A]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#2E332D] leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#77796F] leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
