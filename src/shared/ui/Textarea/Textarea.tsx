'use client';

import cn from 'classnames';
import { forwardRef } from 'react';
import { TextareaProps } from './types';
import styles from './Textarea.module.scss';

type TTextarea = HTMLTextAreaElement;

const Textarea = forwardRef<TTextarea, TextareaProps>((props, ref) => {
  const { className = '', name, value, ...rest } = props;

  return (
    <div className={styles.wrapper}>
      <textarea
        ref={ref}
        className={cn(styles.textarea, className)}
        name={name}
        value={value}
        {...rest}
      />
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
