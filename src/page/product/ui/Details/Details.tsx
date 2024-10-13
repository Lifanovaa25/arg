'use client';

import { useEffect, useState } from 'react';
import Title from '@/src/shared/ui/Title/Title';
import { Card } from '../Card/Card';
import { CartModal } from '../Modal/Modal';
import { productCartStore } from '@/src/app/providers/Store/config/store';
import styles from './Details.module.scss';
import { getCart } from '@/src/app/api/cart/cartApi';
import { ICartResponse200 } from '@/src/app/api/cart/interfaces';
import { propagateServerField } from 'next/dist/server/lib/render-server';
export interface ProductDetails {
  label: string| undefined;
  
  Value?: {
    Label: string;
    ImageUrl: string | undefined;
    Articul: string;
    Country: string;
    Analogue: string;
    Filters: {
      additionalProp1: string[];
      additionalProp2: string[];
      additionalProp3: string[];
    };
    Price: number;
    ProductDescription: string;
    Characteristics: string;
    LinkUrl: string;
    LinkName: string;
    IsExternalLink: boolean;
    SparePartsLists: {
      Title: string;
      Items: {
        Name: string;
        Price: number;
        Articul: string;
        Url: string;
      }[];
    }[];
  };
}
export const Details = (props:ProductDetails) => {
  const {label} = props
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState<number | null>(null);

  const { CartIds, cart, getCartIds, onRemoveCard, onClearCart } = productCartStore();

  const [IdsItem, setdsItem] = useState([])
  const Ids = getCartIds()


  const [data, setData] = useState<ICartResponse200['Value'] | null>(null); // Данные из API

  

  const handleOpenModal = (id: number) => {
    setIsModalOpen(true);
    setIdProduct(id);
  };

  const handleRemoveCart = () => {
    if (idProduct) {
      onRemoveCard(idProduct);
      setIsModalOpen(false);
      setIdProduct(null);
    }
  };

  const handleClearCart = () => {
    onClearCart()
    setIsModalOpen(false);
    setIdProduct(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Title size="h1" variant="secondary">
         {/* {props.label} */}
        </Title>

        {(cart && cart.length > 0) && (
          <button className={styles.btn} onClick={() => setIsModalOpen(true)}>
            Clear cart
          </button>
        )}
      </div>

      {(cart && cart.length < 1) && <p className={styles.empty}>Cart is empty</p>}

      <div className={styles.list}>
        {(cart && cart.length > 0) && cart.map((card) => (
          <Card
            image={''}
            manufacturer={''}
            link={''}
            view={'list'}
            key={card.id} {...card}
            handleOpenModal={handleOpenModal} />
        ))}
      </div>

      {cart && cart.length > 0 && (
        <div className={styles.total}>
          <span className={styles.price}>Total price:</span>
          <span className={styles.request}>On request</span>
        </div>
      )}

      <CartModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setIdProduct={setIdProduct}
        handleRemoveCart={handleRemoveCart}
        handleClearCart={handleClearCart}
        idProduct={idProduct}
      />
    </div>
  );
};
