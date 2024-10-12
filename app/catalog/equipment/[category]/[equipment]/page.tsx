'use client'
// import { CategoriesList } from '../';
import { useEffect, useState } from 'react';
import styles from './AllMiningEquipment.module.scss';
import { getPageProductsItems } from '@/src/app/api/products/productsAPI';
import { usePathname } from 'next/navigation';
import { IPageProductsResponse200 } from '@/src/app/api/products/interfaces';
import { CategoriesList } from './CategoriesList/CategoriesList';
import { CardsList } from './CardsList/CardsList';


const AllMiningEquipment: React.FC = () => {
  const pathname = usePathname(); // Получаем путь
  const [data, setData] = useState<IPageProductsResponse200['Value'] | null>(null); // Данные из API

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getPageProductsItems({ Page:1,
        PageSize:20,
        PageUrl: pathname,
        Params: [],
        Sort:1  });

      if (result) {

        const r: IPageProductsResponse200 = result as IPageProductsResponse200;
        setData(r.Value);
        // setLoading(false); // Выключаем состояние загрузки

      }
    };

    fetchData();
    console.log({data})
console.log(pathname)

  }, []);
  return (
    <>
      <section>
        <div className="big-container">
          <div className={styles.wrapper}>
            <CategoriesList />
            <CardsList  />
            {/* <CardsList subcategories={[]} /> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default AllMiningEquipment
