'use client';

import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), {
  ssr: false,
});
import { useState, useEffect } from 'react';
import { ProductCard } from '@/src/widgets/ProductCard/ui/ProductCard';
import { checkMobileScreen } from '@/src/shared/lib/utils/checkMobileScreen/checkMobileScreen';
import styles from './CardsList.module.scss';
import './Select.scss';
import { usePathname } from 'next/navigation';
import { LinkListProps } from '../CategoriesList/LinksBlock';
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';
import { useId } from 'react';

const views: { value: 'list' | 'grid'; label: string }[] = [
  { value: 'list', label: 'List' },
  { value: 'grid', label: 'Grid' },
];
const sorts: { value: number; label: string }[] = [
  { value: 0, label: 'Popularity' },
  { value: 1, label: 'Price: cheaper' },
  { value: 2, label: 'Price: expensive' },
  { value: 3, label: 'Alphabetically: from the beginning' },
  { value: 4, label: 'Alphabetically: from the end' },
];

interface Subcategory {
  id: number;
  image: string;
  label: string;
  price: number;
  props: string[][];
  link: string;
  toCart: boolean;
  articul: string;
}

interface CardsListProps {
  subcategories:
    | {
        id: number;
        image: string;
        label: string;
        price: number;
        props: string[][];
        link: string;
        toCart: boolean;
        articul: string;
      }[]
    | undefined;
  title?: string;
  category?: LinkListProps;
  filters?: LinkListProps[];
  id?: number;
}

export const CardsList = (props: CardsListProps) => {
  const pathname = usePathname();
  const [view, setView] = useState(views[1].value);
  const { onChangeSort, sort } = useCart();
  const { subcategories } = props;

  const handleChangeSort = (e: unknown) => {
    try {
      const casted = e as { label: string; value: number };
      onChangeSort(Number(casted.value));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeView = (e: unknown) => {
    try {
      const casted = e as { label: string; value: 'list' | 'grid' };
      setView(casted.value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const isMobile = checkMobileScreen();
    if (isMobile) setView('list');
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectsWrapper}>
        <div className={styles.selectWrapper}>
          <span className={styles.span}>Sort</span>
          <Select
            instanceId={useId()}
            defaultValue={sorts[sort]}
            onChange={handleChangeSort}
            options={sorts}
            isSearchable={false}
            classNamePrefix="select"
          />
        </div>

        <div className={styles.selectWrapper}>
          <span className={styles.span}>View</span>
          <Select
            instanceId={useId()}
            defaultValue={views[1]}
            onChange={handleChangeView}
            options={views}
            isSearchable={false}
            classNamePrefix="select"
          />
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.list}>
        {Number(subcategories?.length) < 1 && (
          <div className={styles.nothing}>
            There are no products with the specified parameters yet
          </div>
        )}
        {subcategories?.map((item) => { 
          return <ProductCard
          quantity={0}
          //@ts-ignore
          image={item.image}
          manufacturer={item.label}
          //@ts-ignore
          link={item.link}
          cardPageLink={pathname}
          title={item.label}
          key={item.id}
          {...item}
          view={view}
        />
        })}
      </div>
    </div>
  );
};
