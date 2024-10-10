import { ProductCard } from '@/src/shared/types/productCard';

export const getTotalQuantityCards = (cart: ProductCard[]) => {
  if (cart && cart.length) {
    return cart.reduce((count, cart) => count + cart.quantity!, 0);
  } else {
    return 0;
  }
};
