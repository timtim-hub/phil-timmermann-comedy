"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Users, Sparkles, Dumbbell } from "lucide-react";
import { bio, instagramImages } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/motion";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-zinc-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-900/10 via-zinc-950 to-zinc-950" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side - Single clean image */}
          <motion.div style={{ y: imageY }} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={instagramImages.about.main}
                alt="Phil Timmermann"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
              
              {/* Simple border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </motion.div>

            {/* One floating card only */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -left-4 bottom-8 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20">
                  <Users className="h-4 w-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">4.3K+</p>
                  <p className="text-xs text-zinc-500">Follower</p>
                </div>
              </div>
            </motion.div>

            {/* Secondary image - small */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -right-4 top-8 w-24 h-32 rounded-xl overflow-hidden border-4 border-zinc-950 shadow-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={instagramImages.about.secondary}
                alt="Phil on stage"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                variants={fadeInUp}
                className="mb-3 inline-block text-sm font-semibold tracking-widest text-violet-400 uppercase"
              >
                Über Phil
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="mb-5 text-3xl font-black leading-tight text-white md:text-4xl"
              >
                Muskelkraft trifft auf{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  feine Ironie
                </span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-3 text-zinc-400 leading-relaxed text-sm md:text-base">
                {bio.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-6 rounded-xl border-l-4 border-violet-500 bg-zinc-900/50 p-4"
              >
                <Quote className="mb-2 h-5 w-5 text-violet-400" />
                <p className="text-base italic text-zinc-300">
                  &ldquo;{bio.headline}&rdquo;
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-6 grid grid-cols-4 gap-3"
              >
                {bio.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-3 text-center"
                  >
                    <p className="text-xl font-black text-white">{stat.value}</p>
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
