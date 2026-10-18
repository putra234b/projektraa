export interface RestaurantInfo {
  name: string;
  tagline: string;
  subheadline: string;
  logoUrl: string;
  address: string;
  phoneDisplay: string;
  whatsappNumber: string; // for direct WhatsApp chat
  instagramHandle: string;
  openingHours: {
    days: string;
    hours: string;
  }[];
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Nirwana River Cafe & Resto",
  tagline: "Cita Rasa Sunda, Kehangatan yang Selalu Dirindukan",
  subheadline: "Nikmati beragam hidangan Nusantara dan sajian khas Sunda dalam suasana yang hangat dan nyaman bersama orang-orang tersayang.",
  logoUrl: "/logo1.jpg",
  address: "F9FW+GHV, Talagahiyang, Cipanas, Lebak Regency, Banten 42372, Indonesia",
  phoneDisplay: "+62 895-4023-32564",
  whatsappNumber: "62895402332564",
  instagramHandle: "@nirwanarivercafe",
  openingHours: [
    { days: "Buka Setiap Hari (Everyday)", hours: "10.00 – 00.00 WIB" }
  ]
};

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hidangan' | 'liwet' | 'camilan' | 'minuman';
  categoryLabel: string;
  imageUrl: string;
  alt: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sajian Nasi Liwet Komplit Khas Sunda',
    category: 'liwet',
    categoryLabel: 'Paket Liwet',
    imageUrl: '/images/liwet.jpg',
    alt: 'Paket Nasi Liwet Komplit dengan Ayam Kampung Panggang dan Lalapan Segar',
    description: 'Nasi liwet harum beralas daun pisang segar dengan ayam kampung, sayur asem, ikan asin, tahu tempe, dan sambal ulek cobek.'
  },
  {
    id: 'g2',
    title: 'Ayam Bakar Madu Gurih Arang',
    category: 'hidangan',
    categoryLabel: 'Hidangan Utama',
    imageUrl: '/images/ayam_bakar.jpg',
    alt: 'Ayam Bakar Madu disajikan dengan sambal dan lalap timun kemangi',
    description: 'Daging ayam empuk dengan baluran madu dan kecap rempah karamelisasi di atas panggangan arang batok.'
  },
  {
    id: 'g3',
    title: 'Pecak Ikan Gurame Segar Kecombrang',
    category: 'hidangan',
    categoryLabel: 'Hidangan Utama',
    imageUrl: '/images/ikan_pecak.jpg',
    alt: 'Ikan Gurame Goreng Renyah dengan Siraman Sambal Pecak Rempah',
    description: 'Gurame goreng garing dengan lumuran kuah pecak rempah beraroma kencur dan irisan bunga kecombrang segar.'
  },
  {
    id: 'g4',
    title: 'Bakso Urat Kuah Kaldu Sapi Rempah',
    category: 'hidangan',
    categoryLabel: 'Hidangan Utama',
    imageUrl: '/images/bakso.jpg',
    alt: 'Semangkuk Bakso Urat Komplit dengan Mie Kuning dan Pangsit Renyah',
    description: 'Bakso urat sapi asli kenyal berdaging disajikan dalam mangkuk kaldu sumsum panas bertabur bawang goreng wangi.'
  },
  {
    id: 'g5',
    title: 'Sate Ayam Madura Bumbu Kacang Medok',
    category: 'hidangan',
    categoryLabel: 'Hidangan Utama',
    imageUrl: '/images/sate.jpg',
    alt: 'Sate Ayam Panggang dengan Lumuran Bumbu Kacang dan Bawang Merah',
    description: 'Daging ayam empuk dengan baluran saus kacang gurih manis bertekstur lembut dan jeruk limau wangi.'
  },
  {
    id: 'g6',
    title: 'Sop Iga Sapi Rempah Bening Priangan',
    category: 'hidangan',
    categoryLabel: 'Hidangan Utama',
    imageUrl: '/images/sop_iga.jpg',
    alt: 'Sop Iga Sapi Kuah Bening dengan Wortel Kentang dan Seledri',
    description: 'Iga sapi empuk lepas tulang dalam kuah kaldu rempah pala, cengkeh, dan kayu manis yang menghangatkan tubuh.'
  },
  {
    id: 'g7',
    title: 'Tempe Mendoan Anget & Cireng Rujak',
    category: 'camilan',
    categoryLabel: 'Camilan Tradisional',
    imageUrl: '/images/snack.jpg',
    alt: 'Tempe Mendoan Renyah dan Cireng Bumbu Rujak Gula Merah Pedas',
    description: 'Tempe goreng tepung basah khas Banyumas ditemani cireng garing kenyal dengan cocolan sambal rujak legit.'
  },
  {
    id: 'g8',
    title: 'Sop Durian Legit & Es Sop Buah Tropis',
    category: 'minuman',
    categoryLabel: 'Minuman & Dessert',
    imageUrl: '/images/beverages.jpg',
    alt: 'Es Sop Durian dan Sop Buah Segar dengan Susu dan Sirup Buah',
    description: 'Pelepas dahaga sempurna dengan manis legit daging durian asli dan kesegaran warna-warni buah tropis pilihan.'
  }
];

export interface ValuePillar {
  title: string;
  description: string;
}

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "Resep Warisan Khas Priangan",
    description: "Meracik setiap hidangan dengan racikan bumbu rempah tradisional Sunda tanpa bahan instan."
  },
  {
    title: "Bahan Segar Pilihan Setiap Hari",
    description: "Memilih sayuran kebun segar, ayam kampung pilihan, serta ikan air tawar langsung dari penangkaran terpercaya."
  },
  {
    title: "Suasana Hangat & Nyaman",
    description: "Konsep bersantap ramah keluarga yang lapang, menghadirkan ketenangan dan kenyamanan seperti di rumah sendiri."
  },
  {
    title: "Pelayanan Sepenuh Hati",
    description: "Menjunjung tinggi keramahan budaya Sunda dengan tata krama 'someah hade ka semah' kepada setiap pengunjung."
  }
];
