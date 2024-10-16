import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LOCAL_STORAGE_STORE_NAME } from './config';
import { getLocalStore } from '@/src/shared/lib/utils/localeStorage/localStorage';

import type {
  ICartStore,
  ISearchStore,
} from '@/src/widgets/ProductCard/model/types';
import type { CardProps } from '@/src/widgets/ProductCard/model/types';
import type { Params, ProductCard } from '@/src/shared/types/productCard';
import { link } from 'fs';
import { number } from 'zod';

export const productCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      cart: getLocalStore(LOCAL_STORAGE_STORE_NAME)
        ? getLocalStore(LOCAL_STORAGE_STORE_NAME)
        : [],
      CartIds: [],
      productUrl:'',
      params:[],
      sort:0,
      onAddCard: (props: CardProps) => {
        set({ cart: [...get().cart, { ...props, quantity: 1 }] });
        set({ CartIds: [...get().cart, { ...props,id: props.id}] });
      },
      onMinusCard: (id: number) => {
        const cart = JSON.parse(JSON.stringify(get().cart));

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
         },
      setUrl: (url: string) => {
        return set({ productUrl: url });
      },
      setParams:(props:Params) =>{
        set({ params: [...get().params, { ...props}] });
      
      },
      setSort:(sort:number) =>{
        set({sort});
      
      },
      onClearParams: () => {
      //  return  set({ params:[] });
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
