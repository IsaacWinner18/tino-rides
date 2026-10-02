"use client";

import { useState } from "react";
import Image from "next/image";

export default function PromoBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    duration: "1 day",
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setIsModalOpen(false);
      setFormData({ name: "", phone: "", date: "", duration: "1 day" });
    }, 2200);
  };

  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] overflow-hidden bg-[#0c0d12] flex items-center select-none">
      {/* Background Land Cruiser Studio Shot - Entire background is the card */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/banners/land-cruiser-banner-perfect.jpg"
          alt="Toyota Land Cruiser LC300 Studio Shot"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-center opacity-90 lg:opacity-100"
        />
        {/* Subtle Vignette Gradient for Maximum Text Contrast without Obscuring Car */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d12]/95 via-[#0c0d12]/70 sm:via-[#0c0d12]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/90 via-transparent to-transparent lg:hidden pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* LEFT CONTENT: Title & Book Now CTA */}
        <div className="max-w-lg flex flex-col items-start gap-6 sm:gap-8 my-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-[-0.02em] leading-[1.12]">
            Book Land Cruiser with
            <br />
            a big discount
          </h2>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-[#6b9eff] hover:bg-[#5b8ef5] active:bg-[#4a80e8] text-white text-xs sm:text-sm font-medium px-7 py-3 rounded-full transition-all duration-200 cursor-pointer active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Book Now
          </button>
        </div>

        {/* RIGHT BADGE: 50% Discount Card */}
        <div className="self-end lg:self-center w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] lg:w-[185px] lg:h-[185px] bg-[#6b9eff] text-white p-5 sm:p-6 lg:p-7 flex flex-col justify-between rounded-sm shrink-0 shadow-2xl">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
            50%
          </span>
          <div className="text-xs sm:text-sm lg:text-[14.5px] font-medium leading-tight opacity-95">
            <p>For everyone</p>
            <p>Land Cruiser cars</p>
          </div>
        </div>
      </div>

      {/* 50% DISCOUNT RESERVATION MODAL */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => !bookingConfirmed && setIsModalOpen(false)}
        >
          <div
            className="bg-[#16181f] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full relative text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            {!bookingConfirmed && (
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            )}

            {bookingConfirmed ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mb-4 border border-emerald-500/40">
                  ✓
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Reservation Received!
                </h3>
                <p className="text-sm text-gray-400 mt-2 max-w-xs">
                  Your 50% promo code has been applied. The TINO RIDES VIP concierge will contact you shortly to confirm your Land Cruiser delivery.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold text-white bg-[#6b9eff] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    50% Discount Applied
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold">
                    Instant Voucher
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight">
                  Toyota Land Cruiser 300
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Armored Luxury B6 Edition • Chauffeur or Self-Drive
                </p>

                {/* Price Display */}
                <div className="my-5 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 line-through">
                      ₦350,000 / day
                    </span>
                    <div className="text-xl sm:text-2xl font-medium text-[#6b9eff]">
                      ₦175,000{" "}
                      <span className="text-xs font-normal text-gray-300">
                        / day
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-1 rounded">
                      You save ₦175,000
                    </span>
                  </div>
                </div>

                {/* Reservation Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Cole"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6b9eff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6b9eff]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Pickup Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs focus:outline-none focus:border-[#6b9eff]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Rental Period
                      </label>
                      <select
                        value={formData.duration}
                        onChange={(e) =>
                          setFormData({ ...formData, duration: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-xl bg-[#1d1f28] border border-white/10 text-white text-xs focus:outline-none focus:border-[#6b9eff]"
                      >
                        <option value="1 day">1 Day (₦175,000)</option>
                        <option value="3 days">3 Days (₦525,000)</option>
                        <option value="1 week">1 Week (₦1,225,000)</option>
                        <option value="1 month">1 Month (₦4,900,000)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#6b9eff] hover:bg-[#5b8ef5] active:bg-[#4a80e8] text-white font-medium py-3 px-4 rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    Confirm 50% Promo Booking
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
