"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState("Victoria Island, Lagos");
  const [pickupDate, setPickupDate] = useState("Tomorrow, 10:00 AM");
  const [navSearch, setNavSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      const fleetEl = document.getElementById("fleet") || document.querySelector("section");
      if (fleetEl) {
        window.location.hash = "#fleet";
      }
    }, 400);
  };

  return (
    <section className="relative z-30 w-full h-screen min-h-[100dvh] sm:min-h-[820px] lg:h-[880px] bg-[#111215] flex flex-col justify-between text-white font-sans select-none">
      {/* 1. HERO BACKGROUND: Responsive Luxury Black SUV Showroom Reflection */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Mobile View: Vertical portrait framed so the SUV is zoomed out and fully visible */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src="/luxury-suv-mobile.jpg"
            alt="Luxury Black SUV in Showroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center select-none"
            quality={95}
          />
        </div>

        {/* Desktop View: Widescreen original */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/Luxury Black SUV Showroom Reflection.png"
            alt="Luxury Black SUV in Showroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center select-none"
            quality={95}
          />
        </div>

        {/* Ambient Vignette & Gradient Overlays for contrast while preserving reflections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#111215] via-[#111215]/60 to-transparent pointer-events-none" />
      </div>

      {/* TOP FLOATING NAVIGATION BAR */}
      <header className="relative z-30 pt-4 sm:pt-6 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <nav className="bg-white/95 backdrop-blur-md text-gray-900 rounded-full px-5 sm:px-7 py-2.5 sm:py-3 border border-gray-200/50 flex items-center justify-between transition-all">
          {/* LOGO: TINO RIDES */}
          <a
            href="#"
            className="flex items-center gap-1.5 text-lg sm:text-xl tracking-tight select-none font-black uppercase leading-none pl-1"
          >
            <span className="text-black">TINO</span>
            <span className="text-[#3b82f6]">RIDES</span>
          </a>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-medium text-gray-700">
            <a href="#home" className="hover:text-black font-semibold text-black transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-black transition-colors">
              Services
            </a>
            <a href="#fleet" className="hover:text-black transition-colors">
              Fleet
            </a>
            <a href="#faq" className="hover:text-black transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </div>

          {/* RIGHT SIDE SEARCH & PROFILE */}
          <div className="flex items-center gap-3">
            {/* Search Pill Input */}
            <div className="hidden sm:flex items-center gap-2 bg-[#f4f5f7] border border-gray-200/80 rounded-full px-3 py-1.5 focus-within:border-gray-400 focus-within:bg-white transition-all w-32 md:w-36 lg:w-44">
              <svg
                className="w-3.5 h-3.5 text-gray-400 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search ..."
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-gray-700 placeholder-gray-400 w-full"
              />
            </div>

            {/* Profile Avatar Button */}
            <button
              type="button"
              aria-label="User account"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
            >
              <svg
                className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
              </svg>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-gray-700 hover:text-black rounded-lg"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md rounded-2xl p-4 text-gray-800 flex flex-col gap-3 text-sm font-medium border border-gray-200">
            <a href="#home" className="py-1 px-2 font-semibold text-black">
              Home
            </a>
            <a href="#services" className="py-1 px-2 hover:text-black">
              Services
            </a>
            <a href="#fleet" className="py-1 px-2 hover:text-black">
              Fleet
            </a>
            <a href="#faq" className="py-1 px-2 hover:text-black">
              FAQ
            </a>
            <a href="#contact" className="py-1 px-2 hover:text-black">
              Contact
            </a>
            <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                placeholder="Search ..."
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                className="bg-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-800 w-full outline-none"
              />
            </div>
          </div>
        )}
      </header>

      {/* MIDDLE HERO CONTENT: Headline & Description (Mona Sans) */}
      <div className="relative z-20 max-w-[1360px] mx-auto w-full px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-end pb-32 sm:pb-36 lg:pb-28 font-mona">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-4 lg:gap-8 w-full">
          {/* Left Headline: On desktop moved left a bit; on mobile ~40% from bottom */}
          <div className="max-w-md lg:max-w-xl lg:-ml-6">
            <h1 className="font-mona text-white text-balance text-[clamp(1.8rem,6vw,3.5rem)] font-black uppercase leading-[1.2] tracking-[0.015em]">
              Premium car
              <br />
              rental
            </h1>
          </div>

          {/* Right Description Text: On desktop moved right a bit; on mobile directly under header */}
          <div className="max-w-sm sm:max-w-md lg:max-w-[370px] lg:-mr-6 mt-1 lg:mt-0 lg:pb-1">
            <p className="font-mona text-xs sm:text-[13px] leading-relaxed text-gray-300 font-normal">
              We want you to have a stress-free rental experience, so we make it easy to hire a car –
              by providing simple search tools, customer reviews and plenty of pick-up locations across
              the city.
            </p>
          </div>
        </div>
      </div>

      {/* 
        BOTTOM HORIZONTAL SEARCH CARD:
        Positioned on top of the bottom line, fully visible with z-50
        Fields: Location, Date, Search
      */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-7 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSearch}
          className="w-full bg-white text-gray-900 rounded-2xl sm:rounded-full shadow-2xl border border-gray-200/90 p-2 sm:p-2.5 flex items-center justify-between gap-1 sm:gap-2.5 transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] relative z-50"
        >
          {/* 1. Location */}
          <div className="flex-1 min-w-0 px-2.5 sm:px-5 py-1.5 sm:py-2 border-r border-gray-200/80 flex flex-col justify-center">
            <label
              htmlFor="hero-location"
              className="block text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-wider leading-none mb-1 cursor-pointer"
            >
              Location
            </label>
            <input
              id="hero-location"
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="e.g. Victoria Island, Lagos"
              className="w-full bg-transparent border-none outline-none text-xs sm:text-sm font-medium text-gray-900 placeholder:text-gray-400 truncate leading-tight"
            />
          </div>

          {/* 2. Date */}
          <div className="flex-1 min-w-0 px-2.5 sm:px-5 py-1.5 sm:py-2 border-r border-gray-200/80 flex flex-col justify-center">
            <label
              htmlFor="hero-date"
              className="block text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-wider leading-none mb-1 cursor-pointer"
            >
              Date
            </label>
            <input
              id="hero-date"
              type="text"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              placeholder="e.g. Tomorrow, 10:00 AM"
              className="w-full bg-transparent border-none outline-none text-xs sm:text-sm font-medium text-gray-900 placeholder:text-gray-400 truncate leading-tight"
            />
          </div>

          {/* 3. Search Button */}
          <button
            type="submit"
            disabled={isSearching}
            className="bg-[#3b82f6] hover:bg-[#2563eb] active:bg-[#1d4ed8] text-white font-medium text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl sm:rounded-full shrink-0 flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            {isSearching ? (
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            ) : (
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            )}
            <span className="hidden xs:inline sm:inline">Search</span>
          </button>
        </form>
      </div>
    </section>
  );
}
