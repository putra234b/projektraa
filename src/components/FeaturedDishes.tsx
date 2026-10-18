import React from 'react';
import { Sparkles, ArrowRight, Flame, Plus, Minus, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS, formatRupiah, MenuItem } from '../data/menuData';
import { ImageWithFallback } from './ImageWithFallback';
import { useOrder } from '../context/OrderContext';

interface FeaturedDishesProps {
  onSelectDish: (item: MenuItem) => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ onSelectDish }) => {
  const { addToOrder, updateQuantity, getItemQuantity } = useOrder();

  // Curated showcase items across diverse categories
  const featuredIds = ['c3', 'f1', 'sp1', 's1', 'sn1', 'bv4'];
  const featuredItems = MENU_ITEMS.filter((item) => featuredIds.includes(item.id));

  return (
    <section className="py-20 bg-[#FAF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8B6346] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C4A66A]" />
              <span>Pilihan Rekomendasi</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#87977A]">Dapur Nirwana</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#344C3B] tracking-tight">
              Hidangan Unggulan Nusantara
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#77796F] max-w-xl">
              Cita rasa istimewa dengan teknik memasak otentik dan bumbu rempah segar beraroma khas.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344C3B] hover:text-[#8B6346] transition-colors group shrink-0"
          >
            <span>Lihat Semua Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Grid of Featured Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => {
            const qty = getItemQuantity(item.id);
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-white border border-[#87977A]/20 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div
                  onClick={() => onSelectDish(item)}
                  className="relative aspect-4/3 overflow-hidden bg-stone-100 cursor-pointer"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.spicyLevel && item.spicyLevel > 0 ? (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[11px] font-medium text-[#C77C55] flex items-center gap-1 shadow-2xs">
                      <Flame className="w-3 h-3 text-[#C77C55]" />
                      <span>Pedas</span>
                    </div>
                  ) : null}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div
                    onClick={() => onSelectDish(item)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs text-[#87977A] font-medium tracking-wide uppercase">
                        {item.portion || '1 Porsi'}
                      </span>
                      <span className="font-display font-bold text-[#344C3B] text-base sm:text-lg tabular-nums">
                        {formatRupiah(item.price)}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[#2E332D] group-hover:text-[#344C3B] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#77796F] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectDish(item)}
                      className="text-xs font-semibold text-[#8B6346] hover:text-[#344C3B] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {qty > 0 ? (
                      <div className="flex items-center border border-[#87977A]/40 rounded-lg bg-[#FAF8F1] overflow-hidden shadow-2xs">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2.5 py-1 text-[#344C3B] hover:bg-stone-200 transition-colors cursor-pointer"
                          aria-label="Kurangi porsi"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-bold text-[#344C3B] tabular-nums min-w-[28px] text-center">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2.5 py-1 text-[#344C3B] hover:bg-stone-200 transition-colors cursor-pointer"
                          aria-label="Tambah porsi"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => addToOrder(item, 1)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#344C3B] hover:bg-[#273a2d] active:scale-[0.98] rounded-lg transition-all duration-150 shadow-2xs cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-[#C4A66A]" />
                        <span>Pesan</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
