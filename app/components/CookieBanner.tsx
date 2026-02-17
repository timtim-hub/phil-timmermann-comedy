"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Instagram, BarChart3 } from "lucide-react";
import { useCookieConsent } from "../context/CookieConsentContext";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const { showBanner, setShowBanner, setConsent } = useCookieConsent();

  const handleAcceptAll = () => {
    setConsent("all", true);
    setShowBanner(false);
  };

  const handleAcceptInstagramOnly = () => {
    setConsent("instagram", true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setConsent("all", false);
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-xl shadow-2xl">
            <div className="relative p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={handleDecline}
                className="absolute right-4 top-4 rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-300"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                  <Cookie className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Cookie-Einstellungen
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Wir verwenden Cookies, um dein Erlebnis zu verbessern. 
                    Der Instagram-Feed lädt erst nach deiner Zustimmung.
                  </p>

                  {/* Cookie types */}
                  <div className="grid gap-3 sm:grid-cols-2 mb-6">
                    <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      <div>
                        <p className="text-sm font-medium text-white">Instagram</p>
                        <p className="text-xs text-zinc-500">Feed-Anzeige</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-white">Analytics</p>
                        <p className="text-xs text-zinc-500">Anonyme Statistiken</p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0"
                    >
                      Alle akzeptieren
                    </Button>
                    <Button
                      onClick={handleAcceptInstagramOnly}
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    >
                      Nur Instagram
                    </Button>
                    <Button
                      onClick={handleDecline}
                      variant="ghost"
                      className="text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
                    >
                      Ablehnen
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
