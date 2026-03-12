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

      <Section 
        title="Popular packages" 
        subtitle="Unforgettable journeys designed to show you the best of Kalpitiya's natural wonders."
        tone="sand"
        divider="wave-bottom"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </Section>

      <Section
        tone="ocean"
        title="Experience more"
        subtitle="We help you build the perfect day, whether you're seeking serenity or a shot of adrenaline."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Clear planning", icon: "📋", text: "Receive full details on timings, weather-ready gear, and pickup instructions before every trip." },
            { title: "Your way", icon: "✨", text: "Prefer a private sunset? A longer island stop? We're experts at tailoring trips to your group's vibe." },
            { title: "Added magic", icon: "🦐", text: "Enhance your tour with fresh seafood picnics, snorkeling gear, or professional photography sessions." }
          ].map((c) => (
            <div
              key={c.title}
              className="group border border-white/10 bg-white/5 p-8 rounded-[2rem] backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform">{c.icon}</div>
              <h3 className="text-xl font-bold text-white">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ocean-100/70">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
