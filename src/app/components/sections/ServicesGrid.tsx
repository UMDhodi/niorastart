export default function ServicesResponsive() {
  const plans = [
    {
      package: "Starter",
      price: "₹2,000/month",
      graphics: "5",
      posts: "2/week",
      design: "Basic Logo",
      support: "Email/Chat Support",
      marketing: "-",
    },
    {
      package: "Growth",
      price: "₹4,500/month",
      graphics: "15",
      posts: "3-4/week",
      design: "Standard Logo + Banner",
      support: "Basic Social Media Management",
      marketing: "-",
    },
    {
      package: "Professional",
      price: "₹8,000/month",
      graphics: "30",
      posts: "Daily",
      design: "Advanced Logo + Brand Kit",
      support: "Engagement Management + Report",
      marketing: "Brand Promotion Campaigns + Consultation",
    },
    {
      package: "Premium",
      price: "₹18,000/month",
      graphics: "60+",
      posts: "Complete",
      design: "Full Brand Creation",
      support: "Priority Support + Analytics",
      marketing: "AI Marketing Campaigns + Influencer Support",
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-2xl font-semibold mb-6">Our Service Packages</h3>

      {/* TABLE VIEW (desktop only) */}
      <div className="hidden lg:block rounded-lg border border-gray-800 bg-gray-900/40 overflow-x-auto">
        <table className="w-full border-collapse text-left text-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-800/60 text-gray-200">
              <th className="px-4 py-3 border border-gray-800">Package</th>
              <th className="px-4 py-3 border border-gray-800">Price</th>
              <th className="px-4 py-3 border border-gray-800">AI Graphics</th>
              <th className="px-4 py-3 border border-gray-800">Social Posts</th>
              <th className="px-4 py-3 border border-gray-800">Design Elements</th>
              <th className="px-4 py-3 border border-gray-800">Support & Reporting</th>
              <th className="px-4 py-3 border border-gray-800">Marketing & Growth</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((p, i) => (
              <tr key={i} className="hover:bg-gray-800/40 transition-colors">
                <td className="px-4 py-3 border border-gray-800 font-medium text-white">{p.package}</td>
                <td className="px-4 py-3 border border-gray-800">{p.price}</td>
                <td className="px-4 py-3 border border-gray-800">{p.graphics}</td>
                <td className="px-4 py-3 border border-gray-800">{p.posts}</td>
                <td className="px-4 py-3 border border-gray-800">{p.design}</td>
                <td className="px-4 py-3 border border-gray-800">{p.support}</td>
                <td className="px-4 py-3 border border-gray-800">{p.marketing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CARD VIEW (mobile/tablet only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {plans.map((p, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-800 bg-gray-900/60 p-6 shadow-md"
          >
            <h4 className="text-lg font-bold text-white">{p.package}</h4>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Price: </span>{p.price}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-semibold">AI Graphics: </span>{p.graphics}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-semibold">Social Posts: </span>{p.posts}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-semibold">Design Elements: </span>{p.design}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-semibold">Support & Reporting: </span>{p.support}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-semibold">Marketing & Growth: </span>{p.marketing}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
