import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "94775829018";
  const message = encodeURIComponent("Hi! I want to book a tour in Kalpitiya.");
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-lg hover:bg-emerald-700 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-5 w-5" />
      <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
    </a>
  );
}
