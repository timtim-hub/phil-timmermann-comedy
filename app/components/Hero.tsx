"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Instagram, Youtube, Mail, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bio, socialLinks, instagramImages } from "@/lib/data";
import { heroTextStagger, textReveal } from "@/lib/motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = instagramImages.hero.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    preloadImages();
  }, []);

  // Auto-rotate background images
  useEffect(() => {
    if (!imagesLoaded) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % instagramImages.hero.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [imagesLoaded]);

  const titleWords = "PHIL TIMMERMANN".split(" ");
  const subtitleChars = "YOUR LOCAL COMEDIAN".split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background Image Slideshow - CURATED REAL IMAGES */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={instagramImages.hero[currentImage]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ 
                filter: "brightness(0.4) saturate(1.2)",
                transform: "scale(1.05)"
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80" />
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 px-4 text-center max-w-5xl mx-auto">
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
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter drop-shadow-2xl"
            >
              {titleWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
                >
                  {word}
                  {i < titleWords.length - 1 && <span className="inline-block w-3 sm:w-4" />}
                </span>
              ))}
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.03, delayChildren: 0.8 },
            },
          }}
          className="mb-6 text-base sm:text-lg md:text-xl font-medium tracking-[0.3em] text-zinc-400 uppercase"
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
              className={char === " " ? "inline-block w-2 sm:w-3" : "inline-block"}
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
          className="mx-auto max-w-xl mb-8 text-base md:text-lg text-zinc-300 italic"
        >
          &ldquo;{bio.tagline}&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            size="lg"
            className="rounded-full bg-white text-black px-6 py-5 text-base font-semibold hover:bg-zinc-200 transition-colors"
            asChild
          >
            <a href="#shows">
              <Play className="h-4 w-4 mr-2" />
              Termine ansehen
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-zinc-600 bg-zinc-900/50 backdrop-blur-sm px-6 py-5 text-base font-medium text-zinc-300 hover:border-zinc-400 hover:bg-zinc-800 hover:text-white"
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
          className="mt-10 flex items-center justify-center gap-4"
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
              className="rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm p-3 text-zinc-400 transition-all hover:border-violet-500/50 hover:bg-zinc-800 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {instagramImages.hero.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === currentImage ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#shows"
          className="flex flex-col items-center gap-1 text-zinc-500 transition-colors hover:text-white"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
