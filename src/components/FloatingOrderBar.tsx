import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { formatRupiah } from '../data/menuData';

export const FloatingOrderBar: React.FC = () => {
  const { totalItems, totalPrice, openDrawer, isDrawerOpen } = useOrder();

  if (totalItems === 0 || isDrawerOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-30 max-w-md ml-auto animate-fade-in">
      <div className="bg-[#344C3B] text-white p-3 sm:py-3 sm:px-4 rounded-2xl shadow-xl border border-[#87977A]/40 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <ShoppingBag className="w-4 h-4 text-[#C4A66A]" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C77C55] text-white text-[10px] font-bold flex items-center justify-center tabular-nums shadow-xs">
              {totalItems}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] text-stone-300">
              {totalItems} Menu Dipilih
            </span>
            <span className="font-display text-sm font-bold text-white tabular-nums">
              {formatRupiah(totalPrice)}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={openDrawer}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#344C3B] bg-[#FAF8F1] hover:bg-white rounded-xl transition-all cursor-pointer shrink-0 shadow-xs"
        >
          <span>Lihat Pesanan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
