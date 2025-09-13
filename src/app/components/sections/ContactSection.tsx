"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: new URLSearchParams(
          Array.from(formData.entries()) as [string, string][]
        ).toString(),
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
    <section className="bg-gray-950 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full p-10 rounded-2xl shadow-lg bg-gray-900">
          <h2 className="text-3xl font-bold mb-3 text-white">Get In Touch</h2>
          <p className="mb-8 text-gray-400">
            Fill out the form below and our team will get back to you shortly.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-md bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>

          {status === "success" && (
            <span className="mt-4 block text-green-400">
              ✅ Your message has been sent successfully!
            </span>
          )}
          {status === "error" && (
            <span className="mt-4 block text-red-400">
              ❌ Something went wrong. Please try again.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
