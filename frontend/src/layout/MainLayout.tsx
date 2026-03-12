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
    <div className="flex-1 w-full flex flex-col relative overflow-x-clip bg-white dark:bg-slate-950 selection:bg-ocean-100 selection:text-ocean-900 dark:selection:bg-ocean-900 dark:selection:text-ocean-100">
      <div className="grain" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-ocean-200/45 blur-3xl dark:bg-ocean-900/25" />
        <div className="absolute top-[22rem] -left-40 h-[30rem] w-[30rem] rounded-full bg-sand-200/55 blur-3xl dark:bg-sand-900/20" />
        <div className="absolute -bottom-48 right-10 h-[32rem] w-[32rem] rounded-full bg-ocean-100/55 blur-3xl dark:bg-ocean-900/20" />
      </div>
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
