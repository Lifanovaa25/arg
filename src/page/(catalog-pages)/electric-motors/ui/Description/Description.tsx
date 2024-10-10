import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Electric motors are used in a variety of applications across different
              industries. These machines are designed to convert electrical energy into
              mechanical energy to drive different types of equipment such as pumps, fans,
              compressors, conveyor systems, and many more.
            </p>
            <p>
              There are two primary types of electric motors used in industrial
              applications: AC and DC motors. AC motors are the most common and are used
              for applications that require high torque and consistent performance over a
              long period of time. DC motors, on the other hand, are typically used for
              applications that require adjustable speeds and quick acceleration.
            </p>
            <p>
              The performance of an industrial electric motor is measured by several
              factors including horsepower, speed, torque, and efficiency. The horsepower
              rating of an electric motor determines the amount of power it can generate.
              Speed is measured in revolutions per minute (RPM) and varies depending on
              the application.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Torque refers to the twisting force generated by the motor and is an
              important factor in determining the motor’s performance. Efficiency measures
              the effectiveness of the motor in converting electrical energy into
              mechanical energy. High-efficiency motors are more cost-effective and
              environmentally friendly than their less efficient counterparts.
            </p>
            <p>
              Industrial electric motors also come in different designs and
              configurations. Some of the most common designs include the squirrel cage
              motor, wound rotor motor, and permanent magnet motor. Each design has its
              unique features and benefits that make it suitable for specific
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
