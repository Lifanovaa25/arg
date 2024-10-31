import type { Params, ProductCard } from '@/src/shared/types/productCard';
export interface CardProps extends ProductCard {
  image: string;
  manufacturer: string;
  link: string;
  view: 'list' | 'grid';
  cardPageLink?: string;
}
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
  setParams: ({}: Params) => void;
  onClearParams: () => void;
  params: Params[];
  sort: number;
  setSort: (sort: number) => void;
}

export interface ISearchStore {
  query: string;
  onAddSearchRequest: (query: string) => void;
}
