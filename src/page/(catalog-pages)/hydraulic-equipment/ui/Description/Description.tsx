import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Hydraulic equipment is a type of machinery that uses hydraulic power to
              perform tasks such as lifting heavy loads, moving materials, etc. Hydraulic
              systems work by using fluid power, using fluids such as oil or water to
              generate power. Hydraulic equipment is often used in industries such as
              manufacturing, construction, and transportation.
            </p>
            <p>
              Some of the most common types of hydraulic equipment include hydraulic
              pumps, cylinders, motors, and valves. These components work together to form
              a complex hydraulic system that is capable of performing a wide rang of
              tasks. Hydraulic pumps are used to generate fluid power by taking power from
              an external source, such as an electric motor or an internal combustion
              engine. The fluid is then directed to hydraulic cylinders, which convert the
              fluid power into mechanical power. Hydraulic motors are also used to
              generate mechanical power and are often used to power heavy machinery or to
              drive machinery with high torque requirements.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Hydraulic cylinders are used to lift heavy loads or move materials over long
              distances. They are typically made of metal and feature a piston that moves
              back and forth inside the cylinder. The piston is connected to a rod that
              extends from the cylinder, allowing it to move objects in a linear motion.
            </p>
            <p>
              Hydraulic valves are used to control the flow of fluid within the system.
              Valves can be used to regulate the speed and pressure of the fluid, allowing
              the system to be fine-tuned for specific tasks.
            </p>
            <p>
              One of the main advantages of hydraulic equipment is its ability to generate
              a large amount of power in a relatively small space. This is particularly
              important in industrial settings where space and weight restrictions are a
              concern. Hydraulic equipment also provides a high degree of precision in
              controlling the speed and direction of movement, making it ideal for tasks
              that require a high level of accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
