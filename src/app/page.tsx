"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import Link from "next/link";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [typedName, setTypedName] = useState("");
  const indexRef = useRef(0);
  const fullName = "David Galenko";

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let exitTimeout: NodeJS.Timeout;
  
    const type = () => {
      const index = indexRef.current;
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index));
        indexRef.current += 1;
        typingTimeout = setTimeout(type, 100);
      }
    };
  
    typingTimeout = setTimeout(type, 300);
    exitTimeout = setTimeout(() => setShowIntro(false), 5000);
  
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(exitTimeout);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const contactButtonRef = useRef<HTMLButtonElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const button = contactButtonRef.current;
    const glow = glowRef.current;

    if (!button || !glow) return;

    const handleMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.transform = `translate(${x - 40}px, ${y - 40}px)`;
    };

    const handleEnter = () => {
      glow.style.opacity = "0.5";
    };

    const handleLeave = () => {
      glow.style.opacity = "0";
    };

    button.addEventListener("mousemove", handleMove);
    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);

    return () => {
      button.removeEventListener("mousemove", handleMove);
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
    };
    
  }, []);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showIntro]);

  return (
    <div className="w-full">
      {/* Animated Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-50 bg-black flex flex-col justify-between px-6 py-8"
          >
            {/* Header Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="flex flex-wrap justify-between items-center gap-4 z-10 relative"
            >
              <div className="flex gap-6 text-sm font-semibold text-slate-300">
                <span className="text-white">About</span>
                <span className="text-white">Projects</span>
                <span className="text-white">Resume</span>
              </div>
              <div className="relative overflow-hidden w-fit">
                <div className="contact-glow-border" />
                <button className="contact-button-inner !bg-black text-white">Contact Me</button>
              </div>
            </motion.div>

            {/* Centered Hero Text */}
            <div className="text-center flex flex-col items-center justify-center flex-1 px-6">
              <h1 className="text-white text-4xl md:text-6xl font-bold">
                {typedName}
                {typedName.length < fullName.length && (
                  <span className="text-white animate-pulse">|</span>
                )}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
                className="text-slate-300 text-lg mt-4"
              >
                Full Stack Developer | DJ | Creative Thinker
              </motion.p>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center pb-6 mt-auto">
              <div className="text-sm text-black mb-1">Scroll</div>
              <div className="text-2xl text-black">↓</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Card */}
      <section className="h-screen flex flex-col justify-between bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-8">
        {/* Header Navigation */}
        <div className="flex flex-wrap justify-between items-center gap-4 z-10 relative">
          <div className="flex gap-6 text-sm font-semibold text-slate-300">
            <button
              type="button"
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-white transition-colors duration-300"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(projectsRef)}
              className="hover:text-white transition-colors duration-300"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(resumeRef)}
              className="hover:text-white transition-colors duration-300"
            >
              Resume
            </button>
          </div>

          {/* Contact Button (already styled) */}
          <div className="contact-glow-wrapper relative">
            <div className="contact-glow-border" />
            <button
              ref={contactButtonRef}
              onClick={() => scrollToSection(contactRef)}
              className="contact-button-inner relative z-10 overflow-hidden"
            >
              Contact Me
              <div
                ref={glowRef}
                className="absolute w-20 h-20 bg-white opacity-0 rounded-full blur-xl pointer-events-none transition-opacity duration-300"
                style={{ top: 0, left: 0, transform: "translate(-1000px, -1000px)" }}
              />
            </button>
          </div>
        </div>

        {/* Main Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center flex flex-col items-center justify-center flex-1 px-6 z-0"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold">David Galenko</h1>
          <p className="text-slate-300 text-lg mt-4">
            Full Stack Developer | DJ | Creative Thinker
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center pb-6 mt-auto">
          <motion.div
            onClick={() => scrollToSection(aboutRef)}
            initial={{ y: 0, opacity: 0.4 }}
            animate={{
              y: [0, 12, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="cursor-pointer text-center text-white"
            aria-label="Scroll to About section"
          >
            <div className="text-sm text-slate-400 mb-1">Scroll</div>
            <div className="text-2xl">↓</div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        ref={aboutRef}
        className="min-h-screen w-full bg-gradient-to-b from-[#1e293b] via-[#334155] to-[#1e293b] text-white flex flex-col items-center justify-center px-6 py-20"
      >
        <h1 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
          About
        </h1>

        <div className="max-w-3xl w-full flex flex-col space-y-12">
          {/* Work */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-sky-400 mb-2">Work</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a full stack software engineer who enjoys building systems
              that solve real-world problems — especially the ones that live
              deep in the backend. I’ve created full inventory systems, Shopify
              apps, and custom dashboards — all from scratch. I care about clean
              logic, performance, and writing code that holds up over time.
            </p>
          </motion.div>

          {/* Creative Life */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-pink-400 mb-2">
              Creative Life
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Outside of code, I’m immersed in music. I'm a DJ, a musician, and
              a songwriter — I play piano, guitar, and love creating anything
              that blends rhythm and feeling. Music gives me the same kind of
              energy that coding does: flow, expression, and experimentation.
            </p>
          </motion.div>

          {/* Always Learning */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-purple-400 mb-2">
              Always Learning
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              I enjoy sharpening my skills by solving coding challenges on
              platforms like LeetCode. Every problem teaches me a new way to
              approach logic, and I’ve actually applied several of those
              solutions directly in my day-to-day work. Since working full time,
              I’ve started thinking more deeply about how projects are
              structured and how they could be improved — and it’s made me even
              more excited to build things from the ground up.
            </p>
          </motion.div>

          {/* Movement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-green-400 mb-2">Movement</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              I’m big on movement too — gym, pickleball, beach volleyball, golf.
              I try to stay active and rotate hobbies with the seasons. I like
              having things to get better at, whether that’s in code, on stage,
              or on the court.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section
        ref={projectsRef}
        className="min-h-screen px-6 py-20 flex flex-col items-center justify-start bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          className="max-w-4xl w-full text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Projects</h2>

          {/* Inventory System Project */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-2">Warehouse Inventory System</h3>
            <p className="text-slate-300 mb-4">
              A full-stack custom warehouse tool that tracks inventory, fabric lengths, and supply chain zones in real time. Built with C#, TypeScript, and Polymer.
            </p>
            <Link
              href="/projects/inventory"
              className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-slate-200 transition"
            >
              📄 View Documentation
            </Link>
          </div>

          {/* Shopify App Project */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Custom Shopify App</h3>
            <p className="text-slate-300 mb-4">
              A private Shopify app for product importing, order fulfillment, and automated inventory updates — optimized for factory use.
            </p>
            <Link
              href="/projects/shopify"
              className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-slate-200 transition"
            >
              📄 View Documentation
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Resume */}
      <section
        ref={resumeRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-[#1e293b] via-[#475569] to-[#1e293b] text-white"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="text-center max-w-2xl px-4"
        >
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-slate-300">
            View or download my resume for a detailed look at my experience,
            skills, and accomplishments.
          </p>
        </motion.div>
      </section>

      {/* LinkedIn */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="text-center max-w-2xl px-4"
        >
          <h2 className="text-4xl font-bold mb-4">LinkedIn</h2>
          <p className="text-lg text-slate-300">
            Connect with me on LinkedIn for professional updates, insights, and
            collaboration.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section
        ref={contactRef}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-[#1e293b] via-[#334155] to-[#1e293b] text-white"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="text-center max-w-2xl px-4"
        >
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-slate-300">
            Let’s work together — drop me a message or find me on socials.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
