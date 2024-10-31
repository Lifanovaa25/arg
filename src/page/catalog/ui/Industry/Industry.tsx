import Link from 'next/link';
import Image from 'next/image';
import Title from '@/src/shared/ui/Title/Title';
import oil from '/public/images/oil-and-gas.webp';
import fuel from '/public/images/fuel-and-energy.webp';
import mettalurgy from '/public/images/mettalurgy.webp';
import chemical from '/public/images/chemical.webp';
import food from '/public/images/food.webp';
import mining from '/public/images/mining.webp';
import pulp from '/public/images/pulp-and-paper.webp';
import pharmaceutical from '/public/images/laboratory-equipment.webp';
import shipbuilding from '/public/images/shipbuilding.webp';
import Arrow from '/public/svg/arrow-long.svg';
import styles from './Industry.module.scss';

const gorizontalCards = [
  { img: oil, label: 'Oil and Gas', href: '/catalog/industry/catalog/industry/oil-and-gas' },
  { img: fuel, label: 'Fuel and energy', href: '/catalog/industry/fuel-and-energy' },
  { img: mettalurgy, label: 'Mettalurgy', href: '/catalog/industry/mettalurgy' },
  { img: chemical, label: 'Chemical', href: '/catalog/industry/chemical' },
  { img: food, label: 'Food', href: '/catalog/industry/food' },
  { img: mining, label: 'Mining', href: '/catalog/industry/mining' },
  { img: pulp, label: 'Pulp and paper', href: '/catalog/industry/pulp-and-paper' },
  { img: pharmaceutical, label: 'Pharmaceutical', href: '/catalog/industry/pharmaceutical' },
  { img: shipbuilding, label: 'Shipbuilding', href: '/catalog/industry/shipbuilding' },
];

export const Industry = () => {
  return (
    <div className={styles.wrapper}>
      {gorizontalCards.map(({ img, href, label }) => (
        <div className={styles.cardWrapper} key={href}>
          <Link className={styles.card} href={href}>
            <Image className={styles.img} src={img} fill alt={label} />

            <div className={styles.contentWrapper}>
              <Title className={styles.title} size="h6" font="onest" weight="bold">
                {label}
              </Title>
              <div className={styles.iconWrapper}>
                <Arrow width="13" height="13" color="var(--slate-gray)" />
              </div>
            </div>

            <div className={styles.blur}></div>
          </Link>
        </div>
      ))}
    </div>
  );
};
