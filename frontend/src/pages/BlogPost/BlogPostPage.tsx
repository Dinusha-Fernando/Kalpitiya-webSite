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

      <Section>
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-6">
            {post.sections.map((s) => (
              <article
                key={s.heading}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800"
              >
                <h2 className="text-lg font-semibold tracking-tight">{s.heading}</h2>
                <p className="mt-2 text-slate-700 dark:text-slate-300">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:bg-slate-950 dark:border-slate-800">
            <div className="font-semibold tracking-tight">Want help planning this?</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Tell us your dates and group size - we'll suggest the best option based on season and conditions.
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
              >
                Request booking
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors focus-ring dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                Contact us
              </Link>
              <Link to="/blog" className="px-3 py-2 text-sm font-medium text-ocean-700 hover:underline dark:text-sand-100">
                More guides →
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
