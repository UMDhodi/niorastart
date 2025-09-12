import Image from "next/image";

const caseStudies = [
  { title: "Glam & Glow With Social Media Management", tag: 'Social Media Management', stat: '+50%', img: "/content/service1.png" },
  { title: "FashionWave's Engagement Soars With Creative Campaigns", tag: 'Social Media Management', stat: '+75%', img: "/content/service2.png" },
  { title: "UrbanNest's Brand Revamp Boosts Recognition", tag: 'Brand Strategy', stat: '+60%', img: "/content/service3.png" }
]

export default function WorkList() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-2xl font-semibold">Our Work</h3>
      <p className="text-gray-400 mt-2">
        Selected case studies that showcase measurable results.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((c) => (
          <div
            key={c.title}
            className="rounded-lg border border-gray-800 bg-gray-900/50 p-4"
          >
            {/* Image container */}
            <div className="w-full h-40 relative rounded-lg overflow-hidden">
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text content */}
            <div className="mt-3">
              <div className="text-xs text-orange-200 font-semibold">{c.stat}</div>
              <h4 className="font-semibold mt-1">{c.title}</h4>
              <p className="text-sm text-gray-300 mt-2">
                Short description that explains the challenge and outcome in one
                sentence.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
