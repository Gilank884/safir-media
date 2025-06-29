'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Image from 'next/image';


export default function IndexComponent() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useEffect(() => {
        if (pathname !== '/') {
            document.getElementById('header').style.color = 'black';
            document.querySelectorAll('.indicator').forEach((indicator) => {
                indicator.style.backgroundColor = 'black';
            });
        }

        if (pathname === '/about') {
            document.querySelector('.about-indicator').style.transform = 'scale(1)';
        } else if (pathname === '/work') {
            document.querySelector('.work-indicator').style.transform = 'scale(1)';
        } else if (pathname === '/contact') {
            document.querySelector('.contact-indicator').style.transform = 'scale(1)';
        }
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        });
    }, []);

    return (
        <>
            <div className='hidden md:block'>
                <div ref={header} className={styles.header} id='header'>
                    <a href="/">
                        <Magnetic>
    <div className={styles.logo}>
        <Image
            src="/images/logo.png"
            alt="Safir Media Logo"
            width={40} // Ubah ukuran sesuai kebutuhan
            height={40}
        />
    </div>
</Magnetic>
                    </a>
                    <div className={styles.nav}>
                        
                        <Magnetic>
                            <div className={styles.el}>
                                <a href='/about'>About</a>
                                <div className={`indicator about-indicator ${styles.indicator}`}></div>
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className={styles.el}>
                                <a href='https://wa.me/628118129405'>Contact</a>
                                <div className={`indicator contact-indicator ${styles.indicator}`}></div>
                            </div>
                        </Magnetic>
                    </div>
                    <div ref={button} className={styles.headerButtonContainer}>
                        <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                        </Rounded>
                    </div>
                </div>
                <div ref={button} className={styles.headerButtonContainer}>
                    <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </Rounded>
                </div>
                <AnimatePresence mode="wait">
                    {isActive && <Nav />}
                </AnimatePresence>
            </div>
        </>
    )
}
