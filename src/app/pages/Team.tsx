import WorkList from '../components/sections/TeamList'

export default function Team() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold">Our Work</h1>
        <p className="text-gray-400 mt-2">Case studies and results.</p>
      </div>

      <WorkList />
    </>
  )
}
