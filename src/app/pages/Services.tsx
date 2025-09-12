import ServicesGrid from '../components/sections/ServicesGrid'

export default function Services() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="text-gray-400 mt-2">Our service offerings and engagement models.</p>
      </div>

      <ServicesGrid />
    </>
  )
}
