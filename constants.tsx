
import { Product, NavItem } from './types';

export const COLORS = {
  GOLD: '#B8860B',
  VIOLET: '#8B008B',
  BLUE: '#0047AB',
  SLATE: '#334155',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { 
    label: 'Products', 
    path: '/products',
    dropdown: [
      { label: 'Absorbable', path: '/products?cat=absorbable' },
      { label: 'Non-Absorbable', path: '/products?cat=non-absorbable' }
    ]
  },
  { label: 'Quality', path: '/quality' },
  { label: 'Contact Us', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'medcryl-pgla',
    name: 'MEDCryl®',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Synthetic Braided Coated Polyglactin-910',
    color: 'Violet (Dyed) / Natural (Undyed)',
    absorptionTime: '56-70 days',
    description: 'Designed to deliver optimal tensile strength, secure knotting, and predictable absorption.',
    usp: [
      'Retains ~75% strength at 14 days',
      'Retains ~50% strength at 21 days',
      'Minimal tissue reaction',
      'Superior handling & flexibility'
    ],
    themeColor: 'purple-700',
    specs: [
      { code: 'RS 2228', size: '2', needleType: '1/2 Circle Round Body 45mm', length: '90cm' },
      { code: 'RS 2478', size: '2', needleType: '1/2 Circle Reverse Cutting 40mm', length: '90cm' },
      { code: 'RS 2347', size: '1', needleType: '1/2 Circle Round Body 40mm', length: '90cm' }
    ]
  },
  {
    id: 'medcryl-fast',
    name: 'MEDCryl-FAST®',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Polyglactin-910 Fast Absorbable',
    color: 'Undyed (Beige)',
    absorptionTime: '42 days',
    description: 'Ideal for wounds requiring short-term support (≤10 days) like skin closure and episiotomy repair.',
    usp: [
      '~50% strength at 5 days',
      '~0% strength at 10-14 days',
      'Predictable absorption by 42 days',
      'Reduced suture removal requirement'
    ],
    themeColor: 'rose-600',
    specs: [
      { code: 'RS 2763', size: '0', needleType: '1/2 Circle Taper Cutting 36mm', length: '90cm' },
      { code: 'RS 2761', size: '2-0', needleType: '1/2 Circle Round Body 26mm', length: '70cm' }
    ]
  },
  {
    id: 'medcryl-ab',
    name: 'MEDCryl-AB®',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Antibacterial Polyglactin-910 (with Triclosan)',
    color: 'Violet',
    absorptionTime: '56-70 days',
    description: 'Premium antibacterial suture designed to inhibit bacterial colonization on the suture line.',
    usp: [
      'Triclosan coating inhibits S. aureus and MRSA',
      'Reduces risk of postoperative SSIs',
      'Maintains ~75% strength at 2 weeks',
      'Gamma sterilized for highest assurance'
    ],
    themeColor: 'purple-900',
    specs: [
      { code: 'RSA 2478', size: '2', needleType: '1/2 Circle Reverse Cutting 40mm', length: '90cm' },
      { code: 'RSA 2347', size: '1', needleType: '1/2 Circle Round Body 40mm', length: '90cm' }
    ]
  },
  {
    id: 'medisorb-pga',
    name: 'MEDISORB®',
    brand: 'MEDISORB',
    category: 'Absorbable',
    type: 'Polyglycolic Acid (PGA) Braided & Coated',
    color: 'Violet / Undyed',
    absorptionTime: '60-90 days',
    description: 'The benchmark in absorbable technology, offering exceptional handling and reliable absorption.',
    usp: [
      '100% Polyglycolic Acid composition',
      '~75% strength retention at 14 days',
      'Specialized coating reduces drag',
      'Excellent knot security'
    ],
    themeColor: 'fuchsia-700',
    specs: [
      { code: 'MS 2228', size: '2', needleType: '1/2 Circle Round Body 45mm', length: '90cm' },
      { code: 'MS 2478', size: '2', needleType: '1/2 Circle Reverse Cutting 40mm', length: '90cm' }
    ]
  },
  {
    id: 'medcryl-mono',
    name: 'MEDCryl-MONO®',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Poliglecaprone-25 Monofilament',
    color: 'Violet / Undyed',
    absorptionTime: '90-120 days',
    description: 'Smooth monofilament construction for minimal tissue drag and superior cosmetic results.',
    usp: [
      '~60% strength at 7 days',
      '~30% strength at 14 days',
      'Ideal for subcuticular and skin closure',
      'Excellent knot tie-down'
    ],
    themeColor: 'orange-400',
    specs: [
      { code: 'RS 1641', size: '2-0', needleType: '1/2 Circle Round Body 30mm', length: '70cm' },
      { code: 'RS 1651', size: '2-0', needleType: '3/8 Circle Cutting 25mm', length: '70cm' }
    ]
  },
  {
    id: 'medcryl-pds',
    name: 'MEDCryl-PDS®',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Monofilament Polydioxanone',
    color: 'Violet',
    absorptionTime: '180-210 days',
    description: 'Extended wound support for prolonged healing periods, particularly in pediatric cardiovascular surgery.',
    usp: [
      'Support for up to six weeks',
      '70% strength at 2 weeks, 25% at 6 weeks',
      'Atraumatic passage through tissues',
      'Non-antigenic and non-pyrogenic'
    ],
    themeColor: 'slate-400',
    specs: [
      { code: 'RS 9262', size: '1', needleType: '1/2 Circle Round Body Heavy (Loop) 50mm', length: '150cm' },
      { code: 'RS 9374', size: '1', needleType: '1/2 Circle Reverse Cutting Heavy 50mm', length: '90cm' }
    ]
  },
  {
    id: 'medcryl-pds-barb',
    name: 'MEDCryl-PDS BARB™',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Polydioxanone Barbed (Knotless)',
    color: 'Violet',
    absorptionTime: '180 days',
    description: 'Advanced knotless technology for faster, more efficient wound closure without slip.',
    usp: [
      'Bidirectional/Unidirectional barbs',
      'Eliminates knot-related complications',
      'Reduces operative time',
      'Consistent wound edge eversion'
    ],
    themeColor: 'slate-600',
    specs: [
      { code: 'RSB 0130H', size: '1', needleType: '1/2 Circle Taper Point Heavy 37mm', length: '30cm Loop' },
      { code: 'RSB 2045', size: '2-0', needleType: '1/2 Circle Taper Point 26mm', length: '45cm' }
    ]
  },
  {
    id: 'medgut-chromic',
    name: 'MEDGut Chromic®',
    brand: 'MEDGut',
    category: 'Absorbable',
    type: 'Catgut Chromic (Natural Fiber)',
    color: 'Brown (Chromic treated)',
    absorptionTime: '70-90 days',
    description: 'The traditional choice for rapid closure, treated with chromium salts to delay absorption.',
    usp: [
      'Derived from high-purity bovine collagen',
      '~70% strength at 7 days',
      '~40% strength at 14 days',
      'Superior handling and knot security'
    ],
    themeColor: 'amber-600',
    specs: [
      { code: 'RS 2216', size: '2', needleType: '1/2 Circle Round Body MAYO 45mm', length: '152cm' },
      { code: 'RS 4228', size: '2', needleType: '1/2 Circle Round Body MAYO 45mm', length: '100cm' }
    ]
  },
  {
    id: 'medgut-plain',
    name: 'MEDGut Plain®',
    brand: 'MEDGut',
    category: 'Absorbable',
    type: 'Catgut Plain (Natural Fiber)',
    color: 'Natural (Beige)',
    absorptionTime: '70-90 days',
    description: 'Gentle tissue support with natural absorbability for short-term wound approximation.',
    usp: [
      'Retention strength: 5-7 days',
      'Complete absorption: 70-90 days',
      'Enzymatic proteolysis absorption',
      'Sterilized by heat treatment'
    ],
    themeColor: 'amber-400',
    specs: [
      { code: 'RS 5033', size: '2-0', needleType: '3/8 Circle Round Body 30mm', length: '76cm' },
      { code: 'RS 4238', size: '3-0', needleType: '1/2 Circle Round Body 25mm', length: '76cm' }
    ]
  },
  {
    id: 'medlon-nylon',
    name: 'MEDLon®',
    brand: 'MEDLon',
    category: 'Non-Absorbable',
    type: 'Monofilament Polyamide (Nylon)',
    color: 'Black (Dyed)',
    description: 'Engineered for precise wound closure with superior knot security and minimal tissue reaction.',
    usp: [
      'Maintains long-term tensile support',
      'Reduced drag due to monofilament design',
      'Clear visibility in operative field',
      'Sterile, EO-sterilized'
    ],
    themeColor: 'emerald-600',
    specs: [
      { code: 'RS 3305', size: '1', needleType: '1/2 Circle Reverse Cutting 38mm', length: '75cm' },
      { code: 'RS 3347', size: '1', needleType: '1/2 Circle Round Body Heavy 40mm', length: '100cm' }
    ]
  },
  {
    id: 'neolene-pp',
    name: 'NEOLene™',
    brand: 'NEOLene',
    category: 'Non-Absorbable',
    type: 'Monofilament Polypropylene',
    color: 'Blue (Dyed)',
    description: 'Inert monofilament polymer for consistent tensile strength and long-term tissue support.',
    usp: [
      'Maintains strength indefinitely in vivo',
      'Minimal inflammatory response',
      'Reliable handling and smooth knot run-down',
      'Does not support bacterial growth'
    ],
    themeColor: 'blue-600',
    specs: [
      { code: 'RS 834', size: '1', needleType: '1/2 Circle Round Body Heavy Loop 50mm', length: '150cm' },
      { code: 'RS 840', size: '1', needleType: '1/2 Circle Round Body Heavy 30mm', length: '70cm' }
    ]
  },
  {
    id: 'neosilk-silk',
    name: 'NEOSilk™',
    brand: 'NEOSilk',
    category: 'Non-Absorbable',
    type: 'Black Braided Natural Protein Fiber',
    color: 'Black (Dyed)',
    description: 'Processed to reduce capillarity and enhance tissue compatibility. Coated for reduced friction.',
    usp: [
      'Excellent handling with superior pliability',
      'Smooth knot placement with secure holding',
      'High visibility during surgery',
      'Packaged in moisture-controlled foil'
    ],
    themeColor: 'cyan-600',
    specs: [
      { code: 'RS 5006', size: '2', needleType: '1/2 Circle Reverse Cutting 38mm', length: '75cm' },
      { code: 'RS 5062', size: '1', needleType: '1/2 Circle Reverse Cutting Heavy 60mm', length: '76cm' }
    ]
  },
  {
    id: 'durabond-polyester',
    name: 'DURABond™',
    brand: 'DURABond',
    category: 'Non-Absorbable',
    type: 'Polyester Braided (Polyethylene Terephthalate)',
    color: 'Green / White (Undyed)',
    description: 'High-strength braided suture designed for long-term tissue support in demanding procedures.',
    usp: [
      'Non-absorbable permanent tensile strength',
      'Excellent flexibility and manipulation',
      'Biocompatible material reduces inflammation',
      'Predictable knot performance'
    ],
    themeColor: 'orange-700',
    specs: [
      { code: 'RS 645', size: 'Green 5', needleType: '1/2 Circle Trocar Point Heavy 55mm', length: '100cm' },
      { code: 'RS 4843', size: 'Green 2', needleType: '1/2 Circle Taper Cutting Heavy 45mm', length: '4x75cm' }
    ]
  }
];
