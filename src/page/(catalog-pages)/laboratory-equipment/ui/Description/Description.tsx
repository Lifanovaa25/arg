import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Industrial laboratory equipment refers to the tools and instruments
              essential for carrying out various analytical, quality control, and research
              and development (R&D) activities in an industrial laboratory setting.
              Industrial laboratories are essential in helping companies develop new
              products, monitor their manufacturing processes, and ensure quality control
              of their products.
            </p>
            <p className={styles.leftText}>
              The equipment used in an industrial laboratory can vary depending on the
              specific industry and type of analysis being performed. However, most
              industrial laboratories will have common equipment such as:
            </p>

            <ul className={styles.ul}>
              <li className={styles.li}>
                1. Analytical balances: Crucial for accurately measuring small amounts of
                samples for accurate results.
              </li>
              <li className={styles.li}>
                2. Spectrophotometers: An optical instrument widely used for the
                qualitative and quantitative analysis of samples.
              </li>
              <li className={styles.li}>
                3. Chromatographs: Gas or liquid chromatography used for the separation of
                complex mixtures and identify individual components
              </li>
              <li className={styles.li}>
                4. Microscopes: Used to examine the structure of materials, visualize
                particle size and surface features.
              </li>
              <li className={styles.li}>
                5. Centrifuges: Used to separate substances based on density.
              </li>
            </ul>
          </div>

          <div className={styles.right}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                6. Autoclaves: This helps in sterilization of medical equipment,
                pharmaceutical products, and biological media.
              </li>
              <li className={styles.li}>
                7. Incubators: Devices used to provide a controlled environment for cell
                cultures and microbial growth.
              </li>
              <li className={styles.li}>
                8. pH meters: Used to measure the acidity or alkalinity of samples.
              </li>
              <li className={styles.li}>
                9. Water baths: Used to keep samples or vessels at a precise temperature.
              </li>
              <li className={styles.li}>
                10. Hot plates and magnetic stirrers: Used for heating or mixing
                solutions.
              </li>
            </ul>

            <p className={styles.rightText}>
              Industrial laboratory equipment comes in various grades, such as lab-grade,
              industrial-grade, and research-grade. Lab-grade equipment is ideal for
              schools, medical facilities, and small industries that do not require high
              accuracy or precision in testing. Industrial-grade equipment is designed for
              large-scale industries that require consistent and reliable testing results.
              Research-grade equipment is designed for research purposes where
              high-precision equipment is needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
