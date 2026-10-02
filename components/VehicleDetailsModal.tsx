"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export interface VehicleDetail {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  priceNaira: number;
  priceFormatted: string;
  image: string;
  thumbnail: string;
  alt: string;
  gallery: { src: string; title: string }[];
  description: string;
  specs: { label: string; value: string }[];
  colors: { name: string; hex: string }[];
}

export const vehiclesCatalog: VehicleDetail[] = [
  {
    id: "toyota-suv",
    name: "Toyota Land Cruiser",
    subtitle: "300 Armored (B6)",
    category: "Armored Luxury SUV",
    priceNaira: 350000,
    priceFormatted: "₦350,000",
    image: "/vehicles/toyota-suv.png",
    thumbnail: "/vehicles/toyota-suv.png",
    alt: "Toyota Land Cruiser 300 Executive SUV",
    gallery: [
      { src: "/vehicles/toyota-suv.png", title: "Landing Showcase View" },
      { src: "/vehicles/lc300-road.jpg", title: "Highway Performance" },
      { src: "/vehicles/lc300-front.jpg", title: "Front Exterior" },
      { src: "/vehicles/lc300-cockpit.jpg", title: "Luxury Cockpit" },
    ],
    description:
      "Engineered for high-profile executive mobility and Nigerian terrain. Features certified CEN B6 ballistic armor capable of withstanding high-powered assault rifles, run-flat tires, siren/PA comms, and an ultra-quiet luxury cockpit with refrigerated console.",
    specs: [
      { label: "Engine", value: "3.5L Twin-Turbo V6" },
      { label: "Power", value: "409 HP" },
      { label: "Armor Level", value: "CEN B6 / NIJ III" },
      { label: "Drive", value: "Full-Time 4WD" },
      { label: "Seating", value: "7 Executive Seats" },
      { label: "Transmission", value: "10-Speed Automatic" },
    ],
    colors: [
      { name: "Obsidian Black", hex: "#0b0c10" },
      { name: "Pearl White", hex: "#f3f4f6" },
      { name: "Graphite Gray", hex: "#373a40" },
      { name: "Imperial Blue", hex: "#1e293b" },
    ],
  },
  {
    id: "range-rover",
    name: "Range Rover",
    subtitle: "Autobiography",
    category: "Executive SUV",
    priceNaira: 280000,
    priceFormatted: "₦280,000",
    image: "/vehicles/range-rover.png",
    thumbnail: "/vehicles/range-rover.png",
    alt: "Latest Range Rover Autobiography",
    gallery: [
      { src: "/vehicles/range-rover.png", title: "Landing Showcase View" },
      { src: "/vehicles/range-rover-front.jpg", title: "Front Profile" },
      { src: "/vehicles/range-rover-road.jpg", title: "Executive Road View" },
      { src: "/vehicles/range-rover-cabin.jpg", title: "Luxury Cabin" },
    ],
    description:
      "The pinnacle of British luxury SUV craftsmanship. Equipped with active noise cancellation, executive rear class seating with hot stone massage, electronic air suspension, and seamless road presence across Victoria Island, Ikoyi, and Abuja.",
    specs: [
      { label: "Engine", value: "4.4L Twin-Turbo V8" },
      { label: "Power", value: "523 HP" },
      { label: "0-100 km/h", value: "4.6 seconds" },
      { label: "Drive", value: "Intelligent All-Wheel Drive" },
      { label: "Seating", value: "5 Executive Seats" },
      { label: "Suspension", value: "Dynamic Air Suspension" },
    ],
    colors: [
      { name: "Santorini Black", hex: "#0a0a0d" },
      { name: "Carpathian Gray", hex: "#3e424b" },
      { name: "Fuji White", hex: "#f8f9fa" },
      { name: "Belgravia Green", hex: "#1b2d24" },
    ],
  },
  {
    id: "rolls-royce",
    name: "Rolls-Royce",
    subtitle: "Ghost",
    category: "Ultra-Luxury Sedan",
    priceNaira: 650000,
    priceFormatted: "₦650,000",
    image: "/vehicles/rolls-royce.png",
    thumbnail: "/vehicles/rolls-royce.png",
    alt: "White Rolls-Royce Ghost",
    gallery: [
      { src: "/vehicles/rolls-royce.png", title: "Landing Showcase View" },
      { src: "/vehicles/rolls-royce-front.jpg", title: "Pantheon Front View" },
      { src: "/vehicles/rolls-royce-lounge.jpg", title: "VIP Lounge" },
      { src: "/vehicles/rolls-royce-road.jpg", title: "Scenic Highway View" },
    ],
    description:
      "Post-opulent peerless refinement. Features the iconic illuminated Pantheon Grille, hand-stitched bespoke leather, Starlight headliner with shooting star sequence, acoustic architectural damping, and effortless V12 propulsion.",
    specs: [
      { label: "Engine", value: "6.75L Twin-Turbo V12" },
      { label: "Power", value: "563 HP" },
      { label: "0-100 km/h", value: "4.8 seconds" },
      { label: "Headliner", value: "Starlight Fibre-Optic" },
      { label: "Seating", value: "4 VIP Lounge Seats" },
      { label: "Doors", value: "Effortless Power Assist" },
    ],
    colors: [
      { name: "English White", hex: "#f8fafc" },
      { name: "Diamond Black", hex: "#0f1015" },
      { name: "Salamanca Blue", hex: "#1e3a5f" },
      { name: "Silver Haze", hex: "#94a3b8" },
    ],
  },
  {
    id: "toyota-tundra",
    name: "Toyota Tundra",
    subtitle: "Capstone",
    category: "Luxury Pickup",
    priceNaira: 210000,
    priceFormatted: "₦210,000",
    image: "/vehicles/toyota-tundra.png",
    thumbnail: "/vehicles/toyota-tundra.png",
    alt: "Toyota Tundra Capstone",
    gallery: [
      { src: "/vehicles/toyota-tundra.png", title: "Landing Showcase View" },
      { src: "/vehicles/toyota-tundra-front.jpg", title: "Capstone Front View" },
      { src: "/vehicles/toyota-tundra-trail.jpg", title: "Trail & Escort Ready" },
      { src: "/vehicles/toyota-tundra-interior-real.jpg", title: "Premium Interior" },
    ],
    description:
      "The flagship luxury utility vehicle. Featuring an i-FORCE MAX hybrid twin-turbo powertrain, 22-inch dark chrome wheels, semi-aniline leather, panoramic sunroof, and heavy-duty escort capabilities across interstate highways.",
    specs: [
      { label: "Engine", value: "3.5L i-FORCE MAX Hybrid" },
      { label: "Power", value: "437 HP / 583 lb-ft" },
      { label: "Towing", value: "12,000 lbs Capacity" },
      { label: "Drive", value: "4WDemand Part-Time 4WD" },
      { label: "Seating", value: "5 Premium Seats" },
      { label: "Wheels", value: "22-inch Dark Chrome" },
    ],
    colors: [
      { name: "Midnight Black", hex: "#0c0d11" },
      { name: "Wind Chill Pearl", hex: "#f1f5f9" },
      { name: "Magnetic Gray", hex: "#475569" },
      { name: "Supersonic Red", hex: "#991b1b" },
    ],
  },
];

interface VehicleDetailsModalProps {
  vehicle: VehicleDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectVehicle: (vehicle: VehicleDetail) => void;
  previewMode?: "default" | "form" | "related" | "success";
}

export default function VehicleDetailsModal({
  vehicle,
  isOpen,
  onClose,
  onSelectVehicle,
  previewMode = "default",
}: VehicleDetailsModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(
    previewMode === "success"
  );

  // Form states
  const [formName, setFormName] = useState(
    previewMode === "success" ? "Chief Adeleke Johnson" : ""
  );

  const [formPhone, setFormPhone] = useState("");
  const [formLocation, setFormLocation] = useState("Victoria Island, Lagos");
  const [formDate, setFormDate] = useState("");
  const [formDuration, setFormDuration] = useState("1 day");

  // Sync state whenever the active vehicle changes
  useEffect(() => {
    if (vehicle) {
      setActiveImageIndex(0);
      setSelectedColor(vehicle.colors[0]?.name || "");
      setShowSuccessModal(false);
    }
  }, [vehicle]);

  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      const h = window.location.hash;
      if (h.includes("-scroll")) {
        setTimeout(() => {
          const scroller = document.querySelector('[role="dialog"] .overflow-y-auto');
          if (scroller) scroller.scrollTop = 580;
        }, 350);
      } else if (h.includes("-related")) {
        setTimeout(() => {
          const scroller = document.querySelector('[role="dialog"] .overflow-y-auto');
          if (scroller) scroller.scrollTop = 1350;
        }, 350);
      } else if (h.includes("-success")) {
        setFormName("Chief Adeleke Johnson");
        setShowSuccessModal(true);
      }
    }
  }, [isOpen]);

  if (!isOpen || !vehicle) return null;

  const currentHeroImage =
    vehicle.gallery[activeImageIndex]?.src || vehicle.image;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 800);
  };

  const relatedVehicles = vehiclesCatalog.filter((v) => v.id !== vehicle.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* 
        DRAWER CONTAINER:
        On Mobile: Slides from bottom up to top (h-[98vh] max-h-[98vh] mt-0 rounded-t-lg)
        On Desktop: Centered luxury modal (max-w-4xl h-[90vh] rounded-lg)
        White background, subtle borders, no outward shadows.
      */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full lg:max-w-4xl h-[98vh] max-h-[98vh] mt-0 lg:h-[90vh] lg:max-h-[90vh] bg-white text-gray-900 rounded-t-lg lg:rounded-lg overflow-hidden flex flex-col border border-gray-200 animate-in slide-in-from-bottom duration-300"
      >
        {/* MOBILE DRAG HANDLE */}
        <div className="lg:hidden absolute top-2 left-1/2 -translate-x-1/2 z-30 w-12 h-1 bg-gray-300 rounded-sm" />

        {/* FLOATING CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close vehicle details"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-white/90 hover:bg-white text-gray-700 hover:text-black border border-gray-300 flex items-center justify-center transition-all cursor-pointer active:scale-95 text-sm"
        >
          ✕
        </button>

        {/* SCROLLABLE INNER BODY */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
          {/* 
            HERO MAIN IMAGE SECTION:
            Renders identically to the landing page trend vehicle cutout:
            clean, true to aspect ratio, no malformations, on light luxury backdrop.
            On mobile: full width, h-[85vh] (near full screen), car neatly reduced and centered.
          */}
          <div className="relative w-full h-[85vh] sm:h-[360px] lg:h-[420px] m-0 p-0 overflow-hidden bg-gradient-to-b from-[#f8f9fb] via-[#f1f3f7] to-[#e8ebf0] border-b border-gray-200 shrink-0 flex items-center justify-center">
            {/* The Car Showcase Image: True to aspect ratio, identical to landing page */}
            <div className="w-full h-full flex items-center justify-center p-6 sm:p-8">
              <img
                src={currentHeroImage}
                alt={vehicle.name}
                className="max-w-[85%] max-h-[55vh] sm:max-h-[300px] lg:max-h-[340px] w-auto h-auto object-contain select-none transition-transform duration-300 drop-shadow-xl"
              />
            </div>

            {/* BADGES ON HERO IMAGE */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex flex-wrap gap-2">
              <span className="bg-[#2563eb] text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                {vehicle.category}
              </span>
              <span className="bg-white/95 text-gray-800 text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md border border-gray-300 shadow-sm">
                Instant Dispatch
              </span>
            </div>

            {/* SMALLER IMAGES OF THE SAME CAR TO TOGGLE */}
            <div className="absolute bottom-6 left-4 right-4 sm:bottom-3 sm:left-6 sm:right-6 z-20 flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 no-scrollbar">
              {vehicle.gallery.map((thumb, idx) => {
                const isSelected = idx === activeImageIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-11 sm:w-20 sm:h-13 rounded-md overflow-hidden shrink-0 transition-all duration-200 cursor-pointer bg-white ${
                      isSelected
                        ? "ring-2 ring-blue-600 border border-transparent scale-105"
                        : "opacity-80 hover:opacity-100 border border-gray-300"
                    }`}
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.title}
                      className="w-full h-full object-contain p-1"
                    />
                  </button>
                );
              })}
            </div>

            {/* MOBILE SCROLL HINT */}
            <div className="sm:hidden absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 text-[10px] text-gray-500 font-medium tracking-wider uppercase pointer-events-none flex items-center gap-1">
              <span>Scroll for details</span>
              <span>↓</span>
            </div>
          </div>

          {/* VEHICLE CONTENT BODY */}
          <div className="px-5 sm:px-8 lg:px-10 pt-4 space-y-7">
            {/* TITLE & PRICE ROW */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-gray-200 pb-5">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-[-0.02em]">
                  {vehicle.name}
                </h1>
                <p className="text-sm sm:text-base font-normal text-gray-500 mt-0.5">
                  {vehicle.subtitle}
                </p>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-medium text-blue-600 tracking-tight">
                  {vehicle.priceFormatted}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 font-normal">
                  / day
                </span>
              </div>
            </div>

            {/* COLOR PICKER SECTION: Mobile-responsive, unrounded borders, color name below colors */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700">
                  Select Exterior Color
                </h3>
                <span className="text-xs text-blue-600 font-medium">
                  Selected: {selectedColor}
                </span>
              </div>

              <div className="flex flex-wrap items-start gap-4 sm:gap-6">
                {vehicle.colors.map((c) => {
                  const isColorActive = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className="flex flex-col items-center gap-1.5 focus:outline-none group cursor-pointer"
                    >
                      <span
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-none border transition-all ${
                          isColorActive
                            ? "border-blue-600 ring-2 ring-blue-600/30 scale-105"
                            : "border-gray-300 hover:border-gray-500"
                        }`}
                        style={{ backgroundColor: c.hex }}
                      />
                      <span
                        className={`text-[11px] sm:text-xs text-center font-medium max-w-[76px] leading-tight ${
                          isColorActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-600 group-hover:text-gray-900"
                        }`}
                      >
                        {c.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                Vehicle Overview
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {vehicle.description}
              </p>
            </div>

            {/* KEY SPECIFICATIONS GRID */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700 mb-3">
                Performance & Specs
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {vehicle.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-3.5 rounded-md bg-gray-50 border border-gray-200 flex flex-col justify-between"
                  >
                    <span className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 mt-1">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SENT BOOKING REQUEST FORM (NO CHAUFFEUR BUTTON) */}
            <div className="p-5 sm:p-7 rounded-lg bg-gray-50 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    Send Booking Request
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Fast VIP confirmation across Lagos, Abuja & major cities
                  </p>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Available Now
                </span>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chief Adeleke Johnson"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 803 123 4567"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-md bg-white border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Pickup Location */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Pickup Location
                    </label>
                    <select
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-md bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="Victoria Island, Lagos">Victoria Island, Lagos</option>
                      <option value="Ikoyi, Lagos">Ikoyi, Lagos</option>
                      <option value="Lekki Phase 1, Lagos">Lekki Phase 1, Lagos</option>
                      <option value="Ikeja MMA Airport, Lagos">Ikeja MMA Airport (VIP)</option>
                      <option value="Maitama, Abuja">Maitama, Abuja</option>
                      <option value="Asokoro, Abuja">Asokoro, Abuja</option>
                      <option value="Port Harcourt, Rivers">Port Harcourt, Rivers</option>
                      <option value="Interstate Route">Interstate Route</option>
                    </select>
                  </div>

                  {/* Pickup Date */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-md bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Rental Duration
                    </label>
                    <select
                      value={formDuration}
                      onChange={(e) => setFormDuration(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-md bg-white border border-gray-300 text-gray-900 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="1 day">1 Day</option>
                      <option value="3 days">3 Days (5% discount)</option>
                      <option value="1 week">1 Week (10% discount)</option>
                      <option value="1 month">1 Month (Executive Retainer)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3.5 px-6 rounded-md text-sm transition-all duration-200 cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting request...</span>
                  ) : (
                    <span>Send Booking Request ({vehicle.priceFormatted})</span>
                  )}
                </button>
              </form>
            </div>

            {/* 
              OTHER RELATED CAR CARDS (SCROLLS HORIZONTALLY AT THE BOTTOM):
              Uses clean isolated transparent cutouts (rel.thumbnail) with no background or green tints.
            */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 tracking-[-0.02em]">
                  Other Related Vehicles
                </h3>
                <span className="text-xs text-gray-500 font-normal">Scroll to explore →</span>
              </div>

              {/* Horizontal Scroll Track */}
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
                {relatedVehicles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectVehicle(rel)}
                    className="snap-start shrink-0 w-[240px] sm:w-[260px] p-4 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-normal">{rel.subtitle}</p>
                    </div>

                    <div className="relative w-full h-28 my-3 flex items-center justify-center">
                      <Image
                        src={rel.thumbnail || rel.image}
                        alt={rel.alt}
                        fill
                        sizes="(max-width: 640px) 240px, 260px"
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <span className="text-xs font-semibold text-gray-900">
                        {rel.priceFormatted}
                        <span className="text-[10px] text-gray-500 font-normal">
                          /day
                        </span>
                      </span>
                      <span className="text-xs text-blue-600 font-medium group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        SUCCESS MODAL:
        White luxury theme, subtle border radii, no outward shadows.
      */}
      {showSuccessModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 max-w-sm w-full text-center relative text-gray-900 animate-in zoom-in-95 duration-200"
          >
            <div className="w-14 h-14 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
              ✓
            </div>

            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md uppercase tracking-wider">
              Request Sent
            </span>

            <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-gray-900 mt-3">
              Booking Request Received!
            </h3>

            <p className="text-xs text-gray-600 mt-2 leading-relaxed font-normal">
              Thank you, <strong className="text-gray-900 font-semibold">{formName || "Valued Client"}</strong>. Your reservation request for the{" "}
              <strong className="text-gray-900 font-semibold">{vehicle.name} {vehicle.subtitle}</strong> ({selectedColor}) in {formLocation} has been logged.
            </p>

            <div className="my-4 p-3 bg-gray-50 border border-gray-200 rounded-md text-left text-xs space-y-1.5 text-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-500">Reference:</span>
                <span className="font-mono font-semibold text-blue-600">
                  #TR-{vehicle.id.slice(0, 3).toUpperCase()}-{Math.floor(1000 + Math.random() * 9000)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Rate:</span>
                <span className="font-semibold text-gray-900">{vehicle.priceFormatted} / day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Duration:</span>
                <span className="font-medium text-gray-900">{formDuration}</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mb-4 font-normal">
              Our TINO RIDES executive dispatch team will contact you via WhatsApp / Call at {formPhone || "your number"} within 15 minutes.
            </p>

            <button
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                onClose();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3 px-5 rounded-md text-sm transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
