'use client';

import {useEffect, useState } from 'react';
import Title from '@/src/shared/ui/Title/Title';
import { Card } from '../Card/Card';
import { CartModal } from '../Modal/Modal';
import styles from './Details.module.scss';
import { ICartResponse200 } from '@/src/app/api/cart/interfaces';
import { Loading } from '@/src/widgets/Loading';
import { getCart } from '@/src/app/api/cart/cartApi';
import { getTotalQuantityAmount } from '@/src/shared/lib/utils/getTotalQuantityCards/getTotalQuantityCards';
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';
import Link from 'next/link';

export const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState<number | null>(null);
  const { cartItems, onRemoveCard, onClearCart, onChangeOpenId } = useCart();
  const [loading, setLoading] = useState<boolean>(true); // Статус загрузки
  const [cart, setCart] = useState(cartItems || []);
  const [data, setData] = useState<ICartResponse200['value'] | null>(null);

  useEffect(() => {
    function getCartIds() {
      const ids: number[] = [];
      cartItems.forEach((item: { id: string | number }) => {
        ids.push(Number(item.id));
      });
      return ids;
    }
    let IdsItem = getCartIds();
    const fetchData = async (): Promise<void> => {
      const result = await getCart({ Id: IdsItem });
      if (result) {
        const r: ICartResponse200 = result as unknown as ICartResponse200;
        setData(r.value);
        setLoading(false); // Выключаем состояние загрузки
      }
    };
    if (data === null) {
      setLoading(true);
      fetchData();
    } else {
      for (const item of data.items) {
        for (const cart_item of cart) {
          if (item.id === cart_item.id) {
            cart_item.image = item.image;
            cart_item.title = item.label;
            cart_item.price = item.price;
            cart_item.manufacturer = item.props[0][1];
            cart_item.link = item.link;
          }
        }
      }
    }
  }, [cart, cartItems, data]);
  useEffect(() => {
    function getCartIds() {
      const ids: number[] = [];
      cartItems.forEach((item: { id: string | number }) => {
        ids.push(Number(item.id));
      });
      return ids;
    }
    setCart(cartItems);
    let IdsItem = getCartIds();
    const fetchData = async (): Promise<void> => {
      const result = await getCart({ Id: IdsItem });
      if (result) {
        const r: ICartResponse200 = result as unknown as ICartResponse200;
        setData(r.value);

        setLoading(false); // Выключаем состояние загрузки
      }
    };
    fetchData();
  }, [cart, cartItems]);

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
    onClearCart();
    setIsModalOpen(false);
    setIdProduct(null);
  };

  return (
    <div className={styles.wrapper}>
      {loading && <Loading />}
      <div className={styles.top}>
        <Title size="h1" variant="secondary">
          Checkout details
        </Title>
        {cart && cart.length > 0 && (
          <button
            className={styles.btn}
            onClick={() => setIsModalOpen(true)}
            aria-label="Clear cart"
          >
            Clear cart
          </button>
        )}
      </div>
      {cart && cart.length < 1 && <p className={styles.empty}>Cart is empty</p>}
      <div className={styles.list}>
        {cart &&
          cart.length > 0 &&
          cart.map((card) => (
          //   <Link
          //   className={styles.link}
          //   href={card.link}
          //   as={card.link}
          //   onClick={() => onChangeOpenId(card.id)}
          // >
            <Card
              //@ts-ignore
              view={'list'}
              key={card.id}
              {...card}
              handleOpenModal={handleOpenModal}
            />
            // </Link>
          ))}
      </div>

      {cart && cart.length > 0 && (
        <div className={styles.total}>
          <span className={styles.price}>Total price:</span>
          <span className={styles.request}>
            {getTotalQuantityAmount(cart)}
            {/* On request */}
          </span>
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
