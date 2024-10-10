import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Transmission equipment is an essential component of many industrial
              processes, from manufacturing to distribution. It is designed to transfer
              power from one rotating power source to another, and it does so through a
              series of gears, shafts, and other mechanical components.
            </p>
            <p>
              One of the most common types of industrial transmission equipment is the
              gearbox. Gearboxes are used in a variety of applications, from cars and
              trucks to heavy machinery used in manufacturing and construction. A gearbox
              works by changing the speed and torque of an incoming power source, allowing
              it to be more effectively used by the machinery to which it is connected.
            </p>
            <p>
              Another type of industrial transmission equipment is a coupling. Couplings
              are used to connect two shafts, allowing them to rotate freely while
              transferring torque and power between them. Couplings are commonly used in
              pumps, compressors, and other machinery where efficient power transfer is
              critical.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Sprockets and chains are also common components of industrial transmission
              equipment. Sprockets are wheels with teeth that are used to transfer power
              via a chain or belt. The chain or belt fits over the sprocket teeth,
              allowing it to transfer power from one rotating source to another.
            </p>
            <p>
              Another component of industrial transmission equipment is the belt drive
              system. Belt drives are used to transfer power and torque between two
              rotating shafts. They are commonly used in machinery that requires a high
              degree of precision, such as CNC machines and printing presses.
            </p>
            <p>
              Finally, there are various types of torque converters, clutches, and brakes
              that are used in industrial transmission equipment. Torque converters are
              used to transfer power between an engine and a transmission, while clutches
              are used to engage or disengage power between two components. Brakes are
              used to slow down or stop the rotation of a particular component.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
