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
    title: "Event Organizer",
    src: "/images/eobanner.jpeg",
    color: "#EFE8D3",
    url: "/eventorganizer",
    date: "Organizing Some Of The Event"
  },
  {
    title: "Event Production",
    src: "/images/epbanner.jpeg",
    color: "#1E2A44",
    url: "eventproduction",
    date: "Product Your Agenda"
  },
  {
    title: "Company Profile",
    src: "/images/cpbanner.jpeg",
    color: "#21242b",
    url: "/companyprofile",
    date: "Video Profile Of Company"
  },
  {
    title: "Design 3D",
    src: "/images/design3dbanner.jpeg",
    color: "#1E2A44",
    url: "/design3d",
    date: "Interior Or Exterior"
  },
   {
    title: "Layout 3D",
    src: "/images/layout.jpg",
    color: "#EFE8D3",
    url: "/layout3d",
    date: "Visual Design Event"
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
        <p>Our Service</p>
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
                  <Link href={url}>
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
