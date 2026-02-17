"use client";

import { motion } from "framer-motion";
import { Instagram, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "../context/CookieConsentContext";
import { instagramImages } from "@/lib/data";

export function InstagramFeed() {
  const { instagramConsent, setShowBanner } = useCookieConsent();

  if (!instagramConsent) {
    return (
      <section id="instagram" className="relative py-24 bg-zinc-950">
        <div className="mx-auto max-w-xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Instagram Feed
            </h2>
            <p className="mb-5 text-sm text-zinc-400">
              Akzeptiere Cookies, um die Instagram Galerie zu laden.
            </p>
            <div className="flex flex-col items-center gap-2">
              <Button
                onClick={() => setShowBanner(true)}
                className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 px-6 text-white"
              >
                <Lock className="mr-2 h-4 w-4" />
                Cookies akzeptieren
              </Button>
              <a
                href="https://www.instagram.com/phil.timmermann"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-white"
              >
                Direkt auf Instagram
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram" className="relative py-24 bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <a
            href="https://www.instagram.com/phil.timmermann"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 px-5 py-2.5 text-white font-medium transition-transform hover:scale-105"
          >
            <Instagram className="h-4 w-4" />
            <span>@phil.timmermann</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <h2 className="mb-2 text-3xl font-black tracking-tight text-white md:text-4xl">
            Latest<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">.</span>Posts
          </h2>
        </motion.div>

        {/* Instagram Grid - Simple 4x2 layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {instagramImages.feed.map((post, index) => (
            <motion.a
              key={post.shortcode}
              href={`https://www.instagram.com/p/${post.shortcode}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-900"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.src}
                alt={post.caption}
                className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white font-medium text-sm">{post.caption}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
