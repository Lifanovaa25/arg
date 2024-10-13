import type { ProductCard } from '@/src/shared/types/productCard';
export interface CardProps extends ProductCard {
  image: string;
  manufacturer: string;
  link: string;
  view: 'list' | 'grid';
  cardPageLink?: string;
}

// Модель Store для продуктовой корзины
export interface ICartStore {
  cart: ProductCard[];
  CartIds: {
    id: number;
  }[];
  productUrl: string;
  onAddCard: (props: CardProps) => void;
  onMinusCard: (id: number) => void;
  onPlusCard: (id: number) => void;
  onRemoveCard: (id: number) => void;
  onClearCart: () => void;
  getCartIds: () => void;
  setUrl: (url: string) => void;
}

export interface ISearchStore {
  query: string;
  onAddSearchRequest: (query: string) => void;
}

// Модель Store для продуктовой корзины
export interface ICartStore {
  cart: ProductCard[];
  CartIds: {
    id: number;
  }[];
  onAddCard: (props: CardProps) => void;
  onMinusCard: (id: number) => void;
  onPlusCard: (id: number) => void;
  onRemoveCard: (id: number) => void;
  onClearCart: () => void;
  getCartIds: () => void;
}


export interface ISearchStore {
  query: string;
  onAddSearchRequest: (query: string) => void;
}

// Модель Store для продуктовой корзины
export interface ICartStore {
  cart: ProductCard[];
  CartIds: {
    id: number;
  }[];
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
