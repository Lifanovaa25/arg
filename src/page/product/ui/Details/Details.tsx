'use client';

import dynamic from 'next/dynamic';

import { MouseEvent, useEffect, useState } from 'react';
import styles from './Details.module.scss';
import { IProductResponseValue } from '@/src/app/api/products/interfaces';

import Title from '@/src/shared/ui/Title/Title';
import Button from '@/src/shared/ui/Button/Button';
// const ContactModal = dynamic(() => import('../Modal/Modal').then((m) => m.ContactModal));
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';
interface DetailsProps {
  productId: number;
  productDetails: IProductResponseValue | null;
}
export const ProductDetails = (props: DetailsProps) => {
  const { productDetails, productId } = props;

  const { addToCart, onMinusCard, onPlusCard, onRemoveCard, cartItems } = useCart();

  const [card, setCard] = useState(() => {
    if (cartItems && Array.isArray(cartItems)) {
      return cartItems.find((obj: { id: number }) => obj.id === productId) || null;
    }
    return null;
  });
  const [count, setCount] = useState(card && card.quantity > 0 ? card.quantity : 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (card) {
      setCount(Number(card?.quantity));
    }
  }, [card]);
  const handleIncreaseCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onPlusCard(Number(productId));
    setCount(count + 1);
  };
  const handleDecreaseCount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count - 1);
    if (count === 0) {
      onRemoveCard(Number(productId));
    } else {
      onMinusCard(Number(productId));
    }
  };
  const handleAddCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      productDetails?.filters.Manufacturers[0] !== undefined &&
      productDetails?.imageUrl !== undefined
    ) {
      addToCart({
        image: productDetails?.imageUrl,
        manufacturer: productDetails?.filters.Manufacturers[0],
        link: productDetails?.linkUrl,
        view: 'list',
        cardPageLink: productDetails?.linkUrl,
        title: productDetails?.label,
        price: productDetails?.price,
        quantity: 1,
        id: productId,
      });
      setCount(count + 1);
    }
  };

  return (
    <div className={styles.details}>
      <div className={styles.top}>
        <div className={styles.art}>
          Articul :
          <span
            dangerouslySetInnerHTML={{ __html: String(productDetails?.articul) }}
          ></span>
        </div>
        <div className={styles.art}>
          Manufacturers:
          <span
            dangerouslySetInnerHTML={{
              __html: String(productDetails?.filters.Manufacturers[0]),
            }}
          ></span>
        </div>
      </div>
      <div className={styles.title}>
        <Title size="h1" variant="secondary">
          {productDetails?.label}
        </Title>
        <div className={styles.line}></div>
      </div>
      <div className={styles.middle}>
        <div className={styles.point}>
          <h5 className={styles.point_title}>Characteristics</h5>
          <div
            className={styles.point_info}
            dangerouslySetInnerHTML={{
              __html:
                productDetails?.characteristics !== undefined
                  ? productDetails?.characteristics
                  : '',
            }}
          ></div>
        </div>
        <div className={styles.point}>
          <h5 className={styles.point_title}>Country</h5>
          <div className={styles.point_info}>
            <div className={styles.point_line}>{productDetails?.country}</div>
          </div>
        </div>
      </div>
      <div className={styles.price}>
        Price:
        <span>{productDetails?.price}</span>
      </div>
      <div className={styles.btn_block}>
        {!card && count < 1 ? (
          <Button
            variant="golden"
            className={styles.btn}
            aria-label="Add to cart"
            //@ts-ignore
            onClick={handleAddCard}
          >
            <span>Add to cart</span>
          </Button>
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
              {count}
              {/* {card.quantity} */}
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

        <Button
          className={styles.btn}
          variant="outline"
          aria-label="Request a quote"
          onClick={() => setIsModalOpen(true)}
        >
          Request a quote
        </Button>
      </div>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html:
            productDetails?.productDescription !== undefined
              ? productDetails?.productDescription
              : '',
        }}
      ></div>

      {/* <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
    </div>
  );
};
