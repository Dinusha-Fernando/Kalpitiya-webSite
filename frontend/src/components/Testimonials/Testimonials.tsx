const testimonials = [
  {
    name: "Ayesha",
    country: "UAE",
    quote: "Dolphin watching at sunrise was magical. The crew was friendly and professional."
  },
  {
    name: "Daniel",
    country: "Germany",
    quote: "Loved the island-hopping day. Clear water, great vibes, and a smooth booking experience."
  },
  {
    name: "Mina",
    country: "Japan",
    quote: "Mangrove tour was peaceful and beautiful. Perfect for families and photographers."
  }
];

export default function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((t) => (
        <div
          key={t.name}
          className="rounded-2xl border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800"
        >
          <p className="text-slate-700 dark:text-slate-200">“{t.quote}”</p>
          <div className="mt-4 text-sm font-medium text-slate-900 dark:text-slate-100">
            {t.name} <span className="text-slate-500 dark:text-slate-400">· {t.country}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
