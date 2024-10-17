import Title from '@/src/shared/ui/Title/Title';
import styles from './CategoriesList.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import Settings from '/public/svg/settings.svg';
import Close from '/public/svg/close.svg';

import { useState } from 'react';
import { LinkListProps, LinksBlock } from './LinksBlock';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useBodyOverflow } from '@/src/shared/lib/hooks/useBodyOverflow/useBodyOverflow';

interface CatListProps {
  title?: string;
  category?: LinkListProps;
  filters?: LinkListProps[];
  id?: number
}

export const CategoriesList = (props: CatListProps) => {
  const { category } = props;
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  if (category !== undefined) {
    category.items?.forEach((item) => {
      item.link = item.link.replace('http://royal-equipment.ae', '');
    });
  }
  useBodyOverflow(isOpenSettings);

  return (

    <div className={cn(styles.wrapper, {
      [styles.menuOpen]: isOpenSettings,
    })}
    >
      {!isOpenSettings &&
        <button className={styles.mobileBtn} onClick={() => setIsOpenSettings(true)} aria-label="">
          <Settings width="16" height="16" color="var(--snow-white)" />
        </button>
      }
      <Title className={styles.title} size="h3" variant="secondary">
        {props.title}
      </Title>
      <div className={styles.links_wrap}>
        <LinksBlock
          key={props.id}
          itemsCount={props.category?.items?.length}
          items={props.category?.items}
        />
        {props.filters !== undefined &&
          props.filters.map((filter, index) => (
            <LinksBlock
              key={index}
              label={filter.label}
              items={filter.items}
              itemsCount={filter.items?.length}
            />
          ))}
      </div>
      <button className={styles.btnClose} onClick={() => setIsOpenSettings(false)} aria-label="Close">
        <Close width="22" height="22" color="var(--black)" />
      </button>
    </div>

  );
};
