import { ChangeEvent } from 'react';

type Input = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'checked' | 'disabled' | 'className'
>;

export interface ICheckboxProps extends Input {
  variant?: 'primary' | 'secondary';
  onCheckedChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  message?: string;
  className?: string;
  textClassName?: string;
}
