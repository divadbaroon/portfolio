"use client";

import React, { useState } from "react";
import {
  PiGithubLogoThin,
  PiLinkedinLogoThin,
} from "react-icons/pi";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

function TestimonialTooltip() {
  const [hoveredIndex, setHoveredIndex] = useState();

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const people = [
    {
      id: 1,
      name: "Github",
      position: "https://github.com/divadbaroon",
      image: <PiGithubLogoThin />,
    },
    {
      id: 2,
      name: "LinkedIn",
      position: "https://www.linkedin.com/in/david-barron-8248a11aa",
      image: <PiLinkedinLogoThin />,
    },
  ];

  const handleIconClick = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <div
      className="flex flex-row items-center gap-x-9  
    cursor-pointer
    "
    >
      {people.map((testimonial, idx) => (
        <div
          className="-mr-4  relative group"
          key={testimonial.name}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleIconClick(testimonial.position)} // Add onClick event
          style={{ cursor: "pointer" }} // Make the icon look clickable
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {testimonial.name}
                </div>
                <div className="text-white text-xs">{testimonial.position}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <p>{testimonial.image}</p>
        </div>
      ))}
    </div>
  );
}

export default TestimonialTooltip;