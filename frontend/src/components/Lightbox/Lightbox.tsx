import { useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

type Props = {
  isOpen: boolean;
  images: { src: string; alt?: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ isOpen, images, index, onClose, onPrev, onNext }: Props) {
  const current = images[index];

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !current) return null;

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/70"
        aria-label="Close image viewer"
        onClick={onClose}
      />

      <div className="relative h-dvh w-full flex items-center justify-center p-4 sm:p-8">
        <div className="relative w-full max-w-5xl">
          <div className="absolute -top-12 right-0 flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/15 transition-colors focus-ring"
              aria-label="Close"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden bg-black/30 border border-white/10">
            <div className="relative">
              <img
                src={current.src}
                alt={current.alt ?? ""}
                className="w-full max-h-[78dvh] object-contain bg-slate-950"
                decoding="async"
              />

              <div className="absolute inset-y-0 left-2 flex items-center">
                <button
                  type="button"
                  onClick={onPrev}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/15 transition-colors focus-ring"
                  aria-label="Previous image"
                >
                  <FiChevronLeft className="h-6 w-6" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/15 transition-colors focus-ring"
                  aria-label="Next image"
                >
                  <FiChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="px-4 py-3 text-sm text-white/85 flex items-center justify-between">
              <div className="truncate">{current.alt ?? "Photo"}</div>
              <div className="tabular-nums text-white/70">
                {index + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

