"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnbropw", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // Clear form
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-2xl p-8 rounded-2xl shadow-lg bg-gray-900">
        <h2 className="text-2xl font-bold mb-2 text-white">Get In Touch</h2>
        <p className="mb-6 text-gray-400">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>

        {/* Inline status messages */}
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
  );
}
