import { FiCompass, FiFeather, FiShield, FiWind } from "react-icons/fi";

const features = [
  {
    title: "Local-first guides",
    description: "Friendly hosts who know the lagoon, seasons, and safe routes inside out.",
    icon: <FiCompass className="h-6 w-6" />,
    colSpan: "md:col-span-2",
    image: "/images/lagoon.JPG"
  },
  {
    title: "Wildlife moments",
    description: "Sunrise dolphin trips and calm nature tours built around perfect timing.",
    icon: <FiFeather className="h-6 w-6" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Comfort & safety",
    description: "Clear instructions, sensible plans, and completely stress-free booking.",
    icon: <FiShield className="h-6 w-6" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Wind & water",
    description: "Legendary seasonal conditions that make Kalpitiya the absolute perfect paradise for kitesurfing.",
    icon: <FiWind className="h-6 w-6" />,
    colSpan: "md:col-span-2",
    image: "/images/kite.jpg"
  }
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {features.map((f, index) => (
        <div
          key={f.title}
          className={`group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-white/5 border border-white/10 p-5 sm:p-6 sm:min-h-[220px] flex flex-col justify-end transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] ${f.colSpan}`}
        >
          {f.image ? (
            <>
              <div className="absolute inset-0 z-0">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
            </>
          ) : (
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
          )}

          <div className="relative z-20 mt-auto">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white shadow-inner backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30 group-hover:rotate-6">
              {f.icon}
            </div>
            
            <h3 className="text-lg sm:text-xl font-display text-white transition-colors duration-300 group-hover:text-sand-300">
              {f.title}
            </h3>
            
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/80 transition-all duration-500 group-hover:text-white transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100">
              {f.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

