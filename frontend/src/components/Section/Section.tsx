import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container/Container";

type Props = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  id?: string;
  tone?: "default" | "muted" | "sand" | "ocean" | "deep" | "glass" | "sunset";
  divider?: "wave-top" | "wave-bottom" | "both" | "none";
}>;

const toneStyles = {
  default: "bg-white dark:bg-slate-950",
  muted: "bg-slate-50 dark:bg-slate-900",
  sand: "bg-[#fdfcf7] dark:bg-slate-900",
  ocean: "mesh-ocean text-white",
  deep: "bg-slate-950 text-white",
  glass: "bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/40 dark:border-slate-700/40 mx-4 sm:mx-6 lg:mx-8 rounded-[2rem] sm:rounded-[3rem] my-8 sm:my-12 lg:my-16 shadow-xl",
  sunset: "bg-gradient-to-br from-orange-50 via-white to-sand-100 dark:from-slate-950 dark:via-slate-900 dark:to-orange-900/10"
};

export default function Section({ 
  title, 
  subtitle, 
  id, 
  tone = "default", 
  divider = "none",
  children 
}: Props) {
  return (
    <section
      id={id}
      className={[
        "relative py-12 sm:py-16 lg:py-20 overflow-hidden flex flex-col justify-center min-h-[max(100dvh,min-content)]",
        toneStyles[tone]
      ].join(" ")}
    >
      {/* Immersive Decorative Elements */}
      {tone === "sand" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="bg-pattern-dots absolute inset-0 text-sand-400 opacity-20" />
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -right-20 w-64 h-64 opacity-10 text-sand-500"
          >
            <svg viewBox="0 0 200 200" fill="currentColor"><path d="M40,100 Q40,40 100,40 T160,100 T100,160 T40,100" /></svg>
          </motion.div>
        </div>
      )}
      
      {tone === "ocean" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="bg-pattern-waves absolute inset-0 opacity-20" />
          <motion.div 
            animate={{ x: [-20, 20, -20], y: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -left-20 w-80 h-80 opacity-10 text-white"
          >
            <svg viewBox="0 0 200 200" fill="currentColor"><path d="M30,150 Q70,50 150,150 T250,150" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" /></svg>
          </motion.div>
        </div>
      )}

      {(divider === "wave-top" || divider === "both") && (
        <div className="absolute top-0 inset-x-0 text-inherit fill-current h-16 -translate-y-[99%] rotate-180 z-20">
           <svg viewBox="0 0 1440 120" className="w-full h-full preserve-3d" preserveAspectRatio="none">
            <path d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,117.3C840,117,960,75,1080,58.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
          </svg>
        </div>
      )}

      <Container className="relative z-10 w-full">
        {(title || subtitle) && (
          <div className="mb-8 sm:mb-10 max-w-4xl text-center sm:text-left mx-auto sm:mx-0">
            {title && (
              <h2 className={[
                "text-3xl sm:text-4xl lg:text-5xl font-display leading-[1.1]",
                tone === "ocean" || tone === "deep" ? "text-white" : "text-slate-950 dark:text-white"
              ].join(" ")}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={[
                "mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto sm:mx-0",
                tone === "ocean" || tone === "deep" ? "text-ocean-50/80" : "text-slate-600 dark:text-slate-400"
              ].join(" ")}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </Container>

      {(divider === "wave-bottom" || divider === "both") && (
        <div className="absolute bottom-0 inset-x-0 text-inherit fill-current h-16 translate-y-[99%] z-20">
          <svg viewBox="0 0 1440 120" className="w-full h-full preserve-3d" preserveAspectRatio="none">
            <path d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,117.3C840,117,960,75,1080,58.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
          </svg>
        </div>
      )}
    </section>
  );
}
