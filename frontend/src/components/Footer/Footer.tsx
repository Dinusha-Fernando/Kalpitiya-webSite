import Container from "@/components/Container/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 mesh-ocean opacity-50" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

      <Container className="relative z-20">
        <div className="pt-24 pb-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3">
              <img src="/images/logo.png" alt="Kalpitiya" className="h-12 w-12 rounded-full object-cover shadow-2xl border border-white/20" />
              <div>
                <div className="font-display text-3xl tracking-tight leading-none text-white">Kalpitiya</div>
                <div className="text-xs uppercase tracking-[0.3em] font-black text-sand-300">Tourism</div>
              </div>
            </div>
            <p className="mt-8 text-lg text-ocean-100/80 max-w-sm leading-relaxed">
              Experience the untamed beauty of Sri Lanka's coastal paradise. Dolphins, islands, and perfect winds await.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Experiences</div>
              <ul className="grid gap-4">
                <li><a href="/activities" className="text-ocean-100/60 hover:text-white transition-colors">Dolphin Watching</a></li>
                <li><a href="/activities" className="text-ocean-100/60 hover:text-white transition-colors">Island Hopping</a></li>
                <li><a href="/activities" className="text-ocean-100/60 hover:text-white transition-colors">Kitesurfing</a></li>
                <li><a href="/activities" className="text-ocean-100/60 hover:text-white transition-colors">Scuba Diving</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Plan your trip</div>
              <ul className="grid gap-4">
                <li><a href="/services" className="text-ocean-100/60 hover:text-white transition-colors">Stay & Transport</a></li>
                <li><a href="/tours" className="text-ocean-100/60 hover:text-white transition-colors">Popular Tours</a></li>
                <li><a href="/booking" className="text-ocean-100/60 hover:text-white transition-colors">Book Now</a></li>
                <li><a href="/contact" className="text-ocean-100/60 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ocean-100/50">
          <div>
            {"\u00A9"} {year} Kalpitiya Tourism. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Powered by</span>
            <span className="font-bold text-white tracking-wide">Zylux Software Solutions</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

