import React, { useState } from 'react';
import { Users, Check, MessageCircle, Sparkles, Plus, Minus, ShoppingBag } from 'lucide-react';
import { LIWET_PACKAGES, formatRupiah, LiwetPackage } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';
import { useOrder } from '../context/OrderContext';

export const LiwetSection: React.FC = () => {
  const { addToOrder, updateQuantity, getItemQuantity, openDrawer } = useOrder();

  const handleInquireWhatsApp = (pkg: LiwetPackage) => {
    const message = encodeURIComponent(
      `Halo Nirwana River Cafe & Resto, saya ingin menanyakan pemesanan untuk "${pkg.name}" (${formatRupiah(pkg.price)}). Apakah tersedia untuk jadwal makan kami? Terima kasih.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="paket-liwet" className="py-20 bg-white border-t border-[#87977A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8B6346] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A66A]" />
            <span>Tradisi Priangan</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#87977A]">Sajian Komplit</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#344C3B] tracking-tight">
            Paket Liwet Khas Sunda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#77796F] leading-relaxed">
            Rasakan kenikmatan nasi liwet harum rempah daun salam dan serai, dipadu ayam kampung panggang, ikan asin renyah, sayur asem segar, dan sambal cobek ulek asli.
          </p>
        </div>

        {/* Featured Big Visual & Package Showcase */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-[#87977A]/25 bg-[#FAF8F1] p-3 sm:p-4 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden shadow-xs">
                <ImageWithFallback
                  src="/images/liwet.jpg"
                  alt="Sajian Lengkap Nasi Liwet Tradisional Khas Sunda"
                  className="w-full h-[280px] sm:h-[380px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center px-2 sm:px-4">
              <span className="text-xs font-semibold text-[#8B6346] uppercase tracking-wider">
                Bancakan & Kebersamaan
              </span>
              <h3 className="font-display text-2xl font-bold text-[#344C3B] mt-1">
                Lauk Komplit, Nikmat Tiada Tara
              </h3>
              <p className="text-sm text-[#77796F] mt-2 leading-relaxed">
                Setiap paket disajikan fresh langsung dari dapur saat Anda pesan, dengan sambal goang dan terasi yang diulek dadakan untuk kesegaran rasa maksimal.
              </p>

              <div className="mt-5 space-y-2 text-xs text-[#2E332D]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87977A]" />
                  <span>Nasi liwet wangi rempah dengan taburan teri gurih</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87977A]" />
                  <span>Ayam kampung asli bertekstur empuk bumbu meresap</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87977A]" />
                  <span>Sayur asem priangan berkuah bening segar asam manis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Exact Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LIWET_PACKAGES.map((pkg) => {
            const isFeatured = pkg.popular;
            const qty = getItemQuantity(pkg.id);
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl transition-all duration-300 flex flex-col p-6 sm:p-7 relative ${
                  isFeatured
                    ? 'bg-white border-2 border-[#87977A] shadow-md ring-1 ring-[#87977A]/20'
                    : 'bg-[#FAF8F1] border border-[#87977A]/25 shadow-xs hover:bg-white hover:border-[#87977A]/50'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#344C3B] text-white text-[11px] font-semibold tracking-wider uppercase">
                    Paling Diminati
                  </div>
                )}

                {/* Card Header */}
                <div className="border-b border-stone-200/80 pb-5 mb-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#8B6346] flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#87977A]" />
                      <span>{pkg.servings} Orang</span>
                    </span>
                    <span className="text-xs text-[#77796F]">Porsi Komplit</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#344C3B] mt-2">
                    {pkg.name}
                  </h3>

                  <div className="mt-3">
                    <span className="text-xs text-[#77796F] block">Harga Paket</span>
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#344C3B] tabular-nums">
                      {formatRupiah(pkg.price)}
                    </span>
                  </div>
                </div>

                {/* Package Items List */}
                <div className="flex-1 space-y-2.5 mb-6">
                  <span className="text-xs font-bold text-[#2E332D] tracking-wide uppercase block">
                    Isi Dalam Paket:
                  </span>
                  <ul className="space-y-2">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2E332D]">
                        <div className="w-4 h-4 rounded-full bg-[#87977A]/20 text-[#344C3B] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#344C3B]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Multi-item Order Action Controls */}
                <div className="space-y-2">
                  {qty > 0 ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#87977A]/40 shadow-2xs">
                        <span className="text-xs font-medium text-[#77796F] pl-1">Jumlah Paket:</span>
                        <div className="flex items-center border border-stone-200 rounded-lg bg-[#FAF8F1] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(pkg.id, -1)}
                            className="px-2.5 py-1 text-[#344C3B] hover:bg-stone-200 transition-colors cursor-pointer"
                            aria-label="Kurangi paket"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 py-1 text-xs font-bold text-[#344C3B] tabular-nums">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(pkg.id, 1)}
                            className="px-2.5 py-1 text-[#344C3B] hover:bg-stone-200 transition-colors cursor-pointer"
                            aria-label="Tambah paket"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={openDrawer}
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#344C3B] hover:bg-[#273a2d] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#C4A66A]" />
                        <span>Buka Keranjang Pesanan</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => addToOrder({
                        id: pkg.id,
                        name: pkg.name,
                        category: 'Paket Liwet',
                        price: pkg.price,
                        image: pkg.image,
                        portion: `Porsi ${pkg.servings} Orang`
                      }, 1)}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                        isFeatured
                          ? 'bg-[#344C3B] text-white hover:bg-[#273a2d] shadow-xs'
                          : 'bg-white text-[#344C3B] border border-[#87977A]/40 hover:bg-stone-50'
                      }`}
                    >
                      <Plus className="w-4 h-4 text-[#C4A66A]" />
                      <span>Tambah ke Pesanan</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleInquireWhatsApp(pkg)}
                    className="w-full py-2 text-center text-xs text-[#8B6346] hover:text-[#344C3B] transition-colors cursor-pointer"
                  >
                    Tanya Ketersediaan Langsung
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
