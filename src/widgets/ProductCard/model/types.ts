import { ProductCard } from '@/src/shared/types/productCard';

export interface CartSliceProps {
  cart: ProductCard[];
}

export interface CardProps extends ProductCard {
  view: 'list' | 'grid';
}
