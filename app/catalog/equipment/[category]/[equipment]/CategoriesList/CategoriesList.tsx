import Title from '@/src/shared/ui/Title/Title';
import styles from './CategoriesList.module.scss';

//TODO: доделать как будет готов бек, и с этой компонентой еще подумать и думаю ее нужно сделать переиспользуемой для других страниц, а их будет много
export const CategoriesList = () => {
  return (
    <div className={styles.wrapper}>
      <Title className={styles.title} size="h3" variant="secondary">
        All Mining Equipment
      </Title>
    </div>
  );
};
