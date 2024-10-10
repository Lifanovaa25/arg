import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Thermal equipment is a broad category of machinery that is used to generate,
              regulate, or control heat in various industrial settings. The applications
              for industrial thermal equipment are diverse, ranging from food processing
              to energy production, and include equipment such as boilers, furnaces,
              heaters, and ovens.
            </p>
            <p>
              Boilers are used to produce steam or hot water, which can be used for a
              number of different applications in manufacturing and other industries. The
              fuel used to generate the heat in boilers can be oil, gas, or coal. Boilers
              come in a variety of configurations, including fire-tube, water-tube, and
              waste heat boilers.
            </p>
            <p>
              Furnaces are used to melt or smelt metals, as well as to heat-treat or
              anneal various materials. Furnaces can be electrically powered or use gas or
              oil for heat sources.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Heaters are used to heat fluids such as water or oil, which can be used in a
              range of industrial applications. Heaters come in a variety of
              configurations, including immersion heaters, inline heaters, and circulation
              heaters.
            </p>
            <p>
              Ovens are also an important category of industrial thermal equipment. They
              are used to bake or dry various materials, including food, paint, and paper.
              Ovens can use a variety of heat sources, including gas, electricity, or
              steam.
            </p>
            <p>
              Other types of industrial thermal equipment include heat exchangers, which
              are used to transfer heat between fluids in process applications, and
              chillers, which are used to cool fluids for various applications, including
              air conditioning and refrigeration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
