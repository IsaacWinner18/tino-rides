"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-white text-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT COLUMN: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-black tracking-[-0.02em] leading-tight mb-5 sm:mb-7">
              About Us
            </h2>
            <div className="space-y-4 sm:space-y-5 text-gray-600 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Bento Style Grid (Preserved on both mobile and desktop) */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 items-stretch min-h-[300px] xs:min-h-[340px] sm:min-h-[400px] lg:min-h-[440px]">
              {/* Bento Left: Tall Green Supercar Card */}
              <div className="relative w-full h-full min-h-[290px] xs:min-h-[330px] sm:min-h-[390px] lg:min-h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shadow-sm group">
                <Image
                  src="/about-green-supercar.jpg"
                  alt="Emerald green supercar at luxury grand hotel"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 420px"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  quality={95}
                />
              </div>

              {/* Bento Right: Top Stat Card + Bottom Landscape Convertible Card */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 justify-between h-full">
                {/* 1. Dark Stat Card (+10 years Experience) */}
                <div className="bg-[#1c1d22] text-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 lg:p-7 flex flex-col items-center justify-center text-center shadow-sm shrink-0">
                  <span className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-none mb-1 sm:mb-2">
                    +10 years
                  </span>
                  <span className="text-[11px] xs:text-xs sm:text-sm text-gray-400 font-medium tracking-wide">
                    Experience
                  </span>
                </div>

                {/* 2. Landscape Luxury Convertible Card */}
                <div className="relative flex-1 min-h-[140px] xs:min-h-[160px] sm:min-h-[200px] lg:min-h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#e8e4dc] shadow-sm group">
                  <Image
                    src="/about-luxury-convertible.jpg"
                    alt="Bespoke luxury convertible roadster"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 420px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    quality={95}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
