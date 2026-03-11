import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section/Section";
import { activities, getActivityBySlug } from "@/data/activities";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  people: number;
  activity: string;
  date: string;
  requests?: string;
};

export default function BookingPage() {
  const { register, handleSubmit, formState, control } = useForm<FormValues>({
    defaultValues: { people: 2, activity: activities[0]?.slug ?? "" }
  });
  const [submitted, setSubmitted] = useState(false);
  const selectedSlug = useWatch({ control, name: "activity" }) ?? activities[0]?.slug ?? "";
  const selectedActivity = useMemo(() => getActivityBySlug(selectedSlug), [selectedSlug]);
  const whatsappHref = useMemo(() => {
    const phone = "94775829018";
    const text = `Hi! I want to book: ${selectedActivity?.title ?? "a tour"} in Kalpitiya.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [selectedActivity?.title]);

  const onSubmit = (values: FormValues) => {
    // Placeholder: wire to backend via Axios/Fetch later.
    console.log("Booking submitted", values);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Booking | Kalpitiya Tourism</title>
      </Helmet>

      <PageHeader
        badge="Fast booking / Clear details"
        title="Request a booking"
        subtitle="Pick an activity and date - we'll confirm availability and share the best plan based on conditions."
        imageUrl="/images/05.jpg"
        right={
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors focus-ring"
          >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>
        }
      />

      <Section title="Your request" subtitle="Frontend-only demo — connect to an API later.">
        <div className="grid gap-6 lg:grid-cols-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800"
          >
            {submitted && (
              <div
                className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
                role="status"
              >
                Thanks! Your booking request was captured (frontend-only demo).
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-3">
              {["1) Choose", "2) Details", "3) Confirm"].map((s) => (
                <div
                  key={s}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200"
                >
                  {s}
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name">
                <input
                  {...register("name", { required: true })}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 outline-none focus:ring-2 focus:ring-ocean-200 dark:bg-slate-950 dark:border-slate-800"
                  placeholder="Your name"
                />
                {formState.errors.name && <ErrorText>Please enter your name.</ErrorText>}
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 outline-none focus:ring-2 focus:ring-ocean-200 dark:bg-slate-950 dark:border-slate-800"
                  placeholder="you@example.com"
                />
                {formState.errors.email && <ErrorText>Please enter a valid email.</ErrorText>}
              </Field>
              <Field label="Phone">
                <input
                  {...register("phone", { required: true })}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 outline-none focus:ring-2 focus:ring-ocean-200 dark:bg-slate-950 dark:border-slate-800"
                  placeholder="+94..."
                />
                {formState.errors.phone && <ErrorText>Please enter a phone number.</ErrorText>}
              </Field>
              <Field label="Number of people">
                <input
                  type="number"
                  min={1}
                  {...register("people", { required: true, valueAsNumber: true })}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 outline-none focus:ring-2 focus:ring-ocean-200 dark:bg-slate-950 dark:border-slate-800"
                />
              </Field>
              <Field label="Activity">
                <select
                  {...register("activity", { required: true })}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 outline-none focus:ring-2 focus:ring-ocean-200 dark:bg-slate-950 dark:border-slate-800"
                >
                  {activities.map((a) => (
                    <option key={a.slug} value={a.slug}>
                      {a.title}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Date">
                <input
                  type="date"
                  {...register("date", { required: true })}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 outline-none focus:ring-2 focus:ring-ocean-200 dark:bg-slate-950 dark:border-slate-800"
                />
                {formState.errors.date && <ErrorText>Please select a date.</ErrorText>}
              </Field>
            </div>
            <Field label="Special requests">
              <textarea
                {...register("requests")}
                rows={4}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ocean-200 dark:bg-slate-950 dark:border-slate-800"
                placeholder="Pickup point, preferred time, kids/seniors, dietary preferences, etc."
              />
            </Field>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <button
                type="submit"
                className="h-11 rounded-xl bg-ocean-600 px-5 text-sm font-medium text-white hover:bg-ocean-700 transition-colors disabled:opacity-60 focus-ring"
                disabled={formState.isSubmitting}
              >
                Submit booking
              </button>
              <Link to="/contact" className="text-sm font-medium text-ocean-700 hover:underline dark:text-sand-100">
                Prefer to ask first? Contact us →
              </Link>
            </div>
          </form>

          <aside className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
              <div className="text-sm text-slate-500 dark:text-slate-400">Selected</div>
              <div className="mt-1 text-lg font-semibold tracking-tight">{selectedActivity?.title ?? "Activity"}</div>
              <div className="mt-3 grid gap-2 text-sm">
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span>Duration</span>
                  <span className="font-medium">{selectedActivity?.duration ?? "-"}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span>From</span>
                  <span className="font-medium">{selectedActivity?.priceFrom ?? "-"}</span>
                </div>
              </div>
              {selectedActivity?.highlights?.length ? (
                <div className="mt-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Highlights</div>
                  <ul className="mt-2 grid gap-2">
                    {selectedActivity.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="mt-5">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-colors focus-ring"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:bg-slate-950 dark:border-slate-800">
              <div className="font-semibold tracking-tight">Trust signals</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Clear pricing, simple communication, and a plan matched to the day’s sea and wind conditions.
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}

function ErrorText({ children }: { children: ReactNode }) {
  return <span className="text-xs text-rose-600">{children}</span>;
}
