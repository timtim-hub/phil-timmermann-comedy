# Phil Timmermann - Stand Up Comedian Website

**Live Site:** https://phil-timmermann-comedy.netlify.app

## Über das Projekt

Eine maximalistische, motion-first Web-Erfahrung für den Stand-Up Comedian Phil Timmermann aus Düsseldorf. Die Website vereint cinematische Animationen mit hochwertigem Design und präsentiert alle Show-Termine, Biografie und Instagram-Content.

## Features

### 🎭 Inhalt
- **Alle Show-Termine** - Übersichtliche Darstellung aller kommenden Auftritte
- **Biografie** - Vollständige "Über mich"-Sektion mit Statistiken
- **Instagram Feed** - Cookie-basierte Einbindung von @phil.timmermann
- **Deutsche Sprache** - Komplett lokalisiert

### ✨ Motion-First Design
- Cinematic scroll-choreographierte Animationen
- Parallax-Effekte und Tiefe
- Kinetic Typography mit Stagger-Effekten
- Magnetic UI-Elemente
- Mask reveals und gradient wipes
- Stateful UI metamorphosis

### 🍪 Cookie Consent
- GDPR-konforme Cookie-Einwilligung
- Instagram-Content lädt erst nach Zustimmung
- Wählbare Cookie-Kategorien (Instagram/Analytics)

### 🎨 Art Direction
- Dark theme mit Violet/Fuchsia Akzenten
- Noise textures und grid overlays
- Gradient orbs mit kontinuierlicher Animation
- Premium micro-interactions

## Tech Stack

- **Framework:** Next.js 16 + React 19
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Components:** shadcn/ui
- **Deployment:** Netlify

## Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build
```

## Show-Daten

Alle Termine sind in `lib/data.ts` definiert:

| Datum | Show | Ort | Preis |
|-------|------|-----|-------|
| 02.11.2025 | Comedy goes West | Trier | Kostenlos |
| 20.02.2026 | Comedy Ride Open Mic | Lingen | TBA |
| 21.02.2026 | Comedyflash | Gelsenkirchen | TBA |
| 17.01.2026 | Cookin' Comedy Club | München | TBA |
| Jeden Do. | Nightwash Club Open Mic | Köln | TBA |

## Instagram Integration

Der Instagram-Feed verwendet:
- Cookie-basierte Einwilligung
- Lazy loading nach Zustimmung
- Direktlinks zu allen Posts
- Fallback bei abgelehnter Einwilligung

## Projektstruktur

```
app/
├── components/
│   ├── Hero.tsx           # Cinematic hero section
│   ├── Shows.tsx          # Show dates with animations
│   ├── About.tsx          # Biography section
│   ├── InstagramFeed.tsx  # Cookie-based Instagram feed
│   ├── Navigation.tsx     # Sticky navigation
│   ├── Footer.tsx         # Site footer
│   └── CookieBanner.tsx   # GDPR cookie consent
├── context/
│   └── CookieConsentContext.tsx  # Cookie state management
├── lib/
│   ├── motion.ts          # Animation variants & tokens
│   └── data.ts            # Shows, bio, Instagram data
├── page.tsx               # Main page
├── layout.tsx             # Root layout
└── globals.css            # Global styles
```

## Motion System

Das Projekt verwendet ein systematisiertes Motion-System:

```typescript
// Durations
instant: 0.1s, fast: 0.3s, normal: 0.5s
slow: 0.8s, cinematic: 1.2s, epic: 2s

// Easing curves
smooth: [0.25, 0.1, 0.25, 1]
dramatic: [0.87, 0, 0.13, 1]
elastic: [0.34, 1.56, 0.64, 1]
```

## Credits

- **Comedian:** Phil Timmermann (@phil.timmermann)
- **Design & Entwicklung:** Claude Code
- **Bilder:** Instagram @phil.timmermann

## Lizenz

Privates Projekt für Phil Timmermann.
