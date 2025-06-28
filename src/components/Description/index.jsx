import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Link from 'next/link';

export default function IndexComponent() {
    const phrase = "Safir Media Komunika adalah Jasa EO Profesional yang memberikan solusi kebutuhan event yang terintegrasi dalam satu atap.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Safir Media Komunika memberikan solusi lengkap, mulai dari konsep hingga detail teknis, venue, audio-visual, multimedia content.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Link href="/about" passHref>
                      <Rounded className={`${styles.button}`}>
                           <p>About Us</p>
                     </Rounded>
                    </Link>
                </div>
            </div>
        </div>
    )
}
