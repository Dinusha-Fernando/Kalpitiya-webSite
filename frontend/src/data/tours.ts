import type { Tour } from "@/types/tour";

export const tours: Tour[] = [
  {
    id: 1,
    title: "1-Day Kalpitiya Highlights",
    imageUrl: "/images/kalpitiyabeach.jpg",
    description: "A balanced day covering lagoon views, key landmarks, and a signature boat experience.",
    duration: "1 day",
    priceFrom: "From $95"
  },
  {
    id: 2,
    title: "Baththalangunduwa Camping",
    imageUrl: "/images/Baththalangunduwa.jpg",
    description: "Overnight island camping with stargazing, beach time, and a calm lagoon sunrise.",
    duration: "2 days",
    priceFrom: "From $180"
  },
  {
    id: 3,
    title: "Island Hopping + Snorkel",
    imageUrl: "/images/blue lagoon.png",
    description: "Hop between islands and sandbars with time to swim, snorkel, and relax on the shore.",
    duration: "Half day",
    priceFrom: "From $70"
  },
  {
    id: 4,
    title: "Dolphin Watching Sunrise",
    imageUrl: "/images/dolphin.jpg",
    description: "Catch the sunrise at sea and look for spinner dolphins during peak season months.",
    duration: "3-4 hours",
    priceFrom: "From $50"
  }
];
