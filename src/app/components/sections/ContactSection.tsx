"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: new URLSearchParams(formData as any).toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      setStatus("success");
      form.reset(); // clear form
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  }

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

        {status === "success" ? (
          <span className="text-orange-200 font-semibold">
            ✅ Thank you! We will reach you soon.
          </span>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Required hidden inputs */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
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
                disabled={status === "submitting"}
                className="w-full rounded-md bg-orange-200 px-6 py-3 font-medium text-gray-900 hover:bg-orange-100 transition disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 mt-4">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
