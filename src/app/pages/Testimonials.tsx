import TestimonialsGrid from '../components/sections/TestimonialsGrid'

export default function Testimonials() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold">Client Feedback</h1>
        <p className="text-gray-400 mt-2">What clients say about working with us.</p>
      </div>

      <TestimonialsGrid />
    </>
  )
}
