'use client';

import Link from 'next/link';
import Image from 'next/image';
import Title from '@/src/shared/ui/Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowLong from '/public/svg/arrow-long.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.scss';
import styles from './Carouser.module.scss';

const items = [
  {
    img: '/images/mining-equipment.webp',
    text: 'Mining Equipment',
    href: '/catalog/equipment/mining-equipment',
  },
  {
    img: '/images/filtration-equipment-1.webp',
    text: 'Filtration Equipment',
    href: '/catalog/equipment/filtration-equipment',
  },
  {
    img: '/images/pumps.webp',
    text: 'Pumps',
    href: '/catalog/equipment/pumps',
  },
  {
    img: '/images/automation-and-electronics.webp',
    text: 'Automation and electronics',
    href: '/catalog/equipment/automation-and-electronics',
  },
  {
    img: '/images/laboratory-equipment.jpg',
    text: 'Laboratory equipment',
    href: '/catalog/equipment/laboratory-equipment',
  },
  {
    img: '/images/filtration-equipment-1.webp',
    text: 'Electric motors',
    href: '/catalog/equipment/electric-motors',
  },
  {
    img: '/images/filtration-equipment-1.webp',
    text: 'Thermal equipment',
    href: '/catalog/equipment/thermal-equipment',
  },
  {
    img: '/images/filtration-equipment-1.webp',
    text: 'Pipeline equipment',
    href: '/catalog/equipment/pipeline-equipment',
  },
  {
    img: '/images/mining-equipment.jpg',
    text: 'Transmission equipment',
    href: '/catalog/equipment/transmission-equipment',
  },
  {
    img: '/images/filtration-equipment-1.webp',
    text: 'Printing equipment',
    href: '/catalog/equipment/printing-equipment',
  },
  {
    img: '/images/pumps.jpg',
    text: 'Hydraulic equipment',
    href: '/catalog/equipment/hydraulic-equipment',
  },
  {
    img: '/images/automation-and-electronics.jpg',
    text: 'Conveyors and packaging',
    href: '/catalog/equipment/conveyors-and-packaging',
  },
  {
    img: '/images/laboratory-equipment.jpg',
    text: 'Pneumatic equipment',
    href: '/catalog/equipment/pneumatic-equipment',
  },
  {
    img: '/images/filtration-equipment-1.webp',
    text: 'Metalworking',
    href: '/catalog/equipment/metalworking',
  },
  {
    img: '/images/filtration-equipment-1.webp',
    text: 'Marina equipment',
    href: '/catalog/equipment/marina-equipment',
  },
  {
    img: '/images/filtration-equipment-1.webp',
    text: 'Spare parts',
    href: '/catalog/equipment/spare-parts',
  },
];

export const Carousel = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView="auto"
          slidesPerGroup={1}
          spaceBetween={14}
          speed={500}
          breakpoints={{
            768: {
              loop: false,
            },
            0: {
              loop: true,
              centeredSlides: true,
            },
          }}
        >
          {items.map(({ img, text, href }, index) => {
            return (
              <SwiperSlide key={index} className={styles.wrapper}>
                <Link className={styles.link} href={href}>
                  <Image src={img} className={styles.img} fill alt={text} />

                  <div className={styles.info}>
                    <Title className={styles.title} size="h4" font="onest">
                      {text}
                    </Title>
                    <div className={styles.iconWrapper}>
                      <ArrowLong
                        className={styles.icon}
                        width="12"
                        height="20"
                        color="var(--slate-gray)"
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
