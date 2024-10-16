import Title from '@/src/shared/ui/Title/Title';
import styles from './Top.module.scss';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { checkBackground } from '@/src/shared/lib/utils/checkBackground/checkBackground';
interface TopProps {
  title: string;
  imgUrl?: string
}


export const Top = (props: TopProps) => {
  const pathname = usePathname()
  const imgUrl = checkBackground(pathname)

  const { title } = props;

  return (
    <section className={styles.section}
      style={imgUrl ? { backgroundImage: `url(${imgUrl}` } : { backgroundImage: '/images/automation-and-electronics-bg.webp' }}
    >
      <div className="container">
        <Title className={styles.title} size="h1" dangerouslySetInnerHTML={{ __html: title }} >
        </Title>
      </div>
    </section>
  );
};
