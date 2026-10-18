import React, { useState } from 'react';
import { Camera, ZoomIn, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Semua Galeri' },
    { id: 'liwet', label: 'Paket Liwet' },
    { id: 'hidangan', label: 'Hidangan Utama' },
    { id: 'camilan', label: 'Camilan Tradisional' },
    { id: 'minuman', label: 'Minuman Segar' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeri" className="py-20 bg-white border-t border-[#87977A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8B6346] uppercase mb-2">
              <Camera className="w-3.5 h-3.5 text-[#C4A66A]" />
              <span>Dokumentasi Kuliner</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#87977A]">Dapur & Sajian</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#344C3B] tracking-tight">
              Galeri Rasa Nirwana
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#77796F] max-w-xl">
              Sentuhan estetika masakan Nusantara yang diolah dengan bahan alami dan disajikan penuh ketelitian.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-[#344C3B] text-white shadow-xs'
                      : 'bg-[#FAF8F1] text-[#77796F] hover:text-[#2E332D] border border-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => {
            // Find global index in GALLERY_ITEMS for lightbox
            const globalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(globalIndex)}
                className="group relative cursor-pointer rounded-xl overflow-hidden bg-stone-100 border border-stone-200/80 aspect-4/3 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E332D]/90 via-[#2E332D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium text-[#C4A66A] uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                      <ZoomIn className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <h4 className="font-display text-sm font-semibold leading-snug">{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-[#77796F]">
          Klik salah satu foto untuk membuka galeri layar penuh dengan kontrol navigasi.
        </p>
      </div>
    </section>
  );
};
