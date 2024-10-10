import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Industrial pipeline equipment is vital for transporting fluids or gasses
              from one place to another in various manufacturing plants, refineries,
              petrochemical plants, and other industrial facilities. The pipelines are
              designed to handle high pressures, temperature fluctuations, and corrosive
              substances, ensuring that the materials are transported safely and
              efficiently.
            </p>
            <p>
              Some of the essential industrial pipeline equipment includes: 1. Pipes:
              Pipes are the most basic element in any pipeline system. These are made of
              materials like steel, copper, PVC, or other alloys, depending on the nature
              of the fluid or gas being transported.
            </p>
            <p>
              2. Valves: Valves are used to control the flow of fluid or gas through the
              pipeline. They can be ball valves, gate valves, globe valves, or check
              valves, depending on the application.
            </p>
            <p>
              3. Fittings: Fittings are used to connect pipes together or to other
              pipeline components such as valves, pumps or tanks. These can be elbows,
              tees, reducers or couplings.
            </p>
            <p>
              4. Pumps: Pumps are used to move fluids or gasses through the pipeline.
              These can be centrifugal, positive displacement, or multistage, depending on
              the application.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              5. Compressors: Compressors are used to compress gasses such as natural gas
              or air to increase flow rates.
            </p>
            <p>
              6. Heat exchangers: Heat exchangers are used to transfer heat between fluids
              or gasses. These are essential for maintaining the appropriate temperature
              of the fluid or gas passing through the pipeline.
            </p>
            <p>
              7. Filters and strainers: Filters and strainers are used to trap solid
              particles and debris that may be present in the fluid or gas.
            </p>
            <p>
              8. Flow meters: Flow meters are used to measure the volume or flow rate of
              the fluid or gas passing through the pipeline.
            </p>
            <p>
              Industrial pipeline equipment is designed with safety in mind. Therefore, it
              is inspected, tested, and maintained regularly to ensure that it is
              functioning correctly. Proper installation, operation and maintenance of the
              equipment is key in ensuring that materials are transported safely and
              efficiently without any leakage or damage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
