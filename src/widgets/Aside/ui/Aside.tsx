'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';
import Button from '@/src/shared/ui/Button/Button';
import { getBreadcrumbs } from '../lib/getBreadcrumbs';
import { getCatalogRoute } from '../lib/getCatalogRoute';
import Contact from '/public/svg/contact.svg';
import styles from './Aside.module.scss';
import { ContactModal } from '@/src/page/product/ui/Modal/Modal';
import { useState } from 'react';

export const Aside = () => {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);
  const isCatalogRoute = getCatalogRoute(pathname);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <aside className={styles.aside}>
      <nav aria-label="breadcrumb">
        <ul>
          {breadcrumbs.map(
            (breadcrumb, index) =>
              breadcrumb.label.length > 1 && (
                <li
                  key={index}
                  className={cn(styles.li, {
                    [styles.whiteLi]: isCatalogRoute,
                  })}
                >
                  <Link
                    className={cn(styles.link, {
                      [styles.active]: breadcrumb.isActive,
                    })}
                    href={`${breadcrumb.href}/`}
                  >
                    {breadcrumb.label}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>

      <div className={styles.wrapper}>
        <Button
          className={styles.btn}
          variant="outline"
          onClick={() => setIsModalOpen(true)}
          aria-label="Feedback"
        >
          Feedback
        </Button>

        <Link href="/contacts">
          <Button variant="golden" aria-label="Contact us">
            <Contact width="16" height="16" color="var(--white)" />
            <span>Contact us</span>
          </Button>
        </Link>
      </div>
      {isModalOpen && (
        <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </aside>
  );
};
