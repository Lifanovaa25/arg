'use client'
import { productCartStore } from '@/src/app/providers/Store/config/store';
import { Details } from '../Details/Details';
import { Order } from '../Order/Order';
import Image from 'next/image';
import styles from './Product.module.scss';
import { getProduct } from '@/src/app/api/products/productsAPI';
import { IPageProductsResponse200, IProductResponse200 } from '@/src/app/api/products/interfaces';
import { useEffect, useState } from 'react';
import Title from '@/src/shared/ui/Title/Title';

export const Product = () => {
  const { productUrl } = productCartStore()
  const [data, setData] = useState<IProductResponse200['Value'] | null>(null); // Данные из API

  useEffect(() => {
    const words = productUrl.split('/');
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
  }, [data]);
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.image_block}>
            {/* <Image src={data.ImageUrl} className={styles.img} alt="" /> */}

            {/* <Details label={data?.Label} /> */}
{data?.Country}
            <div className={styles.wrapper}>
              <div className={styles.top}>
                {data?.Analogue}
                <Title size="h1" variant="secondary">
                  {data?.Label} test
                </Title>

              </div>







            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
