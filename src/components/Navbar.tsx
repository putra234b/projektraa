import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useOrder } from '../context/OrderContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openDrawer } = useOrder();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Menu', href: '#menu' },
    { label: 'Paket Liwet', href: '#paket-liwet' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Lokasi & Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F1]/95 backdrop-blur-md shadow-sm border-b border-[#87977A]/20 py-2.5'
          : 'bg-[#FAF8F1] border-b border-[#87977A]/15 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Zone 1: Single element Brand Wordmark & Official Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87977A]"
          >
            {/* Logo Container with clean white background and soft rounded corners */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1 shadow-xs border border-stone-200/80 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
              <img
                src={RESTAURANT_INFO.logoUrl}
                alt="Nirwana River Cafe & Resto Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-xl font-bold tracking-tight text-[#344C3B] whitespace-nowrap leading-tight">
                Nirwana River
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-[#8B6346] uppercase leading-none mt-0.5">
                Cafe & Resto Sunda
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2E332D]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-150 hover:text-[#344C3B] ${
                    isActive ? 'text-[#344C3B] font-semibold' : 'text-[#77796F]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#87977A] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Cart & Contact) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Cart Button */}
            <button
              type="button"
              onClick={openDrawer}
              className="relative inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#344C3B] bg-white hover:bg-stone-50 border border-[#87977A]/30 rounded-lg transition-all duration-200 shadow-2xs cursor-pointer"
              aria-label="Buka Keranjang Pesanan"
            >
              <ShoppingBag className="w-4 h-4 text-[#8B6346]" />
              <span className="hidden sm:inline">Pesanan</span>
              {totalItems > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-[#344C3B] text-white text-[10px] font-bold tabular-nums">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Direct Contact CTA (Desktop) */}
            <a
              href="#kontak"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#344C3B] hover:bg-[#273a2d] active:scale-[0.98] rounded-lg transition-all duration-200 shadow-xs whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C4A66A]" />
              <span>Hubungi Kami</span>
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2E332D] hover:bg-[#87977A]/15 focus:outline-none focus:ring-2 focus:ring-[#87977A] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F1] border-b border-[#87977A]/20 px-4 pt-3 pb-6 shadow-md transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#87977A]/15 text-[#344C3B] font-semibold'
                      : 'text-[#2E332D] hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDrawer();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#344C3B] bg-white border border-[#87977A]/30 rounded-lg shadow-2xs"
              >
                <ShoppingBag className="w-4 h-4 text-[#8B6346]" />
                <span>Lihat Keranjang Pesanan ({totalItems} item)</span>
              </button>

              <a
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#344C3B] rounded-lg shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-[#C4A66A]" />
                <span>Hubungi & Lokasi Resto</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
