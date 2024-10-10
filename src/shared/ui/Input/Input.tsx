'use client';

import cn from 'classnames';
import { forwardRef } from 'react';
import { InputProps } from './types';
import Search from '/public/svg/search.svg';
import styles from './Input.module.scss';

type TInput = HTMLInputElement;

const Input = forwardRef<TInput, InputProps>((props, ref) => {
  const {
    variant = 'primary',
    className = '',
    wrapperClassName,
    name,
    isSearch,
    value,
    message,
    ...rest
  } = props;

  return (
    <div className={cn(styles.wrapper, wrapperClassName)}>
      <input
        ref={ref}
        className={cn(styles.input, styles[variant], className, {
          [styles.error]: message,
        })}
        name={name}
        value={value}
        {...rest}
      />

      {isSearch && (
        <button className={styles.btn}>
          <Search
            className={styles.search}
            width="16"
            height="16"
            color="var(--silver-gray)"
          />
        </button>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
