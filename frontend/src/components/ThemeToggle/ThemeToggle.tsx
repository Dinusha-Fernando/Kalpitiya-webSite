import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/theme/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors focus-ring dark:bg-slate-950 dark:border-slate-800 dark:hover:bg-slate-900"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <FiSun className="h-5 w-5 text-sand-300" /> : <FiMoon className="h-5 w-5 text-slate-700" />}
    </button>
  );
}

