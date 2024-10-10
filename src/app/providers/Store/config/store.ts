import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LOCAL_STORAGE_STORE_NAME } from './config';
import { getLocalStore } from '@/src/shared/lib/utils/localeStorage/localStorage';

import type { ICartStore, ICategoryStore, ISearchStore } from '@/src/widgets/ProductCard/model/types';
import type { CardProps } from '@/src/widgets/ProductCard/model/types';
import type { ProductCard } from '@/src/shared/types/productCard';
import { link } from 'fs';

export const productCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      cart: getLocalStore(LOCAL_STORAGE_STORE_NAME)
        ? getLocalStore(LOCAL_STORAGE_STORE_NAME)
        : [],
      onAddCard: (props: CardProps) => {
        set({ cart: [...get().cart, { ...props, quantity: 1 }] });
      },
      onMinusCard: (id: number) => {
        const cart = JSON.parse(JSON.stringify(get().cart));

        cart.forEach((item: ProductCard) => {
          if (item.id === id && item.quantity) {
            item.quantity = item.quantity - 1;
          }
        });

        set({ cart });
      },
      onPlusCard: (id: number) => {
        const cart = JSON.parse(JSON.stringify(get().cart));

        cart.forEach((item: ProductCard) => {
          if (item.id === id && item.quantity) {
            item.quantity = item.quantity + 1;
          }
        });

        set({ cart });
      },
      onRemoveCard: (id: number) => {
        set({ cart: get().cart.filter((obj) => obj.id !== id) });
      },
      onClearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: LOCAL_STORAGE_STORE_NAME,
    }
  )
);
export const categoryStore = create<ICategoryStore>()((set, get) => ({
  path: '',
  onAddPathName: (pathName: string) => {
    return set({ path: pathName });
  },
}));
export const searchStore = create<ISearchStore>()((set, get) => ({
  query: '',
  onAddSearchRequest: (query: string) => {
    return set({ query: query });
  },
}));
