// Phil Timmermann - Curated Instagram Images & Data

export interface Show {
  id: string;
  date: string;
  time: string;
  title: string;
  venue: string;
  city: string;
  address?: string;
  price: string;
  priceNote?: string;
  ticketLink?: string;
  description?: string;
  isFree?: boolean;
  recurring?: string;
}

export const shows: Show[] = [
  {
    id: "1",
    date: "2025-11-02",
    time: "19:00",
    title: "Comedy goes West",
    venue: "Haus der Stadtteilarbeit Trier West",
    city: "Trier",
    address: "Pater-Loskyll-Weg 15, 54294 Trier",
    price: "Kostenlos",
    priceNote: "Eintritt frei - Platzreservierung empfohlen",
    description: "Das kostenfreie Stand Up Comedy Event in Trier West. Auch als Livestream verfügbar auf feedbeat.io (Zuschauercode: kulturraumtrier)",
    isFree: true,
  },
  {
    id: "2",
    date: "2026-02-20",
    time: "20:00",
    title: "Comedy Ride Open Mic",
    venue: "Comedy Ride",
    city: "Lingen (Ems)",
    price: "TBA",
    description: "Open Mic Night bei Comedy Ride in Lingen",
  },
  {
    id: "3",
    date: "2026-02-21",
    time: "20:00",
    title: "Comedyflash",
    venue: "Comedyflash",
    city: "Gelsenkirchen",
    price: "TBA",
    description: "Stand Up Comedy bei Comedyflash in Gelsenkirchen",
  },
  {
    id: "4",
    date: "2026-01-17",
    time: "20:00",
    title: "Cookin' Comedy Club",
    venue: "NOVA Munich",
    city: "München",
    price: "TBA",
    description: "Die Cookin' Comedy Club Show im NOVA Munich",
  },
  {
    id: "5",
    date: "2025-12-17",
    time: "20:00",
    title: "Nightwash Club Open Mic",
    venue: "Nightwash Club",
    city: "Köln",
    price: "TBA",
    description: "Jeden Donnerstag: Comedy Open Mic im legendären Nightwash Club Köln",
    recurring: "Jeden Donnerstag",
  },
];

// CURATED selection of best Instagram images only
export const instagramImages = {
  // Hero background slideshow (landscape-friendly, high impact)
  hero: [
    "/media/instagram/2026-02-02_17-34-16_DUQ5aXLjbPt.jpg", // Dating 2. Klasse - on stage
    "/media/instagram/2025-12-16_17-18-58_DSVRcBNkUFu.jpg", // Frankfurt - performance
    "/media/instagram/2023-07-26_17-02-35_CvKwpSwqJcx.jpg", // Kölsch - stage
    "/media/instagram/2022-06-01_17-21-02_CeRVXA6qMI1.jpg", // Portrait - street style
  ],
  
  // About section (portrait focused)
  about: {
    main: "/media/instagram/2022-06-01_17-21-02_CeRVXA6qMI1.jpg", // Street portrait
    secondary: "/media/instagram/2025-12-01_17-00-35_DRunT9gjHL9.jpg", // On stage
  },
  
  // Gallery grid (curated selection of 8 best)
  gallery: [
    { src: "/media/instagram/2026-02-02_17-34-16_DUQ5aXLjbPt.jpg", title: "Dating 2. Klasse", category: "Reel" },
    { src: "/media/instagram/2025-12-16_17-18-58_DSVRcBNkUFu.jpg", title: "Frankfurt Show", category: "Performance" },
    { src: "/media/instagram/2023-10-02_17-01-20_Cx52F00qfe4.jpg", title: "Alle Arrogant?", category: "Crowd Work" },
    { src: "/media/instagram/2023-07-26_17-02-35_CvKwpSwqJcx.jpg", title: "Mein wahrer Name", category: "Köln" },
    { src: "/media/instagram/2025-11-15_17-14-10_DRFcNAoDKog.jpg", title: "Comedy Show", category: "Stage" },
    { src: "/media/instagram/2025-10-31_16-57-01_DQeySFaDETR.jpg", title: "Live Performance", category: "Event" },
    { src: "/media/instagram/2022-11-08_17-13-25_CktTrUwqHLG.jpg", title: "Portrait", category: "Personal" },
    { src: "/media/instagram/2025-12-28_18-47-50_DS0VH-QDczC.jpg", title: "Showtime", category: "Performance" },
  ],
  
  // Show cards background
  shows: {
    "1": "/media/instagram/2025-12-16_17-18-58_DSVRcBNkUFu.jpg",
    "2": "/media/instagram/2025-09-22_16-04-17_DO6RNCzDJ_h.jpg",
    "3": "/media/instagram/2025-08-25_16-19-02_DNyMqfnWKeM.jpg",
    "4": "/media/instagram/2025-10-01_16-27-51_DPRfJoFjFLT.jpg",
    "5": "/media/instagram/2023-07-26_17-02-35_CvKwpSwqJcx.jpg",
  },
  
  // Instagram feed section (8 recent posts)
  feed: [
    { src: "/media/instagram/2026-02-02_17-34-16_DUQ5aXLjbPt.jpg", caption: "Dating 2. Klasse", shortcode: "DUQ5aXLjbPt" },
    { src: "/media/instagram/2026-01-22_16-45-10_DT0epe3DG3x.jpg", caption: "New Content", shortcode: "DT0epe3DG3x" },
    { src: "/media/instagram/2026-01-09_16-34-56_DTS_kxeDIZn.jpg", caption: "Show Update", shortcode: "DTS_kxeDIZn" },
    { src: "/media/instagram/2025-12-28_18-47-50_DS0VH-QDczC.jpg", caption: "Comedy Night", shortcode: "DS0VH-QDczC" },
    { src: "/media/instagram/2025-12-22_16-53-38_DSkrY5VjXtp.jpg", caption: "Backstage", shortcode: "DSkrY5VjXtp" },
    { src: "/media/instagram/2025-12-16_17-18-58_DSVRcBNkUFu.jpg", caption: "Frankfurt!", shortcode: "DSVRcBNkUFu" },
    { src: "/media/instagram/2025-12-01_17-00-35_DRunT9gjHL9.jpg", caption: "Nightwash Club", shortcode: "DRunT9gjHL9" },
    { src: "/media/instagram/2025-11-15_17-14-10_DRFcNAoDKog.jpg", caption: "Comedy Show", shortcode: "DRFcNAoDKog" },
  ],
};

export const bio = {
  headline: "Your local Comedian",
  tagline: "Muskelkraft trifft auf feine Ironie",
  description: `Phil Timmermann sieht aus, als käme er frisch aus dem Fitnessstudio — und genau da endet das Klischee auch schon. 

Hinter den Muskeln steckt ein messerscharfer Kopf, der mit perfekt gesetzten Gags und verblüffenden Wendungen jeden Raum in Sekundenschnelle für sich gewinnt.

Sein Humor? Glasklar strukturiert, schnörkellos und dabei herrlich unangenehm ehrlich. Phil spricht aus, was alle denken, aber keiner zugeben will: die peinlichen, schrägen und komplett normalen Momente des Alltags.

Vom Düsseldorfer Jung mit Charme und Timing zur festen Größe auf der Bühne — Phil liefert nicht einfach Witze, er baut sie präzise zusammen wie ein Handwerker mit sehr gutem Gehör für Pointen.

Wer ihn erlebt, weiß: Hier trifft Muskelkraft auf feine Ironie — und das ist verdammt unterhaltsam.`,
  stats: [
    { label: "Follower", value: "4.3K+" },
    { label: "Posts", value: "150" },
    { label: "Shows", value: "100+" },
    { label: "Jahre", value: "5+" },
  ],
};

export const socialLinks = {
  instagram: "https://www.instagram.com/phil.timmermann",
  youtube: "https://www.youtube.com/@PhilTimmermann",
  email: "mailto:info@philtimmermann.de",
};
