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

      <Section title="Latest guides" subtitle="Designed for readability now - connect to a CMS later.">
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow focus-ring dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden dark:bg-slate-900">
                <img
                  src={p.coverImageUrl}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  decoding="async"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span>{p.date}</span>
                  <span className="truncate">{p.tags[0] ?? "Guide"}</span>
                </div>
                <h3 className="mt-2 font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">{p.excerpt}</p>
                <div className="mt-4 text-sm font-medium text-ocean-700 dark:text-sand-100">Read guide →</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
