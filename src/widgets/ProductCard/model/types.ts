import type { ProductCard } from '@/src/shared/types/productCard';
export interface CardProps extends ProductCard {
  image: string;
  manufacturer: string;
  link: string;
  view: 'list' | 'grid';
}

// Модель Store для продуктовой корзины
export interface ICartStore {
  cart: ProductCard[];
  onAddCard: (props: CardProps) => void;
  onMinusCard: (id: number) => void;
  onPlusCard: (id: number) => void;
  onRemoveCard: (id: number) => void;
  onClearCart: () => void;
  getCartIds: () => void;
}

export interface ICategoryStore {
  path: string;
  onAddPathName: (pathName: string) => void;
}
export interface ISearchStore {
  query: string;
  onAddSearchRequest: (query: string) => void;
}
