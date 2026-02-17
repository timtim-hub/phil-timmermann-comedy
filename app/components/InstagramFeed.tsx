"use client";

import { motion } from "framer-motion";
import { Instagram, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "../context/CookieConsentContext";
import { staggerContainer, fadeInUp } from "@/lib/motion";

// REAL Instagram images from @phil.timmermann (most recent)
const instagramPosts = [
  {
    id: "1",
    src: "/media/instagram/2026-02-02_17-34-16_DUQ5aXLjbPt.jpg",
    caption: "Dating 2. Klasse",
    likes: 156,
    comments: 14,
    shortcode: "DUQ5aXLjbPt",
  },
  {
    id: "2",
    src: "/media/instagram/2026-01-22_16-45-10_DT0epe3DG3x.jpg",
    caption: "New Content",
    likes: 89,
    comments: 5,
    shortcode: "DT0epe3DG3x",
  },
  {
    id: "3",
    src: "/media/instagram/2026-01-09_16-34-56_DTS_kxeDIZn.jpg",
    caption: "Show Update",
    likes: 124,
    comments: 8,
    shortcode: "DTS_kxeDIZn",
  },
  {
    id: "4",
    src: "/media/instagram/2025-12-28_18-47-50_DS0VH-QDczC.jpg",
    caption: "Comedy Night",
    likes: 203,
    comments: 12,
    shortcode: "DS0VH-QDczC",
  },
  {
    id: "5",
    src: "/media/instagram/2025-12-22_16-53-38_DSkrY5VjXtp.jpg",
    caption: "Backstage",
    likes: 178,
    comments: 9,
    shortcode: "DSkrY5VjXtp",
  },
  {
    id: "6",
    src: "/media/instagram/2025-12-16_17-18-58_DSVRcBNkUFu.jpg",
    caption: "Frankfurt!",
    likes: 245,
    comments: 18,
    shortcode: "DSVRcBNkUFu",
  },
  {
    id: "7",
    src: "/media/instagram/2025-12-01_17-00-35_DRunT9gjHL9.jpg",
    caption: "Nightwash Club",
    likes: 189,
    comments: 11,
    shortcode: "DRunT9gjHL9",
  },
  {
    id: "8",
    src: "/media/instagram/2025-11-15_17-14-10_DRFcNAoDKog.jpg",
    caption: "Comedy Show",
    likes: 167,
    comments: 7,
    shortcode: "DRFcNAoDKog",
  },
];

export function InstagramFeed() {
  const { instagramConsent, setShowBanner } = useCookieConsent();

  if (!instagramConsent) {
    return (
      <section id="instagram" className="relative py-32 bg-zinc-950 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-pink-950/10 to-zinc-950" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 backdrop-blur-sm"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400">
              <Instagram className="h-10 w-10 text-white" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Instagram Feed
            </h2>
            <p className="mb-6 text-zinc-400">
              Sehe alle Posts von Phil direkt hier. Akzeptiere Instagram-Cookies,
              um den Feed zu laden.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Button
                onClick={() => setShowBanner(true)}
                className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 px-8 text-white hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Lock className="mr-2 h-4 w-4" />
                Cookies akzeptieren & Feed laden
              </Button>
              <a
                href="https://www.instagram.com/phil.timmermann"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
              >
                Oder direkt auf Instagram ansehen
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-pink-950/10 to-zinc-950" />

      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-pink-500/10 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.a
            href="https://www.instagram.com/phil.timmermann"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 px-6 py-3 text-white shadow-lg transition-transform hover:scale-105"
            whileHover={{ y: -2 }}
          >
            <Instagram className="h-5 w-5" />
            <span className="font-semibold">@phil.timmermann</span>
            <ExternalLink className="h-4 w-4" />
          </motion.a>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Folge dem <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400">Chaos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Behind the scenes, Work-in-Progress Gags und Einblicke in das Comedian-Leben.
            Alles aus der echten Instagram Galerie.
          </p>
        </motion.div>

        {/* Instagram Grid - REAL IMAGES */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={`https://www.instagram.com/p/${post.shortcode}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group relative aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Real Instagram Image */}
              <img
                src={post.src}
                alt={post.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center text-white p-4">
                  <p className="font-semibold mb-2">{post.caption}</p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Load more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="rounded-full border-zinc-700 px-8 text-zinc-300 hover:border-pink-500/50 hover:bg-zinc-900 hover:text-white"
            asChild
          >
            <a
              href="https://www.instagram.com/phil.timmermann"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mehr auf Instagram
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
