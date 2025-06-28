import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const slider1 = [
    {
        color: "#d7d4cf",
        src: "layout.jpg",
        href: ""
    },
    {
        color: "#d7d4cf",
        src: "layout2.jpg",
        href: ""
    },
    {
        color: "#d7d4cf",
        src: "layout3.jpg",
        href: ""
    },
    {
        color: "#d7d4cf",
        src: "layout4.jpg",
        href: ""
    },
]

const slider2 = [
    {
        color: "#d7d4cf",
        src: "layout5.jpg"
    },
    {
        color: "#e5e0e1",
        src: "layout6.jpg"
    },
    {
        color: "#d7d4cf",
        src: "layout7.jpg"
    },
    {
        color: "#e1dad6",
        src: "layout8.jpg"
    }
]

export default function IndexComponent() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {
                    slider1.map((project, index) => {
                        return <div key={index} className={`${styles.project} hover:scale-110 transition`} style={{ backgroundColor: project.color }} >
                            <div className={styles.imageContainer}>
                                <Link href={project.href} target='_blank'>
                                    <Image
                                        fill={true}
                                        alt={"image"}
                                        src={`/images/${project.src}`}
                                    />
                                </Link>
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {
                    slider2.map((project, index) => {
                        return <div key={index} className={`${styles.project} hover:scale-110 transition`} style={{ backgroundColor: project.color }} >
                            <div key={index} className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`} />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}
