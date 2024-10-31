import styles from './Description.module.scss';


interface DescriptionProps {
  text: string;
}

export const Description = (props: DescriptionProps) => {
  const { text } = props;
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.column} dangerouslySetInnerHTML={{ __html: text }}>
          </div>
        </div>
      </div>
    </section>
  );
};
