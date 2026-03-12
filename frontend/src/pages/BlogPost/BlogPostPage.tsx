import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section/Section";
import { getPostBySlug } from "@/data/posts";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Section title="Post not found" subtitle="Try going back to the blog list.">
        <Link
          to="/blog"
          className="inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
        >
          Back to blog
        </Link>
      </Section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Kalpitiya Tourism</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <PageHeader badge={post.date} title={post.title} subtitle={post.excerpt} imageUrl={post.coverImageUrl} />

      <Section tone="sand" divider="wave-bottom">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-xl border border-ocean-100 bg-ocean-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ocean-700 dark:bg-slate-900 dark:border-slate-800 dark:text-ocean-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid gap-8">
            {post.sections.map((s) => (
              <article
                key={s.heading}
                className="group rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 dark:bg-slate-900 dark:border-slate-800"
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-ocean-600 transition-colors">{s.heading}</h2>
                <div className="mt-4 h-1 w-12 bg-ocean-600 rounded-full group-hover:w-24 transition-all duration-500" />
                <p className="mt-6 text-slate-700 leading-relaxed dark:text-slate-300">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[3rem] border border-ocean-200 bg-ocean-50 p-10 dark:bg-slate-950 dark:border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold tracking-tight text-ocean-900 dark:text-white">Want help planning this?</h3>
              <p className="mt-3 text-ocean-800/70 dark:text-ocean-200/50 max-w-xl">
                Our local team can help you coordinate every detail mentioned in this guide, from pickup times to the best hidden lunch spots.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center rounded-2xl bg-ocean-600 px-8 py-4 text-sm font-bold text-white hover:bg-ocean-700 shadow-lg shadow-ocean-200 transition-all active:scale-95 focus-ring"
                >
                  Request this trip
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-all active:scale-95 focus-ring"
                >
                  Ask a question
                </Link>
                <Link to="/blog" className="ml-2 text-sm font-bold text-ocean-700 hover:text-ocean-900 transition-colors dark:text-sand-100">
                  More guides →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
