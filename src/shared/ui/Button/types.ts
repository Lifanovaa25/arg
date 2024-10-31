import { ReactNode, MouseEvent, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /**
   * Контент кнопки.
   */
  children: ReactNode;
  /**
   * Кастомный класс `button`.
   */
  className?: string;
  /**
   * Состояние `disabled`.
   */
  isDisabled?: boolean;
  /**
   * Состояние загрузки в кнопке.
   */
  isLoading?: boolean;
  /**
   * Колбек на клик по кнопке.
   */
  onClick?: (e: MouseEvent) => void;
  /**
   * Размер кнопки.
   */
  size?: 'regular' | 'secondary';
  /**
   * Тема кнопки.
   */
  variant?: 'primary' | 'secondary' | 'golden' | 'outline';
}
