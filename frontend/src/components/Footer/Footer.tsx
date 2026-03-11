import Container from "@/components/Container/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:bg-slate-950 dark:border-slate-800">
      <Container>
        <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-semibold">Kalpitiya Tourism</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Dolphin watching / Island hopping / Diving / Mangroves / Kitesurfing
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Powered by <span className="font-medium text-slate-800 dark:text-slate-200">Zylux Software Solutions</span>
            </div>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            © {year} Kalpitiya Tourism. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
