import { CategoryCard } from '@/src/widgets/CategoryCard/ui/CategoryCard';
import styles from './CardsList.module.scss';

export const CardsList = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.line}></div>

        <div className={styles.wrapper}>
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};
