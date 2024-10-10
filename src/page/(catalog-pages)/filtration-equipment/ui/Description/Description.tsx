import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Filtration equipment is designed to remove impurities and unwanted
              substances from liquids and gasses in an industrial setting. Impurities can
              have a negative impact on the final product or the overall industrial
              process.
            </p>
            <p>
              Industrial filtration equipment comes in different forms and configurations,
              depending on the specific application and requirements. Some common types of
              industrial filtration equipment include:
            </p>
            <p>
              1. Mechanical filters: These filters are designed to physically remove
              impurities from the fluid or gas flow. Mechanical filters can be made of a
              variety of materials, including mesh, paper, or ceramic. They are often used
              in high-volume applications, where a large volume of fluid or gas needs to
              be filtered quickly.
            </p>
            <p>
              2. Cartridge filters: Cartridge filters are often used where high particle
              retention is required. They are designed to collect impurities on the
              surface or within the layers of the filter material, depending on the type
              of construction. Cartridge filters are commonly used in pharmaceuticals,
              food and beverage, and water treatment applications.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              3. Bag filters: Similar to cartridge filters, bag filters are used for high
              particle retention. They are typically made of woven or felt material and
              can be used multiple times. Bag filters are commonly used in chemical, oil
              and gas, and paint and coating applications.
            </p>
            <p>
              4. Membrane filters: Membrane filters are designed to remove particles and
              microorganisms from fluid streams. They are often used in the pharmaceutical
              and biotech industries, where sterility is critical. Membrane filters come
              in various pore sizes, ranging from nanometers to micrometers.
            </p>
            <p>
              5. Electrostatic filters: Electrostatic filters use an electric charge to
              attract and remove impurities from a fluid or gas stream. They are often
              used in HVAC systems and electronic manufacturing, where small particles can
              cause damage.
            </p>
            <p>
              In addition to removing impurities, industrial filtration equipment can also
              help with environmental and regulatory compliance. The removal of harmful
              substances from wastewater and emissions can lower the impact on the
              environment and comply with regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
