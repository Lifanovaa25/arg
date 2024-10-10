import Image from 'next/image';
import Title from '@/src/shared/ui/Title/Title';
import line from '/public/images/line.png';
import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.mobileTop}>
            <Title size="h1" variant="secondary">
              Let’s Connect <br /> and Work Together
            </Title>
            <p className={styles.mobileSuptitle}>
              Send us a message and we’ll get your questions answered as soon as possible
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40722.24105659925!2d55.714454502130216!3d25.559300996643902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9177b52f391%3A0x61173d1c1170d4d5!2sAl%20Shmookh%20Business%20Complex!5e0!3m2!1sru!2sus!4v1725356059149!5m2!1sru!2sus"
            width="653"
            height="595"
            allowFullScreen={true}
            loading="lazy"
            className={styles.iframe}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className={styles.info}>
            <Title className={styles.title} size="h1" variant="secondary">
              Let’s Connect <br /> and Work Together
            </Title>
            <p className={styles.suptitle}>
              Send us a message and we’ll get your questions answered as soon as possible
            </p>

            <div className={styles.emailWrapper}>
              <span className={styles.gray}>Email</span>
              <a className={styles.email} href="mailto:info@royal-equipment.ae">
                info@royal-equipment.ae
              </a>
            </div>

            <div className={styles.officeWrapper}>
              <span className={styles.gray}>Our office</span>
              <p className={styles.office}>
                1003 Al Shmookh Business Center, Umm Al Quwain, United Arab Emirates
              </p>
            </div>

            <Image
              className={styles.line}
              src={line}
              height={1}
              width={166}
              alt="Golden line"
            />

            <ul className={styles.ul}>
              <li className={styles.li}>Monday to Thursday: 8:00 AM – 1:00 PM</li>
              <li className={styles.li}>and 2:00 PM – 5:30 PM </li>
              <li className={styles.li}>Friday: 8:00 AM – 12:00 PM</li>
              <li className={styles.li}>Saturday & Sunday : Weekend holidays</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
