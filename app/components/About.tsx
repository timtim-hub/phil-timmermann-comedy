"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Mic2, Users, Sparkles, Dumbbell } from "lucide-react";
import { bio } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/motion";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-zinc-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-zinc-950 to-zinc-950" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Image Side - Enhanced with multiple images */}
          <motion.div style={{ y: imageY }} className="relative">
            {/* Decorative elements behind image */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -left-8 -top-8 h-32 w-32 rounded-full border border-dashed border-violet-500/30"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full border border-dashed border-fuchsia-500/30"
            />

            {/* Main image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl"
            >
              <img
                src="/media/about/portrait.jpg"
                alt="Phil Timmermann"
                className="h-full w-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

              {/* Animated border */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 rounded-3xl ring-2 ring-violet-500/30 ring-offset-4 ring-offset-zinc-950"
              />
            </motion.div>

            {/* Floating secondary images */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -left-12 top-1/4 w-28 h-36 rounded-xl overflow-hidden border-4 border-zinc-950 shadow-2xl"
            >
              <img
                src="/media/about/fitness.jpg"
                alt="Fitness"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -right-8 bottom-1/4 w-32 h-40 rounded-xl overflow-hidden border-4 border-zinc-950 shadow-2xl"
            >
              <img
                src="/media/about/backstage.jpg"
                alt="Backstage"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -left-6 top-1/2 rounded-xl border border-zinc-800 bg-zinc-900/90 p-4 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20">
                  <Users className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">4.3K+</p>
                  <p className="text-xs text-zinc-500">Follower</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -right-6 top-1/3 rounded-xl border border-zinc-800 bg-zinc-900/90 p-4 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500/20">
                  <Sparkles className="h-5 w-5 text-fuchsia-400" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">100+</p>
                  <p className="text-xs text-zinc-500">Shows</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute right-8 -bottom-6 rounded-xl border border-zinc-800 bg-zinc-900/90 p-4 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                  <Dumbbell className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">Muscles</p>
                  <p className="text-xs text-zinc-500">& Witze</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div style={{ y: textY }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Section label */}
              <motion.span
                variants={fadeInUp}
                className="mb-4 inline-block text-sm font-semibold tracking-widest text-violet-400 uppercase"
              >
                Über Phil
              </motion.span>

              {/* Headline */}
              <motion.h2
                variants={fadeInUp}
                className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl"
              >
                Muskelkraft trifft auf{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  feine Ironie
                </span>
              </motion.h2>

              {/* Bio text */}
              <motion.div variants={fadeInUp} className="space-y-4 text-zinc-400 leading-relaxed">
                {bio.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </motion.div>

              {/* Quote */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 rounded-xl border-l-4 border-violet-500 bg-zinc-900/50 p-6"
              >
                <Quote className="mb-3 h-6 w-6 text-violet-400" />
                <p className="text-lg italic text-zinc-300">
                  &ldquo;{bio.headline}&rdquo;
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                {bio.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 text-center transition-colors hover:border-violet-500/30"
                  >
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
