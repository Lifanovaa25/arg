'use client';

import Image from 'next/image';
import Title from '@/src/shared/ui/Title/Title';
import { productCartStore } from '@/src/app/providers/Store/config/store';
import { CardProps } from './types';
import cn from 'classnames';
import Trash from '/public/svg/trash.svg';
import test from '/public/images/test.png';
import styles from './Card.module.scss';


export const Card = (props: CardProps) => {
  const { title, price, id, quantity, handleOpenModal,view,image } = props;
  const { onPlusCard, onMinusCard } = productCartStore();

  const handleIncreaceQuantity = () => {
    onPlusCard(id)
  };

  const handleDecreaceQuantity = () => {
    if (quantity === 1) {
      handleOpenModal(id)
    } else {
      onMinusCard(id);
    }

    
  };

 

  return (
    <div className={styles.wrapper}>
      {/* <Image className={styles.img} src={test} alt={title} /> */}
      <Image className={cn(styles.img, styles[view])} src={props.image ? 'https://royal-equipment.ae' + props.image : test} width={100} height={100} alt={title} />

      <div className={styles.content}>
        <div className={styles.manufacturers}>
          <span>Manufacturers: </span>
          <span>{'GRUNDFOS'}</span>
        </div>
        <Title className={styles.title} size="h4" variant="secondary" font="onest">
          {'Junction box Mettler Toledo AJB941M'}
        </Title>

        <div className={styles.bottom}>
          <div className={styles.price}>
            <span>Price: </span>
            <span>{price}</span>
          </div>

          <div className={styles.btnsWrapper}>
            <button className={styles.btn} onClick={handleDecreaceQuantity}>
              -
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button className={styles.btn} onClick={handleIncreaceQuantity}>
              +
            </button>
          </div>
        </div>
      </div>

      <button className={styles.trash} onClick={() => handleOpenModal(id)}>
        <Trash width="19" height="19" color="var(--ash-gray)" />
      </button>
    </div>
  );
};
