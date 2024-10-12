'use client'
// import { CategoriesList } from '../';
import { useEffect, useState } from 'react';
import styles from './AllMiningEquipment.module.scss';
import { getPageProductsItems } from '@/src/app/api/products/productsAPI';
import { usePathname } from 'next/navigation';
import { IPageProductsResponse200 } from '@/src/app/api/products/interfaces';
import { CategoriesList } from './CategoriesList/CategoriesList';
import { CardsList } from './CardsList/CardsList';

interface Product {
  value: {
    category: {
      label: string;
      title: string;
      link: string;
      titleToEnd: boolean;
      items: {
        id: number;
        link: string;
        label: string;
        title: string;
      };
    };
    filters: {
      Name: string;
      Label: string;
      AllItems: string;
      Radio: boolean;
      HideAfter: boolean;
      Ignore: boolean;
      Items: {
        Id: 0;
        Link: string;
        Label: string;
        Title: string;
      };
    };
    items: {
      id: number;
      image: string;
      label: string;
      price: number;
      props: string[][];
      link: string;
      toCart: boolean;
      articul: string;
    }[];
    totalPages: number;
    aboutManufacturer: {
      title: string;
      text: string;
      personImg: string;
      personName: string;
      personPost: string;
    };
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
  const [data, setData] = useState<Product['value'] | null>(null); // Данные из API

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getPageProductsItems({
        Page: 1,
        PageSize: 20,
        PageUrl: pathname,
        Params: [],
        Sort: 1
      });


      if (result) {

        const r: Product = result as unknown as Product;

        setData(r.value);

      }
    };
    if (data === null) {
      fetchData()
    }

    //  setData(item) 

    console.log({ data })

  }, [pathname, data]);
  return (
    <>
      <section>
        <div className="big-container">
          <div className={styles.wrapper}>
            <CategoriesList title={data?.category.label} />
            <CardsList subcategories={data?.items} />
          </div>
        </div>
      </section>
    </>
  );
};
export default AllMiningEquipment
