"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shows } from "@/lib/data";
import { staggerContainer, fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/motion";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: date.getDate().toString().padStart(2, "0"),
    month: date.toLocaleDateString("de-DE", { month: "short" }),
    weekday: date.toLocaleDateString("de-DE", { weekday: "short" }),
    full: date.toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

function ShowCard({ show, index }: { show: typeof shows[0]; index: number }) {
  const date = formatDate(show.date);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={isEven ? slideInFromLeft : slideInFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-violet-500/50 hover:bg-zinc-800/50 hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)] md:p-8">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Date Block */}
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                {date.month}
              </span>
              <span className="text-3xl font-black">{date.day}</span>
              <span className="text-xs opacity-80">{date.weekday}</span>
            </div>

            <div>
              <h3 className="mb-1 text-xl font-bold text-white md:text-2xl">
                {show.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {show.time}
                </span>
                {show.recurring && (
                  <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-300">
                    {show.recurring}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Venue Info */}
          <div className="flex-1 md:text-center">
            <p className="flex items-center gap-2 text-zinc-300 md:justify-center">
              <MapPin className="h-4 w-4 text-violet-400" />
              {show.venue}
            </p>
            <p className="text-sm text-zinc-500">{show.city}</p>
            {show.address && (
              <p className="text-xs text-zinc-600">{show.address}</p>
            )}
          </div>

          {/* Price & CTA */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="text-right">
              <p className={`text-lg font-bold ${show.isFree ? "text-green-400" : "text-white"}`}>
                {show.isFree && <Star className="inline-block h-4 w-4 mr-1" />}
                {show.price}
              </p>
              {show.priceNote && (
                <p className="text-xs text-zinc-500">{show.priceNote}</p>
              )}
            </div>

            <Button
              size="sm"
              className="group/btn relative overflow-hidden rounded-full bg-white text-black hover:bg-zinc-200"
            >
              <span className="relative z-10 flex items-center gap-2">
                {show.isFree ? "Reservieren" : "Tickets"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>

        {/* Description if available */}
        {show.description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileHover={{ height: "auto", opacity: 1 }}
            className="overflow-hidden"
          >
            <p className="mt-4 border-t border-zinc-800 pt-4 text-sm text-zinc-400">
              {show.description}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function Shows() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Split shows into featured and regular
  const featuredShows = shows.filter((s) => s.isFree);
  const regularShows = shows.filter((s) => !s.isFree);

  return (
    <section
      id="shows"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-zinc-950"
    >
      {/* Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-zinc-950 to-zinc-950" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300"
          >
            Save the Date
          </motion.span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Tour<span className="text-violet-500">.</span>Termine
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Phil live erleben — von kostenlosen Open Mics bis zu exklusiven Shows.
            Hier findest du alle aktuellen Termine.
          </p>
        </motion.div>

        {/* Shows List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {shows.map((show, index) => (
            <ShowCard key={show.id} show={show} index={index} />
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 backdrop-blur-sm">
            <Calendar className="h-8 w-8 text-violet-400" />
            <h3 className="text-xl font-bold text-white">
              Keinen Termin verpassen!
            </h3>
            <p className="max-w-md text-zinc-400">
              Folge Phil auf Instagram für alle Updates und neuen Show-Ankündigungen.
            </p>
            <Button
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 text-white hover:shadow-lg"
              asChild
            >
              <a
                href="https://www.instagram.com/phil.timmermann"
                target="_blank"
                rel="noopener noreferrer"
              >
                Auf Instagram folgen
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
