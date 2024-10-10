'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Title from '@/src/shared/ui/Title/Title';
import Arrow from '/public/svg/arrow-back.svg';
import bgImage from '/public/images/not-found-bg.jpg';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  const { back } = useRouter();

  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <Image src={bgImage} className={styles.img} fill alt="Not found" />

          <div className={styles.titleWrapper}>
            <Title className={styles.h1} size="h1" variant="third">
              404
            </Title>
            <Title className={styles.h2} size="h2">
              Page not found
            </Title>
            <p className={styles.text}>
              An error occurred - the page you requested was not found. Soon we&apos;ll
              have everything repaired
            </p>
          </div>
        </div>

        <div className={styles.btn} onClick={() => back()}>
          <div className={styles.iconWrapper}>
            <Arrow width="54" height="54" />
          </div>
          <span>Get back</span>
        </div>
      </div>
    </section>
  );
};
