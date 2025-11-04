import { Rocket, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <Building2 className="h-3.5 w-3.5" />
            The Dynamic Sales Platform for Real Estate
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Replace spreadsheets with a single, powerful Real Estate CRM
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Built by real estate professionals with 20+ years of experience. From first lead to final possession—manage everything in one place.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300">
              <Rocket className="h-4 w-4" />
              Get Started Free
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
              Explore Features
            </a>
          </div>
          <div className="mt-14 grid w-full max-w-5xl grid-cols-2 gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left text-sm text-white/80 backdrop-blur-sm sm:grid-cols-4">
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-white font-semibold">Financial Dashboard</p>
              <p className="text-white/70">Real-time sales, expenses & EMI</p>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-white font-semibold">Transactions</p>
              <p className="text-white/70">Receipts, releases, TDS & registry</p>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-white font-semibold">Team & HR</p>
              <p className="text-white/70">Salary and attendance management</p>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-white font-semibold">Reporting</p>
              <p className="text-white/70">20+ business-critical reports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
