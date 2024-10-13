import Title from '@/src/shared/ui/Title/Title';
import styles from './CategoriesList.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { useState } from 'react';
import { LinksBlock } from './LinksBlock';


interface CatListProps {
  title: string | undefined;
}

const arr = [
  { title: 'title 1', href: '/', id: 1 },
  { title: 'title 2', href: '/', id: 2 },
  { title: 'title 3', href: '/', id: 3 },
  { title: 'title 4', href: '/', id: 4 },
  { title: 'title 5', href: '/', id: 5 },
  { title: 'title 6', href: '/', id: 6 },
];
export const CategoriesList = (props: CatListProps) => {
  const [activeTab, setActiveTab] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Title className={styles.title} size="h3" variant="secondary">
        {props.title}
      </Title>
      <div className={styles.links}>

        <LinksBlock />
        <LinksBlock title='Manufacturers' />
      </div>
    </div>
  );
};
