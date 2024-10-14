'use client';

import { MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Title from '@/src/shared/ui/Title/Title';
import test from '/public/images/test.png';
import { CardProps } from '../model/types';
import { productCartStore } from '@/src/app/providers/Store/config/store';
import styles from './ProductCard.module.scss';

export const ProductCard = (props: CardProps) => {
  const { id, title: text, price, view } = props;
  const { cart, onAddCard, onPlusCard, onRemoveCard, onMinusCard } = productCartStore();
  const pageUrl = String(props.cardPageLink);
  const prodUrl = String(props.link);
  const card = cart && cart.length && cart.find((obj) => obj.id === id);
  const handleAddCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onAddCard(props);
  };

  const handleIncreaseCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onPlusCard(id);
  };

  const handleDecreaseCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (card) {
      if (card.quantity === 1) {
        onRemoveCard(id);
      } else {
        onMinusCard(id);
      }
    }
  };

  return (
    <div className={cn(styles.wrapper, styles[view])}>
      {pageUrl ?
        <Link className={styles.link} href={`${pageUrl}/product/[productCard]`} as={`${pageUrl}/product`}
          onClick={() => localStorage.setItem("lastProductId",id.toString())}>
          <Image className={cn(styles.img, styles[view])} src={props.image ?  'https://royal-equipment.ae' + props.image : test} width={100} height={100} alt={text} />

          <div className={cn(styles.contentWrapper, styles[view])}>
            <div>
              <div className={styles.manufacturers}>
                <span>Manufacturers: </span>
                <span>{props.manufacturer}</span>
              </div>
              <Title
                className={cn(styles.title, styles[view])}
                size="h5"
                variant="secondary"
                font="onest"
                weight="bold"
              >
                {props.title}
                
              </Title>
            </div>

            <div className={styles.bottom}>
              <div className={styles.price}>
                <span>Price: </span>
                <span>{props.price}</span>
              </div>
              <div className={styles.btnsWrapper}>
                {!card ? (
                  <button className={styles.btnAdd} onClick={handleAddCard}>
                    <span className={styles.spanIncrease}>+</span>
                    <span className={styles.spanAdd}>add to cart</span>
                  </button>
                ) : (
                  <div className={styles.btnIncrease}>
                    <button className={styles.btnCount} onClick={handleDecreaseCount}>
                      -
                    </button>
                    <span className={styles.spanQuantity}>{card.quantity}</span>
                    <button className={styles.btnCount} onClick={handleIncreaseCount}>
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>

            {view === 'list' && (
              <span className={styles.information}>View information</span>
            )}
          </div>
        </Link>
        :

        <Link className={styles.link} href={props.link}>
          <Image className={cn(styles.img, styles[view])} src={props.image ? 'https://royal-equipment.ae' + props.image : test} width={100} height={100} alt={text} />

          <div className={cn(styles.contentWrapper, styles[view])}>
            <div>
              <div className={styles.manufacturers}>
                <span>Manufacturers: </span>
                <span>{'GRUNDFOS'}</span>
              </div>
              <Title
                className={cn(styles.title, styles[view])}
                size="h5"
                variant="secondary"
                font="onest"
                weight="bold"
              >
                {props.title}
              </Title>
            </div>

            <div className={styles.bottom}>
              <div className={styles.price}>
                <span>Price: </span>
                <span>{props.price}</span>
              </div>
              <div className={styles.btnsWrapper}>
                {!card ? (
                  <button className={styles.btnAdd} onClick={handleAddCard}>
                    <span className={styles.spanIncrease}>+</span>
                    <span className={styles.spanAdd}>add to cart</span>
                  </button>
                ) : (
                  <div className={styles.btnIncrease}>
                    <button className={styles.btnCount} onClick={handleDecreaseCount}>
                      -
                    </button>
                    <span className={styles.spanQuantity}>{card.quantity}</span>
                    <button className={styles.btnCount} onClick={handleIncreaseCount}>
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>

            {view === 'list' && (
              <span className={styles.information}>View information</span>
            )}
          </div>
        </Link>
      }
    </div>
  );
};
