import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>
              Printing equipment refers to machines that are used to print or reproduce
              various types of images, designs, texts, or graphics directly onto various
              types of surfaces, such as paper, plastic, metal, glass, or fabric. Printing
              equipment in the industrial sector generally requires high-performance
              capabilities that can handle large volumes of production within tight
              deadlines with exceptional print quality. This equipment may also be used in
              a variety of industrial applications, such as marking or coding, packaging,
              labeling, or product identification. There are several different types of
              industrial printing equipment that are commonly used in today&apos;s
              industrial production lines. These include screen printing machines, pad
              printing machines, inkjet printers, thermal printers, laser printers, and
              flexographic printing machines.
            </p>
            <p>
              Screen printing machines are widely used in the creation of printed graphics
              on t-shirts, posters, and other promotional materials. This printing process
              involves transferring ink through a fine mesh screen onto the material. The
              artwork is burned onto the mesh screen and is then exposed to a light
              source, which essentially hardens the ink onto the mesh. The ink is then
              pressed through the mesh, where it is transferred onto the material with a
              squeegee.
            </p>
          </div>

          <div className={styles.right}>
            <p>
              Pad printing machines use a silicone rubber pad to transfer ink onto
              irregular or curved surfaces, such as golf balls, pens, or computer
              keyboards. This printing process involves transferring ink from a plate to a
              pad, which then transfers the ink onto the target surface. Pad printing can
              produce fine details and colors, making it ideal for creating high-quality
              images and markings.
            </p>
            <p>
              Inkjet printers are widely used in industrial printing applications as they
              offer fast, high-resolution printing capabilities. They are used for
              printing a variety of materials, such as paper, plastic, and even textiles.
              Inkjet printers are also cost-effective and energy-efficient, making them
              ideal for high-volume printing. Thermal printers use heat to transfer ink
              onto paper, plastic, or other materials. They are often used in shipping and
              packaging applications, where they print barcodes and other important
              information onto labels or tags. They are fast and reliable and offer
              high-quality printing results.
            </p>
            <p>
              Flexographic printing machines are commonly used for printing on
              non-absorbent materials, such as plastic films or metal foils. This printing
              process uses a flexible relief plate to transfer ink onto the target
              surface. Flexographic printing machines are capable of producing
              high-quality images with excellent color vibrancy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
