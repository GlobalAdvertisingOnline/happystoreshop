import { ShieldCheck, Lock, RefreshCw, Headphones } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "256-bit SSL encryption",
  },
  {
    icon: Lock,
    title: "Safe Checkout",
    description: "Protected payments",
  },
  {
    icon: RefreshCw,
    title: "Money-Back Guarantee",
    description: "30-day return policy",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're here to help",
  },
];

export function TrustBadges() {
  return (
    <section className="border-y border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center gap-2 text-center"
            >
              <badge.icon className="h-7 w-7 text-brand-green" />
              <h3 className="text-sm font-semibold text-slate-900">
                {badge.title}
              </h3>
              <p className="text-xs text-slate-500">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
