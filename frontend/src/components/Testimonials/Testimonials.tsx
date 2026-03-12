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
          className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 hover:bg-white/15 transition-colors duration-300"
        >
          <p className="text-white/90 leading-relaxed">"{t.quote}"</p>
          <div className="mt-4 text-sm font-medium text-white">
            {t.name} <span className="text-white/60">· {t.country}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
