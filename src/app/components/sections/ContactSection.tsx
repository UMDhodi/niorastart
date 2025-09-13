"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: new URLSearchParams(formData as any).toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="rounded-lg border border-gray-800 bg-gradient-to-r from-gray-800/60 to-gray-900 p-8">
        <h3 className="text-2xl font-semibold text-white mb-4">Get In Touch</h3>
        <p className="text-gray-300 mb-6">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input type="hidden" name="form-name" value="contact" />

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

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-md bg-orange-200 px-6 py-3 font-medium text-gray-900 hover:bg-orange-100 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {status === "success" && (
          <p className="text-green-400 mt-4">
            ✅ Thank you, we will reach you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4">
            ❌ Something went wrong, please try again.
          </p>
        )}
      </div>
    </section>
  );
}
