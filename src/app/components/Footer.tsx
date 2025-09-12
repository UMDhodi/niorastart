import Image from 'next/image';

// Assuming you have a local image at public/logo.png
const myImage = '/logo.png';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-800 bg-gray-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="w-12 h-12 rounded-md bg-gray-950 dark:bg-gray-950 flex items-center justify-center font-bold text-gray-900">
              <Image
                src={myImage}
                alt="A descriptive alt text for the image"
                width={50} // Corresponds to w-12 (12*4 = 48px)
                height={50} // Corresponds to h-12 (12*4 = 48px)
                className="rounded-md"
                unoptimized
              />
            </div>
            <p className="text-gray-400 mt-3">Niora Star — digital marketing & consultancy.</p>
          </div>

          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>Consultancy</li>
              <li>Social Media Marketing</li>
              <li>SEO & Content</li>
              <li>Email Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="text-sm text-gray-400 mt-3">niorastar45@gmail.com</p>
            <p className="text-sm text-gray-400 mt-1">+91 80533 86902</p>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Niora Star. All rights reserved.</div>
      </div>
    </footer>
  )
}
