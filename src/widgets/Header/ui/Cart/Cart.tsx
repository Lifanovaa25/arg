'use client';


import Link from 'next/link';
import cn from 'classnames';
import Button from '@/src/shared/ui/Button/Button';
import { getTotalQuantityCards } from '@/src/shared/lib/utils/getTotalQuantityCards/getTotalQuantityCards';
import { CartProps } from './types';
import Bag from '/public/svg/bag.svg';
import styles from './Cart.module.scss';
import { useEffect, useState } from 'react';
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';

export const Cart = (props: CartProps) => {
  const { isCatalogRoute, isScrolledFar } = props;
  const { totalQuantity, cartItems} = useCart();
  const totalCartQuantity = totalQuantity();

  return (
    <Link className={styles.cart} href="/cart">
      <Button className={styles.cartButton}  aria-label="Cart">
        
        <Bag width="16" height="16" color="var(--white)" />
        <div className={styles.mobileCount}>{totalCartQuantity}</div>
        <div className={styles.mobileCount}>{totalCartQuantity}</div>
      </Button>
      <div className={styles.wrapper}>
        <span
          className={cn(styles.count, {
            [styles.gold]: isCatalogRoute,
            [styles.gray]: !isCatalogRoute || (isCatalogRoute && isScrolledFar),
          })}
        >
        {totalCartQuantity}
        </span>
        <span
          className={cn(styles.text, {
            [styles.white]: isCatalogRoute,
            [styles.gray]: !isCatalogRoute || (isCatalogRoute && isScrolledFar),
          })}
        >
          Product&rsquo;s on bag
        </span>
      </div>
    </Link>
  );
};
