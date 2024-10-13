'use client';
import { MouseEvent } from 'react';
import { productCartStore } from '@/src/app/providers/Store/config/store';

import Image from 'next/image';
import styles from './Product.module.scss';
import { getProduct } from '@/src/app/api/products/productsAPI';
import {
  IProductResponse200,
} from '@/src/app/api/products/interfaces';
import { useEffect, useState } from 'react';
import test from '/public/images/test.png';
import { ProductDetails } from '../Details/Details';

export const Product = () => {
  const { productUrl } = productCartStore();
  const [data, setData] = useState<IProductResponse200['value'] | null>(null); // Данные из API
  const { cart, onAddCard, onPlusCard, onRemoveCard, onMinusCard } = productCartStore();
  const words = productUrl.split('/');
  const prodId = Number(words[words.length - 1]);
  let last_product_id = localStorage.getItem('lastProductId');
  if (last_product_id === null) {
    last_product_id = '-1';
  }
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getProduct({ id: Number.parseInt(last_product_id) });
      if (result) {
        const r: IProductResponse200 = result as unknown as IProductResponse200;
        setData(r.value);
      }
    };
    if (data === null) {
      fetchData();
    }
  }, [data]);

 
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.image_block}>
            {/* <Image src={data?.ImageUrl ? `'https://royal-equipment.ae' +${data?.ImageUrl}`} className={styles.img} alt="" /> */}
            <Image
              className={styles.img}
              src={
                data?.imageUrl !== undefined
                  ? `https://royal-equipment.ae${data?.imageUrl}`
                  : test
              }
              width={100}
              height={100}
              alt=""
            />
          </div>
          {/* <Details label={data?.Label} /> */}
          <ProductDetails productId={Number.parseInt(last_product_id)} productDetails={data} />
        </div>
      </div>
    </section>
  );
};
