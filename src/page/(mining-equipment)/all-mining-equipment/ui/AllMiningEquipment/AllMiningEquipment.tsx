import { CategoriesList } from '../CategoriesList/CategoriesList';
import { CardsList } from '../CardsList/CardsList';
import styles from './AllMiningEquipment.module.scss';

export const AllMiningEquipment = () => {
  return (
    <>
      <section>
        <div className="big-container">
          <div className={styles.wrapper}>
            <CategoriesList />
            <CardsList />
          </div>
        </div>
      </section>
    </>
  );
};
