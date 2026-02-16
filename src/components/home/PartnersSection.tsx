export function PartnersSection() {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Payment Methods */}
        <div className="text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Accepted Payment Methods
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay"].map(
              (name) => (
                <div
                  key={name}
                  className="flex h-10 items-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>

        {/* Shipping Partners */}
        <div className="mt-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Trusted Shipping Partners
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["USPS", "UPS", "FedEx", "DHL"].map((name) => (
              <div
                key={name}
                className="flex h-10 items-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
