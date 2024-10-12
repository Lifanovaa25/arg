import Title from '@/src/shared/ui/Title/Title';
import styles from './CategoriesList.module.scss';
import { title } from 'process';

interface CatListProps {
  title: string | undefined;
}


export const CategoriesList = (props: CatListProps) => {
  return (
    <div className={styles.wrapper}>
      <Title className={styles.title} size="h3" variant="secondary">
        {props.title}
      </Title>
    </div>
  );
};
