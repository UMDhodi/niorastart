import React from 'react'
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wookies Digital Marketing Agency",
  description: "Boost your brand with modern digital marketing strategies",
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
      </body>
    </html>
  );
}

