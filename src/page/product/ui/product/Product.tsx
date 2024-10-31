'use client';

import Image from 'next/image';
import styles from './Product.module.scss';
import { getProduct } from '@/src/app/api/products/productsAPI';
import {
  IProductResponse200,
} from '@/src/app/api/products/interfaces';
import { useEffect, useState } from 'react';
import noimage from '/public/images/no-image.png';
import { ProductDetails } from '../Details/Details';
import { Loading } from '@/src/widgets/Loading';
import { usePathname } from 'next/navigation';
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';


export const Product = () => {
  const pathname = usePathname()
  const [loading, setLoading] = useState<boolean>(true); // Статус загрузки
  const [data, setData] = useState<IProductResponse200['value'] | null>(null); // Данные из API
  const [slug, setSlug] = useState(pathname.replace('/catalog/equipment/product', '').replace('/catalog/industry/product', ''))

  const { openId } = useCart()
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
      }
    };
    if (data === null) {
      setLoading(true)
      fetchData();
    }
    if (data) { setLoading(false) }
  }, [data, pathname, slug]);


  return (
    <section>
      {loading && <Loading />}

      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.image_block}>
            <Image
              className={styles.img}
              src={
                data?.imageUrl !== undefined
                  ? `https://api.royal-equipment.ae${data?.imageUrl}`
                  : noimage
              }
              width={100}
              height={100}
              alt=""
            />
          </div>
          <ProductDetails productId={openId} productDetails={data} />

        </div>
      </div>
    </section>

  );
};
