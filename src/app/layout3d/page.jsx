'use client';

import React from 'react';
import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton';
import Contact from '../../components/Contact';
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Imageslayout from '../../components/Slidinglayout';
import Landinglayout from '../../components/Landinglayout'

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
            <Landinglayout />
            <div className={`${styles.container} mx-[10%] mt-[15%]`}>
                <div>
                    <h1>
                        <span>Layout 3D<br /></span>
                        <span>Visual Design Event</span>
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
                        <span>Layout ini digunakan dalam arsitektur, desain interior, animasi, atau pengembangan produk untuk memvisualisasikan konsep secara detail, memudahkan perencanaan, dan meningkatkan pemahaman sebelum implementasi.</span>
                    </h4>
                    <h4>
                        <span className="text-gray-400">Always exploring</span>
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
                        Design Layout 3D {' '}
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
                    <div className='w-96'>
                        <h4 className='text-gray-400 mb-8'>01</h4>
                        <div className="w-full h-[1px] bg-gray-400 mt-2 mb-8"></div>
                        <h3 className='text-[2em] mb-8'>Spatial Layout</h3>
                        <h4>Penempatan elemen seperti panggung, area duduk, jalur lalu lintas, dan zona interaktif untuk memastikan alur pengunjung yang lancar.</h4>
                    </div>
                    <div className='w-96'>
                        <h4 className='text-gray-400 mb-8'>02</h4>
                        <div className="w-full h-[1px] bg-gray-400 mt-2 mb-8"></div>
                        <h3 className='text-[2em] mb-8'>Dekorasi dan Branding</h3>
                        <h4>Pemilihan elemen visual seperti backdrop, banner, dan logo yang sesuai dengan tema acara.</h4>
                    </div>
                    <div className='w-96'>
                        <h4 className='text-gray-400 mb-8'>03</h4>
                        <div className="w-full h-[1px] bg-gray-400 mt-2 mb-8"></div>
                        <h3 className='text-[2em] mb-8'>Lighting</h3>
                        <h4>Desain pencahayaan untuk menciptakan suasana, menyoroti area tertentu, atau mendukung efek dramatis.</h4>
                    </div>
                </div>
                   <div className="flex flex-col md:flex-row justify-between mb-[100px]">
                    <div className='w-96'>
                        <h4 className='text-gray-400 mb-8'>04</h4>
                        <div className="w-full h-[1px] bg-gray-400 mt-2 mb-8"></div>
                        <h3 className='text-[2em] mb-8'>Teknologi Visual</h3>
                        <h4>Penggunaan elemen seperti proyeksi 3D, augmented reality (AR), atau layar LED untuk pengalaman interaktif.</h4>
                    </div>
                    <div className='w-96'>
                        <h4 className='text-gray-400 mb-8'>05</h4>
                        <div className="w-full h-[1px] bg-gray-400 mt-2 mb-8"></div>
                        <h3 className='text-[2em] mb-8'>Furnitur dan Instalasi</h3>
                        <h4>Penempatan meja, kursi, atau instalasi seni untuk mendukung fungsi dan estetika.</h4>
                    </div>
                    <div className='w-96'>
                        <h4 className='text-gray-400 mb-8'>06</h4>
                        <div className="w-full h-[1px] bg-gray-400 mt-2 mb-8"></div>
                        <h3 className='text-[2em] mb-8'>Simulasi Interaktif</h3>
                        <h4>Visualisasi bagaimana pengunjung akan berinteraksi dengan elemen acara, seperti booth interaktif atau zona foto.</h4>
                    </div>
                </div>
            </div>
            <Imageslayout/>
            <Contact />
        </ReactLenis>
    )
}