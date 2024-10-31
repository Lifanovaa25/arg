import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type TTextarea = Omit<
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  'disabled' | 'readonly'
>;

export interface TextareaProps extends TTextarea {
  /**
   * Кастомный класс для input.
   */
  className?: string;
  /**
   * Текущее значение поля ввода.
   */
  currentValue?: string;
}
