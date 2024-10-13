import Title from '@/src/shared/ui/Title/Title';
import styles from './Top.module.scss';
import aboutImg from './../../../../../public/images/about-us-img.png'
import Image from 'next/image';
export const Top = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Title size="h1" className={styles.title} variant="secondary">
        Leave a request and start working with us
        </Title>
        <div className={styles.wrapper}>
          <Image src={aboutImg} className={styles.img} alt="AboutUs" />
        </div>
      
      </div>
    </section>
  );
};
