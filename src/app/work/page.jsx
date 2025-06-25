'use client';

import React from 'react';
import styles from './style.module.scss';
import { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Projects from '../../components/Projects';
import SlidingImages from '../../components/SlidingImages';
import Contact from '../../components/Contact';

export default function About() {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

       
    useEffect(() => {
        if (typeof document !== "undefined") {
            document.body.style.overflow = 'scroll';
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 250])
    const y = useTransform(scrollYProgress, [0, 1], [-500, isMobile ? 0 : 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [-120, isMobile ? 0 : -20])
    const margin = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -100])

    if (typeof window !== 'undefined') {
        console.log("Window Test");
    }

    if (typeof document !== 'undefined') {
        console.log("doc Test");
    }

    return (
    <main className={styles.main}>
      <Projects />
          <SlidingImages />
      <Contact />
  
    </main>
  )
}