import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section/Section";
import ActivityCard from "@/components/ActivityCard/ActivityCard";
import { activities } from "@/data/activities";

const categories = [
  { key: "all" as const, label: "All" },
  { key: "wildlife" as const, label: "Wildlife" },
  { key: "nature" as const, label: "Nature" },
  { key: "water" as const, label: "Water" },
  { key: "adventure" as const, label: "Adventure" }
];

export default function ActivitiesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]["key"]>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return activities.filter((a) => {
      const matchesCategory = category === "all" ? true : a.category === category;
      const matchesQuery =
        q.length === 0
          ? true
          : `${a.title} ${a.description} ${a.highlights.join(" ")}`.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <Helmet>
        <title>Activities | Kalpitiya Tourism</title>
      </Helmet>

      <PageHeader
        badge="Dolphins / Islands / Mangroves / Diving"
        title="Activities"
        subtitle="Filter by category and search to find your perfect experience."
        imageUrl="/images/act.jpg"
      />

      <Section
        title="Browse activities"
        subtitle="Uncover the best experiences Kalpitiya has to offer, from serene lagoon tours to thrilling ocean adventures."
        tone="sand"
        divider="wave-top"
      >
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between glass p-6 rounded-[2rem] dark:glass-dark">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCategory(c.key)}
                  className={[
                    "px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 border focus-ring",
                    category === c.key
                      ? "bg-ocean-600 border-ocean-600 text-white shadow-lg shadow-ocean-200 dark:shadow-none"
                      : "bg-white border-slate-200 text-slate-700 hover:border-ocean-300 hover:text-ocean-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"
                  ].join(" ")}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 tabular-nums bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                {filtered.length} {filtered.length === 1 ? "activity" : "activities"} found
              </div>
              <div className="relative w-full sm:w-72 group">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search experiences..."
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 pr-10 outline-none focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:focus:ring-ocean-900/50"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-ocean-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ActivityCard key={a.id} activity={a} />
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white/50 rounded-[2rem] border-2 border-dashed border-slate-200 dark:bg-slate-900/50 dark:border-slate-800">
            <div className="text-4xl mb-4">🏝️</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No activities found</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => {setQuery(""); setCategory("all");}}
              className="mt-6 text-ocean-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Section>
    </>
  );
}
