import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedDishes } from './components/FeaturedDishes';
import { LiwetSection } from './components/LiwetSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ValuesSection } from './components/ValuesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FoodDetailModal } from './components/FoodDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { OrderDrawer } from './components/OrderDrawer';
import { FloatingOrderBar } from './components/FloatingOrderBar';
import { OrderProvider } from './context/OrderContext';
import { MenuItem } from './data/menuData';
import { GALLERY_ITEMS } from './data/restaurantData';
import { ArrowUp } from 'lucide-react';

function RestaurantApp() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll listener for active section & floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sectionIds = ['beranda', 'tentang', 'menu', 'paket-liwet', 'galeri', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev ?? 0) + 1) % GALLERY_ITEMS.length);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev ?? 0) - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#2E332D] flex flex-col font-sans selection:bg-[#87977A]/25 selection:text-[#344C3B]">
      {/* Fixed Navbar with Cart Status */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedDishes onSelectDish={setSelectedDish} />
        <LiwetSection />
        <MenuSection onSelectDish={setSelectedDish} />
        <GallerySection onOpenLightbox={handleOpenLightbox} />
        <ValuesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Food Detail Modal */}
      <FoodDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex ?? 0}
        items={GALLERY_ITEMS}
        onClose={handleCloseLightbox}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />

      {/* Slide-over Order Drawer */}
      <OrderDrawer />

      {/* Floating Bottom Order Bar */}
      <FloatingOrderBar />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-6 right-6 z-20 p-3 rounded-full bg-[#344C3B] text-white shadow-lg hover:bg-[#273a2d] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#87977A]"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5 text-[#C4A66A]" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <OrderProvider>
      <RestaurantApp />
    </OrderProvider>
  );
}
