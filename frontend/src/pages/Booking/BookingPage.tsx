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

      <Section 
        title="Reserve your spot" 
        subtitle="Secure your coastal adventure today. We'll confirm the best timings and conditions for your chosen date."
        tone="sand"
        divider="wave-bottom"
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 grid gap-6 rounded-[3rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-xl dark:bg-slate-950 dark:border-slate-800"
          >
            {submitted && (
              <div
                className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm font-medium text-emerald-900 animate-in fade-in slide-in-from-top-4 duration-500"
                role="status"
              >
                ✨ Request captured! Our team will contact you shortly to confirm details.
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "1) Choose activity", active: true },
                { label: "2) Group details", active: false },
                { label: "3) Confirmation", active: false }
              ].map((s, idx) => (
                <div
                  key={s.label}
                  className={[
                    "rounded-2xl border px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all",
                    idx === 0 
                      ? "bg-ocean-600 border-ocean-600 text-white shadow-lg shadow-ocean-100" 
                      : "bg-slate-50 border-slate-200 text-slate-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-600"
                  ].join(" ")}
                >
                  {s.label}
                </div>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name">
                <input
                  {...register("name", { required: true })}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-white"
                  placeholder="Your name"
                />
                {formState.errors.name && <ErrorText>Name is required.</ErrorText>}
              </Field>
              <Field label="Email Address">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-white"
                  placeholder="you@email.com"
                />
                {formState.errors.email && <ErrorText>Valid email is required.</ErrorText>}
              </Field>
              <Field label="Phone Number">
                <input
                  {...register("phone", { required: true })}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-white"
                  placeholder="+94..."
                />
                {formState.errors.phone && <ErrorText>Phone number is required.</ErrorText>}
              </Field>
              <Field label="Number of Guests">
                <input
                  type="number"
                  min={1}
                  {...register("people", { required: true, valueAsNumber: true })}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-white"
                />
              </Field>
              <Field label="Select Activity">
                <select
                  {...register("activity", { required: true })}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-white appearance-none"
                >
                  {activities.map((a) => (
                    <option key={a.slug} value={a.slug}>
                      {a.title}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Date">
                <input
                  type="date"
                  {...register("date", { required: true })}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-white"
                />
                {formState.errors.date && <ErrorText>Please select a date.</ErrorText>}
              </Field>
            </div>
            <Field label="Special Requests / Customizations">
              <textarea
                {...register("requests")}
                rows={4}
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-white"
                placeholder="Pickup point, preferred boat time, kids ages, dietary needs, etc."
              />
            </Field>

            <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between pt-4">
              <button
                type="submit"
                className="h-12 px-10 rounded-2xl bg-ocean-600 text-sm font-bold text-white hover:bg-ocean-700 hover:shadow-xl hover:shadow-ocean-100 transition-all active:scale-95 disabled:opacity-50 focus-ring"
                disabled={formState.isSubmitting}
              >
                Send Request
              </button>
              <Link to="/contact" className="text-sm font-bold text-ocean-600 hover:text-ocean-700 transition-colors dark:text-sand-100">
                Have questions? Message us first →
              </Link>
            </div>
          </form>

          <aside className="grid gap-6">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm dark:bg-slate-950 dark:border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sand-100/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Selection</div>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  {selectedActivity?.title ?? "Activity"}
                </h3>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm py-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 font-medium">Approx. Duration</span>
                    <span className="font-bold text-slate-900 dark:text-slate-200">{selectedActivity?.duration ?? "-"}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 font-medium">Starting from</span>
                    <span className="font-bold text-ocean-600 dark:text-sand-100">{selectedActivity?.priceFrom ?? "-"}</span>
                  </div>
                </div>

                {selectedActivity?.highlights?.length ? (
                  <div className="mt-8">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Tour Highlights</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedActivity.highlights.slice(0, 4).map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1.5 rounded-xl bg-ocean-50 text-[11px] font-bold text-ocean-700 dark:bg-ocean-900/20 dark:text-ocean-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-10">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-100 active:scale-95 focus-ring"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-gradient-to-br from-ocean-600 to-ocean-800 p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold">Why book with us?</h3>
              <ul className="mt-6 space-y-5">
                {[
                  { title: "Local Expertise", text: "Trusted captains with generations of sea knowledge." },
                  { title: "Flexible Planning", text: "We adjust to daily wind and sea conditions." },
                  { title: "No Hidden Costs", text: "Clear pricing with gear and guidance included." }
                ].map((item) => (
                  <li key={item.title} className="group">
                    <div className="font-bold text-sand-100">{item.title}</div>
                    <div className="mt-1 text-sm text-ocean-50/70 leading-relaxed">{item.text}</div>
                  </li>
                ))}
              </ul>
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
