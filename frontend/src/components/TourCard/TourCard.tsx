import { Link } from "react-router-dom";
import type { Tour } from "@/types/tour";

type Props = {
  tour: Tour;
};

export default function TourCard({ tour }: Props) {
  return (
    <Link
      to="/booking"
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow focus-ring"
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          decoding="async"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold tracking-tight">{tour.title}</div>
            <div className="mt-1 text-sm text-slate-600 line-clamp-2">{tour.description}</div>
          </div>
          <div className="shrink-0 rounded-lg bg-ocean-50 px-2 py-1 text-xs font-medium text-ocean-800">
            {tour.duration}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="font-medium text-slate-900">{tour.priceFrom}</div>
          <div className="font-medium text-ocean-700">Book →</div>
        </div>
      </div>
    </Link>
  );
}
