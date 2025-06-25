'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Rounded from '../../common/RoundedButton';

export const projects = [
  {
    title: "Cozy",
    src: "/images/cozy.png",
    color: "#EFE8D3",
    url: "https://cozy-adam.vercel.app/",
    date: "14 des 2024"
  },
  {
    title: "Rental Website",
    src: "/images/rentalmotor.png",
    color: "#ff4d33",
    url: "https://rental-motor-kudus.vercel.app/",
    date: "25 Apr 2025"
  },
  {
    title: "Peristiwa Agency",
    src: "/images/peristiwa.png",
    color: "#21242b",
    url: "https://peristiwaagency.netlify.app/",
    date: "23 Juny 2025"
  },
  {
    title: "Credible Universe",
    src: "/images/credible.png",
    color: "#1E2A44",
    url: "https://credibleuniverse.netlify.app/",
    date: "23 April 2025"
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main onMouseMove={(e) => moveItems(e.clientX, e.clientY)} className={styles.projects}>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            manageModal={manageModal}
            url={project.url}
            date={project.date}
          />
        ))}
      </div>

      <Rounded>
        <p>More work</p>
      </Rounded>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={`${styles.modalContainer} ${active ? styles.active : ''}`}
        >
          <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
            {projects.map((project, i) => {
              const { src, color, url } = project;
              return (
                <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${i}`}>
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={src}
                      width={300}
                      height={0}
                      alt={`Screenshot of ${project.title}`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>

        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  );
}
