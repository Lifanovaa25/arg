import Image from 'next/image';
import { onPlusCard, onMinusCard } from '@/src/widgets/ProductCard/model/slice';
import Title from '@/src/shared/ui/Title/Title';
import { useAppDispatch } from '@/src/shared/lib/hooks/store/useStore';
import { CardProps } from './types';
import Trash from '/public/svg/trash.svg';
import test from '/public/images/test.png';
import styles from './Card.module.scss';

//TODO: долелать когда будет готов бек
export const Card = (props: CardProps) => {
  const { title, price, id, quantity, handleOpenModal } = props;

  const dispatch = useAppDispatch();

  const handleIncreaceQuantity = () => {
    dispatch(onPlusCard(id));
  };

  const handleDecreaceQuantity = () => {
    if (quantity === 1) return;

    dispatch(onMinusCard(id));
  };

  return (
    <div className={styles.wrapper}>
      <Image className={styles.img} src={test} alt={title} />

      <div className={styles.content}>
        <div className={styles.manufacturers}>
          <span>Manufacturers: </span>
          <span>{'GRUNDFOS'}</span>
        </div>
        <Title className={styles.title} size="h4" variant="secondary" font="onest">
          {'Junction box Mettler Toledo AJB941M'}
        </Title>

        <div className={styles.bottom}>
          <div className={styles.price}>
            <span>Price: </span>
            <span>{price}</span>
          </div>

          <div className={styles.btnsWrapper}>
            <button className={styles.btn} onClick={handleDecreaceQuantity}>
              -
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button className={styles.btn} onClick={handleIncreaceQuantity}>
              +
            </button>
          </div>
        </div>
      </div>

      <button className={styles.trash} onClick={() => handleOpenModal(id)}>
        <Trash width="19" height="19" color="var(--ash-gray)" />
      </button>
    </div>
  );
};
