// Phil Timmermann - All Shows and Data

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
    date: "2025-02-20",
    time: "20:00",
    title: "Comedy Ride Open Mic",
    venue: "Comedy Ride",
    city: "Lingen (Ems)",
    price: "TBA",
    description: "Open Mic Night bei Comedy Ride in Lingen",
  },
  {
    id: "3",
    date: "2025-02-21",
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

export const instagramPosts = [
  {
    id: "1",
    shortcode: "DSVRcBNkUFu",
    caption: "Frankfurt! 🎤 #frankfurt #witzig #comedy #crowdworkgott",
    likes: 156,
    comments: 14,
    type: "reel",
  },
  {
    id: "2",
    shortcode: "Cx52F00qfe4",
    caption: "Alle arrogant? 😂 #comedy #comedyclub #punchline",
    likes: 245,
    comments: 8,
    type: "reel",
  },
  {
    id: "3",
    shortcode: "CvKwpSwqJcx",
    caption: "Mein wahrer Name… 🤫 #comedy #fun #spaß",
    likes: 187,
    comments: 6,
    type: "reel",
  },
  {
    id: "4",
    shortcode: "DCSMyBeNIdF",
    caption: "Lingener Radioactive Slam ☢️ 46ste Runde!",
    likes: 89,
    comments: 3,
    type: "post",
  },
  {
    id: "5",
    shortcode: "DRepF0nCPPx",
    caption: "Catch me @nightwash_club 🎤❤️ Jeden Donnerstag!",
    likes: 203,
    comments: 12,
    type: "post",
  },
  {
    id: "6",
    shortcode: "DEcASqFM4lh",
    caption: "Neues Jahr, neue Shows! Jeden 2. + 4. Mittwoch",
    likes: 41,
    comments: 2,
    type: "reel",
  },
];

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
