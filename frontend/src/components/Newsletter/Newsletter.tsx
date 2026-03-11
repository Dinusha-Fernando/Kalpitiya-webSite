export default function Newsletter() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-ocean-700 to-ocean-500 p-6 sm:p-10 text-white">
      <div className="max-w-2xl">
        <div className="text-xl sm:text-2xl font-semibold tracking-tight">Get travel updates</div>
        <p className="mt-2 text-white/90">
          Monthly tips, best seasons, and new packages. No spam — unsubscribe anytime.
        </p>
      </div>
      <form className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Email address"
          className="h-11 w-full rounded-xl bg-white/95 px-4 text-slate-900 placeholder:text-slate-500 outline-none ring-1 ring-white/30 focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="h-11 rounded-xl bg-sand-300 px-5 font-medium text-sand-900 hover:bg-sand-200 transition-colors"
        >
          Subscribe
        </button>
      </form>
      <div className="mt-3 text-xs text-white/75">By subscribing you agree to receive emails from us.</div>
    </div>
  );
}

