'use client';

import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import Title from '@/src/shared/ui/Title/Title';
import { Form } from './Form/Form';
import logo from '/public/images/footer-logo.png';
import mobileLogo from '/public/images/mobile-footer-logo.png';
import placeholder from '/public/images/placeholder.png';
import mail from '/public/images/mail_icon.png';
import ArrowTop from '/public/svg/arrow-top.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrap}>
        <div className="container">
          <div className={styles.foot}>
            <Link className={styles.link} href="/">
              <Image className={styles.img} src={logo} alt="Logo" />
            </Link>

            <div className={styles.footer_inf}>
              <div className={styles.scroll_top}>
                <button className={styles.scroll_btn} onClick={handleScrollTop} aria-label="Go to the top">
                  <ArrowTop width="13" height="15" color="var(--white)" />
                </button>
                <p className={styles.scroll_p}>Go to the top</p>
              </div>

              <div className={styles.col}>
                <div>
                  <Title className={styles.title} size="h2">
                    Let’s work
                  </Title>
                  <Title className={styles.sub_title} size="h5" weight="regular">
                    Leave a request <br className={styles.br} /> and start working with us
                  </Title>
                </div>
                <Link className={styles.mobileLink} href="/">
                  <Image className={styles.mobileLogo} src={mobileLogo} alt="Logo" />
                </Link>
                <Link className={styles.address} href="mailto:info@royal-equipment.ae">
                  <Image
                    src={mail}
                    width="25"
                    height="23"
                    alt="info@royal-equipment.ae"
                  />
                  info@royal-equipment.ae
                </Link>

                <div className={styles.address}>
                  <Image src={placeholder} width="26" height="42" alt="Location" />
                  <span>Business Center, Al Shmookh Building, Umm Al Quwain, U.A.E</span>
                </div>
                <div className={styles.copyrights}>
                  <p className={styles.copyrightsText}>
                    Copyright &copy; <span>{new Date().getFullYear()}</span>. Royal
                    Equiment. All right’s reserved.
                  </p>
                </div>
              </div>

              <div className={styles.col}>
                <Title className={cn(styles.secondTitle, styles.mb20)} size="h2">
                  Say hello!
                </Title>
                <Form />
              </div>

              <div className={styles.mobileWrapper}>
                <Link
                  className={styles.mobileAddress}
                  href="mailto:info@royal-equipment.ae"
                >
                  <Image
                    src={mail}
                    width="25"
                    height="23"
                    alt="info@royal-equipment.ae"
                  />
                  info@royal-equipment.ae
                </Link>
                <div className={styles.mobileAddress}>
                  <Image src={placeholder} width="26" height="42" alt="Location" />
                  <span>Business Center, Al Shmookh Building, Umm Al Quwain, U.A.E</span>
                </div>
                <p className={styles.mobileCopyrights}>
                  Copyright &copy; <span>{new Date().getFullYear()}</span>. Royal
                  Equiment. All right’s reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
