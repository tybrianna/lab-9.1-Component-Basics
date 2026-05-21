import type { ReactNode } from 'react';

export type Product = {
  id: string | number;
  name: string;
  price: number;
  description?: string;
  inStock: boolean;
  imageUrl?: string;
};

export type ProductDisplayProps = {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (id: string | number) => void;
  children?: ReactNode;
};