export default function AboutPanel() {
  const stats = [
    { label: 'Client Satisfaction', pct: 90 },
    { label: 'Content Creation', pct: 56 },
    { label: 'ROI', pct: 82 },
    { label: 'Service Demand', pct: 79 }
  ]

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-lg border border-gray-800 p-6 bg-gray-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold">About us</h2>
            <p className="mt-3 text-gray-300">At Niora Star, we specialize in innovative digital marketing strategies that drive measurable growth. Our team combines creative design, technical SEO, and paid media expertise to deliver campaigns that convert and scale.</p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(s => (
                <div key={s.label} className="bg-gray-800/40 p-3 rounded-md">
                  <div className="text-sm text-gray-400">{s.label}</div>
                  <div className="mt-2 font-semibold text-lg">{s.pct}%</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="rounded-md border border-gray-800 p-4 bg-gray-800/30">
              <h4 className="font-semibold">Quick Stats</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li>90% Client Satisfaction</li>
                <li>82% Avg ROI</li>
                <li>65% Agency Growth</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
