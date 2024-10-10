import { ProductCard } from '@/src/shared/types/productCard';

export interface CardProps extends ProductCard {
  handleOpenModal: (id: number) => void;
}
