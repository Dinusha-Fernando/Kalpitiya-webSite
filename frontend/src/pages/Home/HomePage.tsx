import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ActivityCard from "@/components/ActivityCard/ActivityCard";
import TourCard from "@/components/TourCard/TourCard";
import Testimonials from "@/components/Testimonials/Testimonials";
import Newsletter from "@/components/Newsletter/Newsletter";
import FeatureGrid from "@/components/FeatureGrid/FeatureGrid";
import { Link } from "react-router-dom";
import { FiHome, FiTruck, FiMapPin } from "react-icons/fi";
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
        subtitle="Unforgettable experiences curated for your perfect Kalpitiya adventure."
        tone="sand"
        divider="wave-bottom"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.slice(0, 3).map((a) => (
            <ActivityCard key={a.id} activity={a} />
          ))}
        </div>
      </Section>

      <Section
        tone="deep"
        title="Why travelers love Kalpitiya"
        subtitle="Experience the best of Sri Lanka's coast with local experts who care about your journey."
      >
        <FeatureGrid />
      </Section>

      <Section
        title="Popular tours"
        subtitle="Explore the hidden gems of the lagoon and islands with our most popular tour packages."
        tone="default"
        divider="wave-top"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </Section>

      <Section
        tone="sunset"
        title="Stay & transport"
        subtitle="Everything you need for a comfortable stay and seamless travel around Kalpitiya."
        divider="both"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <HomeServiceCard
            to="/services#accommodation"
            icon={<FiHome className="h-6 w-6" />}
            title="Accommodation"
            text="Beach resorts, eco lodges, and budget stays - matched to your dates and style."
          />
          <HomeServiceCard
            to="/services#vehicle-rental"
            icon={<FiTruck className="h-6 w-6" />}
            title="Vehicle rental"
            text="Scooters, tuk-tuks, or a car/van with driver for easy exploring."
          />
          <HomeServiceCard
            to="/services#transfers"
            icon={<FiMapPin className="h-6 w-6" />}
            title="Transfers"
            text="Airport pickups and local rides coordinated around tour start times."
          />
        </div>
      </Section>

      <Section 
        title="Gallery highlights" 
        subtitle="A glimpse into the breathtaking beauty that awaits you in our coastal paradise."
      >
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {["01.jpg", "pic1.jpg", "mang.jpg", "fort.jpg", "scuba.jpg", "kite.jpg", "lagoon.JPG", "TalawilaChurch.jpg"].map(
            (img) => (
              <div key={img} className="group overflow-hidden rounded-3xl bg-slate-100 aspect-[4/3] dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  src={`/images/${img}`}
                  alt=""
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  decoding="async"
                />
              </div>
            )
          )}
        </div>
      </Section>

      <Section 
        tone="deep" 
        title="What travelers say" 
        subtitle="Hear from those who have explored the wonders of Kalpitiya with us."
        divider="wave-top"
      >
        <Testimonials />
      </Section>

      <Section 
        title="Everything you need" 
        subtitle="From where you sleep to how you get around — we've got your Kalpitiya journey covered."
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              id: "accommodation",
              label: "Accommodation",
              desc: "Beach resorts, eco lodges, and budget stays matched to your dates and style.",
              image: "/images/05.jpg",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              ),
            },
            {
              id: "vehicle-rental",
              label: "Vehicle Rental",
              desc: "Scooters, tuk-tuks, or a car with driver for easy exploring at your own pace.",
              image: "/images/kalpitiyabeach.jpg",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 1m2-6h4l2 4m0-4H9"/></svg>
              ),
            },
            {
              id: "transfers",
              label: "Transfers",
              desc: "Airport pickups and local rides coordinated around your tour start times.",
              image: "/images/lagoon.JPG",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
              ),
            },
          ].map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(38,119,235,0.15)] dark:bg-slate-900 dark:border-slate-800"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-white shadow-inner">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="text-[10px] font-black uppercase tracking-widest text-ocean-500">Service</div>
                <h3 className="mt-1 text-xl font-display text-slate-900 group-hover:text-ocean-600 transition-colors dark:text-slate-100">
                  {service.label}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 flex-1">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-ocean-600 dark:text-ocean-400">
                  <span className="group-hover:mr-1 transition-all duration-300">View options</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-ocean-500 to-sand-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 h-11 px-8 rounded-2xl border-2 border-ocean-600 text-ocean-600 text-sm font-bold hover:bg-ocean-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Section>

      <Section tone="sunset" divider="wave-top">
        <Newsletter />
      </Section>
    </>
  );
}

function HomeServiceCard({
  to,
  icon,
  title,
  text
}: {
  to: string;
  icon: JSX.Element;
  title: string;
  text: string;
}) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200/50 bg-white p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(38,119,235,0.15)] focus-ring dark:bg-slate-900 dark:border-slate-800"
    >
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-ocean-500 to-sand-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sunset-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl dark:bg-orange-900/10 pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-ocean-50 text-ocean-600 shadow-inner dark:bg-ocean-900/40 dark:text-ocean-300 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
          {icon}
        </div>
        
        <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-display text-slate-900 group-hover:text-ocean-600 transition-colors duration-300 dark:text-slate-100 dark:group-hover:text-ocean-400">
          {title}
        </h3>
        
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {text}
        </p>
        
        <div className="mt-5 flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-ocean-600 dark:text-ocean-400">
          <span className="group-hover:mr-2 transition-all duration-300">View details</span>
          <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-ocean-600 group-hover:text-white transition-all duration-500 dark:bg-slate-800">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
