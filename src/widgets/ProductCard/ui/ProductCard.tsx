'use client';

import { MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Title from '@/src/shared/ui/Title/Title';
import { useAppDispatch, useAppSelector } from '@/src/shared/lib/hooks/store/useStore';
import {
  onAddCard,
  onMinusCard,
  onPlusCard,
  onRemoveCard,
} from '../../ProductCard/model/slice';
import test from '/public/images/test.png';
import { CardProps } from '../model/types';
import styles from './ProductCard.module.scss';

export const ProductCard = (props: CardProps) => {
  const { id, title: text, price, view } = props;

  const dispatch = useAppDispatch();
  const card = useAppSelector(({ cart }) => cart.cart.find((obj) => obj.id === id));

  const handleAddCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(onAddCard(props));
  };

  const handleIncreaseCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(onPlusCard(id));
  };

  const handleDecreaseCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (card?.quantity === 1) {
      dispatch(onRemoveCard(id));
    } else {
      dispatch(onMinusCard(id));
    }
  };

  return (
    <div className={cn(styles.wrapper, styles[view])}>
      <Link className={styles.link} href={'/'}>
        <Image className={cn(styles.img, styles[view])} src={test} alt={text} />

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
              {'Junction box Mettler Toledo AJB941M'}
            </Title>
          </div>

          <div className={styles.bottom}>
            <div className={styles.price}>
              <span>Price: </span>
              <span>{price}</span>
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
    </div>
  );
};
