'use client';

import { useState } from 'react';
import Title from '@/src/shared/ui/Title/Title';
import { Card } from '../Card/Card';
import { CartModal } from '../Modal/Modal';
import { productCartStore } from '@/src/app/providers/Store/config/store';
import styles from './Details.module.scss';

export const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState<number | null>(null);

  const { cart, onRemoveCard, onClearCart } = productCartStore();

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
          Checkout details
        </Title>

        {(cart && cart.length > 0) && (
          <button className={styles.btn} onClick={() => setIsModalOpen(true)}>
            Clear cart
          </button>
        )}
      </div>

      {(cart && cart.length < 1) && <p className={styles.empty}>Cart is empty</p>}

      <div className={styles.list}>
        {(cart && cart.length) && cart.map((card) => (
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
