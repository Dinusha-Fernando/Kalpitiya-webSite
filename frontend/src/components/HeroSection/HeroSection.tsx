import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "@/components/Container/Container";

type Props = {
  title: string;
  subtitle: string;
  imageUrl: string;
  eyebrow?: string;
};

export default function HeroSection({ title, subtitle, imageUrl, eyebrow = "Sri Lanka / Kalpitiya" }: Props) {
  return (
    <section className="relative min-h-[70dvh] overflow-hidden flex flex-col justify-center py-12 sm:py-16">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-slate-950/60 to-slate-950/40 pointer-events-none" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-32 h-32 text-white/10 blur-[2px]"
        >
          <svg viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="50" r="40" /></svg>
        </motion.div>
      </div>

      <Container className="relative z-20">
        <div className="max-w-3xl pt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-white backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-sand-300 animate-pulse" aria-hidden="true" />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-display leading-[1.05] sm:leading-[0.95] text-white"
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-[0.2em]">{word}</span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              to="/activities"
              className="group relative h-11 w-full sm:w-auto px-8 inline-flex items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
            >
              <span className="relative z-10">Explore activities</span>
              <div className="absolute inset-0 bg-ocean-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              to="/booking"
              className="group h-11 w-full sm:w-auto px-8 inline-flex items-center justify-center rounded-xl bg-ocean-600 text-sm font-bold text-white transition-all hover:bg-ocean-700 hover:scale-105 active:scale-95 shadow-2xl shadow-ocean-600/20"
            >
              Book your tour
            </Link>
          </motion.div>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
            {[
              { label: "Best season", value: "Nov - Apr" },
              { label: "Kitesurfing", value: "May - Oct" },
              { label: "Starting from", value: "$35" },
              { label: "Local guides", value: "Trusted" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + (i * 0.1) }}
                className="group cursor-default rounded-xl border border-white/60 bg-white/70 p-3 backdrop-blur-xl shadow-xl shadow-slate-900/10 hover:bg-white/90 transition-all duration-300"
              >
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
                <div className="mt-0.5 text-base font-black text-slate-900 group-hover:text-ocean-600 transition-colors">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 text-white z-30 fill-current h-24">
        <svg viewBox="0 0 1440 120" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          <path d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,117.3C840,117,960,75,1080,58.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
