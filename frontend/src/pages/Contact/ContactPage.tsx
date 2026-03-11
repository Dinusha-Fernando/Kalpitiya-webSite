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
    const whatsappPhone = "94700000000";
    return {
      email: "info@example.com",
      phoneDisplay: "+94 70 000 0000",
      phoneTel: "+94700000000",
      whatsappPhone,
      whatsappHref: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
        "Hi! I’d like to ask about tours in Kalpitiya."
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
        subtitle="Choose your preferred channel, or send a message using the form."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <ContactCard
                icon={<FaWhatsapp className="h-5 w-5" />}
                title="WhatsApp"
                description="Fastest reply for bookings"
                value={contact.phoneDisplay}
                href={contact.whatsappHref}
              />
              <ContactCard
                icon={<FiPhone className="h-5 w-5" />}
                title="Phone"
                description="Call for urgent questions"
                value={contact.phoneDisplay}
                href={`tel:${contact.phoneTel}`}
              />
              <ContactCard
                icon={<FiMail className="h-5 w-5" />}
                title="Email"
                description="Share details & requests"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactCard
                icon={<FiMapPin className="h-5 w-5" />}
                title="Location"
                description="Meet-up point shared after booking"
                value={contact.location}
                href="https://www.google.com/maps?q=Kalpitiya%2C%20Sri%20Lanka"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold tracking-tight">Before you message</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Including these helps us respond faster:
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="shrink-0 inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-2 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
                >
                  Booking form
                </Link>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ocean-600" aria-hidden="true" />
                  <span>Your preferred date(s) and time (sunrise for dolphins)</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ocean-600" aria-hidden="true" />
                  <span>Number of people + ages (if kids)</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ocean-600" aria-hidden="true" />
                  <span>Activity: dolphins / island hopping / diving / mangroves / kitesurfing</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="font-semibold tracking-tight">Quick answers</div>
              <div className="mt-1 text-sm text-slate-600">Tap to expand.</div>
              <div className="mt-4 grid gap-2">
                <FaqItem q="What time is dolphin watching?" a="Usually early morning for the best chance. We'll confirm based on season and sea conditions." />
                <FaqItem q="Is it safe for families?" a="Yes — we provide guidance and safety equipment. Let us know if you have kids or seniors." />
                <FaqItem q="Do you offer private boats?" a="We can arrange private or shared options depending on your group size and date." />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xl font-semibold tracking-tight">Send a message</div>
                <div className="mt-1 text-sm text-slate-600">Frontend-only demo — connect to an API later.</div>
              </div>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors focus-ring"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            {submitted && (
              <div
                className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
                role="status"
              >
                Thanks! Your message was captured (frontend-only demo).
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4">
              <Field label="Name">
                <input
                  {...register("name", { required: true })}
                  className="h-11 w-full rounded-xl border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-ocean-200"
                  placeholder="Your name"
                />
                {formState.errors.name && <ErrorText>Please enter your name.</ErrorText>}
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="h-11 w-full rounded-xl border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-ocean-200"
                  placeholder="you@example.com"
                />
                {formState.errors.email && <ErrorText>Please enter a valid email.</ErrorText>}
              </Field>

              <Field label="Message">
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-ocean-200"
                  placeholder="Tell us your dates, group size, and preferred activity…"
                />
                {formState.errors.message && <ErrorText>Please enter a message.</ErrorText>}
              </Field>

              <button
                type="submit"
                className="h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-ocean-600 px-5 text-sm font-medium text-white hover:bg-ocean-700 transition-colors disabled:opacity-60 focus-ring"
                disabled={formState.isSubmitting}
              >
                <FiSend className="h-4 w-4" />
                Send message
              </button>
            </form>
          </div>
        </div>
      </Section>

      <Section tone="muted" title="Find us" subtitle="Open the map to plan your route — we’ll share the exact meet-up point after booking.">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-1">
            <div className="font-semibold tracking-tight">Hours</div>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Mon–Sun</span>
                <span className="font-medium">6:00 AM – 8:00 PM</span>
              </div>
              <div className="text-xs text-slate-500">Tours may start earlier for sunrise trips.</div>
            </div>
            <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700">
              Prefer instant chat? Use WhatsApp for quickest confirmation.
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-2">
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
      className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow focus-ring"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-50 text-ocean-800">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="font-semibold tracking-tight">{title}</div>
          <div className="mt-0.5 text-xs text-slate-500">{description}</div>
          <div className="mt-2 text-sm text-slate-700 break-words">{value}</div>
        </div>
      </div>
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white px-4 py-3">
      <summary className="cursor-pointer list-none font-medium text-slate-800 flex items-center justify-between gap-3">
        <span>{q}</span>
        <span className="text-slate-500 group-open:rotate-180 transition-transform" aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className="mt-2 text-sm text-slate-600">{a}</div>
    </details>
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
