import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section/Section";
import TourCard from "@/components/TourCard/TourCard";
import { tours } from "@/data/tours";

export default function ToursPage() {
  return (
    <>
      <Helmet>
        <title>Tours | Kalpitiya Tourism</title>
      </Helmet>

      <PageHeader
        badge="Packages / Add-ons / Private boats"
        title="Tour packages"
        subtitle="Choose a ready-made package, then customize it with add-ons (snorkeling, camping, sunset, private boat)."
        imageUrl="/images/IslandTours.jpg"
        right={
          <div className="flex flex-wrap gap-2">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
            >
              Request booking
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors focus-ring"
            >
              Ask a question
            </Link>
          </div>
        }
      />

      <Section title="Popular packages" subtitle="Simple, clear options - great starting points for planning.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        title="What's included"
        subtitle="You can keep it simple, or build a full day - we'll help you choose based on conditions and your group."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Clear plan", text: "Timings, pick-up guidance, and what to bring - shared before the trip." },
            { title: "Flexible options", text: "Private vs shared, sunrise vs sunset, and island stop duration." },
            { title: "Add-ons", text: "Snorkeling, picnic, camping, photography stops, and special requests." }
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="font-semibold tracking-tight">{c.title}</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{c.text}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
