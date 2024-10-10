import Link from 'next/link';
import Image from 'next/image';
import Title from '@/src/shared/ui/Title/Title';
import mining from '/public/images/mining-equipment.jpg';
import laboratory from '/public/images/laboratory-equipment.jpg';
import pumps from '/public/images/pumps.jpg';
import automation from '/public/images/automation-and-electronics.jpg';
import filtration from '/public/images/filtration-equipment-2.jpg';
import electric from '/public/images/electric-motors.jpg';
import thermal from '/public/images/thermal-equipment.jpg';
import pipeline from '/public/images/pipeline-equipment.jpg';
import transmission from '/public/images/transmission-equipment.jpg';
import printing from '/public/images/printing-equipment.jpg';
import hydraulic from '/public/images/hydraulic-equipment.jpg';
import conveyors from '/public/images/conveyors-and-packaging.jpg';
import pneumatic from '/public/images/pneumatic-equipment.jpg';
import metalworking from '/public/images/metalworking.jpg';
import marina from '/public/images/marina-equipment.jpg';
import spare from '/public/images/spare-parts.jpg';
import Arrow from '/public/svg/arrow-long.svg';
import styles from './Equipment.module.scss';

const verticalCards = [
  { img: mining, label: 'Mining equipment', href: '/catalog/mining-equipment' },
  {
    img: laboratory,
    label: 'Laboratory equipment',
    href: '/catalog/equipment/laboratory-equipment',
  },
  { img: pumps, label: 'Pumps', href: '/catalog/equipment/pumps' },
  {
    img: automation,
    label: 'Automation and electronics',
    href: '/catalog/equipment/automation-and-electronics',
  },
  {
    img: filtration,
    label: 'Filtration equipment',
    href: '/catalog/equipment/filtration-equipment',
  },
];

const gorizontalCards = [
  { img: electric, label: 'Electric motors', href: '/catalog/equipment/electric-motors' },
  {
    img: thermal,
    label: 'Thermal equipment',
    href: '/catalog/equipment/thermal-equipment',
  },
  {
    img: pipeline,
    label: 'Pipeline equipment',
    href: '/catalog/equipment/pipeline-equipment',
  },
  {
    img: transmission,
    label: 'Transmission equipment',
    href: '/catalog/equipment/transmission-equipment',
  },
  {
    img: printing,
    label: 'Printing equipment',
    href: '/catalog/equipment/printing-equipment',
  },
  {
    img: hydraulic,
    label: 'Hydraulic equipment',
    href: '/catalog/equipment/hydraulic-equipment',
  },
  {
    img: conveyors,
    label: 'Conveyors and packaging',
    href: '/catalog/equipment/conveyors-and-packaging',
  },
  {
    img: pneumatic,
    label: 'Pneumatic equipment',
    href: '/catalog/equipment/pneumatic-equipment',
  },
  { img: metalworking, label: 'Metalworking', href: '/catalog/equipment/metalworking' },
  { img: marina, label: 'Marina equipment', href: '/catalog/equipment/marina-equipment' },
  { img: spare, label: 'Spare parts', href: '/catalog/equipment/spare-parts' },
];

export const Equipment = () => {
  return (
    <>
      <div className={styles.topWrapper}>
        {verticalCards.map(({ img, href, label }) => (
          <div className={styles.linkWrapper} key={href}>
            <Link className={styles.verticalCard} href={href}>
              <Image className={styles.img} src={img} fill alt={label} />

              <div className={styles.verticalWrapper}>
                <Title className={styles.title} size="h5" font="onest" weight="bold">
                  {label}
                </Title>
                <div className={styles.iconWrapper}>
                  <Arrow width="13" height="13" color="var(--slate-gray)" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.bottomWrapper}>
        {gorizontalCards.map(({ img, href, label }) => (
          <div className={styles.bottomLinkWrapper} key={href}>
            <Link className={styles.gorizontalCard} href={href}>
              <Image className={styles.img} src={img} fill alt={label} />

              <div className={styles.gorizontalWrapper}>
                <Title className={styles.title} size="h6" font="onest" weight="medium">
                  {label}
                </Title>
                <div className={styles.iconWrapper}>
                  <Arrow width="13" height="13" color="var(--slate-gray)" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
