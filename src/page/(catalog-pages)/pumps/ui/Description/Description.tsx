import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Pumps play a critical role in a wide range of industrial processes. They are
              used to move various types of fluids or gasses in industrial applications,
              such as chemical processing, water treatment, and oil and gas processing. An
              industrial pump can be defined as a mechanical device that is used to move
              fluids or gasses from one location to another.
            </p>
            <p>
              Pumps can be classified into two main categories: positive displacement
              pumps and centrifugal pumps.
            </p>
            <p>
              Positive displacement pumps are designed to move fluids by displacing a
              fixed amount of fluid into the discharge pipe with each cycle of operation.
              These pumps are typically used in applications where a high level of
              accuracy is required, such as metering or dosing.
            </p>
            <p>
              Centrifugal pumps, on the other hand, are designed to move fluids by
              rotating a set of blades or impellers that create a flow of fluid. These
              pumps are typically used in applications where a high flow rate is required,
              such as heating and cooling systems.
            </p>
          </div>

          <div className={styles.right}>
            <p>Pumps can also be categorized by their specific applications:</p>
            <ul>
              <li>
                1. Diaphragm pumps – used in applications where accuracy and reliability
                are important, such as in chemical dosing and metering.
              </li>
              <li>
                2. Gear pumps – used in applications where a consistent flow rate and
                accuracy are required, such as in food processing.
              </li>
              <li>
                3. Centrifugal pumps – used in applications where high flow rates are
                required, such as in HVAC systems.
              </li>
              <li>
                4. Rotary lobe pumps – used in applications where gentle handling of
                fluids is critical, such as in the food and beverage industry.
              </li>
            </ul>
            <p>
              In addition to the type of pump, the material of construction is also
              important. Industrial pumps are typically made from a variety of materials,
              including plastic, stainless steel, and cast iron. The material selected
              depends on the nature of the fluid being moved and the environment in which
              the pump will be operating.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
