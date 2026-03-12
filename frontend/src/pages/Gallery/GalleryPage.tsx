import { Helmet } from "react-helmet-async";
import { useCallback, useMemo, useState } from "react";
import Section from "@/components/Section/Section";
import Lightbox from "@/components/Lightbox/Lightbox";
import PageHeader from "@/components/PageHeader/PageHeader";

const images = [
  "01.jpg",
  "05.jpg",
  "pic1.jpg",
  "pic3.jpg",
  "mang.jpg",
  "mangrove.jpg",
  "lagoon.JPG",
  "TalawilaChurch.jpg",
  "fort.jpg",
  "scuba.jpg",
  "kite.jpg",
  "kalpitiyabeach.jpg"
];

export default function GalleryPage() {
  const items = useMemo(() => images.map((img) => ({ src: `/images/${img}`, alt: "Kalpitiya photo" })), []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onClose = useCallback(() => setOpenIndex(null), []);
  const onPrev = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return i;
      return (i - 1 + items.length) % items.length;
    });
  }, [items.length]);
  const onNext = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return i;
      return (i + 1) % items.length;
    });
  }, [items.length]);

  return (
    <>
      <Helmet>
        <title>Gallery | Kalpitiya Tourism</title>
      </Helmet>

      <PageHeader
        badge="Photos / Islands / Sunsets"
        title="Gallery"
        subtitle="Tap any photo to view it full-screen."
        imageUrl="/images/pic1.jpg"
      />

      <Section 
        title="Visual moments" 
        subtitle="Explore the breathtaking sights of Kalpitiya through the lenses of travelers and locals."
        tone="sand"
        divider="wave-bottom"
      >
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {items.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className="group mb-4 relative break-inside-avoid overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 focus-ring dark:bg-slate-900 dark:border-slate-800"
              aria-label="Open image"
            >
              <img 
                src={img.src} 
                alt="" 
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                decoding="async" 
              />
              <div className="absolute inset-0 bg-ocean-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-500 text-ocean-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Section>

      <Section tone="deep" divider="wave-top" title="Captured memories" subtitle="Every photo tells a story of the Indian Ocean's coastal magic.">
        <div className="p-8 glass-dark rounded-[3rem] text-center border-2 border-dashed border-white/20">
          <p className="text-xl font-bold text-white">Share your moments with us</p>
          <p className="mt-2 text-ocean-100/70">Tag your photos with #KalpitiyaParadise to be featured.</p>
        </div>
      </Section>
    </>
  );
}
