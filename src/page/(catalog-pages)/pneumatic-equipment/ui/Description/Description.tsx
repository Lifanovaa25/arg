import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <p>
              Pneumatic equipment is an essential part of many manufacturing and
              industrial processes. Using compressed air to provide mechanical motion,
              these systems can be used for everything from drilling and grinding to
              assembly and packaging.
            </p>
            <p>
              Some common types of pneumatic equipment include air compressors,
              air-powered drills and impact wrenches, pneumatic sanders and grinders, and
              air-powered staplers and nail guns. Each of these tools is designed to
              perform a specific task or operation, and can be used in a wide range of
              industrial and manufacturing settings.
            </p>
            <p>
              One of the main advantages of using pneumatic equipment is its speed and
              power. Unlike electric or hydraulic systems, pneumatic tools can deliver
              high levels of force and torque with minimal delay. This makes them
              particularly useful in applications that require rapid or repetitive motion,
              such as assembly line work or production processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
