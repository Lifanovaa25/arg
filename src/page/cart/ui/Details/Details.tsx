'use client';

import { useEffect, useState } from 'react';
import Title from '@/src/shared/ui/Title/Title';
import { Card } from '../Card/Card';
import { CartModal } from '../Modal/Modal';
import { productCartStore } from '@/src/app/providers/Store/config/store';
import styles from './Details.module.scss';
import { getCart } from '@/src/app/api/cart/cartApi';
import { ICartResponse200 } from '@/src/app/api/cart/interfaces';

export const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState<number | null>(null);

  const { CartIds, cart, getCartIds, onRemoveCard, onClearCart } = productCartStore();

  const [IdsItem, setdsItem] = useState([]);
  const Ids = getCartIds();

  const [data, setData] = useState<ICartResponse200['value'] | null>(null); // Данные из API
  //TODO разобраться,доделать
  const fetchData = async (): Promise<void> => {
    const result = await getCart({ Id: CartIds });
    if (result) {
      const r: ICartResponse200 = result as unknown as ICartResponse200;
      setData(r.value);
      // setLoading(false); // Выключаем состояние загрузки
    }
  };
  useEffect(() => {
    getCartIds();
    if (data === null) {
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
    console.log({cart})
    console.log({data})
    // console.log({CartIds})
  }, [data]);
  useEffect(() => {
    getCartIds();
    fetchData();
  }, [cart, CartIds]);

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
      <div className={styles.top}>
        <Title size="h1" variant="secondary">
          Checkout details
        </Title>

        {cart && cart.length > 0 && (
          <button className={styles.btn} onClick={() => setIsModalOpen(true)}>
            Clear cart
          </button>
        )}
      </div>

      {cart && cart.length < 1 && <p className={styles.empty}>Cart is empty</p>}

      <div className={styles.list}>
        {cart &&
          cart.length > 0 &&
          cart.map((card) => (
            <Card
              view={'list'}
              key={card.id}
              {...card}
              handleOpenModal={handleOpenModal}
            />
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
