import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Metalworking are essential components that keep machines and equipment
              running smoothly, reducing downtime and preventing costly repairs. These
              parts can be mechanical, electronic, or a combination of both, and are used
              in a variety of industries such as manufacturing, construction, automotive,
              and many others. Industrial spare parts come in various types, sizes, and
              materials, and play a vital role in maintaining uninterrupted operations and
              ensuring efficient production processes.
            </p>
            <p>
              One of the most common types of industrial spare parts is mechanical parts.
              These are parts that operate based on physical processes such as rotation,
              movement, and pressure. Mechanical parts include bearings, gears, belts,
              chains, couplings, and seals.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Electronic parts are also critical in the industry, providing power sources,
              sensors, and controls to help machines operate effectively. These include
              components such as circuit boards, switches, fuses, capacitors, and
              resistors. Electronic parts are widely used in sensors that are integrated
              into machines to enable them to detect, measure and respond to different
              stimuli such as temperature, speed, and pressure. They are also used in the
              control systems that keep machines working optimally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
