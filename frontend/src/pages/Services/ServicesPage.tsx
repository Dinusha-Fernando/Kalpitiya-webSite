import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiHome, FiMapPin, FiShield, FiTruck } from "react-icons/fi";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section/Section";

type Card = {
  title: string;
  description: string;
  bullets: string[];
  icon: JSX.Element;
};

export default function ServicesPage() {
  const accommodations: Card[] = [
    {
      title: "Beach resorts",
      description: "Comfortable stays close to the lagoon and beaches - great for couples and families.",
      bullets: ["Breakfast options", "Pool / beachfront (varies)", "Easy tour pickup"],
      icon: <FiHome className="h-5 w-5" />
    },
    {
      title: "Eco lodges",
      description: "Nature-first accommodation near mangroves and quiet coastal paths.",
      bullets: ["Calm, scenic setting", "Local hospitality", "Great for birdwatching"],
      icon: <FiMapPin className="h-5 w-5" />
    },
    {
      title: "Budget stays",
      description: "Simple rooms with the essentials - ideal if you plan to spend the day outdoors.",
      bullets: ["Best value picks", "Flexible check-in (varies)", "Near town options"],
      icon: <FiShield className="h-5 w-5" />
    }
  ];

  const rentals: Card[] = [
    {
      title: "Scooter rental",
      description: "Easy way to explore beaches, town, and sunset points on your own schedule.",
      bullets: ["Daily / weekly options", "Helmets available", "Great for short distances"],
      icon: <FiTruck className="h-5 w-5" />
    },
    {
      title: "Tuk-tuk (self-drive)",
      description: "Fun, local-style transport with more shade and space than a scooter.",
      bullets: ["Family friendly", "Good for town + beach", "Fuel guidance provided"],
      icon: <FiTruck className="h-5 w-5" />
    },
    {
      title: "Car / van with driver",
      description: "Most convenient option for transfers, groups, and day trips beyond Kalpitiya.",
      bullets: ["Airport transfers", "Group-friendly vehicles", "Door-to-door pickup"],
      icon: <FiTruck className="h-5 w-5" />
    }
  ];

  const transfers: Card[] = [
    {
      title: "Airport pickup",
      description: "Arrange a comfortable ride from Colombo (or nearby hubs) to Kalpitiya.",
      bullets: ["Meet-and-greet", "Private vehicles", "Flexible timing"],
      icon: <FiTruck className="h-5 w-5" />
    },
    {
      title: "Local pickup",
      description: "Short rides between your accommodation, lagoon, and activity meeting points.",
      bullets: ["On-request", "Great for early starts", "Coordinated with tour times"],
      icon: <FiTruck className="h-5 w-5" />
    },
    {
      title: "Custom routes",
      description: "Combine Kalpitiya with Wilpattu, Anuradhapura, or coastal stops.",
      bullets: ["Plan-friendly scheduling", "Stops for food & photos", "Ideal for multi-day trips"],
      icon: <FiTruck className="h-5 w-5" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Stay & Transport | Kalpitiya Tourism</title>
        <meta
          name="description"
          content="Accommodation, vehicle rentals, and transfers in Kalpitiya - arranged with trusted local options."
        />
      </Helmet>

      <PageHeader
        badge="Stay / Transport / Planning"
        title="Stay & Transport"
        subtitle="Accommodation categories, vehicle rental options, and transfers - all coordinated around your tour schedule."
        imageUrl="/images/kalpitiyabeach.jpg"
        right={
          <div className="flex flex-wrap gap-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors focus-ring"
            >
              Ask on WhatsApp
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
            >
              Booking form
            </Link>
          </div>
        }
      />

      <Section
        id="accommodation"
        title="Stay comfortably"
        subtitle="We recommend the best local stays matched to your style, budget, and planned activities."
        tone="sand"
        divider="wave-bottom"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {accommodations.map((card) => (
            <InfoCard key={card.title} card={card} />
          ))}
        </div>
        <div className="mt-8 glass p-6 rounded-3xl text-sm font-medium text-slate-700 dark:glass-dark dark:text-slate-300 border-2 border-dashed border-ocean-200/50">
          ✨ Share your dates + budget and we'll suggest options with the best location for your activities.
        </div>
      </Section>

      <Section
        tone="ocean"
        id="vehicle-rental"
        title="Explore with ease"
        subtitle="Choose from self-drive freedom or relaxed travel with our trusted local drivers."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {rentals.map((card) => (
            <InfoCard key={card.title} card={card} />
          ))}
        </div>
      </Section>

      <Section
        id="transfers"
        title="Seamless transfers"
        subtitle="Enjoy smooth arrivals and stress-free logistics for every part of your Kalpitiya journey."
        tone="sunset"
        divider="both"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {transfers.map((card) => (
            <InfoCard key={card.title} card={card} />
          ))}
        </div>
      </Section>

      <Section
        tone="deep"
        id="tips"
        title="Practical planning"
        subtitle="A few essential tips to help you make the most of your coastal adventure."
        divider="wave-top"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Best timing",
              icon: "🌅",
              text: "Dolphin watching is usually best at sunrise - plan an early pickup if you're staying farther away."
            },
            {
              title: "What to share",
              icon: "📝",
              text: "Message your dates, group size, budget range, and whether you prefer self-drive or a driver."
            },
            {
              title: "Season notes",
              icon: "💨",
              text: "Kitesurfing season is typically May-Oct; Nov-Apr is great for calm seas and lagoon trips."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-4 transform group-hover:rotate-12 transition-transform">{item.icon}</div>
              <h3 className="text-lg font-bold tracking-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ocean-100/70">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function InfoCard({ card }: { card: Card }) {
  return (
    <div className="group relative rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/50 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(38,119,235,0.15)] dark:bg-slate-900 dark:border-slate-800 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-ocean-500 to-sand-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-ocean-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl dark:bg-ocean-900/20 pointer-events-none" />

      <div className="relative z-10 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl sm:rounded-[1.25rem] bg-ocean-50 text-ocean-600 shadow-inner dark:bg-ocean-900/40 dark:text-ocean-300 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
        {card.icon}
      </div>
      
      <h3 className="relative z-10 mt-6 sm:mt-8 text-xl sm:text-2xl font-display text-slate-900 group-hover:text-ocean-600 transition-colors duration-300 dark:text-slate-100 dark:group-hover:text-ocean-400">
        {card.title}
      </h3>
      
      <p className="relative z-10 mt-3 sm:mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {card.description}
      </p>
      
      <ul className="relative z-10 mt-6 sm:mt-8 grid gap-3 sm:gap-4 text-sm">
        {card.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-slate-700 dark:text-slate-300 items-start">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-400 group-hover:bg-ocean-500 transition-colors duration-300" aria-hidden="true" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
