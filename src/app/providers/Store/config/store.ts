import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LOCAL_STORAGE_STORE_NAME } from './config';
import { getLocalStore } from '@/src/shared/lib/utils/localeStorage/localStorage';

import type {
  ICartStore,
  ISearchStore,
} from '@/src/widgets/ProductCard/model/types';
import type { CardProps } from '@/src/widgets/ProductCard/model/types';
import type { ProductCard } from '@/src/shared/types/productCard';
import { link } from 'fs';

export const productCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      cart: getLocalStore(LOCAL_STORAGE_STORE_NAME)
        ? getLocalStore(LOCAL_STORAGE_STORE_NAME)
        : [],
      CartIds: [],
      productUrl:'',
      onAddCard: (props: CardProps) => {
        set({ cart: [...get().cart, { ...props, quantity: 1 }] });
        set({ CartIds: [...get().cart, { ...props,id: props.id}] });
      },
      onMinusCard: (id: number) => {
        const cart = JSON.parse(JSON.stringify(get().cart));
        // const CartIds = JSON.parse(JSON.stringify(get().CartIds));

        cart.forEach((item: ProductCard) => {
          if (item.id === id && item.quantity) {
            item.quantity = item.quantity - 1;
          }
        });

        set({ cart });
        // set({CartIds})
      },
      onPlusCard: (id: number) => {
        const cart = JSON.parse(JSON.stringify(get().cart));
        const CartIds = JSON.parse(JSON.stringify(get().CartIds));

        cart.forEach((item: ProductCard) => {
          if (item.id === id && item.quantity) {
            item.quantity = item.quantity + 1;
          }
        });

        set({ cart });
      },
      onRemoveCard: (id: number) => {
        set({ cart: get().cart.filter((obj) => obj.id !== id) });
        set({ CartIds: get().CartIds.filter((obj) => obj.id !== id)});

      },
      onClearCart: () => {
        set({ cart: [] });
      },
      //получение айдишников в корзине
      getCartIds: () => {
        const cart = JSON.parse(JSON.stringify(get().cart));
        // let i = 0;
        // let Ids: object[];
        cart.forEach((item: ProductCard) => {
          // set({ CartIds: item.id });
        });
        // set({ CartIds: [...get().cart, { ...cart, id:cart.id }] });
      },
      setUrl: (url: string) => {
        return set({ productUrl: url });
      },
    }),
    {
      name: LOCAL_STORAGE_STORE_NAME,
    }
  )
);

export const searchStore = create<ISearchStore>()((set, get) => ({
  query: '',
  onAddSearchRequest: (query: string) => {
    return set({ query: query });
  },
}));
