import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const slider1 = [
  { color: "rgba(215, 212, 207, 0)", src: "univper.png", href: "https://universitaspertamina.ac.id/" },
  { color: "rgba(215, 212, 207, 0)", src: "pegadaian.png", href: "https://www.pegadaian.co.id/" },
  { color: "rgba(215, 212, 207, 0)", src: "univdn.png", href: "https://www.darunnajah.ac.id/" },
  { color: "rgba(215, 212, 207, 0)", src: "bkkbn.png", href: "https://siga.bkkbn.go.id/" },
];

const slider2 = [
  { color: "rgba(215, 212, 207, 0", src: "kpu.png", href: "https://www.kpu.go.id/" },
  { color: "rgba(215, 212, 207, 0", src: "paragon.png", href: "https://career.paragon-innovation.com/" },
  { color: "rgba(215, 212, 207, 0", src: "deliver.png", href: "https://www.deliveree.com/id/" },
  { color: "rgba(215, 212, 207, 0", src: "tau.png", href: "https://tau.ac.id/"  },
];

export default function IndexComponent() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
         <h2 className="text-center text-3xl font- mb-8">Our Support</h2>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => (
          <div
            key={`slider1-${index}`}
            className={`${styles.project} hover:scale-110 transition`}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <Link href={project.href || "#"} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/images/${project.src}`}
                  alt="project"
                  fill
                  style={{ filter: 'grayscale(100%) brightness(60%)', transition: 'filter 0.5s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) brightness(100%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) brightness(60%)')}
                />
              </Link>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => (
          <div
            key={`slider2-${index}`}
            className={`${styles.project} hover:scale-110 transition`}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <Image
                src={`/images/${project.src}`}
                alt="project"
                fill
                style={{ filter: 'grayscale(100%) brightness(60%)', transition: 'filter 0.5s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) brightness(100%)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%) brightness(60%)')}
              />
            </div>
          </div>
        ))}
      </motion.div>
    <div className="px-6 md:px-20 pt-28">
  <div className="font- flex flex-col md:flex-row justify-between mb-[120px] gap-16 text-center">
    {/* Kartu 01 */}
    <div className="w-96 mx-auto">
      <h4 className="text-center text-3xl font- mb-8">9.8</h4>
      <div className="w-full h-[2px] bg-gray-400 my-6 mx-auto"></div>
      <h3 className="text-center text-3xl font- mb-8">Ratings</h3>
    </div>

    {/* Kartu 02 */}
    <div className="w-96 mx-auto">
      <h4 className="text-center text-3xl font- mb-8">50.000+</h4>
      <div className="w-full h-[2px] bg-gray-400 my-6 mx-auto"></div>
      <h3 className="text-center text-3xl font- mb-8">Clients</h3>
    </div>

    {/* Kartu 03 */}
    <div className="w-96 mx-auto">
      <h4 className="text-center text-3xl font- mb-8">1000+</h4>
      <div className="w-full h-[2px] bg-gray-400 my-6 mx-auto"></div>
      <h3 className="text-center text-3xl font- mb-8">Users</h3>
    </div>
  </div>
</div>


      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
    
  );
}
