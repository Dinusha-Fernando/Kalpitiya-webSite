import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Section from "@/components/Section/Section";
import PageHeader from "@/components/PageHeader/PageHeader";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | Kalpitiya Tourism</title>
      </Helmet>

      <PageHeader
        badge="Travel guide"
        title="Kalpitiya blog"
        subtitle="Short, practical guides for dolphins, island hopping, camping, and planning your perfect day."
        imageUrl="/images/pic3.jpg"
        right={
          <div className="flex flex-wrap gap-2">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
            >
              Request booking
            </Link>
            <Link
              to="/activities"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors focus-ring"
            >
              Browse activities
            </Link>
          </div>
        }
      />

      <Section 
        title="Travel insights" 
        subtitle="Practical guides and local stories to help you plan the perfect coastal escape."
        tone="sand"
        divider="wave-bottom"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 focus-ring dark:bg-slate-900 dark:border-slate-800"
            >
              <div className="aspect-[16/11] bg-slate-100 overflow-hidden dark:bg-slate-800 relative">
                <img
                  src={p.coverImageUrl}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-ocean-900 dark:text-sand-100">
                  {p.tags[0] ?? "Guide"}
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold text-slate-400 tabular-nums">
                  {p.date}
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 group-hover:text-ocean-600 transition-colors dark:text-slate-100 dark:group-hover:text-ocean-400">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {p.excerpt}
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-ocean-600 dark:text-ocean-400 group-hover:gap-2 transition-all">
                  <span>Read guide</span>
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="deep" divider="wave-top" title="Join our community" subtitle="Stay updated with the latest sightings and tours by following us on social media.">
        <div className="flex flex-col items-center justify-center p-12 glass-dark rounded-[3rem] border-2 border-dashed border-white/20">
          <div className="text-4xl mb-6">📸</div>
          <p className="text-2xl font-bold text-white text-center">Follow our journey @KalpitiyaParadise</p>
          <div className="mt-8 flex gap-4">
             <button className="px-8 py-3 rounded-2xl bg-white text-ocean-900 font-bold hover:scale-105 transition-transform active:scale-95">Instagram</button>
             <button className="px-8 py-3 rounded-2xl bg-ocean-600 text-white font-bold hover:scale-105 transition-transform active:scale-95">Facebook</button>
          </div>
        </div>
      </Section>
    </>
  );
}
