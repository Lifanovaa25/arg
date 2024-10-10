import Image from 'next/image';
import Link from 'next/link';
import Title from '@/src/shared/ui/Title/Title';
import Arrow from '/public/svg/arrow-long.svg';
import test from '/public/images/test.png';
import styles from './CategoryCard.module.scss';

export const CategoryCard = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} href={'/'}>
        <Image className={styles.img} src={test} alt={'Image'} />

        <div className={styles.contentWrapper}>
          <Title
            className={styles.title}
            size="h6"
            variant="secondary"
            font="onest"
            weight="medium"
          >
            All laboratory equipment
          </Title>
          <div className={styles.iconWrapper}>
            <Arrow
              className={styles.icon}
              width="13"
              height="13"
              color="var(--light-black)"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
