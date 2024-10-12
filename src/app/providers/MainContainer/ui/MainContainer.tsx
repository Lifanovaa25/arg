'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import styles from './MainContainer.module.scss';

export interface MainContainerProps {
  children: ReactNode;
}

/**
 * На страничках каталога с background-image нету верхнего отступа, поэтому на них убираем margin-top
 */
export const MainProvider = (props: MainContainerProps) => {
  const { children } = props;

  const pathname = usePathname();

  const isCatalogPage = pathname.includes("catalog/equipment");
  const isPagPage = pathname.includes("catalog/equipment/equipment");

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
