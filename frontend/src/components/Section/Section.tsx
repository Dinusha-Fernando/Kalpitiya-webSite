import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container/Container";

type Props = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  id?: string;
  tone?: "default" | "muted";
}>;

export default function Section({ title, subtitle, id, tone = "default", children }: Props) {
  return (
    <section
      id={id}
      className={[
        "py-14 sm:py-20",
        tone === "muted" ? "bg-slate-50 border-y border-slate-200/70 dark:bg-slate-950 dark:border-slate-800" : ""
      ].join(" ")}
    >
      <Container>
        {(title || subtitle) && (
          <div className="mb-8 sm:mb-12">
            {title && <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>}
            {subtitle && <p className="mt-2 text-slate-600 max-w-2xl dark:text-slate-400">{subtitle}</p>}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fade-up"
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
