
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
  color: string;
  absorptionTime?: string;
  description: string;
  usp: string[];
  useCase?: string;
  specs: ProductSpecification[];
  themeColor: string; // Tailwind class
}

export interface NavItem {
  label: string;
  path: string;
  dropdown?: NavItem[];
}
