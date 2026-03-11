export type Activity = {
  id: number;
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  highlights: string[];
  priceFrom: string;
  duration: string;
  category: "water" | "wildlife" | "nature" | "adventure";
};
