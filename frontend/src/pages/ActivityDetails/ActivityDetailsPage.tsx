import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section/Section";
import ActivityCard from "@/components/ActivityCard/ActivityCard";
import { activities, getActivityBySlug } from "@/data/activities";

export default function ActivityDetailsPage() {
  const { id } = useParams();
  const activity = id ? getActivityBySlug(id) : undefined;

  if (!activity) {
    return (
      <Section title="Activity not found" subtitle="Try going back to the activities list.">
        <Link
          to="/activities"
          className="inline-flex items-center justify-center rounded-lg bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors"
        >
          Back to activities
        </Link>
      </Section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{activity.title} | Kalpitiya Tourism</title>
        <meta name="description" content={activity.description} />
      </Helmet>

      <PageHeader
        badge={`${activity.duration} / ${activity.priceFrom}`}
        title={activity.title}
        subtitle={activity.description}
        imageUrl={activity.imageUrl}
        right={
          <div className="flex flex-wrap gap-2">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
            >
              Book this activity
            </Link>
            <Link
              to="/activities"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors focus-ring"
            >
              See all activities
            </Link>
          </div>
        }
      />

      <Section title="Highlights" subtitle="A quick snapshot of what you’ll experience.">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ul className="grid gap-3 sm:grid-cols-2">
              {activity.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-200"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:bg-slate-950 dark:border-slate-800">
            <div className="font-semibold tracking-tight">Good to know</div>
            <div className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <span>Duration</span>
                <span className="font-medium">{activity.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>From</span>
                <span className="font-medium">{activity.priceFrom}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Style</span>
                <span className="font-medium capitalize">{activity.category}</span>
              </div>
            </div>
            <div className="mt-5">
              <Link
                to="/booking"
                className="w-full inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-3 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
              >
                Request booking
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        tone="muted"
        title="Sample itinerary"
        subtitle="This is a flexible outline - final timing depends on the day's conditions."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Meet & depart", d: "Quick briefing, safety checks, and the best start time for the activity." },
            { t: "Experience", d: "Main activity time - with photo stops and adjustments for comfort." },
            { t: "Return", d: "Back to shore, optional extra stop if conditions allow." }
          ].map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="font-semibold tracking-tight">{s.t}</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="More activities" subtitle="Explore other experiences in Kalpitiya.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities
            .filter((a) => a.slug !== activity.slug)
            .slice(0, 3)
            .map((a) => (
              <ActivityCard key={a.id} activity={a} />
            ))}
        </div>
      </Section>
    </>
  );
}
