import Title from '@/src/shared/ui/Title/Title';
import Button from '@/src/shared/ui/Button/Button';
import styles from './Top.module.scss';
import Link from 'next/link';

export const Top = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Title className={styles.title} size="h1" variant="secondary">
              <span>We supply</span>
              <span className={styles.goldenSpan}>industrial equipment</span>
              <span>and spare parts</span>
            </Title>
            <p className={styles.leftText}>
              For oil and gas, chemical, food, pharmaceutical and other industries. From
              Europe, USA, Japan, other countries of the world.
            </p>
            <div className={styles.linksWrapper}>
              <a className={styles.link} href="mailto:info@royal-equipment.ae">
                info@royal-equipment.ae
              </a>
              <Link className={styles.catalogLink} href="/catalog">
                <Button variant="golden">Go to catalog</Button>
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <p>
              Royal Equipment is a reliable supplier of high-quality professional
              equipment for various industries
            </p>
            <p>
              We specialize in providing customers with the widest range of products
              supplying mining, laboratory, pneumatic, hydraulic, pipeline, filtration and
              other kinds of industrial equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
