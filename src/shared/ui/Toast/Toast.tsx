import { toast } from 'react-toastify';
import Title from '../Title/Title';
import styles from './Toast.module.scss';

const Toast = () => {
  return (
    <div className={styles.wrapper}>
      <Title size="h4" variant="third" weight="bold">
        Thank you
      </Title>
      <p className={styles.text}>We&apos;ll get back to you soon</p>
    </div>
  );
};

Toast.displayName = 'Toast';

export const showToast = () => {
  toast(<Toast />);
};
