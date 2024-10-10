import cn from 'classnames';
import { SpinnerProps } from './types';
import styles from './Spinner.module.scss';

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <span className={styles.spinner} />
    </div>
  );
};

export default Spinner;
