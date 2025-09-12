export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-lg border border-gray-800 bg-gradient-to-r from-gray-800/60 to-gray-900 p-8">
        <h3 className="text-2xl font-semibold">Get In Touch</h3>
        <p className="text-gray-300 mt-2">
          Fill out the form below and we’ll get back to you shortly.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {/* required for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-200 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-200 px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-200 px-3 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-200 px-3 py-2"
            ></textarea>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-md bg-green-600 hover:bg-green-500 px-4 py-2 text-gray-900 font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
