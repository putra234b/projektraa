import React from 'react';
import { Leaf, Heart, Users, Coffee } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white border-y border-[#87977A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Accent Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-stone-200/90 shadow-md bg-[#FAF8F1] p-2">
                <ImageWithFallback
                  src="/images/ayam_bakar.jpg"
                  alt="Kelezatan Ayam Bakar Madu Khas Nirwana River Cafe"
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-xl"
                />
              </div>

              {/* Natural Quote Note */}
              <div className="mt-4 p-4 rounded-xl bg-[#FAF8F1] border border-[#87977A]/20">
                <p className="text-xs italic text-[#77796F] leading-relaxed">
                  "Menghadirkan kebersamaan keluarga dalam setiap aroma bakaran rempah dan kepulan nasi liwet hangat."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#87977A] uppercase mb-2">
              <span>Tentang Kami</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#8B6346]">Nirwana River Cafe & Resto</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#344C3B] tracking-tight leading-snug">
              Perpaduan Tradisi Rasa Sunda dengan Kenyamanan Cafe Modern
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#77796F] leading-relaxed">
              <p>
                Nirwana River Cafe lahir dari kecintaan kami terhadap kekayaan rasa kuliner Nusantara, khususnya masakan Sunda yang mengedepankan kesegaran bahan dan kehangatan rempah alami.
              </p>
              <p>
                Kami memadukan atmosfer resto tradisional yang ramah dan akrab dengan sentuhan kenyamanan ruang kontemporer. Di sini, setiap santapan bukan sekadar mengisi rasa lapar, melainkan momen berharga untuk merayakan kebersamaan bersama keluarga, teman, dan orang-orang terkasih.
              </p>
              <p>
                Mulai dari paket nasi liwet kastrol komplit, ayam bakar madu, olahan ikan segar bumbu pecak, hingga aneka bakso, mie, dan kopi nusantara—seluruh hidangan kami sajikan dengan penuh ketulusan dan standar rasa terbaik.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF8F1] border border-[#87977A]/30 flex items-center justify-center shrink-0 text-[#344C3B]">
                  <Leaf className="w-4 h-4 text-[#87977A]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2E332D]">Bahan Segar Alami</h3>
                  <p className="text-xs text-[#77796F] mt-0.5">Sayuran kebun segar dan rempah dapur pilihan tanpa bahan pengawet.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF8F1] border border-[#87977A]/30 flex items-center justify-center shrink-0 text-[#344C3B]">
                  <Users className="w-4 h-4 text-[#8B6346]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2E332D]">Ruang Ramah Keluarga</h3>
                  <p className="text-xs text-[#77796F] mt-0.5">Tempat bersantap yang lapang, tenang, dan nyaman untuk segala acara.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
