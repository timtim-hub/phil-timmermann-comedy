"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera } from "lucide-react";

// ALL REAL Instagram images from @phil.timmermann
const galleryImages = [
  { src: "/media/instagram/2026-02-02_17-34-16_DUQ5aXLjbPt.jpg", title: "Dating 2. Klasse", category: "Reel" },
  { src: "/media/instagram/2025-12-16_17-18-58_DSVRcBNkUFu.jpg", title: "Frankfurt Show", category: "Performance" },
  { src: "/media/instagram/2023-10-02_17-01-20_Cx52F00qfe4.jpg", title: "Alle Arrogant?", category: "Crowd Work" },
  { src: "/media/instagram/2023-07-26_17-02-35_CvKwpSwqJcx.jpg", title: "Mein wahrer Name", category: "Köln" },
  { src: "/media/instagram/2022-06-01_17-21-02_CeRVXA6qMI1.jpg", title: "Street Style", category: "Portrait" },
  { src: "/media/instagram/2025-12-01_17-00-35_DRunT9gjHL9.jpg", title: "Nightwash Club", category: "Köln" },
  { src: "/media/instagram/2025-11-15_17-14-10_DRFcNAoDKog.jpg", title: "Comedy Show", category: "Stage" },
  { src: "/media/instagram/2025-10-31_16-57-01_DQeySFaDETR.jpg", title: "Live Performance", category: "Event" },
  { src: "/media/instagram/2025-10-23_16-06-45_DQKGFi5DCUZ.jpg", title: "Backstage", category: "Behind the Scenes" },
  { src: "/media/instagram/2025-10-21_16-13-57_DQE9d6-jJ-j.jpg", title: "Crowd Work", category: "Interaction" },
  { src: "/media/instagram/2025-10-14_16-26-56_DPy9eKujJNn.jpg", title: "Comedy Club", category: "Venue" },
  { src: "/media/instagram/2025-10-01_16-27-51_DPRfJoFjFLT.jpg", title: "Showtime", category: "Performance" },
  { src: "/media/instagram/2025-09-22_16-04-17_DO6RNCzDJ_h.jpg", title: "Open Mic", category: "Stage" },
  { src: "/media/instagram/2025-08-25_16-19-02_DNyMqfnWKeM.jpg", title: "Comedy Night", category: "Event" },
  { src: "/media/instagram/2025-07-20_16-41-48_DMVizl3oQTH.jpg", title: "On Stage", category: "Live" },
  { src: "/media/instagram/2025-07-16_16-36-55_DMLO419KxGS.jpg", title: "Performance", category: "Show" },
  { src: "/media/instagram/2025-06-26_16-49-59_DLXwpvoq_Ck.jpg", title: "Comedy Club", category: "Venue" },
  { src: "/media/instagram/2025-06-24_17-09-05_DLSpNLrqhr4.jpg", title: "Crowd Reaction", category: "Audience" },
  { src: "/media/instagram/2025-06-11_17-46-22_DKxPK-fKou4.jpg", title: "Stand Up", category: "Stage" },
  { src: "/media/instagram/2025-06-06_16-57-23_DKkRkwGKBDz.jpg", title: "Comedy Show", category: "Performance" },
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
            Instagram Galerie
          </motion.span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Real<span className="text-violet-500">.</span>Content
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Authentische Einblicke aus @phil.timmermann - Shows, backstage und mehr.
          </p>
        </motion.div>

        {/* Masonry Gallery Grid - ALL REAL INSTAGRAM IMAGES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
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

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/phil.timmermann"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-4 text-white font-semibold transition-transform hover:scale-105"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Alle 150+ Posts auf Instagram
          </a>
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
