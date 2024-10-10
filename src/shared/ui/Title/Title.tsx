import { TitleProps } from './types';
import styles from './Title.module.scss';

const Title = (props: TitleProps) => {
  const {
    children,
    size = 'h3',
    variant = 'primary',
    font = 'mont',
    weight = 'semibold',
    className = '',
    ...rest
  } = props;

  const Tag = size as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  const titleClassName = `${styles[font]} ${styles[size]} ${styles[variant]} ${styles[weight]} ${className}`;

  return (
    <Tag className={titleClassName} {...rest}>
      {children}
    </Tag>
  );
};

Title.displayName = 'Title';

export default Title;
