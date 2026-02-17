"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Instagram, Youtube, Mail, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bio, socialLinks } from "@/lib/data";
import { heroTextStagger, textReveal } from "@/lib/motion";

const heroImages = [
  "/media/hero/spotlight.jpg",
  "/media/hero/stage-lights.jpg",
  "/media/hero/comedy-stage-1.jpg",
  "/media/hero/concert.jpg",
  "/media/hero/audience.jpg",
  "/media/hero/event.jpg",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Auto-rotate background images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const titleWords = "PHIL TIMMERMANN".split(" ");
  const subtitleChars = "YOUR LOCAL COMEDIAN".split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
            />
            {/* Dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80" />
          </motion.div>
        </AnimatePresence>

        {/* Animated gradient orbs on top */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-[120px]"
        />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </div>

      {/* Floating Image Thumbnails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[5%] w-32 h-44 rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl opacity-60"
        >
          <img src="/media/gallery/gallery-1.jpg" alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] left-[8%] w-28 h-36 rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl opacity-50"
        >
          <img src="/media/gallery/gallery-2.jpg" alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[15%] right-[5%] w-36 h-48 rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl opacity-60"
        >
          <img src="/media/gallery/gallery-3.jpg" alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[55%] right-[8%] w-32 h-40 rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl opacity-50"
        >
          <img src="/media/gallery/gallery-4.jpg" alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 px-4 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm px-4 py-2 text-sm font-medium tracking-wider text-zinc-300 uppercase">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Jetzt auf Tour
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={heroTextStagger}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          <span className="overflow-hidden block">
            <motion.span
              variants={textReveal}
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter drop-shadow-2xl"
            >
              {titleWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
                >
                  {word}
                  {i < titleWords.length - 1 && <span className="inline-block w-4 sm:w-6" />}
                </span>
              ))}
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle with character animation */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.03, delayChildren: 0.8 },
            },
          }}
          className="mb-8 text-lg sm:text-xl md:text-2xl font-medium tracking-[0.3em] text-zinc-400 uppercase"
        >
          {subtitleChars.map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
              className={char === " " ? "inline-block w-3" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mx-auto max-w-2xl mb-10 text-lg md:text-xl text-zinc-300 italic"
        >
          &ldquo;{bio.tagline}&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-6 text-lg font-semibold text-white transition-all hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.6)]"
            asChild
          >
            <a href="#shows">
              <span className="relative z-10 flex items-center gap-2">
                <Play className="h-5 w-5" />
                Termine ansehen
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-zinc-600 bg-zinc-900/50 backdrop-blur-sm px-8 py-6 text-lg font-medium text-zinc-300 transition-all hover:border-zinc-400 hover:bg-zinc-800 hover:text-white"
            asChild
          >
            <a href="#gallery">Galerie</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {[
            { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
            { icon: Youtube, href: socialLinks.youtube, label: "YouTube" },
            { icon: Mail, href: socialLinks.email, label: "E-Mail" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "E-Mail" ? "_blank" : undefined}
              rel={social.label !== "E-Mail" ? "noopener noreferrer" : undefined}
              className="group relative rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm p-4 text-zinc-400 transition-all hover:border-violet-500/50 hover:bg-zinc-800 hover:text-white"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.label}</span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`h-1 rounded-full transition-all ${
              i === currentImage ? "w-8 bg-white" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#shows"
          className="flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-white"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
        <span className="text-xs tracking-[0.5em] text-zinc-600 uppercase">
          Stand Up Comedy
        </span>
      </div>
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="text-xs tracking-[0.5em] text-zinc-600 uppercase">
          Düsseldorf • Deutschland
        </span>
      </div>
    </section>
  );
}
