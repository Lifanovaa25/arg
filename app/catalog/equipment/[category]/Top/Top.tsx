import Title from '@/src/shared/ui/Title/Title';
import styles from './Top.module.scss';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { checkBackground } from '@/src/shared/lib/utils/checkBackground/checkBackground';
interface TopProps {
  title: string;
  imgUrl?: string
}
const img: { [key: string]: string } = {
  'Replacement and spare parts': '',
  // 'Electric Motors': electricMotors,
  'Conveyors and Packaging': '/images/conveyors-and-packaging-bg.webp',
  'automation and electronics': '/images/automation-and-electronics-bg.webp',
  'iltration equipment': '/images/filtration-equipment-bg.webp',
  'hydraulic equipment': '/images/hydraulic-equipment-bg.webp',
  'laboratory equipment': '/images/laboratory-equipment-bg.webp',
  'marine equipment': '/images/marine-equipment-bg.webp',
  'metalworking': '/images/metalworking-bg.webp',
  'mining equipment': '/images/mining-equipment-bg.webp',
  '': '',
  '': '',
  '': '',

};

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
