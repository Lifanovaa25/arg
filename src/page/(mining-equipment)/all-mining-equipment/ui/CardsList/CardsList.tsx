'use client';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import { ProductCard } from '@/src/widgets/ProductCard/ui/ProductCard';
import { checkMobileScreen } from '@/src/shared/lib/utils/checkMobileScreen/checkMobileScreen';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import Settings from '/public/svg/settings.svg';
import styles from './CardsList.module.scss';
import './Select.scss';

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
  { value: 'popularity', label: 'Popularity' },
  { value: 'cheaper', label: 'Price: cheaper' },
  { value: 'expensive', label: 'Price: expensive' },
];

//TODO: с этой компонентой еще подумать и думаю ее нужно сделать переиспользуемой для других страниц, а их будет много
export const CardsList = () => {
  const [view, setView] = useState(views[1].value);
  const [sort, setSort] = useState(sorts[0].value);
  const [isOpenSettings, setIsOpenSettings] = useState(false);

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
        {arr.map((item) => (
          <ProductCard
            image={''}
            manufacturer={''}
            link={''}
            key={item.id} {...item}
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
