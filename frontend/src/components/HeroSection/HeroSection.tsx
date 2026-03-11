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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/45 to-white" />
      </div>
      <Container>
        <div className="relative py-20 sm:py-28 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-sand-300" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight text-white max-w-2xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="mt-4 text-white/90 max-w-xl"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/activities"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Explore activities
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-lg bg-ocean-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-ocean-700 transition-colors"
            >
              Book tour
            </Link>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { label: "Best season", value: "Nov-Apr" },
              { label: "Kitesurfing", value: "May-Oct" },
              { label: "Starting from", value: "$35" },
              { label: "Local guides", value: "Trusted" }
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/10 border border-white/20 p-3 text-white">
                <div className="text-xs text-white/70">{stat.label}</div>
                <div className="font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 text-white">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="currentColor"
            d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,117.3C840,117,960,75,1080,58.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
