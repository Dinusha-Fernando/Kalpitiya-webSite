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

      <Section title="Gallery" subtitle="Click any photo to view it in a lightbox.">
        <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
          {items.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className="mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 hover:shadow-sm transition-shadow focus-ring dark:bg-slate-900 dark:border-slate-800"
              aria-label="Open image"
            >
              <img src={img.src} alt="" className="w-full object-cover hover:opacity-95" decoding="async" />
            </button>
          ))}
        </div>

        <Lightbox
          isOpen={openIndex !== null}
          images={items}
          index={openIndex ?? 0}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      </Section>
    </>
  );
}
