import Title from '@/src/shared/ui/Title/Title';
import styles from './Top.module.scss';


interface TopProps {
  title: string;
}

export const Top = (props: TopProps) => {
  const { title } = props;
  return (
    <section className={styles.section}>
      <div className="container">
        <Title className={styles.title} size="h1" dangerouslySetInnerHTML={{ __html: title }} >
          {title}
        </Title>
      </div>
    </section>
  );
};
