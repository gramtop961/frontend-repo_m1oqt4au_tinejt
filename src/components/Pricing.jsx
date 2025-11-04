import { CheckCircle2, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    subtitle: 'Forever',
    highlight: false,
    features: [
      '1 Project',
      '1 Branch',
      'Basic Lead & Client Management',
      'Basic Project Management',
      'Limited Reporting',
    ],
    note: 'No Financials & Receipts, No Team Management',
  },
  {
    name: 'Basic',
    price: '₹499',
    subtitle: '/ month',
    highlight: false,
    features: [
      'Everything in Starter',
      '3 Projects',
      '1 Branch',
      'Real-Time Sales Dashboard',
      'Payment & Release Receipts',
      'Basic Reporting (Sales, EMI, Visitor)',
      'Send Customise SMS',
    ],
  },
  {
    name: 'Pro',
    price: '₹3,999',
    subtitle: '/ month',
    highlight: true,
    features: [
      'Everything in Basic',
      '5 Projects',
      'Up to 3 Branches',
      'Full Employee Management (Salary, Attendance)',
      'Full Financials (TDS, Registry, Expenses)',
      'All 20+ Advanced Reports',
      'WhatsApp & SMS Integration',
    ],
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtitle: '',
    highlight: false,
    features: [
      'Everything in Pro',
      'Unlimited Projects & Branches',
      'Multi-Branch Office Management',
      'Full Admin & Role Controls',
      'Advanced Incentive & Award Masters',
      'Priority Support & Onboarding',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">20% off when billed yearly. 14-day money-back guarantee on all paid plans.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                plan.highlight ? 'border-cyan-300 shadow-cyan-100' : 'border-slate-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-cyan-600 px-3 py-1 text-xs font-medium text-white shadow">
                  <Star className="h-3 w-3" /> {plan.badge}
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                  {plan.subtitle && (
                    <span className="pb-1 text-sm text-slate-500">{plan.subtitle}</span>
                  )}
                </div>
              </div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p className="mt-3 text-xs text-slate-500">{plan.note}</p>
              )}
              <div className="mt-6">
                <a href="#" className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 ${
                  plan.highlight
                    ? 'bg-cyan-600 text-white hover:bg-cyan-500 focus:ring-cyan-300'
                    : 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-300'
                }`}>
                  {plan.name === 'Starter' ? 'Start Free' : 'Start 14-day Trial'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
