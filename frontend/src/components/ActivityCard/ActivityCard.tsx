import { Link } from "react-router-dom";
import type { Activity } from "@/types/activity";

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
  return (
    <Link
      to={`/activities/${activity.slug}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow focus-ring"
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={activity.imageUrl}
          alt={activity.title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          decoding="async"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold tracking-tight">{activity.title}</div>
            <div className="mt-1 text-sm text-slate-600 line-clamp-2">{activity.description}</div>
          </div>
          <div className="shrink-0 rounded-lg bg-sand-100 px-2 py-1 text-xs font-medium text-sand-900">
            {activity.priceFrom}
          </div>
        </div>
        <div className="mt-4 text-sm font-medium text-ocean-700">View details →</div>
      </div>
    </Link>
  );
}
