import React from "react";
import Navbar from "../app/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niora Star Digital Marketing",
  description:
    "Boost your brand with modern digital marketing strategies and creative solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <Navbar />
        <main className="pt-16">{children}</main>

        {/* 🔽 Hidden static Netlify form so submissions work */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          hidden
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
      </body>
    </html>
  );
}
