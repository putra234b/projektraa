import React, { useState, useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, Utensils, MessageCircle, AlertCircle } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { formatRupiah } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

export const OrderDrawer: React.FC = () => {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeFromOrder,
    clearOrder,
    totalItems,
    totalPrice
  } = useOrder();

  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [orderNotes, setOrderNotes] = useState<string>('');

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let text = `*PESANAN BARU — NIRWANA RIVER CAFE & RESTO*\n\n`;
    text += `👤 *Nama:* ${customerName.trim() || 'Pelanggan'}\n`;
    text += `🍽️ *Tipe:* ${orderType === 'dine-in' ? 'Makan di Tempat (Dine-in)' : 'Bawa Pulang (Takeaway)'}\n`;
    if (orderType === 'dine-in' && tableNumber.trim()) {
      text += `📍 *Nomor Meja:* ${tableNumber.trim()}\n`;
    }
    text += `\n*Rincian Menu yang Dipesan:*\n`;

    items.forEach((item, index) => {
      const lineTotal = item.price * item.quantity;
      text += `${index + 1}. *${item.quantity}x* ${item.name} (${formatRupiah(lineTotal)})\n`;
    });

    text += `\n*Total Tagihan: ${formatRupiah(totalPrice)}* (${totalItems} item)\n`;

    if (orderNotes.trim()) {
      text += `📝 *Catatan Tambahan:* ${orderNotes.trim()}\n`;
    }

    text += `\nMohon konfirmasi pesanan kami. Terima kasih!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      onClick={closeDrawer}
    >
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className="w-screen max-w-md bg-[#FAF8F1] flex flex-col shadow-2xl border-l border-stone-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 bg-white border-b border-stone-200/90 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#87977A]/15 text-[#344C3B] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#344C3B]">
                  Daftar Pesanan
                </h3>
                <p className="text-xs text-[#77796F]">
                  {totalItems > 0 ? `${totalItems} hidangan dipilih` : 'Belum ada menu yang dipilih'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearOrder}
                  className="px-2.5 py-1 text-[11px] font-medium text-rose-700 hover:bg-rose-50 rounded-md transition-colors cursor-pointer mr-1"
                >
                  Kosongkan
                </button>
              )}
              <button
                type="button"
                onClick={closeDrawer}
                className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Tutup Keranjang"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body: Items List or Empty State */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length > 0 ? (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-white border border-[#87977A]/20 shadow-2xs flex items-center gap-3"
                    >
                      {item.image && (
                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200/60">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-[#2E332D] truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-[#77796F] mt-0.5">
                          <span className="tabular-nums font-medium text-[#344C3B]">
                            {formatRupiah(item.price)}
                          </span>
                          {item.portion && (
                            <>
                              <span>·</span>
                              <span className="text-[11px]">{item.portion}</span>
                            </>
                          )}
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                          <div className="flex items-center border border-stone-200 rounded-lg bg-[#FAF8F1] overflow-hidden">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2 py-1 text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors cursor-pointer"
                              aria-label="Kurangi 1"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-bold text-[#2E332D] tabular-nums min-w-[28px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2 py-1 text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors cursor-pointer"
                              aria-label="Tambah 1"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-display text-xs sm:text-sm font-bold text-[#344C3B] tabular-nums">
                              {formatRupiah(item.price * item.quantity)}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFromOrder(item.id)}
                              className="p-1 text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                              aria-label={`Hapus ${item.name}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer & Dining Details Form */}
                <div className="mt-6 pt-5 border-t border-stone-200 space-y-3.5 bg-white p-4 rounded-xl border">
                  <h4 className="text-xs font-bold text-[#344C3B] uppercase tracking-wider">
                    Detail Pesanan
                  </h4>

                  {/* Order Type Tabs */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#77796F] mb-1">
                      Pilihan Tempat
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setOrderType('dine-in')}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
                          orderType === 'dine-in'
                            ? 'bg-[#344C3B] text-white'
                            : 'bg-[#FAF8F1] text-stone-600 border border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Makan di Tempat
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('takeaway')}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
                          orderType === 'takeaway'
                            ? 'bg-[#344C3B] text-white'
                            : 'bg-[#FAF8F1] text-stone-600 border border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Bungkus / Takeaway
                      </button>
                    </div>
                  </div>

                  {/* Table number if dine in */}
                  {orderType === 'dine-in' && (
                    <div>
                      <label className="block text-[11px] font-semibold text-[#77796F] mb-1">
                        Nomor Meja (Jika Sudah Duduk)
                      </label>
                      <input
                        type="text"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="Contoh: Meja 5 / Lesehan 2"
                        className="w-full px-3 py-2 text-xs bg-[#FAF8F1] border border-stone-200 rounded-lg text-[#2E332D] focus:outline-none focus:ring-1 focus:ring-[#87977A]"
                      />
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#77796F] mb-1">
                      Nama Pemesan
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Contoh: Bpk. Budi"
                      className="w-full px-3 py-2 text-xs bg-[#FAF8F1] border border-stone-200 rounded-lg text-[#2E332D] focus:outline-none focus:ring-1 focus:ring-[#87977A]"
                    />
                  </div>

                  {/* Special instructions */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#77796F] mb-1">
                      Catatan Masakan (Opsional)
                    </label>
                    <textarea
                      rows={2}
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="Contoh: Sambal dipisah, teh manis tidak terlalu manis..."
                      className="w-full px-3 py-2 text-xs bg-[#FAF8F1] border border-stone-200 rounded-lg text-[#2E332D] focus:outline-none focus:ring-1 focus:ring-[#87977A] resize-none"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="w-14 h-14 rounded-2xl bg-stone-200/60 text-[#87977A] flex items-center justify-center mb-3">
                  <Utensils className="w-6 h-6 text-[#344C3B]" />
                </div>
                <h4 className="font-display text-base font-bold text-[#2E332D]">
                  Belum Ada Pesanan
                </h4>
                <p className="mt-1 text-xs text-[#77796F] max-w-xs">
                  Pilih aneka hidangan favorit Sunda atau paket nasi liwet dari menu untuk mulai memesan.
                </p>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="mt-5 px-4 py-2 text-xs font-semibold text-white bg-[#344C3B] hover:bg-[#273a2d] rounded-lg transition-colors cursor-pointer"
                >
                  Jelajahi Menu
                </button>
              </div>
            )}
          </div>

          {/* Footer: Subtotal & Send Order via WhatsApp */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-stone-200 space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between text-[#77796F]">
                  <span>Jumlah Menu:</span>
                  <span className="font-medium text-[#2E332D] tabular-nums">{totalItems} porsi</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                  <span className="font-bold text-sm text-[#2E332D]">Total Pembayaran:</span>
                  <span className="font-display font-extrabold text-lg text-[#344C3B] tabular-nums">
                    {formatRupiah(totalPrice)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#344C3B] hover:bg-[#273a2d] active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C4A66A]" />
                <span>Kirim Pesanan ke WhatsApp Resto</span>
              </button>

              <p className="text-[11px] text-center text-[#77796F]">
                Pesanan akan otomatis diteruskan ke WhatsApp resmi Nirwana River Cafe.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
