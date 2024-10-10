import Title from '@/src/shared/ui/Title/Title';
import styles from './Top.module.scss';
import aboutImg from './../../../../../public/images/about-us-img.png'
import Image from 'next/image';
export const Top = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Title size="h1" className={styles.title} variant="secondary">
          About Us
        </Title>
        <div className={styles.wrapper}>
          <Image src={aboutImg} className={styles.img} alt="AboutUs" />
        </div>
        <h2 className={styles.about_title}>One of the leading industrial equipment supply </h2>
        <h2 className={styles.about_title}> companies in the United Arab Emirates </h2>
        <div className={styles.sub_title}>
          <div className={styles.sub_title_txt}>
            Royal Equipment is a reliable supplier of high-quality professional equipment for various industries. We specialize in providing customers with the widest range of products supplying mining, laboratory, pneumatic, hydraulic, pipeline, filtration and other kinds of industrial equipment.

          </div>
        </div>
      </div>
    </section>
  );
};
