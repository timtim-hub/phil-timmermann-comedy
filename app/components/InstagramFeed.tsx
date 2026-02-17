"use client";

import { motion } from "framer-motion";
import { Instagram, Lock, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "../context/CookieConsentContext";
import { instagramPosts } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/motion";

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
          </p>
        </motion.div>

        {/* Instagram Grid */}
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
              {/* Placeholder gradient representing Instagram content */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${
                    index % 3 === 0
                      ? "#1a1a2e, #16213e"
                      : index % 3 === 1
                      ? "#2d1b69, #1a1a2e"
                      : "#0f0f23, #1a1a3e"
                  })`,
                }}
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                {post.type === "reel" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="mb-3 h-12 w-12 rounded-full border-2 border-pink-500/50 border-t-pink-500"
                  />
                ) : (
                  <div className="mb-3 rounded-xl bg-zinc-800/80 p-3 backdrop-blur-sm">
                    <Instagram className="h-6 w-6 text-pink-400" />
                  </div>
                )}
                <p className="line-clamp-3 text-xs text-zinc-400">{post.caption}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 fill-pink-500 text-pink-500" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Type badge */}
              <div className="absolute right-2 top-2 rounded-full bg-black/50 p-1.5 backdrop-blur-sm">
                {post.type === "reel" ? (
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                )}
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
