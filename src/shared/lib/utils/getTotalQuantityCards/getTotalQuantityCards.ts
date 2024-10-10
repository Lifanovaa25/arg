import { ProductCard } from '@/src/shared/types/productCard';

export const getTotalQuantityCards = (cart: ProductCard[]) =>
  cart.reduce((count, cart) => count + cart.quantity, 0);
