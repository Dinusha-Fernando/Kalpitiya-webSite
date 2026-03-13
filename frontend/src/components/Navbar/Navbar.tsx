import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "@/components/Container/Container";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/activities", label: "Activities" },
  { to: "/tours", label: "Tours" },
  { to: "/services", label: "Stay & Transport" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const mobileNavId = useMemo(() => "mobile-nav", []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-4 inset-x-0 z-50 pointer-events-none px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl pointer-events-auto">
        <div className="glass dark:glass-dark rounded-[2rem] sm:rounded-full px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-6 shadow-2xl shadow-ocean-900/10 border border-white/50 dark:border-slate-700/50">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src="/images/logo.png?v=3" alt="Kalpitiya" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover shadow-sm" />
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-xl tracking-tight text-slate-900 dark:text-white">Kalpitiya</div>
              <div className="text-[10px] uppercase tracking-widest text-ocean-600 dark:text-sand-400 font-bold -mt-0.5">Tourism</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-2" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  [
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-ocean-600 text-white shadow-md shadow-ocean-600/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50"
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/booking"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-bold text-white hover:bg-ocean-600 hover:shadow-lg hover:shadow-ocean-600/30 transition-all duration-300 focus-ring dark:bg-white dark:text-slate-900 dark:hover:bg-ocean-500 dark:hover:text-white"
            >
              Book a tour
            </Link>
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/50 bg-white/50 hover:bg-slate-50 transition-colors focus-ring dark:bg-slate-900/50 dark:border-slate-800 dark:hover:bg-slate-800"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-controls={mobileNavId}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-slate-900/40 pointer-events-auto"
            aria-label="Close menu overlay"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id={mobileNavId}
            className="fixed top-0 right-0 z-50 h-dvh w-[min(22rem,90vw)] bg-white shadow-2xl border-l border-slate-200 dark:bg-slate-950 dark:border-slate-800 pointer-events-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3" aria-label="Go to homepage">
                <img src="/images/logo.png?v=3" alt="" className="h-9 w-9 rounded-lg object-contain" />
                <div className="leading-tight">
                  <div className="font-semibold tracking-tight">Kalpitiya</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Tourism</div>
                </div>
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors focus-ring dark:bg-slate-950 dark:border-slate-800 dark:hover:bg-slate-900"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-4 grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    [
                      "px-3 py-3 rounded-xl text-sm transition-colors border",
                      isActive
                        ? "bg-ocean-50 text-ocean-800 border-ocean-100 dark:bg-slate-900 dark:text-sand-100 dark:border-slate-800"
                        : "text-slate-800 hover:bg-slate-50 border-transparent hover:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:border-slate-800"
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-3">
                <Link
                  to="/booking"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-ocean-600 px-4 py-3 text-sm font-medium text-white hover:bg-ocean-700 transition-colors focus-ring"
                >
                  Book a tour
                </Link>
              </div>
              <div className="pt-4 text-xs text-slate-500">
                Tip: Tap an activity to see details and highlights.
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
