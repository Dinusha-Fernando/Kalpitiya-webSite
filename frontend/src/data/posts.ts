import type { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: 1,
    slug: "best-time-to-see-dolphins-in-kalpitiya",
    title: "Best Time to See Dolphins in Kalpitiya",
    excerpt: "Seasonality, morning timing, and what to pack for the smoothest dolphin watching trip.",
    coverImageUrl: "/images/dolphin.jpg",
    date: "2026-03-01",
    tags: ["Wildlife", "Dolphins", "Planning"],
    sections: [
      {
        heading: "Go early",
        body: "Most dolphin trips start around sunrise. Seas are often calmer in the morning and the light is beautiful for photos."
      },
      {
        heading: "What to pack",
        body: "Bring a light jacket (it can be breezy), sun protection, water, and a dry bag for your phone."
      },
      {
        heading: "Set expectations",
        body: "Wildlife sightings can't be guaranteed, but good timing and experienced guides improve your chances."
      }
    ]
  },
  {
    id: 2,
    slug: "top-5-islands-in-kalpitiya",
    title: "Top 5 Islands in Kalpitiya",
    excerpt: "From sandbars to camping islands: quick tips for planning your island hopping day.",
    coverImageUrl: "/images/IslandTours.jpg",
    date: "2026-02-18",
    tags: ["Islands", "Lagoon", "Photography"],
    sections: [
      {
        heading: "Pick your pace",
        body: "Some trips are quick island stops for swimming. Others are slower days with longer beach time and picnics."
      },
      {
        heading: "Best light",
        body: "Late afternoon gives warm tones on the water. If you prefer fewer people and cooler weather, go earlier."
      },
      {
        heading: "Add snorkeling",
        body: "If conditions allow, ask for snorkeling time. Your guide can recommend the best spots for the day."
      }
    ]
  },
  {
    id: 3,
    slug: "baththalangunduwa-camping-guide",
    title: "Baththalangunduwa Camping Guide",
    excerpt: "What to bring, what to expect, and how to make your overnight island experience comfortable.",
    coverImageUrl: "/images/Baththalangunduwa.jpg",
    date: "2026-02-05",
    tags: ["Camping", "Islands", "Adventure"],
    sections: [
      {
        heading: "Comfort basics",
        body: "Pack a headlamp, insect repellent, light bedding, and a power bank. A small dry bag keeps essentials safe."
      },
      {
        heading: "Food & water",
        body: "Confirm meals, snacks, and drinking water ahead of time. Tell us about dietary preferences early."
      },
      {
        heading: "Leave no trace",
        body: "Keep the beach clean, avoid loud music late, and respect wildlife and other travelers."
      }
    ]
  }
];

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);
