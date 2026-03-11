import Container from "@/components/Container/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-semibold">Kalpitiya Tourism</div>
            <div className="text-sm text-slate-600 mt-1">
              Dolphin watching / Island hopping / Diving / Mangroves / Kitesurfing
            </div>
          </div>
          <div className="text-sm text-slate-600">© {year} Kalpitiya Tourism. All rights reserved.</div>
        </div>
      </Container>
    </footer>
  );
}
