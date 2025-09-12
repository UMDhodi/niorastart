import AboutPanel from '../components/sections/AboutPanel'

export default function About() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-gray-400 mt-2">Learn about our approach and team.</p>
      </div>

      <AboutPanel />
    </>
  )
}
