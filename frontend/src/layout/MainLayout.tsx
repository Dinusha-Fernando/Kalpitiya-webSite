import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import useScrollToTop from "@/hooks/useScrollToTop";
import PageTransition from "@/components/PageTransition/PageTransition";

export default function MainLayout() {
  useScrollToTop();
  const location = useLocation();
  return (
    <div className="min-h-dvh flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-xl focus:shadow-lg focus-ring"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
