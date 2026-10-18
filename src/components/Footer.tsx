import React from 'react';
import { ArrowUp, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#344C3B] text-white pt-16 pb-12 border-t border-[#87977A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Official Logo */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo in neat white container with soft rounded corners */}
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={RESTAURANT_INFO.logoUrl}
                  alt="Nirwana River Cafe & Resto Logo Resmi"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white leading-tight">
                  Nirwana River
                </h3>
                <span className="text-xs text-[#C4A66A] tracking-wider uppercase font-medium">
                  Cafe & Resto Sunda
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              {RESTAURANT_INFO.tagline}. Menyajikan masakan khas Priangan dan hidangan Nusantara otentik dalam suasana bersantap kontemporer yang nyaman.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-stone-300">
              <Clock className="w-4 h-4 text-[#C4A66A] shrink-0" />
              <span>Buka Setiap Hari (Everyday): 10.00 – 00.00 WIB</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#C4A66A] uppercase tracking-wider mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li>
                <a href="#beranda" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Daftar Menu & Harga
                </a>
              </li>
              <li>
                <a href="#paket-liwet" className="hover:text-white transition-colors">
                  Paket Liwet Khas Sunda
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white transition-colors">
                  Galeri Foto Kuliner
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">
                  Lokasi & Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-[#C4A66A] uppercase tracking-wider mb-4">
              Layanan & Reservasi
            </h4>
            <p className="text-xs text-stone-300 mb-4 leading-relaxed">
              Menerima reservasi santap keluarga, pertemuan santai, maupun pesanan paket bancakan nasi liwet.
            </p>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs sm:text-sm text-white transition-colors border border-white/10"
              >
                <MessageCircle className="w-4 h-4 text-[#C4A66A]" />
                <span>WhatsApp: {RESTAURANT_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-start gap-2 text-xs text-stone-300">
                <MapPin className="w-4 h-4 text-[#C4A66A] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <p>© {new Date().getFullYear()} Nirwana River Cafe & Resto. Seluruh Hak Cipta Dilindungi.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
