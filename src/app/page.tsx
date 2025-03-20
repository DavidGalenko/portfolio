"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  // Section refs for smooth scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation settings
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black p-4 flex justify-center gap-6 z-50">
        <button className="text-white" onClick={() => scrollToSection(aboutRef)}>About</button>
        <button className="text-white" onClick={() => scrollToSection(projectsRef)}>Projects</button>
        <button className="text-white" onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>

      {/* Full-Screen Cards */}
      <section className="h-screen flex items-center justify-center bg-black text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">David Galenko</h1>
          <p className="text-xl mt-2">Full Stack Developer | DJ | Creative Thinker</p>
        </motion.div>
      </section>

      <section ref={aboutRef} className="h-screen flex items-center justify-center bg-black text-white">
        <motion.div initial="hidden" whileInView="visible" variants={textVariants} className="text-center">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg mt-2">A little bit about my journey in software engineering...</p>
        </motion.div>
      </section>

      <section ref={projectsRef} className="h-screen flex items-center justify-center bg-black text-white">
        <motion.div initial="hidden" whileInView="visible" variants={textVariants} className="text-center">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-lg mt-2">Check out some of my work, including my Shopify App and Inventory System.</p>
        </motion.div>
      </section>

      <section ref={contactRef} className="h-screen flex items-center justify-center bg-black text-white">
        <motion.div initial="hidden" whileInView="visible" variants={textVariants} className="text-center">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-lg mt-2">Let’s get in touch! Reach me via LinkedIn or Email.</p>
        </motion.div>
      </section>
    </div>
  );
}
