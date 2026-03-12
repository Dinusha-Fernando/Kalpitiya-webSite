import { Link } from "react-router-dom";
import type { Tour } from "@/types/tour";

type Props = {
  tour: Tour;
};

export default function TourCard({ tour }: Props) {
  return (
    <Link
      to={`/booking`}
      className="group flex flex-col overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-slate-200/50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(38,119,235,0.15)] dark:bg-slate-900 dark:border-slate-800 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      <div className="aspect-[4/3] overflow-hidden relative z-10">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          decoding="async"
        />
        
        {/* Creative Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 shadow-lg dark:bg-slate-800/90 dark:text-slate-400 scale-90 group-hover:scale-100 transition-transform duration-500 origin-top-right">
          {tour.duration}
        </div>
        <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 backdrop-blur-sm">Description</div>
          <div className="text-sm font-medium leading-tight mt-1 line-clamp-2 pr-4 text-slate-100">{tour.description}</div>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col relative z-10">
        <h3 className="text-2xl font-display text-slate-900 group-hover:text-ocean-600 transition-colors duration-300 dark:text-slate-100 dark:group-hover:text-ocean-400">
          {tour.title}
        </h3>
        <p className="mt-4 text-sm text-slate-500 line-clamp-2 leading-relaxed dark:text-slate-400">
          {tour.description}
        </p>
        
        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="text-xl font-bold text-ocean-700 dark:text-sand-100">
            {tour.priceFrom}
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-bold text-ocean-600 dark:text-ocean-400">
            <span className="group-hover:mr-2 transition-all duration-300">Book tour</span>
            <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-ocean-600 group-hover:text-white transition-all duration-500 dark:bg-slate-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
