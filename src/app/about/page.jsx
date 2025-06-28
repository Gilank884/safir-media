'use client';

import React from 'react';
import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton';
import Contact from '../../components/Contact';
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Landingabout from '../../components/Landingabout';
import Slidingbrand from '../../components/Slidingbrand';
import Descriptionfooter from '../../components/DescriptionFooter';
import Slidingimages from '../../components/Slidingimages';

export default function About() {
    const container = useRef(null);
    const [dotText, setDotText] = useState(".");
    const [isMobile, setIsMobile] = useState(false);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    useEffect(() => {
        const dotSequence = [".", "..", "..."];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % dotSequence.length;
            setDotText(dotSequence[index]);
        }, 500);

        return () => clearInterval(interval);
    }, []);

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
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            <div className={`${styles.container} mx-[10%] mt-[15%]`}>
                <div>
                    <h1>
                        <span>The Agency Of<br /></span>
                        <span>Safir Media Komunika</span>
                    </h1>
                </div>
                <div className={styles.title}>
                    <motion.div style={{ x: isMobile ? 200 : x }} className={styles.buttonContainer}>
                        <button>
                            <Rounded backgroundColor='000' className={styles.button}>
                                <video autoPlay loop muted>
                                    <source src="/videos/loopingGlobe.mp4" type="video/mp4" />
                                </video>
                            </Rounded>
                        </button>
                    </motion.div>
                </div>
                <div className={styles.desc}>
                    <motion.svg style={{ rotate: isMobile ? 0 : rotate, scale: 2, margin }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="black" />
                    </motion.svg>
                    <h4 className='max-w-72 mb-5'>
                        <span>PT Safir Media Komunika adalah creative event & production house yang menghadirkan
                                pengalaman event yang kreatif, elegan, dan berkualitas.</span>
                    </h4>
                    <h4>
                        <span className="text-gray-400">Always exploring</span>
                        <Landingabout/>
                        <motion.span
                            className="text-gray-400"
                            animate={{
                                opacity: [0, 1, 1, 1, 0]
                            }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                times: [0, 0.3, 0.5, 0.7, 1],
                                repeat: Infinity,
                            }}
                        >
                            <motion.span
                                className='text-xl'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 1, 0] }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.3, 0.5, 1],
                                    repeat: Infinity,
                                }}
                            >
                                .
                            </motion.span>
                            <motion.span
                                className='text-xl'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0, 1, 1, 0] }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.3, 0.5, 0.7, 1],
                                    repeat: Infinity,
                                }}
                            >
                                .
                            </motion.span>
                            <motion.span
                                className='text-xl'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.3, 0.5, 0.7, 0.9, 1],
                                    repeat: Infinity,
                                }}
                            >
                                .
                            </motion.span>
                        </motion.span>
                    </h4>
                </div>
                <div className={styles.helping}>
                    <h2>
                        Siapa sih kami{' '}
                        <motion.span
                            className="text-gray-400"
                            animate={{
                                opacity: [0, 1, 1, 1, 0]
                            }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                times: [0, 0.3, 0.5, 0.7, 1],
                                repeat: Infinity,
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 1, 0] }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.3, 0.5, 1],
                                    repeat: Infinity,
                                }}
                            >
                                .
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0, 1, 1, 0] }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.3, 0.5, 0.7, 1],
                                    repeat: Infinity,
                                }}
                            >
                                .
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.3, 0.5, 0.7, 0.9, 1],
                                    repeat: Infinity,
                                }}
                            >
                                .
                            </motion.span>
                        </motion.span>
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row justify-between mb-[100px]">
                    <div className='w-196'>         
                        <div className="w-full h-[1px] bg-gray-400 mt-2 mb-8"></div>
                        <h3 className='text-[2em] mb-8'>PT.Safir Media komunika</h3>
                        <h4>Dengan pengalaman lebih dari 15 tahun berkarya di industri
                            event organizer dan event production, PT Safir Media Komunika hadir sebagai mitra
                            andal dalam merancang dan mengeksekusi berbagai jenis acara secara kreatif,
                            profesional, dan berdampak.Kami diperkuat oleh tim berpengalaman di bidang konsep acara, desain visual, konten
                            digital, dan manajemen event dari awal hingga akhir. Mulai dari event korporat,
                            launching produk, brand activation, hingga konser dan gathering—kami siap memberikan
                            solusi yang tepat dan terintegrasi.</h4>
                        </div>
                </div>
            </div>
                <Slidingbrand />
                <br></br>
            <Descriptionfooter />
            <Slidingimages />
            <Contact />
        </ReactLenis>
    )
}