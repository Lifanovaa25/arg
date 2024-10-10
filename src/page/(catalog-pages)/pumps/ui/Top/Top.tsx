import Title from '@/src/shared/ui/Title/Title';
import styles from './Top.module.scss';

export const Top = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Title className={styles.title} size="h1">
          Pumps
        </Title>
      </div>
    </section>
  );
};
