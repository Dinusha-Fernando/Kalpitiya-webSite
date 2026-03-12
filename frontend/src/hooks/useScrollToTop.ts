import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    const id = decodeURIComponent(location.hash.replace(/^#/, ""));

    window.setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [location.pathname, location.hash]);
}
