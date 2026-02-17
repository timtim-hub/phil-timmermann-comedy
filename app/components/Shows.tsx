"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shows, instagramImages } from "@/lib/data";
import { staggerContainer, slideInFromLeft, slideInFromRight } from "@/lib/motion";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: date.getDate().toString().padStart(2, "0"),
    month: date.toLocaleDateString("de-DE", { month: "short" }),
    weekday: date.toLocaleDateString("de-DE", { weekday: "short" }),
  };
}

function ShowCard({ show, index }: { show: typeof shows[0]; index: number }) {
  const date = formatDate(show.date);
  const isEven = index % 2 === 0;
  const imageUrl = instagramImages.shows[show.id as keyof typeof instagramImages.shows] || instagramImages.hero[0];

  return (
    <motion.div
      variants={isEven ? slideInFromLeft : slideInFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-violet-500/50">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={show.city}
            className="h-full w-full object-cover opacity-15 transition-opacity duration-300 group-hover:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-900/90" />
        </div>

        <div className="relative p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Date Block */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                  {date.month}
                </span>
                <span className="text-2xl font-black">{date.day}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  {show.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                  <Clock className="h-3.5 w-3.5" />
                  {show.time}
                  {show.recurring && (
                    <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-300 ml-2">
                      {show.recurring}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Venue Info */}
            <div className="flex-1 md:text-center">
              <p className="flex items-center gap-1.5 text-zinc-300 md:justify-center text-sm">
                <MapPin className="h-3.5 w-3.5 text-violet-400" />
                {show.venue}
              </p>
              <p className="text-xs text-zinc-500">{show.city}</p>
            </div>

            {/* Price & CTA */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className={`text-base font-bold ${show.isFree ? "text-green-400" : "text-white"}`}>
                  {show.isFree && <Star className="inline-block h-3.5 w-3.5 mr-1" />}
                  {show.price}
                </p>
              </div>

              <Button
                size="sm"
                className="rounded-full bg-white text-black hover:bg-zinc-200 text-sm px-4"
              >
                <span className="flex items-center gap-1">
                  {show.isFree ? "Reservieren" : "Tickets"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="shows"
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-zinc-950"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/15 via-zinc-950 to-zinc-950" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
            Save the Date
          </span>
          <h2 className="mb-3 text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
            Tour<span className="text-violet-500">.</span>Termine
          </h2>
          <p className="mx-auto max-w-xl text-base text-zinc-400">
            Phil live erleben — von kostenlosen Open Mics bis zu exklusiven Shows.
          </p>
        </motion.div>

        {/* Shows List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {shows.map((show, index) => (
            <ShowCard key={show.id} show={show} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
            <Calendar className="h-6 w-6 text-violet-400" />
            <h3 className="text-lg font-bold text-white">
              Keinen Termin verpassen!
            </h3>
            <p className="text-sm text-zinc-400">
              Folge Phil auf Instagram für alle Updates.
            </p>
            <Button
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 text-sm text-white"
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
