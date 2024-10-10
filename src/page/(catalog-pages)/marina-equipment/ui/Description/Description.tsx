import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Marine equipment refers to the machinery, systems, and components that are
              utilized in marine industries such as shipbuilding, offshore exploration,
              fisheries, and others. The equipment used in these industries is designed to
              withstand the harsh marine environment, including exposure to saltwater,
              extreme temperatures, and rough seas.
            </p>
            <p>
              There are several types of industrial marine equipment, such as propulsion
              systems, marine engines, steering systems, navigation systems, and
              communication equipment. Each type of equipment plays a critical role in
              ensuring the proper operation of a vessel.
            </p>
            <p>
              Propulsion systems are used to move ships through the water. They are
              typically powered by diesel engines, which drive a propeller or water jet.
              Propulsion systems are essential for maneuvering large vessels and ensuring
              that they can move through rough seas or currents.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Marine engines are designed to provide power to propulsion systems,
              generators, or other equipment installed onboard. They are designed to be
              more durable than land-based engines as they need to operate in corrosive
              and wet environments.
            </p>
            <p>
              Steering systems ensure that a vessel is controlled effectively. They
              include a variety of equipment such as rudders, steering gears, hydraulic
              pumps, and more. Navigation systems are critical to ensure that navigators
              can track their location, calculate their trajectory, and monitor weather
              conditions. These systems include GPS, radar, sonar, and various other
              navigation aids that provide information about the vessel&apos;s
              surroundings and help in avoiding obstacles and charting the best possible
              course.
            </p>
            <p>
              Communication equipment is used to ensure that the crew can communicate with
              each other and with the shore. It includes radios, satellite communication
              systems, and other tools to keep the crew connected and informed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
