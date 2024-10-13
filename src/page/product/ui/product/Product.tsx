'use client'
import { productCartStore } from '@/src/app/providers/Store/config/store';
import { Details } from '../Details/Details';
import { Order } from '../Order/Order';
import styles from './Product.module.scss';

export const Product = () => {
const {productUrl} = productCartStore()
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
      

       {productUrl}
        </div>
      </div>
    </section>
  );
};
