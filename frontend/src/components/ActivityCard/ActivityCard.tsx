import { Link } from "react-router-dom";
import type { Activity } from "@/types/activity";

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
  return (
    <Link
      to={`/activities/${activity.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-slate-200/50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(38,119,235,0.15)] dark:bg-slate-900 dark:border-slate-800"
    >
      <div className="aspect-[16/11] overflow-hidden relative">
        <img
          src={activity.imageUrl}
          alt={activity.title}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          decoding="async"
        />
        
        {/* Creative Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex flex-col gap-2 scale-90 group-hover:scale-100 transition-transform duration-500 origin-top-right">
          <div className="glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-ocean-900 dark:text-sand-100 shadow-xl">
            {activity.priceFrom}
          </div>
          {activity.duration && (
            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 shadow-lg dark:bg-slate-800/90 dark:text-slate-400">
               {activity.duration}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ocean-500 mb-2">
          {activity.category}
        </div>
        <h3 className="text-2xl font-display text-slate-900 group-hover:text-ocean-600 transition-colors duration-300 dark:text-slate-100 dark:group-hover:text-ocean-400">
          {activity.title}
        </h3>
        <p className="mt-4 text-sm text-slate-500 line-clamp-2 leading-relaxed dark:text-slate-400">
          {activity.description}
        </p>
        
        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-ocean-600 dark:text-ocean-400">
            <span className="group-hover:mr-2 transition-all duration-300">View journey</span>
            <svg className="w-4 h-4 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-ocean-600 group-hover:text-white transition-all duration-500 dark:bg-slate-800">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
