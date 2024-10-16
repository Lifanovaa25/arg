import Link from 'next/link';
import Button from '@/src/shared/ui/Button/Button';
import Contact from '/public/svg/contact.svg';
import styles from './MobileSection.module.scss';
import { ContactModal } from '@/src/page/product/ui/Modal/Modal';
import { useState } from 'react';

export const MobileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.bold}>
          Royal Equipment is a reliable supplier of high-quality professional equipment
          for various industries
        </p>
        <p className={styles.gray}>
          We specialize in providing customers with the widest range of products supplying
          mining, laboratory, pneumatic, hydraulic, pipeline, filtration and other kinds
          of industrial equipment.
        </p>

        <div className={styles.wrapper}>
          <Button className={styles.btn} variant="outline" onClick={() => setIsModalOpen(true)}>
            Feedback
          </Button>

          <Link className={styles.link} href="/contacts">
            <Button variant="golden">
              <Contact width="16" height="16" color="var(--white)" />
              <span>Contact us</span>
            </Button>
          </Link>
        </div>
      </div>
      {isModalOpen &&
        <ContactModal isModalOpen={isModalOpen}

          setIsModalOpen={setIsModalOpen}
        />
      }
    </section>
  );
};
