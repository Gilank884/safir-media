import React from "react";
import { motion } from "framer-motion";
import {  FaInstagram, FaWhatsapp,} from "react-icons/fa";

export const RevealLinks = () => {
    return (
        <section className="flex flex-col md:flex-row mt-5 gap-5 text-white w-fit">
            <FlipLink
                href="https://wa.me/628118129405"
                hoverText="Connect"
                Icon={FaWhatsapp} 
            >
                WhatsApp
            </FlipLink>
           
            <FlipLink href="https://www.instagram.com/pt.safirmedia_komunika/" hoverText="Cats❤️" Icon={FaInstagram}>
                Instagram
            </FlipLink>
        </section>
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({
    children,
    href,
    hoverText,
    Icon,
}) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            target="_blank"
            href={href}
            className="relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap text-xs font-bold hover:text-violet-500"
            style={{
                lineHeight: 1.5,
            }}
        >
            {/* Container for the initial text */}
            <div className="flex items-center gap-1 relative">
                <Icon className="text-lg" /> {/* Display the icon on the left */}
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={`initial-${i}`}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            {/* Container for the hover text */}
            <div className="absolute inset-0 flex items-center gap-1">
                <Icon className="text-lg" /> {/* Display the same icon on hover */}
                {hoverText.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={`hover-${i}`}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};