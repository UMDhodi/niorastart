const quotes = [
  { name: 'Aman', title: 'Owner of the Glam & Glow', quote: 'The Niora Star team lifted our organic traffic and conversions dramatically.' },
  { name: 'Virender Kaushik', title: 'Owner of the UrbanNest', quote: 'Excellent partner — structured, creative, and results-focused.' }
]

export default function TestimonialsGrid() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-2xl font-semibold">What Client Says</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map(q => (
          <blockquote key={q.name} className="rounded-lg border border-gray-800 p-6 bg-gray-900/40">
            <p className="text-gray-200">&quot;{q.quote}&quot;</p>
            <footer className="mt-3 text-sm text-gray-400">{q.name} — {q.title}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
