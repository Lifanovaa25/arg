import Image from 'next/image';
import Link from 'next/link';
import Title from '@/src/shared/ui/Title/Title';
import Arrow from '/public/svg/arrow-long.svg';
import test from '/public/images/test.png';
import styles from './CategoryCard.module.scss';
import cn from 'classnames';


interface CategoryProps {
  
  name: string | undefined;
  url: string | undefined;
  image: string |undefined;
  className?:string
}


export const CategoryCard = (props: CategoryProps) => {
  const {name, url, image, className} = props;
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} href={url ?? ""}>
        <Image className={cn(styles.img, className)} width={100} height={100} src={image ? 'https://royal-equipment.ae' + image : test} alt={name + " image"} />

        <div className={styles.contentWrapper}>
          <Title
            className={styles.title}
            size="h6"
            variant="secondary"
            font="onest"
            weight="medium"
          >
            {name}
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
