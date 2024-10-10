'use client';

import { forwardRef, MouseEvent } from 'react';
import cn from 'classnames';
import Spinner from '../Spinner/Spinner';
import { ButtonProps } from './types';
import styles from './Button.module.scss';

type TButton = HTMLButtonElement;

const Button = forwardRef<TButton, ButtonProps>((props, ref) => {
  const {
    children,
    isLoading,
    isDisabled,
    onClick = () => undefined,
    className = '',
    size = 'regular',
    variant = 'primary',
    type = 'button',
    ...rest
  } = props;

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isDisabled || isLoading) {
      return;
    }

    onClick(e);
  };

  return (
    <button
      className={cn(styles.button, styles[size], styles[variant], className)}
      type={type}
      disabled={isDisabled}
      onClick={onButtonClick}
      ref={ref}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
