import { getLocalStore } from '@/src/shared/lib/utils/localeStorage/localStorage';
import { ProductCard } from '@/src/shared/types/productCard';

export const getBasketFromLS = () => {
  const data = getLocalStore('cart');
  const cards = data || [];

  return {
    cart: cards as ProductCard[],
  };
};
