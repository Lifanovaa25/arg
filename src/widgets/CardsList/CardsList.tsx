'use client';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import { ProductCard } from '@/src/widgets/ProductCard/ui/ProductCard';
import { checkMobileScreen } from '@/src/shared/lib/utils/checkMobileScreen/checkMobileScreen';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import Settings from '/public/svg/settings.svg';
import styles from './CardsList.module.scss';
import './Select.scss';
import { usePathname } from 'next/navigation';
import {  productCartStore } from '@/src/app/providers/Store/config/store';

//TODO: убрать
const arr = [
  { title: 'title 1', price: '100', id: 1 },
  { title: 'title 2', price: '200', id: 2 },
  { title: 'title 3', price: 'on request', id: 3 },
  { title: 'title 4', price: '150', id: 4 },
  { title: 'title 5', price: '250', id: 5 },
  { title: 'title 6', price: 'on request', id: 6 },
];

const views: { value: 'list' | 'grid'; label: string }[] = [
  { value: 'list', label: 'List' },
  { value: 'grid', label: 'Grid' },
];
const sorts: { value: string; label: string }[] = [
  { value: '0', label: 'Popularity' },
  { value: '1', label: 'Price: cheaper' },
  { value: '2', label: 'Price: expensive' },
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
  subcategories: {
    id: number;
    image: string;
    label: string;
    price: number;
    props: string[][];
    link: string;
    toCart: boolean;
    articul: string;
  }[] | undefined;

}

export const CardsList = (props: CardsListProps) => {
  const pathname = usePathname()
  const [view, setView] = useState(views[1].value);
  const [sort, setSort] = useState(sorts[0].value);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
 
   const { subcategories } = props;

  useEffect(() => {
    const isMobile = checkMobileScreen();
    if (isMobile) setView('list');
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectsWrapper}>
        <button className={styles.mobileBtn} onClick={() => setIsOpenSettings(true)}>
          <Settings width="16" height="16" color="var(--snow-white)" />
        </button>

        <div className={styles.selectWrapper}>
          <span className={styles.span}>Sort</span>
          <Select
            defaultValue={sorts[0]}
            onChange={(e) => setSort(e?.value ?? '')}
            options={sorts}
            isSearchable={false}
            classNamePrefix="select"
          />
        </div>

        <div className={styles.selectWrapper}>
          <span className={styles.span}>View</span>
          <Select
            defaultValue={views[1]}
            onChange={(e) => setView(e?.value ?? 'list')}
            options={views}
            isSearchable={false}
            classNamePrefix="select"
          />
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.list}>

        {subcategories?.map((item) => (

          <ProductCard
            //@ts-ignore
            image={item.image}
            manufacturer={item.label}
            //@ts-ignore
            link={item.link}
            cardPageLink={pathname}
            title={item.label}
            key={item.id}
            {...item}
            view={view} />
        ))}
      </div>

      <MobileMenu
        isOpenSettings={isOpenSettings}
        setIsOpenSettings={setIsOpenSettings}
        links={[]}
      />
    </div>
  );
};
