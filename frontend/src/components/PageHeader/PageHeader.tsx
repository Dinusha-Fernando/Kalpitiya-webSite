import type { ReactNode } from "react";
import Container from "@/components/Container/Container";

type Props = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  badge?: string;
  right?: ReactNode;
};

export default function PageHeader({ title, subtitle, imageUrl, badge, right }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
      {imageUrl && (
        <div className="absolute inset-0">
          <img src={imageUrl} alt="" className="h-full w-full object-cover" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/40 to-white dark:to-slate-950" />
        </div>
      )}

      {!imageUrl && (
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-ocean-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950" />
          <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-ocean-200/40 blur-3xl dark:bg-ocean-900/30" />
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sand-200/50 blur-3xl dark:bg-sand-900/20" />
        </div>
      )}

      <Container>
        <div className="relative py-12 sm:py-16 flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {badge && (
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 dark:text-slate-200">
                {badge}
              </div>
            )}
            <h1
              className={[
                "mt-3 text-3xl sm:text-4xl font-semibold tracking-tight",
                imageUrl ? "text-white" : "text-slate-900 dark:text-slate-100"
              ].join(" ")}
            >
              {title}
            </h1>
            {subtitle && (
              <p className={["mt-3", imageUrl ? "text-white/90" : "text-slate-600 dark:text-slate-400"].join(" ")}>
                {subtitle}
              </p>
            )}
          </div>
          {right && <div className="relative">{right}</div>}
        </div>
      </Container>
    </header>
  );
}

