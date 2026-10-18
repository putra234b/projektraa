import React, { useEffect, useState } from 'react';
import { X, Flame, ShoppingBag, Utensils, Plus, Minus, Check } from 'lucide-react';
import { MenuItem, formatRupiah, CATEGORIES } from '../data/menuData';
import { ImageWithFallback } from './ImageWithFallback';
import { useOrder } from '../context/OrderContext';

interface FoodDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const FoodDetailModal: React.FC<FoodDetailModalProps> = ({ item, onClose }) => {
  const { addToOrder, openDrawer } = useOrder();
  const [modalQuantity, setModalQuantity] = useState<number>(1);
  const [justAdded, setJustAdded] = useState<boolean>(false);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      setModalQuantity(1);
      setJustAdded(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  if (!item) return null;

  const categoryName = CATEGORIES.find((c) => c.id === item.category)?.name || item.category;

  const handleAdd = () => {
    addToOrder(item, modalQuantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
      openDrawer();
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#2E332D] shadow-xs transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Food Image */}
        <div className="relative aspect-16/10 bg-stone-100">
          <ImageWithFallback
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          {item.spicyLevel && item.spicyLevel > 0 ? (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-xs font-semibold text-[#C77C55] shadow-xs flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#C77C55]" />
              <span>Tingkat Kepedasan: {item.spicyLevel}/3</span>
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-medium text-[#87977A] tracking-wider uppercase">
              {categoryName}
            </span>
            <span className="font-display font-bold text-xl text-[#344C3B] tabular-nums">
              {formatRupiah(item.price)}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-[#2E332D] leading-snug">
            {item.name}
          </h3>

          <div className="mt-2 text-xs text-[#8B6346] font-medium flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5 text-[#87977A]" />
            <span>Porsi: {item.portion || '1 Porsi Sajian'}</span>
          </div>

          <p className="mt-3 text-sm text-[#77796F] leading-relaxed">
            {item.description}
          </p>

          {/* Quantity Selector for ordering more than 1 item */}
          <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#2E332D]">Jumlah:</span>
              <div className="flex items-center border border-stone-200 rounded-xl bg-[#FAF8F1] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setModalQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
                  aria-label="Kurangi"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 py-1 text-sm font-bold text-[#2E332D] tabular-nums min-w-[32px] text-center">
                  {modalQuantity}
                </span>
                <button
                  type="button"
                  onClick={() => setModalQuantity((q) => q + 1)}
                  className="px-3 py-1.5 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
                  aria-label="Tambah"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-[#77796F] block">Subtotal:</span>
              <span className="font-display font-bold text-base text-[#344C3B] tabular-nums">
                {formatRupiah(item.price * modalQuantity)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={handleAdd}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-white rounded-xl shadow-xs transition-all cursor-pointer ${
                justAdded ? 'bg-emerald-700' : 'bg-[#344C3B] hover:bg-[#273a2d]'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-200" />
                  <span>Dimasukkan ke Pesanan!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#C4A66A]" />
                  <span>Tambah {modalQuantity} ke Pesanan</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-4 py-3 text-xs sm:text-sm font-medium text-[#77796F] hover:text-[#2E332D] border border-stone-200 rounded-xl transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
