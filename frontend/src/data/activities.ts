import type { Activity } from "@/types/activity";

export const activities: Activity[] = [
  {
    id: 1,
    slug: "dolphin-watching",
    title: "Dolphin Watching",
    imageUrl: "/images/dolphin.jpg",
    description: "Sunrise boat trip to spot spinner dolphins with local guides and safety-first practices.",
    highlights: ["Early-morning departure", "Life jackets included", "Family-friendly"],
    priceFrom: "$50",
    duration: "3-4 hours",
    category: "wildlife"
  },
  {
    id: 2,
    slug: "island-hopping",
    title: "Island Tours",
    imageUrl: "/images/IslandTours.jpg",
    description: "Explore nearby islands, sandbars, and turquoise lagoons with optional picnic add-ons.",
    highlights: ["Island stops", "Snorkeling time", "Photo-friendly views"],
    priceFrom: "$65",
    duration: "Half day",
    category: "nature"
  },
  {
    id: 3,
    slug: "scuba-diving",
    title: "Scuba Diving",
    imageUrl: "/images/scuba.jpg",
    description: "Beginner to advanced dives with calm-water options and equipment-ready experiences.",
    highlights: ["Certified guides", "Gear support", "Reef exploration"],
    priceFrom: "$75",
    duration: "2-3 hours",
    category: "water"
  },
  {
    id: 4,
    slug: "mangrove-tour",
    title: "Mangrove Boat Tour",
    imageUrl: "/images/mangrove.jpg",
    description: "Slow, peaceful ride through mangrove channels - ideal for birdwatching and sunsets.",
    highlights: ["Nature & birds", "Sunset option", "Relaxed pace"],
    priceFrom: "$35",
    duration: "1.5-2 hours",
    category: "nature"
  },
  {
    id: 5,
    slug: "kitesurfing",
    title: "Kitesurfing",
    imageUrl: "/images/kite.jpg",
    description: "Wind-focused lagoon sessions with seasonal recommendations and beginner lesson options.",
    highlights: ["Wind season tips", "Lagoon spots", "Lesson-ready"],
    priceFrom: "$60",
    duration: "2 hours",
    category: "adventure"
  }
];

export const getActivityBySlug = (slug: string) => activities.find((a) => a.slug === slug);
