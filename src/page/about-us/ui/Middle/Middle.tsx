import banner from '../../../../../public/images/aboutUsBanner.png'
import Image from 'next/image';
import styles from './Middle.module.scss';
import cn from 'classnames';

export const Middle = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.card_items}>
          <div className={styles.card_item}>
            <div className={styles.item_title}> Our main goal </div>
            <div className={styles.item_body}>Is to meet our customers’ requierements and provide unique solutions to improve the efficiency and productivity of their business. We welcome exceptional quality and innovations, which is why we coo-perate only with the best equipment suppliers from around the world. This allows us to guarantee high-quality products and satisfy the most demanding
              needs of our customers.
            </div>
          </div>

          <div className={styles.card_item}>
            <div className={styles.item_title}> market </div>
            <div className={styles.item_body}>The Royal Equipment team thoroughly studies the market
              and trends in order to keep up with the latest innovations
              and technological developments in the industry.
              This ensures that we can offer our customers cutting-edge equipment that meets the highest quality standards
              and modern technical requirements.</div>

          </div>
        </div>
        <div className={styles.wrap}>
          <h3 className={styles.h3}>In our work with clients, we take an individual approach trying
            to find out and understand their unique needs and goals</h3>
          <div className={styles.h3_sub_title}>We are ready to provide advice, assistance and guidance on the selection of the most suitable equipment to help our customers achieve success, optimize processes and improve the results of their operations.</div>
        </div>
      </div>
      <div className={cn(styles.img_wrap, "container")}>
        <div className={styles.banner_text}>
          <div className={styles.benner_title}>We active both locally
            and internationally </div>
          <div className={styles.benner_text}>Our reputation and presence in the industrial equipment supply market
            in the UAE speak volumes about our professionalism and reliability.
            We are proud of our successful projects in mining, pharmaceutical,
            oil and gas, metallurgical, chemical, food, fuel and energy industries </div>
        </div>
        <Image src={banner} className={styles.img} alt="" />
      </div>
      <div className="container">
        <div className={styles.wrap_txt}>Royal Equipment offers comprehensive solutions for the supply of industrial equipment, taking into account the individual needs of every customer. Our goal is to become your trusted partner by providing you with high-quality products, prompt support and cutting-edge technical solutions
          or various industrial sectors.</div>
      </div>
    </section>
  );
};
