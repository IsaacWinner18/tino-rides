"use client";

import Image from "next/image";

interface BrandItem {
  name: string;
  src: string;
  width: number;
  height: number;
  isSpecialBadge?: boolean;
}

export default function BrandMarquee() {
  const brands: BrandItem[] = [
    {
      name: "Cadillac",
      src: "/logos/cadillac-real-8k.png",
      width: 2048,
      height: 1884,
    },
    {
      name: "Tesla",
      src: "/logos/tesla-real-8k.png",
      width: 2048,
      height: 2031,
    },
    {
      name: "Lexus",
      src: "/logos/lexus-real-8k.png",
      width: 2048,
      height: 1448,
    },
    {
      name: "Mercedes-Benz",
      src: "/logos/mercedes-8k.png",
      width: 2048,
      height: 2048,
    },
    {
      name: "Porsche",
      src: "/logos/porsche-real-8k.png",
      width: 1600,
      height: 2048,
      isSpecialBadge: true,
    },
    {
      name: "Ferrari",
      src: "/logos/ferrari-real-8k.png",
      width: 1281,
      height: 2048,
    },
    {
      name: "Audi",
      src: "/logos/audi-real-8k.png",
      width: 2048,
      height: 732,
    },
    {
      name: "BMW",
      src: "/logos/bmw-real-8k.png",
      width: 2047,
      height: 2048,
    },
    {
      name: "Lamborghini",
      src: "/logos/lamborghini-real-8k.png",
      width: 1785,
      height: 2048,
    },
    {
      name: "Rolls-Royce",
      src: "/logos/rolls-royce-real-8k.png",
      width: 1171,
      height: 2048,
    },
    {
      name: "Bentley",
      src: "/logos/bentley-real-8k.png",
      width: 2048,
      height: 667,
    },
  ];

  // Duplicate for seamless 0-jitter infinite looping
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Sleek Dark Capsule Pill Container */}
        <div className="relative w-full bg-[#18191d] rounded-2xl sm:rounded-full py-4 sm:py-5 px-4 sm:px-8 border border-white/10 shadow-2xl overflow-hidden flex items-center">
          {/* Left Gradient Fade Mask */}
          <div className="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-[#18191d] via-[#18191d]/80 to-transparent pointer-events-none z-20" />

          {/* Infinite Marquee Track */}
          <div className="animate-marquee flex items-center gap-8 sm:gap-14 lg:gap-18 shrink-0 pr-8 sm:pr-14 lg:pr-18">
            {marqueeItems.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center justify-center shrink-0 cursor-pointer group"
                title={brand.name}
              >
                {brand.isSpecialBadge ? (
                  <div className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg flex items-center justify-center h-10 sm:h-12 w-10 sm:w-12 shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={48}
                      height={48}
                      className="h-full w-auto object-contain"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-8 sm:h-10 lg:h-11 shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={brand.width}
                      height={brand.height}
                      className="h-7 sm:h-9 lg:h-10 w-auto object-contain brightness-95 contrast-105 group-hover:brightness-105 transition-all"
                      unoptimized
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Gradient Fade Mask */}
          <div className="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-[#18191d] via-[#18191d]/80 to-transparent pointer-events-none z-20" />
        </div>
      </div>
    </section>
  );
}
