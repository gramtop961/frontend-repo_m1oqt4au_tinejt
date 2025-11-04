export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} TDS City — The Dynamic Sales Platform. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
