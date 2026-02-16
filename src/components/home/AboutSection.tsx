import { ShoppingBag, Users, ThumbsUp, Headphones } from "lucide-react";

const stats = [
  { icon: ShoppingBag, value: "10,000+", label: "Products" },
  { icon: Users, value: "50,000+", label: "Happy Customers" },
  { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate" },
  { icon: Headphones, value: "24/7", label: "Customer Support" },
];

export function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            HappyStoreShop was founded with a simple mission: to make online
            shopping a delightful experience for everyone. We partner with
            top-quality brands and manufacturers to bring you carefully curated
            products that meet the highest standards.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Our dedicated team works around the clock to ensure every order is
            processed with care, shipped promptly, and delivered to your
            doorstep. With industry-leading customer service, we're here to make
            sure your shopping experience is nothing short of exceptional.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10">
                <stat.icon className="h-7 w-7 text-brand-blue" />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
