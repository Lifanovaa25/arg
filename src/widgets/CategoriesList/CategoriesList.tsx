import Title from '@/src/shared/ui/Title/Title';
import styles from './CategoriesList.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { useState } from 'react';
import { LinkListProps, LinksBlock } from './LinksBlock';

interface CatListProps {
  title?: string;
  category?: LinkListProps;
  filters?: LinkListProps[];
  id?:number
}

export const CategoriesList = (props: CatListProps) => {
  const { category } = props;
  const [activeTab, setActiveTab] = useState('');
  const [visible, setVisible] = useState(false);
  if (category !== undefined) {
    category.items?.forEach((item) => {
      item.link = item.link.replace('http://royal-equipment.ae', '');
    });
  }

  return (
    <div className={styles.wrapper}>
      <Title className={styles.title} size="h3" variant="secondary">
        {props.title}
      </Title>
      <div className={styles.links}>
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
    </div>
  );
};
