import { FiCompass, FiFeather, FiShield, FiWind } from "react-icons/fi";

const features = [
  {
    title: "Local-first guides",
    description: "Friendly hosts who know the lagoon, seasons, and safe routes.",
    icon: <FiCompass className="h-5 w-5" />
  },
  {
    title: "Wildlife moments",
    description: "Sunrise dolphin trips and calm nature tours built around good timing.",
    icon: <FiFeather className="h-5 w-5" />
  },
  {
    title: "Comfort & safety",
    description: "Clear instructions, sensible plans, and easy-to-understand booking.",
    icon: <FiShield className="h-5 w-5" />
  },
  {
    title: "Wind & water",
    description: "Seasonal conditions that make Kalpitiya perfect for kitesurfing and lagoon days.",
    icon: <FiWind className="h-5 w-5" />
  }
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow dark:bg-slate-950 dark:border-slate-800"
        >
          <div className="flex items-start gap-4">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-800 dark:bg-slate-900 dark:text-sand-100">
              {f.icon}
            </div>
            <div>
              <div className="font-semibold tracking-tight">{f.title}</div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{f.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

