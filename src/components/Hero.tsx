import React from 'react';
import { ArrowRight, UtensilsCrossed, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#FAF8F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker without pill badge styling */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8B6346] uppercase mb-3">
              <span>Kuliner Sunda & Nusantara</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#87977A]">Sajian Hangat Otentik</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#344C3B] tracking-tight leading-[1.18] text-balance">
              Cita Rasa Sunda, Kehangatan yang Selalu Dirindukan.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#77796F] leading-relaxed max-w-2xl">
              Nikmati beragam hidangan Nusantara dan sajian khas Sunda dalam suasana yang hangat dan nyaman bersama orang-orang tersayang.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#344C3B] hover:bg-[#273a2d] active:scale-[0.98] rounded-xl shadow-sm transition-all duration-200"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#C4A66A]" />
                <span>Jelajahi Menu</span>
              </a>

              <a
                href="#paket-liwet"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#344C3B] bg-white hover:bg-stone-50 border border-[#87977A]/30 active:scale-[0.98] rounded-xl transition-all duration-200 shadow-2xs"
              >
                <span>Lihat Paket Liwet</span>
                <ArrowRight className="w-4 h-4 text-[#87977A]" />
              </a>
            </div>

            {/* Subtle Value Markers - Clean typography with dividers */}
            <div className="mt-12 pt-8 border-t border-[#87977A]/20 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="font-display text-2xl font-bold text-[#344C3B] tabular-nums">11</p>
                <p className="text-xs text-[#77796F] mt-0.5">Kategori Menu Lengkap</p>
              </div>
              <div className="border-l border-[#87977A]/20 pl-4">
                <p className="font-display text-2xl font-bold text-[#8B6346] tabular-nums">3</p>
                <p className="text-xs text-[#77796F] mt-0.5">Pilihan Paket Liwet</p>
              </div>
              <div className="border-l border-[#87977A]/20 pl-4">
                <p className="font-display text-2xl font-bold text-[#344C3B]">100%</p>
                <p className="text-xs text-[#77796F] mt-0.5">Rempah Alami Nusantara</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer soft framing */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#87977A]/25 bg-white p-2">
                <ImageWithFallback
                  src="/images/hero.jpg"
                  alt="Hidangan Tradisional Sunda Lengkap Nirwana River Cafe & Resto"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Quiet caption tag */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#77796F] px-1">
                <span>Tradisi Liwet & Ayam Bakar Priangan</span>
                <span className="text-[#8B6346] font-medium">Bumbu Segar Harian</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
