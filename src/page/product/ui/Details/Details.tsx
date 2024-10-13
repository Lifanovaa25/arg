'use client'
import { MouseEvent } from 'react';
import { productCartStore } from '@/src/app/providers/Store/config/store';

import Image from 'next/image';
import styles from './Details.module.scss';
import { getProduct } from '@/src/app/api/products/productsAPI';
import { IPageProductsResponse200, IProductResponse200 } from '@/src/app/api/products/interfaces';
import { useEffect, useState } from 'react';
import Title from '@/src/shared/ui/Title/Title';
import test from '/public/images/test.png';
import Button from '@/src/shared/ui/Button/Button';
interface DetailsProps {

}
export const ProductDetails = (props:DetailsProps) => {
  const { productUrl } = productCartStore()
  const [data, setData] = useState<IProductResponse200['Value'] | null>(null); // Данные из API
  const { cart, onAddCard, onPlusCard, onRemoveCard, onMinusCard } = productCartStore();
  const words = productUrl.split('/');
  const prodId = Number(words[words.length - 1])


  const handleAddCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // onAddCard({p});
  };
  return (
 
          <div className={styles.details}>
            <div className={styles.top}>
              <div className={styles.art}>Articul : KA-00000920</div>
              <div className={styles.art}>Manufacturers: GRUNDFOS</div>
            </div>
            <div className={styles.title}>
              <Title size="h1" variant="secondary">
                {data?.Label} test
              </Title>
              <div className={styles.line}></div>
            </div>
            <div className={styles.middle}>
              <div className={styles.point}>
                <h5 className={styles.point_title}>Characteristics</h5>
                <div className={styles.point_info}>
                  <div className={styles.point_line}>Max head: 1 m</div>
                  <div className={styles.point_line}> Max.flow rate: 0.50 m³/h</div>
                  <div className={styles.point_line}>  Maximum pressure: 10 bar</div>
                  <div className={styles.point_line}>Liquid temperature: 0 .. 95 °C</div>
                </div>

              </div>
              <div className={styles.point}>
                <h5 className={styles.point_title}>Country</h5>
                <div className={styles.point_info}>
                  <div className={styles.point_line}>Denmark</div>
                </div>
              </div>
            </div>
            <div className={styles.price}>Price:
              <span>From 0 € </span>
            </div>
            <div className={styles.btn_block}>

              <Button variant="golden" className={styles.btn}
                // onClick={handleAddCard}
              >
                <span>Add to cart</span>
              </Button>
              <Button className={styles.btn} variant="outline">
                Request a quote
              </Button>
            </div>
            <div className={styles.description}>
              Highly efficient, silent COMFORT DIGITAL TIMER pumps provide hot water recirculation in private houses and apartments.
              Thanks to the timing function, the period of operation of the pump can be manually set, which will optimize energy costs.
              The pump is made of corrosion-resistant brass.
              Continuous operation. Easy cleaning.
            </div>
          </div>
       
  );
};
