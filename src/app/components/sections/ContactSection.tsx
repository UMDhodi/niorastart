"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="rounded-lg border border-gray-800 bg-gradient-to-r from-gray-800/60 to-gray-900 p-8">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Get In Touch
        </h3>
        <p className="text-gray-300 mb-6">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Required hidden inputs for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-300 text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-300 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-300 text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              className="rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-md bg-orange-200 px-6 py-3 font-medium text-gray-900 hover:bg-orange-100 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
