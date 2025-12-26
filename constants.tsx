
import { Product, NavItem } from './types';

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
    modality: 'Braided',
    color: 'Violet (Dyed) / Natural (Undyed)',
    absorptionTime: '56-70 days',
    tensileRetention: '65% at 14 days, 40% at 21 days',
    description: 'A versatile synthetic absorbable suture designed for optimal tensile strength and secure knotting.',
    usp: ['Superior knot security', 'Minimal tissue reaction', 'Uniform braiding technology'],
    indications: ['General surgery', 'Obstetrics & Gynecology', 'Urology', 'Skin closure'],
    themeColor: 'indigo-500',
    imageUrl: 'MEDCryl.png',
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
    modality: 'Braided',
    color: 'Undyed (Beige)',
    absorptionTime: '42 days',
    tensileRetention: '50% at 5 days, 0% at 10-14 days',
    description: 'Designed for rapid absorption and predictable handling where short-term support is required.',
    usp: ['Fast absorption profile', 'Excellent knot security', 'Coated for reduced friction'],
    indications: ['Skin closure', 'Mucosal closure', 'Episiotomy repair', 'Circumcision'],
    themeColor: 'red-600',
    imageUrl: 'MEDCryl-Fast.png',
    specs: [
      { code: 'RS 2763', size: '0', needleType: '1/2 Circle Taper Cutting 36mm', length: '90cm' },
      { code: 'RS 2761', size: '2-0', needleType: '1/2 Circle Round Body 26mm', length: '70cm' },
      { code: 'RS 2718', size: '4-0', needleType: '3/8 Circle Reverse Cutting 16mm', length: '45cm' }
    ]
  },
  {
    id: 'medcryl-ab',
    name: 'MEDCryl-AB®',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Antibacterial Polyglactin-910 (w/ Triclosan)',
    modality: 'Braided',
    color: 'Violet',
    absorptionTime: '56-70 days',
    tensileRetention: '75% at 2 weeks, 50% at 3 weeks',
    description: 'Coated with Triclosan to inhibit bacterial colonization on the suture line, reducing SSI risks.',
    usp: ['Antibacterial protection (S. aureus, MRSA)', 'Smooth tissue passage', 'Predictable absorption'],
    indications: ['General surgery', 'Gastrointestinal', 'Urology', 'Orthopedics'],
    themeColor: 'purple-800',
    imageUrl: 'MEDCryl-AB.png',
    specs: [
      { code: 'RSA 2478', size: '2', needleType: '1/2 Circle Reverse Cutting 40mm', length: '90cm' },
      { code: 'RSA 2347', size: '1', needleType: '1/2 Circle Round Body 40mm', length: '90cm' },
      { code: 'RSA 2421', size: '1', needleType: '1/2 Circle Reverse Cutting 40mm', length: '90cm' }
    ]
  },
  {
    id: 'medisorb-pga',
    name: 'MEDISORB®',
    brand: 'MEDISORB',
    category: 'Absorbable',
    type: 'Polyglycolic Acid (PGA) Braided & Coated',
    modality: 'Braided',
    color: 'Violet / Undyed',
    absorptionTime: '60-90 days',
    tensileRetention: '75% at 14 days, 50% at 21 days',
    description: 'A premium synthetic absorbable PGA suture offering exceptional handling and knot performance.',
    usp: ['High tensile strength', 'Smooth tissue passage', 'Biocompatible & safe'],
    indications: ['General soft tissue approximation', 'Gastrointestinal', 'Gynecological'],
    themeColor: 'violet-600',
    imageUrl: 'MEDISORB.png',
    specs: [
      { code: 'MS 2228', size: '2', needleType: '1/2 Circle Round Body 45mm', length: '90cm' },
      { code: 'MS 2478', size: '2', needleType: '1/2 Circle Reverse Cutting 40mm', length: '90cm' },
      { code: 'MS 2347', size: '1', needleType: '1/2 Circle Round Body 40mm', length: '90cm' }
    ]
  },
  {
    id: 'medcryl-mono',
    name: 'MEDCryl-MONO®',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Poliglecaprone-25 Monofilament',
    modality: 'Monofilament',
    color: 'Violet / Undyed',
    absorptionTime: '90-120 days',
    tensileRetention: '60% at 7 days, 30% at 14 days',
    description: 'Smooth monofilament for minimal tissue drag, ideal for rapid strength loss applications.',
    usp: ['Superior cosmetic results', 'Reduced infection potential', 'Easy passage through delicate tissues'],
    indications: ['Subcuticular closure', 'Plastic & cosmetic surgery', 'Obstetrics & Gynaecology'],
    themeColor: 'orange-400',
    imageUrl: 'MEDCryl-Mono.png',
    specs: [
      { code: 'RS 1641', size: '2-0', needleType: '1/2 Circle Round Body 30mm', length: '70cm' },
      { code: 'RS 1202', size: '3-0', needleType: '5/8 Circle Round Body 26mm', length: '70cm' },
      { code: 'RS 1326', size: '3-0', needleType: '3/8 Circle Cutting 25mm', length: '70cm' }
    ]
  },
  {
    id: 'medcryl-pds',
    name: 'MEDCryl-PDS®',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Monofilament Polydioxanone (PDO)',
    modality: 'Monofilament',
    color: 'Violet',
    absorptionTime: '180-210 days',
    tensileRetention: '70% at 2 weeks, 25% at 6 weeks',
    description: 'Extended wound support for prolonged healing periods, absorbing slowly through hydrolysis.',
    usp: ['Extended support up to 6 weeks', 'Minimal tissue reaction', 'Superior handling'],
    indications: ['Slow healing tissues', 'Pediatric cardiovascular', 'Orthopedic surgery'],
    themeColor: 'slate-500',
    imageUrl: 'MEDCryl-PDS.png',
    specs: [
      { code: 'RS 9262', size: '1', needleType: '1/2 Circle Round Body Heavy 50mm', length: '150cm' },
      { code: 'RS 9374', size: '1', needleType: '1/2 Circle Reverse Cutting Heavy 50mm', length: '90cm' },
      { code: 'RS 9826 S', size: '1', needleType: '1/2 Circle Reverse Cutting PORT 23mm', length: '35cm' }
    ]
  },
  {
    id: 'medcryl-pds-barb',
    name: 'MEDCryl-PDS BARB™',
    brand: 'MEDCryl',
    category: 'Absorbable',
    type: 'Polydioxanone Barbed (Knotless)',
    modality: 'Barbed',
    color: 'Violet / Undyed',
    absorptionTime: '180 days',
    tensileRetention: '60-70% at 2 weeks',
    description: 'Knotless wound closure technology for faster and more efficient surgical procedures.',
    usp: ['Eliminates knot tying', 'Consistent wound alignment', 'Reduces operative time'],
    indications: ['Laparoscopic closures', 'Gynecological surgery', 'Orthopedic soft-tissue'],
    themeColor: 'zinc-700',
    imageUrl: 'MEDCryl-PDS-BARB.png',
    specs: [
      { code: 'RSB 0130H', size: '1', needleType: '1/2 Circle Taper Point Heavy 37mm', length: '30cm Loop' },
      { code: 'RSB 1045', size: '0', needleType: '1/2 Circle Taper Point Heavy 37mm', length: '45cm' },
      { code: 'RSB 2045', size: '2-0', needleType: '1/2 Circle Taper Point 26mm', length: '45cm' }
    ]
  },
  {
    id: 'medgut-chromic',
    name: 'MEDGut Chromic®',
    brand: 'MEDGut',
    category: 'Absorbable',
    type: 'Catgut Chromic (Natural Collagen)',
    modality: 'Twisted',
    color: 'Brown',
    absorptionTime: '70-90 days',
    tensileRetention: '70% at 7 days, 40% at 14 days',
    description: 'Natural absorbable suture prepared from high-purity bovine intestinal collagen.',
    usp: ['Natural absorption mechanism', 'Excellent knot security', 'Traditional choice for rapid closure'],
    indications: ['OB-GYN procedures', 'Gastrointestinal surgery', 'General approximation'],
    themeColor: 'amber-700',
    imageUrl: 'MEDGut-Chromic.png',
    specs: [
      { code: 'RS 2216', size: '2', needleType: '1/2 Circle Round Body MAYO 45mm', length: '152cm' },
      { code: 'RS 2215', size: '1', needleType: '1/2 Circle Round Body MAYO 40mm', length: '152cm' },
      { code: 'RS 4273', size: '1', needleType: '1/2 Circle Reverse Cutting 50mm', length: '76cm' }
    ]
  },
  {
    id: 'medgut-plain',
    name: 'MEDGut Plain®',
    brand: 'MEDGut',
    category: 'Absorbable',
    type: 'Catgut Plain (Natural Collagen)',
    modality: 'Twisted',
    color: 'Natural (Beige)',
    absorptionTime: '70-90 days',
    tensileRetention: '5-7 days',
    description: 'Natural absorbable monofilament-like strand for routine surgical procedures.',
    usp: ['Natural predictable absorption', 'Smooth tissue passage', 'Biocompatible'],
    indications: ['Skin closure', 'Oral surgery', 'Ligating small vessels'],
    themeColor: 'yellow-500',
    imageUrl: 'MEDGut-Plain.png',
    specs: [
      { code: 'RS 5033', size: '2-0', needleType: '3/8 Circle Round Body 30mm', length: '76cm' },
      { code: 'RS 4238', size: '3-0', needleType: '1/2 Circle Round Body 25mm', length: '76cm' },
      { code: 'RS 4270', size: '4-0', needleType: '3/8 Circle Cutting 16mm', length: '76cm' }
    ]
  },
  {
    id: 'medlon-nylon',
    name: 'MEDLon®',
    brand: 'MEDLon',
    category: 'Non-Absorbable',
    type: 'Monofilament Polyamide (Nylon)',
    modality: 'Monofilament',
    color: 'Black',
    description: 'A non-absorbable monofilament engineered for precise wound closure and skin removal.',
    usp: ['Long-term tensile support', 'Minimal tissue reactivity', 'Clear visibility'],
    indications: ['Skin closure', 'Ophthalmic use', 'Plastic & cosmetic'],
    themeColor: 'emerald-600',
    imageUrl: 'MEDLon.png',
    specs: [
      { code: 'RS 3305', size: '1', needleType: '1/2 Circle Reverse Cutting 38mm', length: '75cm' },
      { code: 'RS 3347', size: '1', needleType: '1/2 Circle Round Body Heavy 40mm', length: '100cm' },
      { code: 'RS 3303', size: '2-0', needleType: '1/2 Circle Reverse Cutting 38mm', length: '75cm' }
    ]
  },
  {
    id: 'neolene-pp',
    name: 'NEOLene™',
    brand: 'NEOLene',
    category: 'Non-Absorbable',
    type: 'Monofilament Polypropylene',
    modality: 'Monofilament',
    color: 'Blue',
    description: 'A sterile non-absorbable monofilament for ultimate tissue integrity and permanent security.',
    usp: ['Maintains strength indefinitely', 'Inert polymer behavior', 'Resistant to infection'],
    indications: ['Cardiovascular & thoracic', 'Hernia repair', 'Microvascular surgery'],
    themeColor: 'blue-700',
    imageUrl: 'NEOLene.png',
    specs: [
      { code: 'RS 834', size: '1', needleType: '1/2 Circle Round Body Heavy Loop 50mm', length: '150cm' },
      { code: 'RS 840', size: '1', needleType: '1/2 Circle Round Body Heavy 30mm', length: '70cm' },
      { code: 'RS 805', size: '0', needleType: '1/2 Circle Taper Cutting 25mm', length: '70cm' }
    ]
  },
  {
    id: 'neosilk-silk',
    name: 'NEOSilk™',
    brand: 'NEOSilk',
    category: 'Non-Absorbable',
    type: 'Black Braided Natural Protein Fiber',
    modality: 'Braided',
    color: 'Black',
    description: 'Processed to reduce capillarity and enhance tissue compatibility with superior knot placement.',
    usp: ['Superior pliability', 'Minimal tissue reactivity', 'Coated for reduced friction'],
    indications: ['Skin closure', 'Gastrointestinal procedures', 'Ligatures & securing devices'],
    themeColor: 'cyan-600',
    imageUrl: 'NEOSilk.png',
    specs: [
      { code: 'RS 5006', size: '2', needleType: '1/2 Circle Reverse Cutting 38mm', length: '75cm' },
      { code: 'RS 5004', size: '0', needleType: '1/2 Circle Round Body Heavy Loop 38mm', length: '75cm' },
      { code: 'RS 5037', size: '0', needleType: '1/2 Circle Reverse Cutting 45mm', length: '76cm' }
    ]
  },
  {
    id: 'durabond-polyester',
    name: 'DURABond™',
    brand: 'DURABond',
    category: 'Non-Absorbable',
    type: 'Polyester Braided (Polyethylene Terephthalate)',
    modality: 'Braided',
    color: 'Green / White',
    description: 'A high-strength, non-absorbable polyester suture designed for permanent tissue support.',
    usp: ['High tensile strength', 'Smooth surface coating', 'Excellent flexibility'],
    indications: ['Cardiovascular procedures', 'Orthopaedic closures', 'Ophthalmic surgery'],
    themeColor: 'orange-800',
    imageUrl: 'DURABond.png',
    specs: [
      { code: 'RS 645', size: 'Green 5', needleType: '1/2 Circle Trocar Point Heavy 55mm', length: '100cm' },
      { code: 'RS 4843', size: 'Green 2', needleType: '1/2 Circle Taper Cutting Heavy 45mm', length: '4x75cm' },
      { code: 'RS 687', size: 'Green 2-0', needleType: '1/2 Circle Taper Cutting 25mm', length: '90cm' }
    ]
  }
];
