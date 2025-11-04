import { BarChart3, Receipt, Users, MessageSquare, Building2, Shield, Award, Wallet } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Financial Dashboard',
    desc: "Today's & monthly sales, expenses, due EMI — all in real time.",
  },
  {
    icon: Receipt,
    title: 'Transaction Management',
    desc: 'Payment receipts, release payments, TDS and registry tracking.',
  },
  {
    icon: Users,
    title: 'Team & HR',
    desc: 'Create employees, manage salaries and attendance with ease.',
  },
  {
    icon: Building2,
    title: 'Projects & Inventory',
    desc: 'Add plots, shops or flats, and track availability in real-time.',
  },
  {
    icon: MessageSquare,
    title: 'Communications',
    desc: 'Send customised SMS and WhatsApp messages directly.',
  },
  {
    icon: Shield,
    title: 'User & Admin Controls',
    desc: 'Granular roles and permissions for teams and branches.',
  },
  {
    icon: Award,
    title: 'Incentive & Award Masters',
    desc: 'Custom commission rules per project with advanced masters.',
  },
  {
    icon: Wallet,
    title: 'Reporting Suite',
    desc: '20+ reports including Sale, Incentive, EMI, Expense and more.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Everything you need to run your real estate business</h2>
          <p className="mt-3 text-slate-600">A single, centralized platform from first lead to final possession.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
