"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const linkedinRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Card */}
      <section className="h-screen flex flex-col justify-between bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6">
      <div className="flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-semibold text-slate-300">
          <button onClick={() => scrollToSection(aboutRef)} className="hover:text-white transition">
            About
          </button>
          <button onClick={() => scrollToSection(projectsRef)} className="hover:text-white transition">
            Projects
          </button>
          <button onClick={() => scrollToSection(resumeRef)} className="hover:text-white transition">
            Resume
          </button>
        </div>

        {/* Contact Button (already styled) */}
        <div className="contact-glow-wrapper">
          <div className="contact-glow-border" />
          <button
            onClick={() => scrollToSection(contactRef)}
            className="contact-button-inner"
          >
            Contact Me
          </button>
        </div>
      </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center flex flex-col items-center justify-center h-full -mt-24"
        >
          <h1 className="text-5xl font-bold">David Galenko</h1>
          <p className="text-xl mt-2 text-slate-300">
            Full Stack Developer | DJ | Creative Thinker
          </p>
        </motion.div>
      </section>

      {/* About */}
      <section
        ref={aboutRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-[#1e293b] via-[#334155] to-[#1e293b] text-white"
      >
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} className="text-center max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-300">
            A passionate full-stack engineer with a love for clean systems and creative problem-solving. I thrive on working across the stack and building things that people actually use.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section
        ref={projectsRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      >
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} className="text-center max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-slate-300">
            Featuring my custom Shopify App and Warehouse Inventory System — powerful tools with sleek backend logic and real-world impact. (Screenshots coming soon!)
          </p>
        </motion.div>
      </section>

      {/* Resume */}
      <section
        ref={resumeRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-[#1e293b] via-[#475569] to-[#1e293b] text-white"
      >
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} className="text-center max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-slate-300">
            View or download my resume for a detailed look at my experience, skills, and accomplishments.
          </p>
        </motion.div>
      </section>

      {/* LinkedIn */}
      <section
        ref={linkedinRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      >
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} className="text-center max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-4">LinkedIn</h2>
          <p className="text-lg text-slate-300">
            Connect with me on LinkedIn for professional updates, insights, and collaboration.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section
        ref={contactRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-[#1e293b] via-[#334155] to-[#1e293b] text-white"
      >
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} className="text-center max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-slate-300">
            Let’s work together — drop me a message or find me on socials.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
