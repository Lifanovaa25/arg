'use client';

import { MouseEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Title from '@/src/shared/ui/Title/Title';
import noimage from '/public/images/no-image.png';
import { CardProps } from '../model/types';
import styles from './ProductCard.module.scss';
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';
import { usePathname } from 'next/navigation';

export const ProductCard = (props: CardProps) => {
  const pathname = usePathname()
  const [path,setPath] = useState(
    pathname.includes('/equipment/') ? 'equipment' :'industry'
  )
  console.log(pathname)
  const { id, title: text, price, view } = props;
  const { addToCart, onMinusCard, onPlusCard, onRemoveCard, cartItems, onChangeOpenId } =
    useCart();

  const pageUrl = String(props.cardPageLink);
  const cart = Array.isArray(cartItems) ? cartItems : [];
  const card = cart.find((obj: { id: number }) => obj.id === id) || null;

  const [count, setCount] = useState(card && card.quantity > 0 ? card.quantity : 0);

  const handleAddCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + 1);
    addToCart(props);
  };

  const handleIncreaseCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onPlusCard(Number(id));
    setCount(count + 1);
  };

  const handleDecreaseCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count - 1);
    if (card) {
      if (card.quantity === 1) {
        onRemoveCard(Number(id));
      } else {
        onMinusCard(Number(id));
      }
    }
  };
  console.log({props})
  return (
    <div className={cn(styles.wrapper, styles[view])}>
      {pageUrl ? (
        <Link
          className={styles.link}
          href={`/catalog/${path}/product/${props.link}/`}
          as={`/catalog/${path}/product/${props.link}/`}
          onClick={() => onChangeOpenId(id)}
        >
          <Image
            className={cn(styles.img, styles[view])}
            src={props.image ? 'https://api.royal-equipment.ae' + props.image : noimage}
            width={100}
            height={100}
            alt={text}
          />

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
                {!card && count < 1 ? (
                  <button
                    className={styles.btnAdd}
                    onClick={handleAddCard}
                    aria-label="add to cart"
                  >
                    <span className={styles.spanIncrease}>+</span>
                    <span className={styles.spanAdd}>add to cart</span>
                  </button>
                ) : (
                  <div className={styles.btnIncrease}>
                    <button
                      className={styles.btnCount}
                      onClick={handleDecreaseCount}
                      aria-label="Minus"
                    >
                      -
                    </button>
                    <span className={styles.spanQuantity}>
                      {/* {card.quantity} */}
                      {count}
                    </span>
                    <button
                      className={styles.btnCount}
                      onClick={handleIncreaseCount}
                      aria-label="Plus"
                    >
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
      ) : (
        <Link className={styles.link} href={`/${props.link}/`}>
          <Image
            className={cn(styles.img, styles[view])}
            src={props.image ? 'https://api.royal-equipment.ae' + props.image : noimage}
            width={100}
            height={100}
            alt={text}
          />

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
                {!card || count < 1 ? (
                  <button className={styles.btnAdd} onClick={handleAddCard}>
                    <span className={styles.spanIncrease}>+</span>
                    <span className={styles.spanAdd}>add to cart</span>
                  </button>
                ) : (
                  <div className={styles.btnIncrease}>
                    <button
                      className={styles.btnCount}
                      onClick={handleDecreaseCount}
                      aria-label="Minus"
                    >
                      -
                    </button>
                    <span className={styles.spanQuantity}>{count}</span>
                    <button
                      className={styles.btnCount}
                      onClick={handleIncreaseCount}
                      aria-label="Plus"
                    >
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
      )}
    </div>
  );
};
