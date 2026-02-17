"use client";

import { CookieConsentProvider } from "./context/CookieConsentContext";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Shows } from "./components/Shows";
import { About } from "./components/About";
import { InstagramFeed } from "./components/InstagramFeed";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";

export default function Home() {
  return (
    <CookieConsentProvider>
      <main className="min-h-screen bg-zinc-950">
        <Navigation />
        <Hero />
        <Shows />
        <About />
        <InstagramFeed />
        <Footer />
        <CookieBanner />
      </main>
    </CookieConsentProvider>
  );
}
