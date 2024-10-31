'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Modal from 'react-modal';
import cn from 'classnames';
import { useOutsideClick } from '@/src/shared/lib/hooks/useOutsideClick/useOutsideClick';
import { useBodyOverflow } from '@/src/shared/lib/hooks/useBodyOverflow/useBodyOverflow';
import { getCatalogRoute } from '@/src/widgets/Aside/lib/getCatalogRoute';
import Button from '@/src/shared/ui/Button/Button';
import { useScrollStates } from '../../lib/useScrollStates';
import { DropDown } from '../DropDown/DropDown';
import { Cart } from '../Cart/Cart';
import { Search } from '../Search/Search';
import { MobileMenu } from '../MobileMenu/Mobilemenu';
import Burger from '/public/svg/burger.svg';
import logo from '/public/images/header-logo.png';
import mobileLogo from '/public/images/mobile-header-logo.png';
import styles from './Header.module.scss';

const links = [
  {
    href: '/contacts',
    label: 'Contacts',
  },
  {
    href: '/about-us',
    label: 'About us',
  },
  {
    href: '/for-clients',
    label: 'For clients',
  },
];

export const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const menuRef = useRef(null);

  const pathname = usePathname();
  const isCatalogRoute = getCatalogRoute(pathname);
  const { hasShadow, isScrolledFar } = useScrollStates();

  useBodyOverflow(isOpenMobileMenu);
  useOutsideClick(menuRef, () => {
    isDropDown && setIsDropDown(false);
  });

  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return (
    <header
      className={cn(styles.header, {
        [styles.transparent]: isCatalogRoute,
        [styles.shadow]:
          (hasShadow && !isCatalogRoute) || (isCatalogRoute && isScrolledFar),
      })}
    >
      <Link className={styles.link} href="/">
        <Image src={logo} width="173" height="64" alt="Logo" />
      </Link>

      <div className="container">
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li>
                <Link className={styles.mobileLink} href="/">
                  <Image src={mobileLogo} width="39" height="69" alt="Logo" />
                </Link>
              </li>

              <li className={styles.burgerWrapper} ref={menuRef}>
                <Button
                  className={cn(styles.btn, {
                    [styles.buttonActive]: isDropDown,
                  })}
                  onClick={() => setIsDropDown((prev) => !prev)}
                >
                  <Burger width="13" height="12" color="var(--white)" />
                  <span>Catalog</span>
                </Button>

                <DropDown isDropDown={isDropDown} setIsDropDown={setIsDropDown} />
              </li>

              {links.map(({ href, label }) => (
                <li
                  key={href}
                  className={cn(styles.li, {
                    [styles.white]: isCatalogRoute,
                    [styles.gray]: !isCatalogRoute || (isCatalogRoute && isScrolledFar),
                  })}
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Cart isCatalogRoute={isCatalogRoute} isScrolledFar={isScrolledFar} />

            <button
              className={styles.mobileBtn}
              onClick={() => setIsOpenMobileMenu(true)}
              aria-label="menu"
            >
              <Burger width="13" height="13" color="var(--white)" />
            </button>

            <Search isCatalogRoute={isCatalogRoute} isScrolledFar={isScrolledFar} />
          </div>
        </div>
      </div>

      <MobileMenu
        isOpenMobileMenu={isOpenMobileMenu}
        setIsOpenMobileMenu={setIsOpenMobileMenu}
        links={links}
      />
    </header>
  );
};
