import { Product, ProductCategory } from './types';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/products' },
  { name: 'Contact Us', path: '/contact' },
];

export const products: Product[] = [
  {
    category: ProductCategory.Absorbable,
    brandName: 'Resqsorb™',
    material: 'Polyglycolic Acid (PGA)',
    description: 'Braided and coated synthetic absorbable suture for general soft tissue approximation.',
    absorptionProfile: 'Complete absorption in 60-90 days.',
    color: 'Violet',
    sizes: 'USP 6-0 to 2',
    image: 'https://picsum.photos/seed/resqsorb/400/300',
    details: 'Resqsorb™ provides excellent tensile strength throughout the critical wound healing period. Its coating ensures smooth passage through tissue and precise knot placement. Ideal for subcutaneous tissue, fascia, and general surgery.'
  },
  {
    category: ProductCategory.Absorbable,
    brandName: 'Resqcril™',
    material: 'Polyglactin 910 (PGLA)',
    description: 'A popular choice for smooth passage through tissue and predictable absorption.',
    absorptionProfile: 'Complete absorption in 56-70 days.',
    color: 'Violet / Undyed',
    sizes: 'USP 8-0 to 2',
    image: 'https://picsum.photos/seed/resqcril/400/300',
    details: 'Resqcril™ is a versatile suture used in a wide range of procedures. Its predictable absorption profile and superior handling make it a favorite among surgeons for soft tissue ligation and approximation.'
  },
  {
    category: ProductCategory.Absorbable,
    brandName: 'Resqlene™',
    material: 'Polydioxanone (PDO)',
    description: 'Monofilament synthetic suture for extended wound support, ideal for orthopedic and facial surgery.',
    absorptionProfile: 'Extended absorption, complete in 180-210 days.',
    color: 'Violet',
    sizes: 'USP 7-0 to 1',
    image: 'https://picsum.photos/seed/resqlene/400/300',
    details: 'The extended absorption profile of Resqlene™ makes it ideal for applications requiring prolonged wound support, such as in orthopedic surgery for tendon and ligament repair, and in facial plastic surgery.'
  },
  {
    category: ProductCategory.NonAbsorbable,
    brandName: 'Resqpro™',
    material: 'Polypropylene',
    description: 'Monofilament suture known for its exceptionally smooth surface and high tensile strength, ideal for cardiovascular and plastic surgery.',
    color: 'Blue',
    sizes: 'USP 10-0 to 1',
    image: 'https://picsum.photos/seed/resqpro/400/300',
    details: 'Resqpro™ is exceptionally inert in tissue and maintains its high tensile strength indefinitely. This makes it the material of choice for cardiovascular anastomoses, hernia repair, and other permanent fixation needs.'
  },
  {
    category: ProductCategory.NonAbsorbable,
    brandName: 'Resqylon™',
    material: 'Monofilament Nylon (Polyamide)',
    description: 'Provides excellent and consistent knot security, primarily used for skin closure.',
    color: 'Black / Blue',
    sizes: 'USP 11-0 to 2',
    image: 'https://picsum.photos/seed/resqylon/400/300',
    details: 'Known for its elasticity and memory, Resqylon™ allows for secure knotting and is easy to remove. It is widely used in general surgery for skin closure and in ophthalmology.'
  },
  {
    category: ProductCategory.NonAbsorbable,
    brandName: 'Resqsilk™',
    material: 'Braided Silk',
    description: 'A natural, braided suture with excellent handling properties, coated with silicone.',
    color: 'Black',
    sizes: 'USP 6-0 to 2',
    image: 'https://picsum.photos/seed/resqsilk/400/300',
    details: 'Resqsilk™ offers superb handling and knot-tying characteristics. Though classified as non-absorbable, it gradually loses tensile strength over several months. It is often used in ophthalmology and for securing drains.'
  },
  {
    category: ProductCategory.NonAbsorbable,
    brandName: 'Resqsteel™',
    material: '316L Stainless Steel',
    description: 'Monofilament steel suture for procedures requiring the highest strength, such as orthopedic and sternum closure.',
    color: 'Metallic',
    sizes: 'USP 7 to 0',
    image: 'https://picsum.photos/seed/resqsteel/400/300',
    details: 'Resqsteel™ offers the ultimate in tensile strength and is completely inert. It is essential for high-stress applications like sternum closure after open-heart surgery, as well as certain orthopedic and neurosurgical procedures.'
  },
];