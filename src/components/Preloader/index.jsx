'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = ["Hello", "Bonjour", "Ciao", "مرحبا", "Olà", "やあ", "Hallå", "Guten tag", 
 "Hola", "Merhaba", "Привет", "안녕",, ]

export default function Index() {
    const [index, setIndex] = useState(0);
    const [showPreloader, setShowPreloader] = useState(true);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const pathname = usePathname();
    if (typeof document !== 'undefined') {
        document.body.style.cursor = 'wait';
    }

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');

        if (pathname === '/') {
            setShowPreloader(true);
        } else if (hasVisited) {
            setShowPreloader(false);
        } else {
            localStorage.getItem('hasVisited', true);
        }
    }, []);

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index == words.length - 2) return;
        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 4.9, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 2.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    };

    if (!showPreloader) return null;

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 &&
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]}</motion.p>
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    )
}
