export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl: string;
  date: string;
  tags: string[];
  sections: { heading: string; body: string }[];
};
