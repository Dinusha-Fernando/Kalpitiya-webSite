import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import Section from "@/components/Section/Section";
import PageHeader from "@/components/PageHeader/PageHeader";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<FormValues>();

  const contact = useMemo(() => {
    const whatsappPhone = "94775829018";
    return {
      email: "dinushafdo9998@gmail.com",
      phoneDisplay: "0775829018",
      phoneTel: "+94775829018",
      whatsappPhone,
      whatsappHref: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
        "Hi! I'd like to ask about tours in Kalpitiya."
      )}`,
      location: "Kalpitiya, Sri Lanka",
      mapEmbedSrc: "https://www.google.com/maps?q=Kalpitiya%2C%20Sri%20Lanka&output=embed"
    };
  }, []);

  const onSubmit = (values: FormValues) => {
    console.log("Contact message submitted", values);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact | Kalpitiya Tourism</title>
        <meta name="description" content="Contact Kalpitiya Tourism for bookings and questions." />
      </Helmet>

      <PageHeader
        badge="Quick replies • WhatsApp available"
        title="Contact"
        subtitle="Tell us your dates and what you want to do — we’ll reply with the best options."
        imageUrl="/images/mangrove.jpg"
        right={
          <a
            href={contact.whatsappHref}
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
        title="Get in touch"
        subtitle="Choose your preferred channel for the fastest response to your journey planning."
        tone="sand"
        divider="wave-bottom"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={<FaWhatsapp className="h-6 w-6" />}
                title="WhatsApp"
                description="Fastest reply for bookings"
                value={contact.phoneDisplay}
                href={contact.whatsappHref}
              />
              <ContactCard
                icon={<FiPhone className="h-6 w-6" />}
                title="Phone"
                description="Call for urgent questions"
                value={contact.phoneDisplay}
                href={`tel:${contact.phoneTel}`}
              />
              <ContactCard
                icon={<FiMail className="h-6 w-6" />}
                title="Email"
                description="Share details & requests"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactCard
                icon={<FiMapPin className="h-6 w-6" />}
                title="Location"
                description="Meet-up point shared after booking"
                value={contact.location}
                href="https://www.google.com/maps?q=Kalpitiya%2C%20Sri%20Lanka"
              />
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm dark:bg-slate-950 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Before you message</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Including these details helps us provide a tailored quote immediately:
                  </p>
                </div>
                <Link
                  to="/booking"
                  className="shrink-0 inline-flex items-center justify-center rounded-2xl bg-ocean-600 px-6 py-3 text-sm font-bold text-white hover:bg-ocean-700 transition-all hover:shadow-lg hover:shadow-ocean-200 active:scale-95 focus-ring"
                >
                  Booking form
                </Link>
              </div>
              <ul className="mt-6 grid gap-4 text-sm">
                <li className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-600" aria-hidden="true" />
                  <span>Preferred date(s) and specific request (e.g., dolphin sunrise)</span>
                </li>
                <li className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-600" aria-hidden="true" />
                  <span>Group size and ages (for safety gear and boat sizing)</span>
                </li>
                <li className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-600" aria-hidden="true" />
                  <span>Activity combo: island hopping + snorkeling / diving + dolphins</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm dark:bg-slate-950 dark:border-slate-800">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Quick answers</h3>
              <div className="mt-6 grid gap-3">
                <FaqItem q="What time is dolphin watching?" a="We recommend departure around 6:30 AM for the highest activity and calmest water." />
                <FaqItem q="Is it safe for children?" a="Absolutely. We provide child-sized life jackets and our captains are trained for family safety." />
                <FaqItem q="Can we book a private boat?" a="Yes, all our island and dolphin tours can be booked as private experiences for a small additional fee." />
              </div>
            </div>
          </div>

          <div className="rounded-[3rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-2xl dark:bg-slate-950 dark:border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ocean-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Send a message</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    We'll respond to your inquiry via email within 12 hours.
                  </p>
                </div>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95 focus-ring"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Direct chat
                </a>
              </div>

              {submitted && (
                <div
                  className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm font-medium text-emerald-900 animate-in fade-in slide-in-from-top-4 duration-500"
                  role="status"
                >
                  ✨ Message sent! We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-5">
                <Field label="Full Name">
                  <input
                    {...register("name", { required: true })}
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100"
                    placeholder="Enter your name"
                  />
                  {formState.errors.name && <ErrorText>Please provide your name.</ErrorText>}
                </Field>

                <Field label="Email Address">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100"
                    placeholder="you@email.com"
                  />
                  {formState.errors.email && <ErrorText>A valid email is required.</ErrorText>}
                </Field>

                <Field label="Message">
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-ocean-200 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100"
                    placeholder="Tell us about your trip (dates, people, activities)..."
                  />
                  {formState.errors.message && <ErrorText>Please share some details about your trip.</ErrorText>}
                </Field>

                <button
                  type="submit"
                  className="h-12 inline-flex items-center justify-center gap-3 rounded-2xl bg-ocean-600 px-8 text-sm font-bold text-white hover:bg-ocean-700 transition-all hover:shadow-xl hover:shadow-ocean-200 active:scale-95 disabled:opacity-50 focus-ring"
                  disabled={formState.isSubmitting}
                >
                  <FiSend className="h-5 w-5" />
                  Send to Team
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted" title="Find us" subtitle="Open the map to plan your route — we’ll share the exact meet-up point after booking.">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-1 dark:bg-slate-950 dark:border-slate-800">
            <div className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">Hours</div>
            <div className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <span>Mon–Sun</span>
                <span className="font-medium">6:00 AM – 8:00 PM</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Tours may start earlier for sunrise trips.</div>
            </div>
            <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">
              Prefer instant chat? Use WhatsApp for quickest confirmation.
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-2 dark:bg-slate-950 dark:border-slate-800">
            <iframe
              title="Kalpitiya map"
              src={contact.mapEmbedSrc}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  description,
  value,
  href
}: {
  icon: ReactNode;
  title: string;
  description: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow focus-ring dark:bg-slate-950 dark:border-slate-800"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-50 text-ocean-800 dark:bg-ocean-900/30 dark:text-ocean-100">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">{title}</div>
          <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{description}</div>
          <div className="mt-2 text-sm text-slate-700 break-words dark:text-slate-300">{value}</div>
        </div>
      </div>
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white px-4 py-3 dark:bg-slate-950 dark:border-slate-800">
      <summary className="cursor-pointer list-none font-medium text-slate-800 flex items-center justify-between gap-3 dark:text-slate-100">
        <span>{q}</span>
        <span className="text-slate-500 group-open:rotate-180 transition-transform dark:text-slate-400" aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{a}</div>
    </details>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-slate-700 dark:text-slate-300">{label}</span>
      {children}
    </label>
  );
}

function ErrorText({ children }: { children: ReactNode }) {
  return <span className="text-xs text-rose-600">{children}</span>;
}
