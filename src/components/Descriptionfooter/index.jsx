import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Link from 'next/link';

export default function IndexComponent() {
    const phrase = "Kami siap membantu Anda dengan layanan profesional yang dirancang untuk memenuhi kebutuhan Anda, mulai dari strategi media hingga komunikasi digital yang efektif. Bersama Safir Media Komunikasi, wujudkan koneksi yang lebih kuat dan jangkau audiens Anda dengan cara yang lebih bermakna!";
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
              
                <div data-scroll data-scroll-speed={0.1}>
                    <Link href="/contact" passHref>
                      <Rounded className={`${styles.button}`}>
                           <p>Contact Us</p>
                     </Rounded>
                    </Link>
                </div>
            </div>
        </div>
    )
}
