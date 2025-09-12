import Image from 'next/image';

// Assuming you have a local image at public/content/hero.png
const myImage = '/content/hero.png';
const subImage = '/content/subhero.png';

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Digital Marketing Agency</h1>
          <p className="mt-4 text-gray-300 max-w-2xl">We craft high-conversion digital experiences — from SEO & content to paid media and full-funnel growth. Clean design, measurable results.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-orange-200 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-orange-100">Get In Touch</a>
            <a href="#work" className="inline-flex items-center rounded-md border border-gray-700 px-5 py-3 text-sm hover:bg-gray-800">Our Work</a>
          </div>

          <div className="mt-8 bg-gradient-to-r from-gray-800/50 to-transparent rounded-lg p-4 border border-gray-800">
            <div className="flex gap-4 items-center">
              <div className="w-20 h-14 bg-gray-800 rounded-md flex items-center justify-center relative overflow-hidden">
                <Image
                  src={subImage}
                  alt="A descriptive alt text for the image"
                  fill
                  className="object-contain" 
                  unoptimized
                />
              </div>
              <div>
                <h3 className="font-semibold">Boost Your Brand</h3>
                <p className="text-sm text-gray-400">Creative campaigns and data-driven growth for ambitious brands.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="w-full h-56 bg-gray-700/40 flex items-center justify-center overflow-hidden rounded-md relative">
            <Image
                  src={myImage}
                  alt="A descriptive alt text for the image"
                  fill
                  className="object-cover"
                  unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
