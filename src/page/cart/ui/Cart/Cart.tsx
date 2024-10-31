'use client'
import dynamic from "next/dynamic";
const Details = dynamic(() => import('../Details/Details').then((m) => m.Details))
const Order = dynamic(() => import('../Order/Order').then((m) => m.Order))
import styles from './Cart.module.scss';

export const Cart = () => {

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
