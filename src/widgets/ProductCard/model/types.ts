import type { ProductCard } from '@/src/shared/types/productCard';

export interface CardProps extends ProductCard {
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
}
