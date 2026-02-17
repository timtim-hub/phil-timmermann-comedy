"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera, Film } from "lucide-react";

const galleryImages = [
  { src: "/media/gallery/gallery-1.jpg", title: "Live auf der Bühne", category: "Performance" },
  { src: "/media/gallery/gallery-2.jpg", title: "Crowd Work", category: "Show" },
  { src: "/media/gallery/gallery-3.jpg", title: "Backstage", category: "Behind the Scenes" },
  { src: "/media/gallery/gallery-4.jpg", title: "Open Mic Night", category: "Event" },
  { src: "/media/gallery/gallery-5.jpg", title: "Comedy Club", category: "Venue" },
  { src: "/media/gallery/gallery-6.jpg", title: "After Show", category: "Meet & Greet" },
  { src: "/media/hero/spotlight.jpg", title: "Spotlight", category: "Stage" },
  { src: "/media/hero/stage-lights.jpg", title: "Stage Lights", category: "Atmosphere" },
  { src: "/media/hero/comedy-stage-1.jpg", title: "Main Stage", category: "Performance" },
  { src: "/media/hero/concert.jpg", title: "Live Audience", category: "Crowd" },
  { src: "/media/hero/audience.jpg", title: "Fans", category: "Crowd" },
  { src: "/media/hero/event.jpg", title: "Event Night", category: "Show" },
];

export function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-zinc-950"
    >
      {/* Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-zinc-950 to-zinc-950" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300"
          >
            <Camera className="h-4 w-4" />
            Bildergalerie
          </motion.span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Moments<span className="text-violet-500">.</span>Captured
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Einblicke in Shows, backstage Momente und die besten Auftritte.
          </p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`relative ${
                index === 0 || index === 5 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
              }`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 rounded-full bg-white/10 backdrop-blur-sm p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Film className="h-6 w-6 text-violet-400" />
            <h3 className="text-2xl font-bold text-white">Videos</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-video overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer"
            >
              <img
                src="/media/hero/spotlight.jpg"
                alt="Comedy Performance"
                className="h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-colors group-hover:bg-violet-600/80"
                >
                  <div className="ml-1 h-0 w-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white" />
                </motion.div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-medium text-violet-400 uppercase">Highlight</span>
                <h4 className="text-xl font-bold text-white">Best of 2024</h4>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-video overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer"
            >
              <img
                src="/media/hero/stage-lights.jpg"
                alt="Crowd Work"
                className="h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-colors group-hover:bg-violet-600/80"
                >
                  <div className="ml-1 h-0 w-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white" />
                </motion.div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-medium text-violet-400 uppercase">Crowd Work</span>
                <h4 className="text-xl font-bold text-white">Live in Köln</h4>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-white">{galleryImages[selectedImage].title}</p>
                <p className="text-sm text-zinc-400">{galleryImages[selectedImage].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
