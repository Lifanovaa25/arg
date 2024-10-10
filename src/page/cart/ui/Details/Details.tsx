'use client';

import { useState } from 'react';
import Title from '@/src/shared/ui/Title/Title';
import { onClearCart, onRemoveCard } from '@/src/widgets/ProductCard/model/slice';
import { useAppSelector, useAppDispatch } from '@/src/shared/lib/hooks/store/useStore';
import { Card } from '../Card/Card';
import { CartModal } from '../Modal/Modal';
import styles from './Details.module.scss';

export const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const cart = useAppSelector(({ cart }) => cart.cart);

  const handleOpenModal = (id: number) => {
    setIsModalOpen(true);
    setIdProduct(id);
  };

  const handleRemoveCart = () => {
    dispatch(onRemoveCard(idProduct));
    setIsModalOpen(false);
    setIdProduct(null);
  };

  const handleClearCart = () => {
    dispatch(onClearCart());
    setIsModalOpen(false);
    setIdProduct(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Title size="h1" variant="secondary">
          Checkout details
        </Title>

        {cart.length > 0 && (
          <button className={styles.btn} onClick={() => setIsModalOpen(true)}>
            Clear cart
          </button>
        )}
      </div>

      {cart.length < 1 && <p className={styles.empty}>Cart is empty</p>}

      <div className={styles.list}>
        {cart.map((card) => (
          <Card key={card.id} {...card} handleOpenModal={handleOpenModal} />
        ))}
      </div>

      {cart.length > 0 && (
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
