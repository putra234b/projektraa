import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Instagram, Send, Info, CheckCircle2, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { LIWET_PACKAGES } from '../data/menuData';

export const ContactSection: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<string>('liwet');
  const [selectedPkg, setSelectedPkg] = useState<string>('Paket Liwet 2 Orang');
  const [guestCount, setGuestCount] = useState<string>('2-4 Orang');
  const [customerName, setCustomerName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Halo Nirwana River Cafe & Resto,\n\n`;
    if (customerName.trim()) {
      text += `Nama: ${customerName}\n`;
    }
    if (inquiryType === 'liwet') {
      text += `Saya ingin menanyakan reservasi / pemesanan untuk: ${selectedPkg}\n`;
      text += `Perkiraan Rombongan: ${guestCount}\n`;
    } else if (inquiryType === 'meja') {
      text += `Saya ingin menanyakan ketersediaan meja untuk: ${guestCount}\n`;
    } else {
      text += `Saya memiliki pertanyaan seputar lokasi dan jam operasional restoran.\n`;
    }
    if (notes.trim()) {
      text += `Catatan tambahan: ${notes}\n`;
    }
    text += `\nMohon informasi lebih lanjut. Terima kasih!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kontak" className="py-20 bg-white border-t border-[#87977A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info, Operating Hours & Location */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#8B6346] uppercase mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#C4A66A]" />
              <span>Lokasi & Kontak Resmi</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#87977A]">Informasi Kunjungan</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#344C3B] tracking-tight">
              Kunjungi Nirwana River Cafe
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#77796F] leading-relaxed">
              Kami siap menyambut Anda dengan kehangatan cita rasa Sunda dan hidangan Nusantara terbaik. Silakan hubungi kami untuk informasi meja atau paket bancakan liwet.
            </p>

            {/* Operating Hours Box */}
            <div className="mt-8 p-6 rounded-2xl bg-[#FAF8F1] border border-[#87977A]/20">
              <div className="flex items-center gap-2.5 mb-4 text-[#344C3B]">
                <Clock className="w-5 h-5 text-[#87977A]" />
                <h3 className="font-display text-base font-bold">Jam Operasional Restoran</h3>
              </div>

              <div className="space-y-3">
                {RESTAURANT_INFO.openingHours.map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-stone-200/60 last:border-0">
                    <span className="font-medium text-[#2E332D]">{schedule.days}</span>
                    <span className="font-semibold text-[#344C3B] tabular-nums">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Social Links */}
            <div className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-stone-200 bg-white">
                <MapPin className="w-5 h-5 text-[#87977A] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-semibold text-[#2E332D] block">Alamat Restoran</span>
                  <p className="text-[#77796F] mt-0.5">{RESTAURANT_INFO.address}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=F9FW%2BGHV%2C+Talagahiyang%2C+Cipanas%2C+Lebak+Regency%2C+Banten+42372%2C+Indonesia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#344C3B] hover:bg-[#273a2d] rounded-lg transition-colors shadow-2xs"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#C4A66A]" />
                      <span>Petunjuk Arah Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-stone-300" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#344C3B] bg-[#FAF8F1] hover:bg-stone-100 border border-[#87977A]/30 rounded-lg transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Alamat Disalin!</span>
                        </>
                      ) : (
                        <span>Salin Alamat</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover:border-[#87977A]/50 bg-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#77796F] block">WhatsApp Resmi</span>
                    <span className="font-semibold text-[#2E332D] group-hover:text-[#344C3B] tabular-nums">{RESTAURANT_INFO.phoneDisplay}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 bg-white">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#77796F] block">Instagram</span>
                    <span className="font-semibold text-[#2E332D]">{RESTAURANT_INFO.instagramHandle}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on Verified Location */}
            <div className="mt-5 flex items-start gap-2.5 text-xs text-[#2E332D] bg-[#FAF8F1] p-3.5 rounded-xl border border-[#87977A]/30">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Lokasi resmi: <strong>Talagahiyang, Kec. Cipanas, Kabupaten Lebak, Banten</strong>. Buka setiap hari pukul 10.00 – 00.00 WIB.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Reservation / Inquiry Composer */}
          <div className="lg:col-span-6 bg-[#FAF8F1] rounded-2xl border border-[#87977A]/25 p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-[#344C3B]">
                Kirim Pertanyaan / Reservasi
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#77796F]">
                Susun pesan otomatis dan terhubung langsung ke WhatsApp pengelola Nirwana River Cafe.
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              {/* Type selector */}
              <div>
                <label className="block text-xs font-semibold text-[#2E332D] mb-1.5">
                  Tujuan Pesan
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'liwet', label: 'Paket Liwet' },
                    { id: 'meja', label: 'Reservasi Meja' },
                    { id: 'tanya', label: 'Tanya Umum' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setInquiryType(tab.id)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg text-center transition-colors cursor-pointer ${
                        inquiryType === tab.id
                          ? 'bg-[#344C3B] text-white shadow-2xs'
                          : 'bg-white text-[#77796F] border border-stone-200 hover:text-[#2E332D]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Package selector if liwet */}
              {inquiryType === 'liwet' && (
                <div>
                  <label className="block text-xs font-semibold text-[#2E332D] mb-1.5">
                    Pilihan Paket Liwet
                  </label>
                  <select
                    value={selectedPkg}
                    onChange={(e) => setSelectedPkg(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-[#2E332D] focus:outline-none focus:ring-2 focus:ring-[#87977A]"
                  >
                    {LIWET_PACKAGES.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} — Rp{p.price.toLocaleString('id-ID')}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Guest Count */}
              <div>
                <label className="block text-xs font-semibold text-[#2E332D] mb-1.5">
                  Perkiraan Jumlah Orang
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-[#2E332D] focus:outline-none focus:ring-2 focus:ring-[#87977A]"
                >
                  <option value="1 Orang (Personal)">1 Orang (Personal)</option>
                  <option value="2 Orang (Pasangan)">2 Orang (Pasangan)</option>
                  <option value="3-5 Orang (Keluarga Kecil)">3-5 Orang (Keluarga Kecil)</option>
                  <option value="6-10 Orang (Rombongan)">6-10 Orang (Rombongan)</option>
                  <option value="Lebih dari 10 Orang (Acara)">Lebih dari 10 Orang (Acara Khusus)</option>
                </select>
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-xs font-semibold text-[#2E332D] mb-1.5">
                  Nama Anda (Opsional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Ibu Rina"
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-[#2E332D] placeholder-[#77796F]/60 focus:outline-none focus:ring-2 focus:ring-[#87977A]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#2E332D] mb-1.5">
                  Catatan atau Permintaan Khusus
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Untuk makan siang hari Minggu jam 12.00, sambal dipisah."
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-[#2E332D] placeholder-[#77796F]/60 focus:outline-none focus:ring-2 focus:ring-[#87977A] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#344C3B] hover:bg-[#273a2d] active:scale-[0.99] flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#C4A66A]" />
                <span>Kirim Format Pesan ke WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
