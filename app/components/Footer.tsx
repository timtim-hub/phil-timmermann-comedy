"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Heart, ArrowUp } from "lucide-react";
import { socialLinks } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-800 bg-zinc-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-zinc-950 to-zinc-950" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="mb-4 text-3xl font-black text-white">
                PHIL TIMMERMANN
              </h3>
              <p className="mb-6 max-w-md text-zinc-400">
                Your local Comedian. Stand Up Comedy aus Düsseldorf — 
                direkt, ehrlich und verdammt unterhaltsam.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-violet-500/50 hover:bg-zinc-800 hover:text-white"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "#shows", label: "Termine" },
                  { href: "#about", label: "Über Phil" },
                  { href: "#instagram", label: "Instagram" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Kontakt
              </h4>
              <ul className="space-y-3 text-zinc-400">
                <li>
                  <a
                    href={socialLinks.email}
                    className="transition-colors hover:text-white"
                  >
                    info@philtimmermann.de
                  </a>
                </li>
                <li>Düsseldorf, Deutschland</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
            <p className="flex items-center gap-1 text-sm text-zinc-500">
              © {new Date().getFullYear()} Phil Timmermann. Made with
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              in Düsseldorf
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                Datenschutz
              </a>
              <a
                href="#"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                Impressum
              </a>
              
              {/* Back to top */}
              <motion.button
                onClick={scrollToTop}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-violet-500/50 hover:bg-zinc-800 hover:text-white"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
