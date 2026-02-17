"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Instagram, Youtube, Mail, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bio, socialLinks, instagramImages } from "@/lib/data";
import { heroTextStagger, textReveal } from "@/lib/motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = instagramImages.hero;
    img.onload = () => setImageLoaded(true);
  }, []);

  const titleWords = "PHIL TIMMERMANN".split(" ");
  const subtitleChars = "YOUR LOCAL COMEDIAN".split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-zinc-950"
    >
      {/* Left Side - Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-1 flex-col justify-center px-6 py-20 lg:px-12 lg:py-0"
      >
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
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
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter"
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
            className="mb-4 text-sm sm:text-base font-medium tracking-[0.3em] text-zinc-400 uppercase"
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
            className="mb-8 text-base md:text-lg text-zinc-400 italic"
          >
            &ldquo;{bio.tagline}&rdquo;
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
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
            className="mt-8 flex items-center justify-center lg:justify-start gap-4"
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
        </div>

        {/* Scroll Indicator - Mobile only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden"
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
      </motion.div>

      {/* Right Side - Image */}
      <div className="relative w-full lg:w-[45%] xl:w-[40%] min-h-[50vh] lg:min-h-screen">
        {/* Gradient overlays for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent z-10 lg:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent z-10 lg:hidden" />
        
        {/* Image */}
        <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={instagramImages.hero}
            alt="Phil Timmermann"
            className={`h-full w-full lg:w-auto lg:max-h-[90%] lg:pr-8 object-contain object-center lg:object-right transition-opacity duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              filter: "brightness(0.9)",
            }}
          />
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
      </div>

      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
    </section>
  );
}
