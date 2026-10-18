import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, X, ChevronRight, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS, MenuItem, formatRupiah } from '../data/menuData';
import { ImageWithFallback } from './ImageWithFallback';
import { useOrder } from '../context/OrderContext';

interface MenuSectionProps {
  onSelectDish: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDish }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { addToOrder, updateQuantity, getItemQuantity } = useOrder();

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-[#FAF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8B6346] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A66A]" />
            <span>Katalog Kuliner</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#87977A]">Daftar Menu & Harga</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#344C3B] tracking-tight">
            Menu Makanan & Minuman
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#77796F]">
            Pilihan hidangan tradisional Sunda dan cita rasa Nusantara yang dimasak segar setiap hari.
          </p>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="mb-8 flex flex-col gap-5">
          {/* Search Input */}
          <div className="relative max-w-md mx-auto w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#77796F]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari makanan atau minuman favorit..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#87977A]/30 rounded-xl text-sm text-[#2E332D] placeholder-[#77796F]/70 focus:outline-none focus:ring-2 focus:ring-[#87977A] focus:border-transparent transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#77796F] hover:text-[#2E332D]"
                aria-label="Bersihkan pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none sm:justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-[#344C3B] text-white shadow-xs'
                      : 'bg-white text-[#77796F] hover:text-[#2E332D] hover:bg-stone-50 border border-stone-200/80'
                  }`}
                >
                  {cat.displayName}
                </button>
              );
            })}
          </div>

          {/* Current Category Context */}
          {currentCategoryObj && selectedCategory !== 'all' && (
            <div className="text-center text-xs text-[#77796F] -mt-1">
              <span className="font-semibold text-[#344C3B]">{currentCategoryObj.name}</span>
              <span className="mx-2">·</span>
              <span>{currentCategoryObj.description}</span>
            </div>
          )}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => {
              const qty = getItemQuantity(item.id);
              return (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-white border border-[#87977A]/20 overflow-hidden shadow-xs hover:shadow-md hover:border-[#87977A]/40 transition-all duration-200 flex flex-col"
                >
                  {/* Image Frame with Click to View Detail */}
                  <div
                    onClick={() => onSelectDish(item)}
                    className="relative aspect-16/10 overflow-hidden bg-stone-100 cursor-pointer"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                      {item.spicyLevel && item.spicyLevel > 0 ? (
                        <span className="px-2 py-0.5 rounded-md bg-white/95 text-[11px] font-semibold text-[#C77C55] shadow-xs flex items-center gap-0.5">
                          <Flame className="w-3 h-3 text-[#C77C55]" />
                          <span>Pedas</span>
                        </span>
                      ) : null}
                      {item.isSignature ? (
                        <span className="px-2 py-0.5 rounded-md bg-[#344C3B] text-[11px] font-semibold text-[#FAF8F1] shadow-xs">
                          Khas
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div
                      onClick={() => onSelectDish(item)}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-[#87977A]">
                          {item.portion || 'Porsi'}
                        </span>
                        <span className="font-display font-bold text-[#344C3B] text-base tabular-nums">
                          {formatRupiah(item.price)}
                        </span>
                      </div>

                      <h3 className="font-display text-base sm:text-lg font-bold text-[#2E332D] group-hover:text-[#344C3B] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-xs text-[#77796F] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Actions: Quantity Stepper & Add to Order */}
                    <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectDish(item)}
                        className="text-xs text-[#8B6346] hover:text-[#344C3B] font-medium flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>Detail</span>
                        <ChevronRight className="w-3.5 h-3.5" />
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
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-stone-200/80 max-w-md mx-auto">
            <Search className="w-10 h-10 text-[#87977A]/50 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#2E332D]">Tidak Menemukan Menu</h3>
            <p className="mt-1 text-xs text-[#77796F]">
              Tidak ada hidangan yang cocok dengan kata kunci "{searchQuery}". Coba gunakan nama hidangan lain.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#344C3B] bg-[#FAF8F1] hover:bg-stone-100 rounded-lg transition-colors border border-[#87977A]/30 cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
