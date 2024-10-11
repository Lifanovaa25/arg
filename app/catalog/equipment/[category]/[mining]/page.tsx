// import { CategoriesList } from '../';
import { CardsList } from '../CardsList/CardsList';
import styles from './AllMiningEquipment.module.scss';


const AllMiningEquipment: React.FC = () => {

  return (
    <>
      <section>
        <div className="big-container">
          <div className={styles.wrapper}>
            {/* <CategoriesList /> */}
            <CardsList subcategories={[]} />
          </div>
        </div>
      </section>
    </>
  );
};
export default AllMiningEquipment
