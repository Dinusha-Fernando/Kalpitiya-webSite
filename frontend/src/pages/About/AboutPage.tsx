import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Section from "@/components/Section/Section";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Kalpitiya | Kalpitiya Tourism</title>
      </Helmet>

      <PageHeader
        badge="Nature / Culture / Lagoon life"
        title="About Kalpitiya"
        subtitle="A coastal paradise for dolphins, islands, mangroves, diving, and wind-powered adventures."
        imageUrl="/images/kalpitiyabeach.jpg"
        right={
          <div className="flex flex-wrap gap-2">
            <Link
              to="/activities"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors focus-ring"
            >
              Explore activities
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
            >
              Book a tour
            </Link>
          </div>
        }
      />

      <Section title="Kalpitiya at a glance" subtitle="Quick context to help you plan the perfect day.">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { k: "Signature", v: "Dolphin sunrise" },
            { k: "Landscape", v: "Lagoon + islands" },
            { k: "Best for", v: "Nature + water" },
            { k: "Vibe", v: "Relaxed coastal" }
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="text-xs text-slate-500 dark:text-slate-400">{s.k}</div>
              <div className="mt-2 font-semibold tracking-tight">{s.v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        title="What makes it special"
        subtitle="Kalpitiya blends wildlife, calm lagoon routes, and wind season thrills - with plenty of photo moments."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800">
            <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-900">
              <img src="/images/lagoon.JPG" alt="Kalpitiya lagoon" className="h-full w-full object-cover" decoding="async" />
            </div>
            <div className="p-6">
              <div className="font-semibold tracking-tight">Lagoon routes & mangroves</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Peaceful boat rides, birds, and golden-hour light - perfect for families and photographers.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800">
            <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-900">
              <img src="/images/dolphin.jpg" alt="Dolphin watching" className="h-full w-full object-cover" decoding="async" />
            </div>
            <div className="p-6">
              <div className="font-semibold tracking-tight">Wildlife at sunrise</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Early starts pay off - calm seas and the best chance to spot spinner dolphins.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Plan your trip" subtitle="Choose your style: relaxed, adventurous, or a bit of both.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "First time", text: "Try dolphin watching + an easy island stop for swimming and photos." },
            { title: "Adventure", text: "Add diving or kitesurfing — ask for seasonal wind and sea conditions." },
            { title: "Nature lovers", text: "Mangroves at sunset are calm, scenic, and great for birdwatching." }
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="font-semibold tracking-tight">{c.title}</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{c.text}</div>
              <div className="mt-4">
                <Link to="/activities" className="text-sm font-medium text-ocean-700 hover:underline dark:text-sand-100">
                  Browse activities →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
