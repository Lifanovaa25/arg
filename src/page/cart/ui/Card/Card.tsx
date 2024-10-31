'use client';

import Image from 'next/image';
import Title from '@/src/shared/ui/Title/Title';
import { CardProps } from './types';
import cn from 'classnames';
import Trash from '/public/svg/trash.svg';
import noimage from '/public/images/no-image.png';
import styles from './Card.module.scss';
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';
import { useState } from 'react';
import Link from 'next/link';

export const Card = (props: CardProps) => {
  const { title, price, id, quantity, handleOpenModal, view, image, manufacturer } = props;
  const { onChangeOpenId, onMinusCard, onPlusCard, onRemoveCard, cartItems } = useCart()
  const [count, setCount] = useState(quantity)



  const handleIncreaceQuantity = () => {
    onPlusCard(Number(id))
    setCount(count + 1)
  };
  const handleDecreaceQuantity = () => {
    setCount(count - 1)

    if (count === 1) {
      handleOpenModal(Number(id))
    } else {
      onMinusCard(Number(id));
    }
  };

console.log(props)
console.log({props})


  return (
       <Link
      className={styles.link}
      href={`${props.link}`}
      as={`${props.link}`}
      onClick={() => onChangeOpenId(props.id)}
    >
     
    <div className={styles.wrapper}>
      <Image className={cn(styles.img, styles[view])} src={props.image ? 'https://api.royal-equipment.ae' + props.image : noimage} width={100} height={100} alt={title} />

      <div className={styles.content}>
        <div className={styles.manufacturers}>
          <span>Manufacturers: </span>
          <span>{manufacturer}</span>
        </div>
        <Title className={styles.title} size="h4" variant="secondary" font="onest">
          {title}
        </Title>

        <div className={styles.bottom}>
          <div className={styles.price}>
            <span>Price: </span>
            <span>{price}</span>
          </div>

          <div className={styles.btnsWrapper}>
            <button className={styles.btn} onClick={handleDecreaceQuantity}
              aria-label="Minus">
              -
            </button>
            <span className={styles.quantity}>{count}</span>
            <button className={styles.btn} onClick={handleIncreaceQuantity}
              aria-label="Plus">
              +
            </button>
          </div>
        </div>
      </div>

      <button className={styles.trash} onClick={() => handleOpenModal(Number(id))}
        aria-label="Delete">
        <Trash width="19" height="19" color="var(--ash-gray)" />
      </button>
    </div>
    </Link>
  );
};