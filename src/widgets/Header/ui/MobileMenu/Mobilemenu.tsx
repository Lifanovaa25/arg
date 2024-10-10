import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { MobileMenuProps } from './types';
import Close from '/public/svg/close.svg';
import styles from './MobileMenu.module.scss';

export const MobileMenu = (props: MobileMenuProps) => {
  const { isOpenMobileMenu, setIsOpenMobileMenu, links } = props;

  const pathname = usePathname();

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.menuOpen]: isOpenMobileMenu,
      })}
    >
      <nav>
        <ul>
          {links.map(({ href, label }) => (
            <li
              key={href}
              className={cn(styles.li, {
                [styles.black]: href === pathname,
              })}
            >
              <Link href={href} onClick={() => setIsOpenMobileMenu(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className={styles.btn} onClick={() => setIsOpenMobileMenu(false)}>
        <Close width="22" height="22" color="var(--black)" />
      </button>
    </div>
  );
};
