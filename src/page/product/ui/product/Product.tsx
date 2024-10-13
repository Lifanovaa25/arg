'use client'
import { MouseEvent } from 'react';
import { productCartStore } from '@/src/app/providers/Store/config/store';
import { Order } from '../Order/Order';
import Image from 'next/image';
import styles from './Product.module.scss';
import { getProduct } from '@/src/app/api/products/productsAPI';
import { IPageProductsResponse200, IProductResponse200 } from '@/src/app/api/products/interfaces';
import { useEffect, useState } from 'react';
import Title from '@/src/shared/ui/Title/Title';
import test from '/public/images/test.png';
import Button from '@/src/shared/ui/Button/Button';
import { ProductDetails } from '../Details/Details';

export const Product = () => {
  const { productUrl } = productCartStore()
  const [data, setData] = useState<IProductResponse200['Value'] | null>(null); // Данные из API
  const { cart, onAddCard, onPlusCard, onRemoveCard, onMinusCard } = productCartStore();
  const words = productUrl.split('/');
  const prodId = Number(words[words.length - 1])
  useEffect(() => {

    const fetchData = async (): Promise<void> => {
      const result = await getProduct({ id: Number(words[words.length - 1]) });
      if (result) {
        const r: IProductResponse200 = result as unknown as IProductResponse200;
        setData(r.Value);

      }
    };
    if (data === null) {
      fetchData()
    }
    console.log(1)
    console.log({data})
  }, [data]);

  const handleAddCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // onAddCard({p});
  };
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.image_block}>
            {/* <Image src={data?.ImageUrl ? `'https://royal-equipment.ae' +${data?.ImageUrl}`} className={styles.img} alt="" /> */}
            <Image className={styles.img} src={
              // !data?.ImageUrl ? {`https://royal-equipment.ae/${data?.ImageUrl}`} : 
              test} alt="" />
          </div>
          {/* <Details label={data?.Label} /> */}
         <ProductDetails/>
        </div>
      </div>
    </section>
  );
};
