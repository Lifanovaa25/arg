type THeading = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export interface TitleProps extends THeading {
  /**
   * Контент title.
   */
  children: React.ReactNode;
  /**
   * Размер title.
   */
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Цвет title, по умолчанию primary(белый).
   */
  variant?: 'primary' | 'secondary' | 'third';
  /**
   * Font-family title, по умолчанию mont.
   */
  font?: 'mont' | 'onest';
  /**
   * Font-weight title, по умолчанию semibold(600).
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  /**
   * Кастомный класс для title.
   */
  className?: string;
}
