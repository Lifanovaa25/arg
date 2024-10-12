'use client'
import { productCartStore } from '@/src/app/providers/Store/config/store';
import { Details } from '../Details/Details';
import { Order } from '../Order/Order';
import styles from './Cart.module.scss';

export const Cart = () => {
  const { getCartIds } = productCartStore();
  const Ids = getCartIds()
  console.log(Ids)

  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <Details />

          <Order />
        </div>
      </div>
    </section>
  );
};
