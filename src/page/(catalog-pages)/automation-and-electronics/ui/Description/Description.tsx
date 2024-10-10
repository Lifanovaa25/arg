import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Automation has completely transformed the manufacturing and production
              industries. With automation, manufacturers can produce large quantities of
              goods within a shorter period, with minimal errors and at a lower cost.
              Automation equipment is used to measure and control manufacturing operations
              and the factory infrastructure.
            </p>
            <p>
              Industrial automation equipment comprises numerous machines, instruments and
              control devices. It consists of programmable logic controllers (PLCs),
              sensors, control valves, human-machine interfaces (HMIs), actuators, motors,
              drives and other tools.
            </p>
            <p>
              PLCs are at the heart of the system, and they help control the various
              manufacturing processes. The sensors are used to monitor parameters such as
              temperature, pressure, level, etc. Control valves are used in the process
              control, while the HMIs provide the interaction between the machine and the
              operator.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Actuators are used to move and control manufacturing operations. They
              consist of linear actuators, rotary actuators and electrical actuators.
              Motors are used to drive the machines and equipment, while the drives are
              used to control the speed and torque of the motor
            </p>
            <p>
              Additionally, electronics play a crucial role in industrial automation.
              Electronics enable the equipment and machines to communicate with each
              other, provide real-time data, and ensure safety in manufacturing processes.
            </p>
            <p>
              Communication protocols such as Modbus, Profibus, and Ethernet/IP are used
              to enable electronic communication between machines and computer systems.
              These protocols also allow the exchange of data between control devices and
              manufacturing equipment. The data, such as production rate or downtime, is
              used for monitoring performance and identifying issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
