import Image from "next/image";

const teamMembers = [
  { name: "Kunal Dahiya", role: "CEO & Founder", stat: "Consaltant", img: "/team/kd.png" },
  { name: "Uday Mayank Dhodi", role: "Content Manager", stat: "AI Content Creator", img: "/team/mayank.png" },
  { name: "Ayush Thakur", role: "Media Manager", stat: "Social Media", img: "/team/thakur.png" },
  { name: "Ayush Raj", role: "SEO Strategist", stat: "Rank Builder", img: "/team/ayushraj.png" },
];

export default function TeamList() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-2xl font-semibold">Meet Our Team</h3>
      <p className="text-gray-400 mt-2">
        A passionate group of consaltant, designers, and Strategist who make growth happen.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {teamMembers.map((t) => (
          <div
            key={t.name}
            className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-center"
          >
            {/* Team Photo */}
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
              <Image
                src={t.img}
                alt={t.name}
                width={96}  // matches w-24 (24 * 4 = 96px)
                height={96}
                className="object-cover"
              />
            </div>

            <div className="mt-3">
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-400">{t.role}</p>
              <div className="text-xs text-orange-200 font-semibold mt-1">
                {t.stat}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
