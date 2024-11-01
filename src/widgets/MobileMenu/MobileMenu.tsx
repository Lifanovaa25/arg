import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { useBodyOverflow } from '@/src/shared/lib/hooks/useBodyOverflow/useBodyOverflow';
import { MobileMenuProps } from './types';
import Close from '/public/svg/close.svg';
import styles from './MobileMenu.module.scss';

export const MobileMenu = (props: MobileMenuProps) => {
  const { isOpenSettings, setIsOpenSettings, links } = props;

  const pathname = usePathname();
  useBodyOverflow(isOpenSettings);

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.menuOpen]: isOpenSettings,
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
              <Link href={href} onClick={() => setIsOpenSettings(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className={styles.btn} onClick={() => setIsOpenSettings(false)}>
        <Close width="22" height="22" color="var(--black)" />
      </button>
    </div>
  );
};
