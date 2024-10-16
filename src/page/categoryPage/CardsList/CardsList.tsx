import { CategoryCard } from '@/src/widgets/CategoryCard/ui/CategoryCard';
import styles from './CardsList.module.scss';

interface Subcategory {
  name: string;
  url: string;
  image: string;
}

interface CardsListProps {
  subcategories: Subcategory[];
}

export const CardsList = (props: CardsListProps) => {
  const { subcategories } = props;
  return (
    <section>
      <div className="container">
        <div className={styles.line}></div>
        <div className={styles.wrapper}>
          {subcategories.map((item, index) => (
            <CategoryCard key={index} name={item.name} image={item.image} url={item.url} />
          ))}
        </div>
      </div>
    </section>
  );
};
