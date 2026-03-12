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

      <Section 
        title="Experience highlights" 
        subtitle="Every detail planned to ensure you get the most out of Kalpitiya's natural beauty."
        tone="sand"
        divider="wave-bottom"
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ul className="grid gap-4 sm:grid-cols-2">
              {activity.highlights.map((h) => (
                <li
                  key={h}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 dark:bg-slate-900 dark:border-slate-800"
                >
                  <span className="shrink-0 h-6 w-6 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 group-hover:bg-ocean-600 group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-700 font-medium leading-tight dark:text-slate-200">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl dark:bg-slate-950 dark:border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-ocean-100/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">Practical Details</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm py-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 font-medium">Approx. Duration</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{activity.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm py-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 font-medium">Price Starts From</span>
                <span className="font-bold text-ocean-600 dark:text-sand-100">{activity.priceFrom}</span>
              </div>
              <div className="flex items-center justify-between text-sm py-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 font-medium">Activity Style</span>
                <span className="font-bold capitalize text-slate-900 dark:text-slate-100">{activity.category}</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/booking"
                className="w-full inline-flex items-center justify-center rounded-2xl bg-ocean-600 px-6 py-4 text-sm font-bold text-white hover:bg-ocean-700 hover:shadow-lg transition-all active:scale-95 focus-ring"
              >
                Reserve this tour
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        tone="ocean"
        title="Your journey with us"
        subtitle="A typical flow for this activity. We stay flexible to catch the best moments."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Preparation & Departure", icon: "⛵", d: "Personalized briefing, life-jacket fitting, and heading out at the optimal morning time." },
            { t: "Main Experience", icon: "✨", d: "Immersive time with the wildlife, islands, or corals, including dedicated photo stops." },
            { t: "Return & Relax", icon: "🌊", d: "A scenic cruise back to the mainland with optional stops at quiet coastal spots." }
          ].map((s) => (
            <div
              key={s.t}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4 transform group-hover:rotate-12 transition-transform">{s.icon}</div>
              <h3 className="text-lg font-bold text-white">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ocean-100/70">{s.d}</p>
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
