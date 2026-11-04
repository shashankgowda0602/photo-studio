import { PortfolioItem, StudioSpace, ServicePackage, EquipmentItem } from '../types';

export const STUDIO_DETAILS = {
  name: 'Aperture & Grain',
  tagline: 'Daylight Loft & Creative Production Studio',
  address: '428 St. Nicholas Avenue, Studio 4B, New York, NY 10027',
  phone: '+1 (212) 555-0194',
  email: 'hello@aperturegrain.studio',
  hours: 'Monday – Saturday: 8:00 AM – 8:00 PM · Sunday: By Appointment',
  heroImage: '/src/assets/images/hero_studio_space_1793768100377.jpg',
  directorImage: '/src/assets/images/studio_director_portrait_1793768102601.jpg',
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'The Sculptural Era',
    category: 'monochrome',
    categoryLabel: 'Monochrome Editorial',
    client: 'Elegance Magazine Autumn Issue',
    year: '2025',
    image: '/src/assets/images/portfolio_editorial_portrait_1793768100620.jpg',
    aspect: 'portrait',
    exif: {
      camera: 'Hasselblad 907X 50C',
      lens: 'XCD 80mm f/1.9',
      aperture: 'f/4.0',
      shutter: '1/250s',
      iso: '64',
      lighting: 'Profoto B10X Plus with 3ft Octa & Silver Reflector',
    },
    summary: 'Cover editorial examining architectural tailoring and shadow silhouettes using classic silver gelatin tonality.'
  },
  {
    id: 'work-2',
    title: 'Warm Drapery & Golden Horizon',
    category: 'fashion',
    categoryLabel: 'Fashion Lookbook',
    client: 'Maison Vaneau Atelier',
    year: '2026',
    image: '/src/assets/images/portfolio_fashion_color_1793768101313.jpg',
    aspect: 'portrait',
    exif: {
      camera: 'Leica SL3',
      lens: 'Summilux-SL 50mm f/1.4 ASPH',
      aperture: 'f/2.2',
      shutter: '1/400s',
      iso: '100',
      lighting: 'Natural North-Facing Window Light through Belgian Linen Scrim',
    },
    summary: 'Spring/Summer trench coat collection captured during afternoon golden hour in Studio A.'
  },
  {
    id: 'work-3',
    title: 'L’Olive Botanique Essence',
    category: 'still-life',
    categoryLabel: 'Commercial Still Life',
    client: 'L’Olive Artisanal Fragrance Paris',
    year: '2025',
    image: '/src/assets/images/portfolio_still_life_1793768102058.jpg',
    aspect: 'landscape',
    exif: {
      camera: 'Fujifilm GFX 100 II',
      lens: 'GF 120mm f/4 Macro R LM OIS',
      aperture: 'f/11',
      shutter: '1/160s',
      iso: '100',
      lighting: 'Broncolor Siros 800 S with Hard Reflector & Honeycomb Grid',
    },
    summary: 'Luxury fragrance campaign celebrating raw Tuscan olive extract and textured travertine stonework.'
  },
  {
    id: 'work-4',
    title: 'The Loft Daylight Pavilion',
    category: 'editorial',
    categoryLabel: 'Spatial & Architectural',
    client: 'Aperture Studio Spatial Study',
    year: '2026',
    image: '/src/assets/images/hero_studio_space_1793768100377.jpg',
    aspect: 'landscape',
    exif: {
      camera: 'Phase One IQ4 150MP',
      lens: 'Rodenstock HR Digaron-W 40mm',
      aperture: 'f/8.0',
      shutter: '1/60s',
      iso: '50',
      lighting: 'Diffused Morning Daylight + Ambient Fill',
    },
    summary: 'Architectural documentation of our corner cyclorama wall and original 1920s timber timber beamed ceilings.'
  },
  {
    id: 'work-5',
    title: 'Portrait of Julian Vance',
    category: 'editorial',
    categoryLabel: 'Creative Portraiture',
    client: 'Aperture Resident Profiles',
    year: '2026',
    image: '/src/assets/images/studio_director_portrait_1793768102601.jpg',
    aspect: 'square',
    exif: {
      camera: 'Hasselblad 503CX (Kodak Tri-X 400)',
      lens: 'Carl Zeiss Planar 80mm f/2.8',
      aperture: 'f/2.8',
      shutter: '1/125s',
      iso: '400',
      lighting: 'Continuous Kinoflo Celeb 450 with diffusion sock',
    },
    summary: 'Monochrome director portrait celebrating analog medium format craftsmanship.'
  }
];

export const STUDIO_SPACES: StudioSpace[] = [
  {
    id: 'studio-a',
    name: 'Studio A: The North Daylight Loft',
    sqft: 1400,
    ceilingHeight: '14.5 ft',
    orientation: 'North & East floor-to-ceiling industrial loft windows',
    description: 'Our primary daylight studio features a 22-foot wrap-around corner cyclorama wall, uninterrupted soft daylight throughout the day, and dedicated client hair & makeup stations.',
    hourlyRate: 135,
    dayRate: 980,
    features: [
      '22ft × 18ft infinity cyclorama wall (freshly painted white)',
      '14.5 ft exposed timber ceilings with overhead rigging pipe',
      'Dual illuminated hair, makeup & wardrobe styling vanity',
      'Dedicated private client lounge & conference table',
      'Heavy-duty 3-phase 100A power distribution',
      'Direct freight elevator access with loading dock'
    ],
    image: '/src/assets/images/hero_studio_space_1793768100377.jpg'
  },
  {
    id: 'studio-b',
    name: 'Studio B: The Textured Still Life & Darkroom',
    sqft: 750,
    ceilingHeight: '12 ft',
    orientation: 'Controlled environment with optional blackout curtains',
    description: 'Engineered specifically for tabletop still life, beauty editorial, and controlled strobe cinematography. Features full acoustic baffling and seamless backdrop roll system.',
    hourlyRate: 95,
    dayRate: 680,
    features: [
      'Complete blackout motorized shades & sound dampening curtains',
      '9-foot motorized backdrop roller system (12 paper colors in stock)',
      'Travertine, raw concrete, plaster & aged zinc prop surfaces',
      'Color-calibrated Eizo ColorEdge 32" 4K tether station',
      'Sink station & darkroom print drying racks'
    ],
    image: '/src/assets/images/portfolio_still_life_1793768102058.jpg'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pkg-portrait',
    name: 'Artist & Executive Portraiture',
    category: 'editorial',
    price: 650,
    duration: '2 Hours Session',
    description: 'Designed for authors, executives, artists, and creators seeking characterful, enduring portraiture with tailored lighting.',
    deliverables: [
      '2 outfit looks & lighting setups',
      'Private online preview contact sheet within 24 hours',
      '8 master retouched high-resolution plates',
      'Full personal & editorial commercial usage rights'
    ],
    bestFor: 'Actors, founders, authors, and artists needing distinguished press portraits.',
    isPopular: false
  },
  {
    id: 'pkg-lookbook',
    name: 'Fashion Lookbook & Campaign',
    category: 'commercial',
    price: 1850,
    duration: 'Full Day (8 Hours)',
    description: 'Turnkey creative photography production for independent fashion houses, luxury lifestyle brands, and seasonal lookbooks.',
    deliverables: [
      'Full Studio A daylight hire included',
      'Lead photographer + 1 lighting assistant',
      'Up to 14 styled garment looks',
      '30 signature retouched master plates + all raw selects',
      'Digital tethering tech with live client monitor'
    ],
    bestFor: 'Fashion brands, lookbooks, e-commerce collections, and advertising campaigns.',
    isPopular: true
  },
  {
    id: 'pkg-rental',
    name: 'Dry Studio Space Hire',
    category: 'rental',
    price: 980,
    duration: 'Full Day (10 Hours)',
    description: 'Rent the studio space for your own production crew. Includes full grip equipment package, C-stands, sandbags, and private styling suite.',
    deliverables: [
      'Exclusive access to Studio A (1,400 sq. ft)',
      'Complete grip package (10 C-stands, booms, flags, apple boxes)',
      '1 seamless backdrop pull of choice',
      'High-speed 1Gbps fiber Wi-Fi & Sonance sound system',
      'Studio manager on-site for loading & check-in'
    ],
    bestFor: 'Visiting photographers, agencies, indie film crews, and digital creators.',
    isPopular: false
  }
];

export const ADD_ONS = [
  { id: 'film', name: 'Medium Format Film Package (3 Rolls + Lab Processing)', price: 180 },
  { id: 'assistant', name: 'First Photography Assistant (Full Day)', price: 350 },
  { id: 'hmua', name: 'On-Site Hair & Makeup Artist (4 Hours)', price: 420 },
  { id: 'express', name: '24-Hour Express Retouching Turnaround', price: 220 },
  { id: 'tether', name: 'Eizo 32" 4K Color-Accurate Tether Cart', price: 120 }
];

export const EQUIPMENT_ROSTER: EquipmentItem[] = [
  { id: 'eq-1', name: 'Profoto B10X Plus 500Ws Strobes (Pair)', category: 'lighting', model: 'AirTTL Bluetooth', includedInRental: true },
  { id: 'eq-2', name: 'Broncolor Siros 800 S Strobe Kit', category: 'lighting', model: 'WiFi / RFS 2.1', includedInRental: false },
  { id: 'eq-3', name: 'Aputure LS 600d Pro Daylight LED', category: 'lighting', model: 'Bowens Mount / Sidus Link', includedInRental: false },
  { id: 'eq-4', name: 'Matthews 40" C-Stands with Grip Head & Arm (×8)', category: 'grip', model: 'Spring Loaded Chrome', includedInRental: true },
  { id: 'eq-5', name: 'Profoto RFi 5ft Octabox with Grid', category: 'grip', model: 'Speedring included', includedInRental: true },
  { id: 'eq-6', name: 'Avenger Combo Steel Stand 45 with Wheel Set', category: 'grip', model: 'Junior receiver 28mm', includedInRental: true },
  { id: 'eq-7', name: 'Hasselblad 907X 50C Medium Format Camera', category: 'camera', model: '50MP CMOS sensor', includedInRental: false },
  { id: 'eq-8', name: 'Canon EOS R5 C Full-Frame Cinema Camera', category: 'camera', model: '8K RAW / 45MP Stills', includedInRental: false },
  { id: 'eq-9', name: 'Savage Widetone Seamless Paper Rolls (107")', category: 'backdrops', model: 'Super White, Smoke Gray, Bone, Terracotta', includedInRental: true },
  { id: 'eq-10', name: 'Hand-Painted Oliphant Canvas Backdrops (8×10ft)', category: 'backdrops', model: 'Slate Mottled & Warm Sepia', includedInRental: false }
];

export const TESTIMONIALS = [
  {
    quote: "Aperture & Grain provides the cleanest natural light in the city. The wrap-around cyclorama and curated grip gear let us focus 100% on creative direction without equipment friction.",
    author: "Elena Rostova",
    role: "Senior Visual Director",
    company: "Maison Vaneau",
    location: "Paris / New York"
  },
  {
    quote: "We shot our Autumn cover editorial here. The team’s attention to lighting ratios, tethering speed, and quiet professional hospitality is truly rare.",
    author: "Marcus Chen",
    role: "Editor-in-Chief",
    company: "Arch & Form Quarterly",
    location: "London"
  },
  {
    quote: "From our perfume bottles to macro still lifes, the controlled lighting in Studio B delivered crisp texture and tonal gradation with zero retouching hassle.",
    author: "Sophie Laurent",
    role: "Brand Founder",
    company: "L’Olive Parfums",
    location: "Grasse"
  }
];

export const FAQS = [
  {
    q: 'What is included in the studio rental rate?',
    a: 'Every dry studio hire includes our full standard grip package: eight Matthews C-stands with arms, sandbags, two V-flats (black/white), heavy extension stingers, ladder, rolling work table, styling garment rack, and high-speed Wi-Fi. Premium lighting heads and camera bodies are available as optional rentals.'
  },
  {
    q: 'How does natural daylight work throughout the day?',
    a: 'Studio A features uninterrupted northern and eastern exposures with 12-foot industrial loft windows. It provides consistent, soft, shadow-free daylight from 8:30 AM through 4:30 PM, and golden direct light late in the afternoon. Full blackout drapes are also installed.'
  },
  {
    q: 'How quickly will I receive my photos?',
    a: 'For commissioned sessions, an online private watermarked contact sheet is delivered within 24 to 48 hours. Final master retouched high-resolution deliverables are completed within 5 business days. Express 24-hour turnaround is available upon request.'
  },
  {
    q: 'Can I bring my own equipment and crew?',
    a: 'Absolutely. We welcome outside photographers, cinematographers, stylists, and clients. Our building has a large commercial freight elevator and dedicated street-level loading zone for easy load-in.'
  },
  {
    q: 'What is your cancellation and rescheduling policy?',
    a: 'Sessions and studio hires may be rescheduled with zero fee up to 5 business days prior to the shoot date. In the event of inclement weather or emergencies, we will work with you to find an immediate alternative slot.'
  }
];
