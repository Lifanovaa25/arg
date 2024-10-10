'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import styles from './MainContainer.module.scss';

export interface MainContainerProps {
  children: ReactNode;
}

const catalogRoutes = [
  '/catalog/equipment/laboratory-equipment',
  '/catalog/equipment/mining-equipment',
  '/catalog/equipment/thermal-equipment',
  '/catalog/equipment/automation-and-electronics',
  '/catalog/equipment/filtration-equipment',
  '/catalog/equipment/electric-motors',
  '/catalog/equipment/transmission-equipment',
  '/catalog/equipment/pneumatic-equipment',
  '/catalog/equipment/conveyors-and-packaging',
  '/catalog/equipment/pipeline-equipment',
  '/catalog/equipment/printing-equipment',
  '/catalog/equipment/metalworking',
  '/catalog/equipment/marine-equipment',
  '/catalog/equipment/hydraulic-equipment',
  '/catalog/equipment/spare-parts',
  '/catalog/equipment/pumps',
];

/**
 * На страничках каталога с background-image нету верхнего отступа, поэтому на них убираем margin-top
 */
export const MainProvider = (props: MainContainerProps) => {
  const { children } = props;

  const pathname = usePathname();

  const isCatalogPage = catalogRoutes.some((route) => {
    return pathname === route;
  });

  return (
    <main
      className={cn(styles.main, {
        [styles.noMarginTop]: isCatalogPage,
      })}
    >
      {children}
    </main>
  );
};
