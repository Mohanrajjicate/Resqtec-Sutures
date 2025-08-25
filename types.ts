export enum ProductCategory {
  Absorbable = 'Absorbable Sutures',
  NonAbsorbable = 'Non-Absorbable Sutures',
}

export interface Product {
  category: ProductCategory;
  brandName: string;
  material: string;
  description: string;
  absorptionProfile?: string;
  color: string;
  sizes: string;
  image: string;
  details?: string;
}