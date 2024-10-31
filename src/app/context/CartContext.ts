'use client';
import { Params, ProductCard } from '@/src/shared/types/productCard';
import { CardProps } from '@/src/widgets/ProductCard/model/types';
import { createContext } from 'react';
interface Props {
  cartItems: ProductCard[];
  sort: number;
  openId: number;
  params: string;
  onChangeParams: (props: Params) => void;
  onChangeOpenId: (id: number) => void;
  onChangeSort: (sort: number) => void;
  onRemoveCard: (id: number) => void;
  onClearCart: () => void;
  totalQuantity: () => number;
  onPlusCard: (id: number) => void;
  onMinusCard: (id: number) => void;
  addToCart: (cart: CardProps) => void;
}
export const CartContext = createContext({} as Props);
