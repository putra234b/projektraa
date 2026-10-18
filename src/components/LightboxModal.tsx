import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/restaurantData';

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Lightbox Content Container */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Counter and Close Button */}
        <div className="w-full flex items-center justify-between text-white/90 mb-3 px-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-medium text-[#C4A66A] uppercase tracking-wider">{currentItem.categoryLabel}</span>
            <span className="text-white/40">·</span>
            <span className="tabular-nums text-white/70">
              {currentIndex + 1} dari {items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Tutup Galeri"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Frame with Navigation Arrows */}
        <div className="relative w-full flex items-center justify-center">
          {/* Previous Arrow */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-xs transition-colors z-10 cursor-pointer"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={currentItem.imageUrl}
            alt={currentItem.alt}
            className="max-h-[65vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
          />

          {/* Next Arrow */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-xs transition-colors z-10 cursor-pointer"
            aria-label="Foto Berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Description */}
        <div className="w-full mt-4 text-center px-4">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
            {currentItem.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};
