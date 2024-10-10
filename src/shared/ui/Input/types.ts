import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type TInput = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'disabled' | 'readonly'
>;

export interface InputProps extends TInput {
  /**
   * Тема инпута.
   */
  variant?: 'primary' | 'secondary' | 'third';
  /**
   * Кастомный класс для input.
   */
  className?: string;
  /**
   * Кастомный класс для обёртки input.
   */
  wrapperClassName?: string;
  /**
   * Текущее значение поля ввода.
   */
  currentValue?: string;
  /**
   * Флаг инпута для поиска, добавляет иконку.
   */
  isSearch?: boolean;
  /**
   * Сообщение ошибки.
   */
  message?: string;
}
