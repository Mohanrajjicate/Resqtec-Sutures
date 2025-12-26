
export type SutureCategory = 'Absorbable' | 'Non-Absorbable';

export interface ProductSpecification {
  code: string;
  size: string;
  needleType: string;
  length: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: SutureCategory;
  type: string;
  modality: 'Monofilament' | 'Braided' | 'Twisted' | 'Barbed';
  color: string;
  absorptionTime?: string;
  tensileRetention?: string;
  description: string;
  usp: string[];
  indications: string[];
  specs: ProductSpecification[];
  themeColor: string; // Tailwind color key
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
  dropdown?: NavItem[];
}
