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
        subtitle="Tap any card to view details, highlights, and a sample itinerary."
      >
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCategory(c.key)}
                  className={[
                    "px-3 py-2 rounded-xl text-sm border transition-colors focus-ring",
                    category === c.key
                      ? "bg-ocean-50 border-ocean-100 text-ocean-900 dark:bg-slate-900 dark:border-slate-800 dark:text-sand-100"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
                  ].join(" ")}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-600 dark:text-slate-400 tabular-nums">
                {filtered.length} result{filtered.length === 1 ? "" : "s"}
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search activities..."
                className="h-11 w-full md:w-72 rounded-xl border border-slate-200 bg-white px-3 outline-none focus:ring-2 focus:ring-ocean-200 dark:bg-slate-950 dark:border-slate-800"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ActivityCard key={a.id} activity={a} />
          ))}
        </div>
      </Section>
    </>
  );
}
