'use client'
import { MouseEvent } from 'react';
import { productCartStore } from '@/src/app/providers/Store/config/store';

import styles from './Details.module.scss';
import {IProductResponseValue } from '@/src/app/api/products/interfaces';

import Title from '@/src/shared/ui/Title/Title';
import test from '/public/images/test.png';
import Button from '@/src/shared/ui/Button/Button';
import { log } from 'console';
import { toast } from 'react-toastify';
import { showToast } from '@/src/shared/ui/Toast/Toast';
interface DetailsProps {
  productId: number;
  productDetails: IProductResponseValue | null;
}
export const ProductDetails = (props:DetailsProps) => {
  const {productDetails} = props;
  const { productUrl } = productCartStore()
  const { cart, onAddCard, onPlusCard, onRemoveCard, onMinusCard } = productCartStore();
  const words = productUrl.split('/');
  const prodId = Number(words[words.length - 1])

  const handleAddCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(
      productDetails?.filters.Manufacturers[0] !== undefined 
      && 
      productDetails?.imageUrl !== undefined
    ){
      onAddCard({image:productDetails?.imageUrl,manufacturer:productDetails?.filters.Manufacturers[0], link:productDetails?.linkUrl, view:"list", cardPageLink:productDetails?.linkUrl,title:productDetails?.label, price:productDetails?.price, id:props.productId, quantity:1});
     
    }
  };
  return (
 
          <div className={styles.details}>
            <div className={styles.top}>
              <div className={styles.art}>Articul : 
                <span dangerouslySetInnerHTML={{ __html: String(productDetails?.articul) }}></span>
                </div>
              <div className={styles.art}>Manufacturers: 
              <span dangerouslySetInnerHTML={{ __html: String(productDetails?.filters.Manufacturers[0]) }}></span>
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
                <div className={styles.point_info} dangerouslySetInnerHTML={{ __html: productDetails?.characteristics!==undefined ? productDetails?.characteristics : ""}}>
                </div>

              </div>
              <div className={styles.point}>
                <h5 className={styles.point_title}>Country</h5>
                <div className={styles.point_info}>
                  <div className={styles.point_line}>{productDetails?.country}</div>
                </div>
              </div>
            </div>
            <div className={styles.price}>Price:
              <span>{productDetails?.price}</span>
            </div>
            <div className={styles.btn_block}>

              <Button variant="golden" className={styles.btn}
              //@ts-ignore
                onClick={handleAddCard}
              >
                <span>Add to cart</span>
              </Button>
              <Button className={styles.btn} variant="outline">
                Request a quote
              </Button>
            </div>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: productDetails?.productDescription!==undefined ? productDetails?.productDescription : ""}}>
            </div>
          </div>
       
  );
};
