export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  spicyLevel?: number; // 0: not spicy, 1: mild, 2: spicy, 3: extra spicy
  isSignature?: boolean;
  portion?: string;
}

export interface LiwetPackage {
  id: string;
  name: string;
  servings: number;
  price: number;
  description: string;
  items: string[];
  image: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  displayName: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Semua Menu', displayName: 'Semua', description: 'Koleksi lengkap hidangan Nirwana River' },
  { id: 'chicken', name: 'Nirwana Signature Chicken', displayName: 'Signature Chicken', description: 'Olahan ayam kampung & broiler dengan bumbu rempah khas priangan' },
  { id: 'fish', name: 'River Fish Selection', displayName: 'River Fish', description: 'Ikan air tawar segar pilihan dibakar atau digoreng garing' },
  { id: 'bakso', name: 'Bakso Corner', displayName: 'Bakso Corner', description: 'Bakso daging sapi asli dengan kuah kaldu rempah bening gurih' },
  { id: 'rice', name: 'Rice Favorit', displayName: 'Rice Favorit', description: 'Nasi liwet wangi rempah dan olahan nasi nusantara istimewa' },
  { id: 'satay', name: 'Premium Satay Selection', displayName: 'Satay Selection', description: 'Sate daging empuk dibakar arang dengan bumbu kacang medok' },
  { id: 'noodles', name: 'Noodle Favorites', displayName: 'Noodle Favorites', description: 'Mie goreng Jawa, kwetiau, dan bihun racikan koki berpengalaman' },
  { id: 'soup', name: 'Traditional Soup', displayName: 'Traditional Soup', description: 'Aneka sop iga, sayur asem segar, dan kuah tradisional penghangat suasana' },
  { id: 'sides', name: 'Garden Side Dishes', displayName: 'Garden Side Dishes', description: 'Sayuran kebun segar, karedok mentah khas Sunda, dan cah kangkung' },
  { id: 'extra', name: 'Extra', displayName: 'Extra & Pelengkap', description: 'Pelengkap nikmat mulai dari tahu tempe, telur, aneka sambal dan kerupuk' },
  { id: 'snacks', name: 'Signature Snacks', displayName: 'Signature Snacks', description: 'Camilan tradisional hangat, mendoan banyumas, cireng rujak & pempek' },
  { id: 'beverages', name: 'Refreshing Beverages', displayName: 'Beverages', description: 'Es teh melati segar, sop buah tropis, sop durian legit & kopi nusantara' }
];

export const LIWET_PACKAGES: LiwetPackage[] = [
  {
    id: 'liwet-1',
    name: 'Paket Liwet 1 Orang',
    servings: 1,
    price: 50000,
    description: 'Porsi personal lengkap untuk menikmati kehangatan hidangan otentik Sunda dalam satu sajian komplit.',
    image: '/images/liwet.jpg',
    items: [
      'Nasi Liwet Harum Rempah',
      'Panggang Ayam Kampung',
      'Ikan Asin Renyah',
      'Sayur Asem Segar Gurih',
      'Karedok Sayur Mentah',
      'Lalab Segar Kebun',
      'Sambal Goang + Sambal Terasi',
      'Tahu Tempe Goreng Kuning',
      'Es Teh Manis Melati'
    ]
  },
  {
    id: 'liwet-2',
    name: 'Paket Liwet 2 Orang',
    servings: 2,
    price: 85000,
    description: 'Sajian ideal untuk berdua, berbagi kelezatan ayam kampung panggang dan aneka lauk tradisional yang kaya rasa.',
    image: '/images/liwet.jpg',
    popular: true,
    items: [
      'Nasi Liwet Harum Rempah (Porsi 2 Orang)',
      '2 Panggang Ayam Kampung',
      'Ikan Asin Renyah',
      'Sayur Asem Segar Gurih',
      'Karedok Sayur Mentah',
      'Lalab Segar Kebun',
      'Sambal Goang + Sambal Terasi',
      'Tahu Tempe Goreng Kuning',
      '2 Gelas Es Teh Manis Melati'
    ]
  },
  {
    id: 'liwet-5',
    name: 'Paket Liwet 5 Orang',
    servings: 5,
    price: 235000,
    description: 'Bancakan istimewa untuk keluarga atau sahabat tercinta dengan satu ekor utuh Bakakak Ayam Kampung.',
    image: '/images/liwet.jpg',
    items: [
      'Nasi Liwet Kastrol Besar (Porsi 5 Orang)',
      'Bakakak Ayam Kampung Utuh Panggang',
      'Ikan Asin Renyah Gurih',
      'Sayur Asem Khas Priangan',
      'Karedok Bumbu Kacang Medok',
      'Lalaban Segar Aneka Daun Kebun',
      'Cobek Sambal Goang + Sambal Terasi',
      'Tahu Tempe Goreng Hangat',
      '5 Gelas Es Teh Manis Melati'
    ]
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. Nirwana Signature Chicken
  {
    id: 'c1',
    name: 'Ayam Penyet Sambal Hijau',
    category: 'chicken',
    price: 28000,
    description: 'Ayam ungkep rempah gurih yang dipenyet di atas ulekan sambal cabai hijau segar beraroma daun jeruk.',
    image: '/images/ayam_bakar.jpg',
    spicyLevel: 2,
    isSignature: true,
    portion: '1 Porsi (Paha/Dada)'
  },
  {
    id: 'c2',
    name: 'Ayam Geprek Crispy Nirwana',
    category: 'chicken',
    price: 25000,
    description: 'Ayam goreng tepung renyah berbalut bumbu rahasia yang digeprek dengan sambal bawang rawit pedas mantap.',
    image: '/images/ayam_bakar.jpg',
    spicyLevel: 3,
    portion: '1 Porsi'
  },
  {
    id: 'c3',
    name: 'Ayam Bakar Madu Gurih',
    category: 'chicken',
    price: 29000,
    description: 'Ayam bakar dengan lumuran kecap manis karamel dan madu hutan alami, beraroma asap arang menggoda selera.',
    image: '/images/ayam_bakar.jpg',
    spicyLevel: 0,
    isSignature: true,
    portion: '1 Porsi'
  },
  {
    id: 'c4',
    name: 'Ayam Goreng Serundeng Lengkuas',
    category: 'chicken',
    price: 28000,
    description: 'Ayam goreng renyah bertabur serundeng lengkuas parut gurih harum yang menggugah selera makan bersama nasi hangat.',
    image: '/images/ayam_bakar.jpg',
    spicyLevel: 0,
    portion: '1 Porsi'
  },

  // 2. River Fish Selection
  {
    id: 'f1',
    name: 'Pecak Ikan Gurame Segar',
    category: 'fish',
    price: 48000,
    description: 'Gurame goreng garing disiram kuah pecak hangat dengan irisan bunga kecombrang, kencur, jahe, dan cabai rawit segar.',
    image: '/images/ikan_pecak.jpg',
    spicyLevel: 2,
    isSignature: true,
    portion: '1 Ekor Utuh (400-500g)'
  },
  {
    id: 'f2',
    name: 'Pecel Lele Crispy Spesial',
    category: 'fish',
    price: 22000,
    description: 'Lele segar dibumbui kunyit ketumbar lalu digoreng garing renyah hingga tulang, disajikan dengan sambal terasi matang.',
    image: '/images/ikan_pecak.jpg',
    spicyLevel: 1,
    portion: '2 Ekor Lele'
  },
  {
    id: 'f3',
    name: 'Gurame Bakar Bumbu Rujak',
    category: 'fish',
    price: 52000,
    description: 'Ikan gurame bakar arang dengan baluran bumbu rujak tradisional pedas manis gurih beraroma kemangi.',
    image: '/images/ikan_pecak.jpg',
    spicyLevel: 2,
    portion: '1 Ekor Utuh'
  },
  {
    id: 'f4',
    name: 'Nila Goreng Kering Renyah',
    category: 'fish',
    price: 32000,
    description: 'Ikan nila air tawar segar digoreng terbang renyah hingga ke sirip, disajikan dengan lalapan dan sambal goang.',
    image: '/images/ikan_pecak.jpg',
    spicyLevel: 1,
    portion: '1 Ekor'
  },

  // 3. Bakso Corner
  {
    id: 'b1',
    name: 'Bakso Urat Komplit',
    category: 'bakso',
    price: 26000,
    description: 'Semangkuk bakso urat sapi bertekstur kenyal nikmat dipadu bakso halus, mie kuning, bihun, pangsit renyah dan kaldu sapi asli.',
    image: '/images/bakso.jpg',
    spicyLevel: 0,
    isSignature: true,
    portion: '1 Porsi Komplit'
  },
  {
    id: 'b2',
    name: 'Bakso Telur Spesial',
    category: 'bakso',
    price: 24000,
    description: 'Bakso jumbo berdaging sapi padat berisi sebutir telur ayam utuh di dalamnya, disiram kuah kaldu rempah gurih.',
    image: '/images/bakso.jpg',
    spicyLevel: 0,
    portion: '1 Porsi'
  },
  {
    id: 'b3',
    name: 'Bakso Halus Kuah Kaldu Sapi',
    category: 'bakso',
    price: 22000,
    description: 'Bakso sapi halus kenyal dengan kuah bening kaldu tulang sumsum bertabur seledri dan bawang goreng wangi.',
    image: '/images/bakso.jpg',
    spicyLevel: 0,
    portion: '5 Butir Bakso Halus'
  },

  // 4. Rice Favorit
  {
    id: 'r1',
    name: 'Nasi Goreng Spesial Nirwana',
    category: 'rice',
    price: 28000,
    description: 'Nasi goreng harum beraroma wok dengan suwiran ayam, potongan sosis, telur mata sapi, acar segar dan kerupuk udang.',
    image: '/images/hero.jpg',
    spicyLevel: 1,
    isSignature: true,
    portion: '1 Porsi'
  },
  {
    id: 'r2',
    name: 'Nasi Liwet Kastrol Khas Sunda',
    category: 'rice',
    price: 25000,
    description: 'Nasi liwet yang ditanak dalam panci kastrol bersama ikan teri medan, serai, daun salam, bawang dan cabai utuh.',
    image: '/images/liwet.jpg',
    spicyLevel: 0,
    isSignature: true,
    portion: '1 Kastrol (Porsi 2 Orang)'
  },
  {
    id: 'r3',
    name: 'Nasi Putih Pulen Wangi',
    category: 'rice',
    price: 6000,
    description: 'Nasi putih beras pilihan kualitas premium yang pulen dan wangi disajikan hangat.',
    image: '/images/hero.jpg',
    spicyLevel: 0,
    portion: '1 Piring'
  },

  // 5. Premium Satay Selection
  {
    id: 's1',
    name: 'Sate Ayam Madura Bumbu Kacang',
    category: 'satay',
    price: 32000,
    description: '10 tusuk sate ayam potongan daging empuk dibakar di atas arang batok, dibalut bumbu kacang gurih manis bertabur bawang merah iris.',
    image: '/images/sate.jpg',
    spicyLevel: 0,
    isSignature: true,
    portion: '10 Tusuk'
  },
  {
    id: 's2',
    name: 'Sate Taichan Pedas Gurih',
    category: 'satay',
    price: 28000,
    description: '10 tusuk daging ayam panggang bumbu garam jeruk nipis dengan cocolan sambal ulek rawit ekstra pedas dan kaldu jamur gurih.',
    image: '/images/sate.jpg',
    spicyLevel: 3,
    portion: '10 Tusuk'
  },

  // 6. Noodle Favorites
  {
    id: 'n1',
    name: 'Mie Goreng Jawa Spesial',
    category: 'noodles',
    price: 26000,
    description: 'Mie telur kenyal ditumis dengan bumbu kemiri khas Jawa, suwiran ayam, telur orak-arik, sawi hijau, dan taburan bawang goreng.',
    image: '/images/bakso.jpg',
    spicyLevel: 1,
    portion: '1 Porsi'
  },
  {
    id: 'n2',
    name: 'Kwetiau Seafood Istimewa',
    category: 'noodles',
    price: 30000,
    description: 'Kwetiau beras lembut dimasak dengan udang segar, bakso ikan, telur, tauge renyah dan bumbu gurih aroma wok.',
    image: '/images/bakso.jpg',
    spicyLevel: 1,
    portion: '1 Porsi'
  },
  {
    id: 'n3',
    name: 'Bihun Goreng Sayur & Telur',
    category: 'noodles',
    price: 24000,
    description: 'Bihun jagung lembut digoreng dengan bumbu gurih ringan, aneka sayuran segar, irisan bakso dan orak-arik telur.',
    image: '/images/bakso.jpg',
    spicyLevel: 0,
    portion: '1 Porsi'
  },

  // 7. Traditional Soup
  {
    id: 'sp1',
    name: 'Sop Iga Sapi Rempah Bening',
    category: 'soup',
    price: 45000,
    description: 'Potongan iga sapi pilihan yang empuk dimasak perlahan dalam kuah kaldu rempah kayu manis, cengkeh, wortel, dan kentang.',
    image: '/images/sop_iga.jpg',
    spicyLevel: 0,
    isSignature: true,
    portion: '1 Mangkuk Jumbo'
  },
  {
    id: 'sp2',
    name: 'Sayur Asem Khas Sunda',
    category: 'soup',
    price: 16000,
    description: 'Sayur asem kuah bening segar dengan kacang tanah, melinjo, jagung manis, labu siam, dan asam jawa asli priangan.',
    image: '/images/liwet.jpg',
    spicyLevel: 1,
    portion: '1 Mangkuk'
  },
  {
    id: 'sp3',
    name: 'Soto Ayam Ambengan Kuah Kuning',
    category: 'soup',
    price: 26000,
    description: 'Soto ayam berkuah kuning gurih rempah kunyit dengan sohun, kol, tauge, telur rebus, dan koya gurih istimewa.',
    image: '/images/sop_iga.jpg',
    spicyLevel: 0,
    portion: '1 Porsi'
  },

  // 8. Garden Side Dishes
  {
    id: 'gd1',
    name: 'Cah Kangkung Terasi Gurih',
    category: 'sides',
    price: 16000,
    description: 'Kangkung sawah segar ditumis cepat dengan api besar bersama terasi bakar, bawang putih dan irisan cabai merah.',
    image: '/images/hero.jpg',
    spicyLevel: 1,
    portion: '1 Piring'
  },
  {
    id: 'gd2',
    name: 'Karedok Sayur Segar Khas Sunda',
    category: 'sides',
    price: 18000,
    description: 'Irisan kacang panjang, kol, mentimun, kemangi, dan tauge segar diaduk dengan saus kacang kencur medok yang legit.',
    image: '/images/liwet.jpg',
    spicyLevel: 1,
    isSignature: true,
    portion: '1 Piring'
  },
  {
    id: 'gd3',
    name: 'Lalapan Segar & Sambal Cobek',
    category: 'sides',
    price: 10000,
    description: 'Kombinasi daun poh-pohan, selada, mentimun, terong bulat, dan daun kemangi dengan sepiring sambal terasi ulek segar.',
    image: '/images/hero.jpg',
    spicyLevel: 2,
    portion: '1 Porsi'
  },

  // 9. Extra
  {
    id: 'ex1',
    name: 'Tahu & Tempe Goreng Kuning',
    category: 'extra',
    price: 12000,
    description: 'Tahu putih lembut dan tempe kedelai yang dibumbui ketumbar bawang lalu digoreng garing di luar lembut di dalam.',
    image: '/images/snack.jpg',
    spicyLevel: 0,
    portion: 'Isi 4 Potong'
  },
  {
    id: 'ex2',
    name: 'Telur Dadar / Mata Sapi',
    category: 'extra',
    price: 6000,
    description: 'Telur ayam segar digoreng mata sapi setengah matang / matang atau dadar gurih.',
    image: '/images/snack.jpg',
    spicyLevel: 0,
    portion: '1 Butir'
  },
  {
    id: 'ex3',
    name: 'Aneka Sambal Tambahan (Goang / Terasi / Bawang)',
    category: 'extra',
    price: 5000,
    description: 'Pilihan sambal goang segar tanpa terasi, sambal terasi matang legit, atau sambal bawang pedas nendang.',
    image: '/images/hero.jpg',
    spicyLevel: 3,
    portion: '1 Wadah Cobek Mini'
  },
  {
    id: 'ex4',
    name: 'Kerupuk Kaleng Renyah Gurih',
    category: 'extra',
    price: 4000,
    description: 'Kerupuk putih / kerupuk blek renyah teman setia bersantap hidangan Sunda dan nasi liwet.',
    image: '/images/hero.jpg',
    spicyLevel: 0,
    portion: '2 Buah'
  },

  // 10. Signature Snacks
  {
    id: 'sn1',
    name: 'Tempe Mendoan Anget',
    category: 'snacks',
    price: 18000,
    description: 'Tempe berbalut adonan tepung berbumbu daun bawang yang digoreng basah khas, disajikan hangat dengan cocolan kecap rawit.',
    image: '/images/snack.jpg',
    spicyLevel: 1,
    isSignature: true,
    portion: 'Isi 4 Lembar'
  },
  {
    id: 'sn2',
    name: 'Cireng Crispy Bumbu Rujak',
    category: 'snacks',
    price: 16000,
    description: 'Cireng kenyal dengan lapisan luar krispi renyah, dicocol dengan saus bumbu rujak gula merah asam manis pedas.',
    image: '/images/snack.jpg',
    spicyLevel: 1,
    portion: 'Isi 8 Pcs'
  },
  {
    id: 'sn3',
    name: 'Pempek Campur Lengkap (Lenjer & Kapal Selam)',
    category: 'snacks',
    price: 24000,
    description: 'Pempek ikan tenggiri asli digoreng hangat disajikan bersama potongan mentimun segar dan kuah cuko kental pedas manis.',
    image: '/images/snack.jpg',
    spicyLevel: 1,
    portion: '1 Piring Campur'
  },
  {
    id: 'sn4',
    name: 'Dimsum Siomay Kukus',
    category: 'snacks',
    price: 22000,
    description: 'Siomay ayam udang kukus lembut dengan topping parutan wortel disajikan bersama saus sambal manis pedas gurih.',
    image: '/images/snack.jpg',
    spicyLevel: 0,
    portion: 'Isi 4 Pcs'
  },
  {
    id: 'sn5',
    name: 'Burger Beef Klasik Nirwana',
    category: 'snacks',
    price: 28000,
    description: 'Roti bun lembut dengan patty daging sapi panggang, keju gurih, selada renyah, tomat, dan saus spesial racikan dapur.',
    image: '/images/snack.jpg',
    spicyLevel: 0,
    portion: '1 Porsi'
  },

  // 11. Refreshing Beverages
  {
    id: 'bv1',
    name: 'Es Teh Manis Melati',
    category: 'beverages',
    price: 6000,
    description: 'Seduhan teh melati tradisional dengan gula murni dan es batu yang memberikan kesegaran pelepas dahaga seketika.',
    image: '/images/beverages.jpg',
    spicyLevel: 0,
    portion: '1 Gelas Besar'
  },
  {
    id: 'bv2',
    name: 'Es Kelapa Muda Jeruk',
    category: 'beverages',
    price: 18000,
    description: 'Daging kelapa muda lembut dan air kelapa segar berpadu dengan perasan jeruk murni yang asam manis menyegarkan.',
    image: '/images/beverages.jpg',
    spicyLevel: 0,
    isSignature: true,
    portion: '1 Gelas'
  },
  {
    id: 'bv3',
    name: 'Sop Buah Segar Nirwana',
    category: 'beverages',
    price: 22000,
    description: 'Paduan aneka buah tropis segar (melon, semangka, alpukat, naga) dengan sirup cocopandan, susu kental manis dan serutan es.',
    image: '/images/beverages.jpg',
    spicyLevel: 0,
    isSignature: true,
    portion: '1 Mangkuk Kaca'
  },
  {
    id: 'bv4',
    name: 'Sop Durian Legit Khas Nirwana',
    category: 'beverages',
    price: 28000,
    description: 'Daging durian asli pilihan yang lembut dan manis creamy disajikan dengan es serut halus dan lelehan susu kental manis.',
    image: '/images/beverages.jpg',
    spicyLevel: 0,
    isSignature: true,
    portion: '1 Porsi Kaca'
  },
  {
    id: 'bv5',
    name: 'Kopi Tubruk Nusantara',
    category: 'beverages',
    price: 12000,
    description: 'Biji kopi nusantara disangrai tradisional dan diseduh panas mengeluarkan aroma khas yang pekat menenangkan.',
    image: '/images/beverages.jpg',
    spicyLevel: 0,
    portion: '1 Cangkir Keramik'
  },
  {
    id: 'bv6',
    name: 'Aneka Jus Buah Segar (Alpukat / Mangga / Jeruk)',
    category: 'beverages',
    price: 18000,
    description: 'Jus murni dari buah segar pilihan yang diblender kental dengan sedikit susu dan gula alami tanpa bahan pengawet.',
    image: '/images/beverages.jpg',
    spicyLevel: 0,
    portion: '1 Gelas'
  }
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount).replace('IDR', 'Rp');
}
