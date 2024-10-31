import { forwardRef, ChangeEvent } from 'react';
import cn from 'classnames';
import { ICheckboxProps } from './types';
import styles from './Checkbox.module.scss';

type L = HTMLLabelElement;

const Checkbox = forwardRef<L, ICheckboxProps>((props, ref) => {
  const {
    variant = 'primary',
    onCheckedChange = () => undefined,
    checked,
    message,
    className = '',
    textClassName = '',
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCheckedChange && onCheckedChange(e);
  };

  return (
    <label className={cn(styles.label, className)} ref={ref}>
      <input
        className={cn(styles.input, styles[variant], {
          [styles.error]: message,
        })}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        {...rest}
      />

      <div className={cn(styles.text, styles[variant], textClassName)}>
        I consent to the processing of
        <a
          className={styles.link}
          href="https://api.royal-equipment.ae/media/dyyewct1/privacy.txt"
          target="_blank"
          rel="noopener noreferrer"
          title="Privacy"
        >
          personal data
        </a>
      </div>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
