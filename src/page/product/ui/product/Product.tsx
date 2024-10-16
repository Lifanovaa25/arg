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
import { Loading } from '@/src/widgets/Loading';
import { usePathname } from 'next/navigation';
import DynamicSeoHeader from '@/src/widgets/dinamicSeoHeader';

export const Product = () => {
  const pathname = usePathname()
  const { productUrl } = productCartStore();
  const [loading, setLoading] = useState<boolean>(true); // Статус загрузки
  const [data, setData] = useState<IProductResponse200['value'] | null>(null); // Данные из API
  const [slug, setSlug] = useState(pathname.replace('/catalog/equipment/product', '').replace('/catalog/industry/product', ''))
  
  const [SeoTitle, setSeoTitle] = useState('')
  const [SeoDescription, setSeoDescription] = useState('')
 

  let last_product_id = localStorage.getItem('lastProductId');
  if (last_product_id === null) {
    last_product_id = '-1';
  }



  useEffect(() => {
    if (pathname.includes('/catalog/equipment/product')) {
      setSlug(pathname.replace('/catalog/equipment/product', ''))

    } else {
      setSlug(pathname.replace('/catalog/industry/product', ''))

    }
    const fetchData = async (): Promise<void> => {
      const result = await getProduct({
        Slug: slug,
      });
      if (result) {
        const r: IProductResponse200 = result as unknown as IProductResponse200;
        setData(r.value);
        setLoading(false)
        setSeoTitle(r.value.seoTitle)
        setSeoDescription(r.value.seoDescription)
      }
    };
    if (data === null) {
      setLoading(true)
      fetchData();

    }
    if (data) { setLoading(false) }
  }, [data, last_product_id]);


  return (
    <>
    <DynamicSeoHeader title={SeoTitle} description={SeoDescription}/>
    <section>
      {loading && <Loading />}

      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.image_block}>
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
    </>
  );
};
