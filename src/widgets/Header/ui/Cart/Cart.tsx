import Link from 'next/link';
import cn from 'classnames';
import Button from '@/src/shared/ui/Button/Button';
import { useAppSelector } from '@/src/shared/lib/hooks/store/useStore';
import { getTotalQuantityCards } from '@/src/shared/lib/utils/getTotalQuantityCards/getTotalQuantityCards';
import { CartProps } from './types';
import Bag from '/public/svg/bag.svg';
import styles from './Cart.module.scss';

export const Cart = (props: CartProps) => {
  const { isCatalogRoute, isScrolledFar } = props;

  const cart = useAppSelector(({ cart }) => cart.cart);

  return (
    <Link className={styles.cart} href="/cart">
      <Button className={styles.cartButton}>
        <Bag width="16" height="16" color="var(--white)" />
        <div className={styles.mobileCount}>{getTotalQuantityCards(cart)}</div>
      </Button>
      <div className={styles.wrapper}>
        <span
          className={cn(styles.count, {
            [styles.gold]: isCatalogRoute,
            [styles.gray]: !isCatalogRoute || (isCatalogRoute && isScrolledFar),
          })}
        >
          {getTotalQuantityCards(cart)}
        </span>
        <span
          className={cn(styles.text, {
            [styles.white]: isCatalogRoute,
            [styles.gray]: !isCatalogRoute || (isCatalogRoute && isScrolledFar),
          })}
        >
          Product’s on bag
        </span>
      </div>
    </Link>
  );
};
