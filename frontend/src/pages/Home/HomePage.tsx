import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ActivityCard from "@/components/ActivityCard/ActivityCard";
import TourCard from "@/components/TourCard/TourCard";
import Testimonials from "@/components/Testimonials/Testimonials";
import Newsletter from "@/components/Newsletter/Newsletter";
import FeatureGrid from "@/components/FeatureGrid/FeatureGrid";
import { activities } from "@/data/activities";
import { tours } from "@/data/tours";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Kalpitiya Tourism | Explore Sri Lanka's Coastal Paradise</title>
        <meta
          name="description"
          content="Book dolphin watching, island tours, scuba diving, mangroves, and kitesurfing in Kalpitiya."
        />
      </Helmet>

      <HeroSection
        title="Explore Kalpitiya Paradise"
        subtitle="Dolphins at sunrise, islands in turquoise lagoons, peaceful mangroves, and wind-perfect kitesurfing."
        imageUrl="/images/05.jpg"
      />

      <Section
        title="Featured activities"
        subtitle="Curated experiences built from the current site - upgraded into a modern, easy-to-book format."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.slice(0, 5).map((a) => (
            <ActivityCard key={a.id} activity={a} />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        title="Why travelers love Kalpitiya"
        subtitle="A clean, modern experience - designed for clarity, trust, and beautiful storytelling."
      >
        <FeatureGrid />
      </Section>

      <Section
        title="Popular tours"
        subtitle="Simple packages visitors love - ready for a future availability calendar."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </Section>

      <Section title="Gallery highlights" subtitle="A quick look at beaches, lagoons, islands, and sunsets.">
        <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
          {["01.jpg", "pic1.jpg", "mang.jpg", "fort.jpg", "scuba.jpg", "kite.jpg", "lagoon.JPG", "TalawilaChurch.jpg"].map(
            (img) => (
              <div key={img} className="overflow-hidden rounded-2xl bg-slate-100 aspect-square">
                <img
                  src={`/images/${img}`}
                  alt=""
                  className="h-full w-full object-cover hover:scale-[1.03] transition-transform duration-500"
                  decoding="async"
                />
              </div>
            )
          )}
        </div>
      </Section>

      <Section tone="muted" title="What travelers say" subtitle="Add Google Reviews integration later.">
        <Testimonials />
      </Section>

      <Section title="Map" subtitle="Key places around Kalpitiya for planning your trip.">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <iframe
            title="Kalpitiya map"
            src="https://www.google.com/maps?q=Kalpitiya%2C%20Sri%20Lanka&output=embed"
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      <Section tone="muted">
        <Newsletter />
      </Section>
    </>
  );
}
