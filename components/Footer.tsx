"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 3000);
  };

  const topCities = [
    { name: "Lagos", href: "#lagos" },
    { name: "Abuja (FCT)", href: "#abuja" },
    { name: "Port Harcourt", href: "#portharcourt" },
    { name: "Ibadan", href: "#ibadan" },
    { name: "Kano", href: "#kano" },
    { name: "Enugu", href: "#enugu" },
  ];

  const exploreServices = [
    { name: "Intercity rides", href: "#intercity" },
    { name: "Chauffeur service", href: "#chauffeur" },
    { name: "Airport VIP transfer", href: "#airport" },
    { name: "Armored escort convoy", href: "#armored" },
    { name: "Private car hire", href: "#private-hire" },
    { name: "Luxury wedding rentals", href: "#weddings" },
  ];

  const intercityRoutes = [
    { name: "Lagos — Abuja", href: "#lagos-abuja" },
    { name: "Lagos — Ibadan", href: "#lagos-ibadan" },
    { name: "Abuja — Kaduna", href: "#abuja-kaduna" },
    { name: "Port Harcourt — Owerri", href: "#ph-owerri" },
    { name: "Lagos — Benin City", href: "#lagos-benin" },
    { name: "Abuja — Jos", href: "#abuja-jos" },
  ];

  const legalLinks = [
    { name: "Terms", href: "#terms" },
    { name: "Privacy policy", href: "#privacy" },
    { name: "Legal notice", href: "#legal" },
    { name: "Accessibility", href: "#accessibility" },
  ];

  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12">
        {/* TOP SECTION: 4 COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-16">
          {/* COLUMN 1: Logo & Newsletter */}
          <div className="flex flex-col items-start">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-1.5 text-2xl tracking-tight select-none font-black uppercase leading-none mb-6 group"
            >
              <span className="text-black">TINO</span>
              <span className="text-[#3b82f6]">RIDES</span>
            </a>

            <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 tracking-tight">
              Subscribe to the newsletter
            </p>

            {/* Newsletter Pill Input */}
            <form onSubmit={handleSubscribe} className="w-full max-w-[280px]">
              <div className="relative flex items-center bg-[#f8f9fb] border border-gray-200/90 rounded-full pl-4 pr-1.5 py-1.5 focus-within:border-[#3b82f6] focus-within:bg-white transition-all">
                <input
                  type="email"
                  required
                  placeholder={isSubscribed ? "Thank you!" : "Email ..."}
                  disabled={isSubscribed}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter"
                  disabled={isSubscribed}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer"
                >
                  {isSubscribed ? (
                    <span className="text-xs">✓</span>
                  ) : (
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* COLUMN 2: Top cities (Nigerian Relevance) */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-tight mb-4">
              Top cities
            </h3>
            <ul className="space-y-2.5">
              {topCities.map((city) => (
                <li key={city.name}>
                  <a
                    href={city.href}
                    className="text-xs sm:text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Explore */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-tight mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {exploreServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-xs sm:text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Intercity rides (Nigerian Relevance) */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-tight mb-4">
              Intercity rides
            </h3>
            <ul className="space-y-2.5">
              {intercityRoutes.map((route) => (
                <li key={route.name}>
                  <a
                    href={route.href}
                    className="text-xs sm:text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM LEGAL & SOCIAL BAR */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          {/* Copyright */}
          <div className="order-2 md:order-1 text-gray-400">
            © 2026 TINO RIDES. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="order-1 md:order-2 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {legalLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="order-3 flex items-center gap-4 text-gray-400">
            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-gray-900 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
