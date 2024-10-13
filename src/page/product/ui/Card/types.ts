import { ProductCard } from '@/src/shared/types/productCard';


export interface CartSliceProps {
  cart: ProductCard[];
}

export interface CardProps extends ProductCard {
  image: string,
  manufacturer: string,
  link:string,
  view: 'list' | 'grid';
  handleOpenModal: (id: number) => void;
}