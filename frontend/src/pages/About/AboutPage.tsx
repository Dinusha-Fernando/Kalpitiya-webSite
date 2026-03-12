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

      <Section 
        title="Kalpitiya at a glance" 
        subtitle="Experience a unique blend of nature, culture, and coastal adventure."
        tone="sand"
        divider="wave-bottom"
      >
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { k: "Signature", v: "Dolphin sunrise", icon: "🐬" },
            { k: "Landscape", v: "Lagoon + islands", icon: "🏝️" },
            { k: "Best for", v: "Nature + water", icon: "🌊" },
            { k: "Vibe", v: "Relaxed coastal", icon: "☀️" }
          ].map((s) => (
            <div
              key={s.k}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-slate-900 dark:border-slate-800"
            >
              <div className="text-3xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{s.icon}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{s.k}</div>
              <div className="mt-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white">{s.v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="ocean"
        title="What makes it special"
        subtitle="A coastal gem where the Indian Ocean meets peaceful lagoons and thriving mangroves."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="group rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 shadow-2xl">
            <div className="aspect-[16/10] bg-slate-900 overflow-hidden">
              <img src="/images/lagoon.JPG" alt="Kalpitiya lagoon" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" decoding="async" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white">Lagoon routes & mangroves</h3>
              <p className="mt-3 text-ocean-100/80 leading-relaxed">
                Peaceful boat rides through emerald waters, hidden bird sanctuaries, and golden-hour light — perfect for families and nature photographers.
              </p>
            </div>
          </div>

          <div className="group rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 shadow-2xl">
            <div className="aspect-[16/10] bg-slate-900 overflow-hidden">
              <img src="/images/dolphin.jpg" alt="Dolphin watching" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" decoding="async" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white">Wildlife at sunrise</h3>
              <p className="mt-3 text-ocean-100/80 leading-relaxed">
                Early starts reward you with calm seas and the magical sight of hundreds of spinner dolphins dancing in their natural habitat.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section 
        title="Plan your trip" 
        subtitle="Tailor your stay in Kalpitiya precisely to your rhythm and spirit of adventure."
        tone="glass"
        divider="wave-top"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "First time", text: "Start with a classic dolphin watching trip followed by a relaxing afternoon on the pristine islands." },
            { title: "Adventure", text: "Dive into the deep blue or harness the wind with world-class kitesurfing — let us guide you to the best spots." },
            { title: "Nature lovers", text: "Explore the ancient mangroves at sunset for a serene experience surrounded by local wildlife." }
          ].map((c) => (
            <div
              key={c.title}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-2xl transition-all duration-300 dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-ocean-400 to-sand-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{c.text}</p>
              <div className="mt-6 flex items-center text-sm font-semibold text-ocean-700 dark:text-sand-100 group-hover:gap-2 transition-all">
                <Link to="/activities">Browse activities</Link>
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
