"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type Plan = {
  package: string;
  priceINR: number;
  priceUSD: number;
  Posts: string;
  Branding: string;
  Engagement: string;
  Ads: string;
  Reporting: string;
};

export default function ServicesResponsive() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  useEffect(() => {
    const country = Cookies.get("user-country") || "IN";
    if (country === "IN") {
      setCurrency("INR");
    } else {
      setCurrency("USD");
    }
  }, []);

  const formatPrice = (inr: number, usd: number) => {
    return currency === "USD" ? `$${usd}/month` : `₹${inr}/month`;
  };


  const plans: Plan[] = [
    {
      package: "Starter",
      priceINR: 7500,
      priceUSD: 400,   // 👈 USD version
      Posts: "8 professional posts + 4 engaging reels monthly",
      Branding: "Strategic captions with targeted hashtags",
      Engagement: "Complete Google My Business setup and optimization",
      Ads: "Community engagement twice weekly",
      Reporting: "Detailed monthly growth reports",
    },
    {
      package: "Growth",
      priceINR: 15000,
      priceUSD: 800,   // 👈 USD version
      Posts: "12 high-quality posts + 8 trending reels monthly",
      Branding: "Custom story highlights and branded covers",
      Engagement: "Daily community engagement and interaction & Local SEO optimization with directory listings",
      Ads: "Basic Google Ads setup (ad budget separate)",
      Reporting: "Monthly strategy consultation calls",
    },
    {
      package: "Professional",
      priceINR: 30000,
      priceUSD: 1800,   // 👈 USD version
      Posts: "16 premium posts + 12 viral-ready reels monthly",
      Branding: "Micro-influencer collaboration campaigns",
      Engagement: "Complete paid ads management (Meta + Google Ads), Advanced SEO with backlinks and blog support",
      Ads: "2-3 Email & WhatsApp campaigns monthly, Professional brand kit and templates",
      Reporting: "Comprehensive performance reporting",
    },
    {
      package: "Premium",
      priceINR: 50000,
      priceUSD: 5000,   // 👈 USD version
      Posts: "30+ posts + 20 reels with premium production monthly",
      Branding: "National-scale SEO ranking strategies, Complete brand kit with rebranding consultation & E-commerce setup and optimization (Shopify/WooCommerce)",
      Engagement: "Multi-platform paid ads (Meta, Google, YouTube)",
      Ads: "Regional and national influencer partnerships",
      Reporting: "Dedicated account manager and weekly strategic consultations",
    },
  ];


  return (
    <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-2xl font-semibold mb-6">Our Service Packages</h3>
      {/* Debug buttons - only visible in localhost/dev */}
      {process.env.NODE_ENV === "development" && (
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setCurrency("INR")}
            className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white text-sm"
          >
            Show INR
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
          >
            Show USD
          </button>
        </div>
      )}


      {/* TABLE VIEW */}
      <div className="hidden lg:block rounded-lg border border-gray-800 bg-gray-900/40 overflow-x-auto">
        <table className="w-full border-collapse text-left text-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-800/60 text-gray-200">
              <th className="px-4 py-3 border border-gray-800">Package</th>
              <th className="px-4 py-3 border border-gray-800">Price</th>
              <th className="px-4 py-3 border border-gray-800">Posts & Reels</th>
              <th className="px-4 py-3 border border-gray-800">Branding & Design</th>
              <th className="px-4 py-3 border border-gray-800">Engagement & SEO</th>
              <th className="px-4 py-3 border border-gray-800">Ads & Campaigns</th>
              <th className="px-4 py-3 border border-gray-800">Reporting & Consultation</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((p, i) => (
              <tr key={i} className="hover:bg-gray-800/40 transition-colors">
                <td className="px-4 py-3 border border-gray-800 font-medium text-white">{p.package}</td>
                <td className="px-4 py-3 border border-gray-800">{formatPrice(p.priceINR, p.priceUSD)}</td>
                <td className="px-4 py-3 border border-gray-800">{p.Posts}</td>
                <td className="px-4 py-3 border border-gray-800">{p.Branding}</td>
                <td className="px-4 py-3 border border-gray-800">{p.Engagement}</td>
                <td className="px-4 py-3 border border-gray-800">{p.Ads}</td>
                <td className="px-4 py-3 border border-gray-800">{p.Reporting}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CARD VIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {plans.map((p, i) => (
          <div key={i} className="rounded-lg border border-gray-800 bg-gray-900/60 p-6 shadow-md">
            <h4 className="text-lg font-bold text-white">{p.package}</h4>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Price: </span>{formatPrice(p.priceINR, p.priceUSD)}
            </p>
            <p className="mt-1 text-sm"><span className="font-semibold">Posts & Reels: </span>{p.Posts}</p>
            <p className="mt-1 text-sm"><span className="font-semibold">Branding & Design: </span>{p.Branding}</p>
            <p className="mt-1 text-sm"><span className="font-semibold">Engagement & SEO: </span>{p.Engagement}</p>
            <p className="mt-1 text-sm"><span className="font-semibold">Ads & Campaigns: </span>{p.Ads}</p>
            <p className="mt-1 text-sm"><span className="font-semibold">Reporting & Consultation: </span>{p.Reporting}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
