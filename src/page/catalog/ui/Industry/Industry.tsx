import Link from 'next/link';
import Image from 'next/image';
import Title from '@/src/shared/ui/Title/Title';
import oil from '/public/images/oil-and-gas.jpg';
import fuel from '/public/images/fuel-and-energy.jpg';
import mettalurgy from '/public/images/mettalurgy.jpg';
import chemical from '/public/images/chemical.jpg';
import food from '/public/images/food.jpg';
import mining from '/public/images/mining.jpg';
import pulp from '/public/images/pulp-and-paper.jpg';
import pharmaceutical from '/public/images/laboratory-equipment.jpg';
import shipbuilding from '/public/images/shipbuilding.jpg';
import Arrow from '/public/svg/arrow-long.svg';
import styles from './Industry.module.scss';

const gorizontalCards = [
  { img: oil, label: 'Oil and Gas', href: '/oil-and-gas' },
  { img: fuel, label: 'Fuel and energy', href: '/fuel-and-energy' },
  { img: mettalurgy, label: 'Mettalurgy', href: '/mettalurgy' },
  { img: chemical, label: 'Chemical', href: '/chemical' },
  { img: food, label: 'Food', href: '/food' },
  { img: mining, label: 'Mining', href: '/mining' },
  { img: pulp, label: 'Pulp and paper', href: '/pulp-and-paper' },
  { img: pharmaceutical, label: 'Pharmaceutical', href: '/pharmaceutical' },
  { img: shipbuilding, label: 'Shipbuilding', href: '/shipbuilding' },
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
