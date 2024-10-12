'use client'
// import { CategoriesList } from '../';
import { useEffect, useState } from 'react';
import styles from './AllMiningEquipment.module.scss';
import { getPageProductsItems } from '@/src/app/api/products/productsAPI';
import { usePathname } from 'next/navigation';
import { IPageProductsResponse200 } from '@/src/app/api/products/interfaces';
import { CategoriesList } from './CategoriesList/CategoriesList';
import { CardsList } from '../CardsList/CardsList';

interface Product {
  Category: {
    Label: string;
    Title: string;
    Link: string;
    TitleToEnd: boolean;
    Items: {
      Id: number;
      Link: string;
      Label: string;
      Title: string;
    }[];
  };
}
interface ICard {
 
      Id: number;
      Link: string;
      Label: string;
      Title: string;
  
   
}
const AllMiningEquipment: React.FC = () => {
  const pathname = usePathname(); // Получаем путь
  const [data, setData] = useState<IPageProductsResponse200['Value'] | null>(null); // Данные из API

  const fetchData = async (): Promise<void> => {
    const result = await getPageProductsItems({
      Page: 1,
      PageSize: 20,
      PageUrl: pathname,
      Params: [],
      Sort: 1
    });

    if (result) {

      const r: IPageProductsResponse200 = result as IPageProductsResponse200;
      //@ts-ignore
      setData(r.Value.Category);
      console.log(r.Value)
      console.log({ data })

      // setLoading(false); // Выключаем состояние загрузки

    }
  };
  useEffect(() => {
let item = fetchData()
  //  setData(item) 
    console.log(1)
    console.log(data?.Category.Label)

  }, []);
  return (
    <>
      <section>
        <div className="big-container">
          <div className={styles.wrapper}>
            {data?.TotalPages}
            <CategoriesList title={data?.Category.Label} />
            {/* <CardsList subcategories={data?.Items} /> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default AllMiningEquipment
