import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Section from "@/components/Section/Section";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Not Found | Kalpitiya Tourism</title>
      </Helmet>
      <Section title="Page not found" subtitle="The page you requested doesn’t exist.">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors"
        >
          Go home
        </Link>
      </Section>
    </>
  );
}

