export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="rounded-lg border border-gray-800 bg-gradient-to-r from-gray-800/60 to-gray-900 p-6">
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <p className="text-gray-300 mt-2">
          Fill out the form below and we’ll get back to you shortly.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you" // optional: create a thank-you page
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Required hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot for spam protection */}
          <input type="hidden" name="bot-field" />

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-200 px-3 py-2"
            />
          </div>

          {/* Phone */}
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

          {/* Email */}
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

          {/* Message */}
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

          {/* Submit */}
          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-orange-200 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-orange-100"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}