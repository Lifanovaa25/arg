import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Mining equipment refers to the machines and tools used for mining
              operations. Mining involves the extraction of minerals, metals, and other
              valuable resources from the earth. The equipment used in mining operations
              varies depending on the mining method and type of mineral being extracted.
            </p>
            <p>
              Some of the commonly used industrial mining equipment includes excavators,
              dump trucks, loaders, drilling machines, crushers, and conveyor belts. These
              machines are designed to operate in tough and challenging environments.
              Excavators are large machines used for digging and removing earth and
              minerals. They are used for surface mining and underground mining
              operations. Depending on the mining method, excavators may be equipped with
              various attachments such as buckets, rippers, and shovels.
            </p>
            <p>
              Dump trucks are used to haul the extracted minerals and other materials from
              the mining site. The capacity of dump trucks varies depending on the size
              and type of the truck. Large dump trucks can carry up to 400 tons of
              materials. Loaders are used for loading the extracted materials onto the
              dump trucks for transportation. They are also used for moving materials
              within the mining site. Loaders come in different sizes depending on the
              mining operation.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Drilling machines are used for making holes in the ground for explosives,
              exploration drills, and geological surveys. They come in different sizes and
              types, depending on the mining operation and the type of rock being drilled.
              Crushers are machines used for crushing rocks and minerals. They are used in
              mining operations to reduce the size of the extracted materials for
              processing. Conveyor belts are used for transporting materials from one
              point to another within the mining site. They are used in both surface and
              underground mining operations.
            </p>
            <p>
              In addition to the above equipment, mining companies also use specialized
              equipment for specific tasks. For example, long-wall mining machines are
              used for extracting coal from deep underground mines. They are designed to
              extract coal in a continuous process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
