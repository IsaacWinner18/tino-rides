"use client";

import { useState } from "react";
import Image from "next/image";

interface CategoryItem {
  id: string;
  name: string;
  titleLines?: string[];
  image: string;
  textColor: "light" | "dark";
  alt: string;
}

const categories: CategoryItem[] = [
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    titleLines: ["Mercedes", "-Benz"],
    image: "/categories/mercedes.jpg",
    textColor: "light",
    alt: "Mercedes-Benz G-Wagon",
  },
  {
    id: "audi",
    name: "Audi",
    titleLines: ["Audi"],
    image: "/categories/audi.jpg",
    textColor: "dark",
    alt: "Audi R8 Supercar",
  },
  {
    id: "bmw",
    name: "BMW",
    titleLines: ["BMW"],
    image: "/categories/bmw.jpg",
    textColor: "light",
    alt: "BMW M4 Coupe",
  },
  {
    id: "porsche",
    name: "Porsche",
    titleLines: ["Porsche"],
    image: "/categories/porsche.jpg",
    textColor: "dark",
    alt: "Porsche 911 GT3 RS",
  },
];

export default function CarCategory() {
  const [activeCategory, setActiveCategory] = useState<string>("mercedes");

  return (
    <section className="w-full bg-white text-gray-900 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 select-none relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-[-0.02em]">
            Car Category
          </h2>
        </div>

        {/* CARDS CONTAINER: Horizontal scroll snap on mobile (~10% next card visible, left margin), 4-column grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-4 px-6 sm:mx-0 sm:px-0 no-scrollbar snap-x snap-mandatory scroll-pl-6">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="group relative aspect-[4/5] w-[82vw] sm:w-full shrink-0 sm:shrink snap-start rounded-xl overflow-hidden bg-neutral-900 cursor-pointer transition-all duration-500"
              >
                {/* Background Car Image */}
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  quality={90}
                />

                {/* Subtle top gradient for text legibility if light text */}
                {cat.textColor === "light" && (
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                )}

                {/* Top-Left Category Name */}
                <div className="absolute top-5 left-5 z-10 pointer-events-none">
                  {cat.titleLines && cat.titleLines.length > 1 ? (
                    <h3
                      className={`text-xl sm:text-2xl font-medium tracking-tight leading-[1.08] ${
                        cat.textColor === "light"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {cat.titleLines.map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  ) : (
                    <h3
                      className={`text-xl sm:text-2xl font-medium tracking-tight leading-tight ${
                        cat.textColor === "light"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {cat.name}
                    </h3>
                  )}
                </div>

                {/* Bottom-Right Arrow Action Circle Button */}
                <div className="absolute bottom-5 right-5 z-10">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "bg-[#6b9eff] text-white scale-105"
                        : "bg-white text-gray-900 group-hover:scale-110 group-hover:bg-[#6b9eff] group-hover:text-white"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H9M17 7V15"
                      />
                    </svg>
                  </div>
                </div>

                {/* Subtle border overlay on hover */}
                <div
                  className={`absolute inset-0 border-2 transition-colors pointer-events-none ${
                    isSelected ? "border-[#6b9eff]/70" : "border-transparent group-hover:border-black/10"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
