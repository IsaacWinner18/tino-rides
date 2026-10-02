import Image from "next/image";

interface FeatureItem {
  id: string;
  icon: string;
  png8k: string;
  alt: string;
  titleLines: string[];
}

const features: FeatureItem[] = [
  {
    id: "seamless-booking",
    icon: "/features/seamless-booking.svg",
    png8k: "/features/seamless-booking-8k.png",
    alt: "Seamless booking icon",
    titleLines: ["Seamless", "booking"],
  },
  {
    id: "premium-privileges",
    icon: "/features/premium-privileges.svg",
    png8k: "/features/premium-privileges-8k.png",
    alt: "Premium privileges icon",
    titleLines: ["Premium privileges", "for regular customers"],
  },
  {
    id: "change-cancel",
    icon: "/features/change-cancel.svg",
    png8k: "/features/change-cancel-8k.png",
    alt: "Change or cancel booking icon",
    titleLines: [
      "Change or cancel your",
      "booking up to 72 hours before",
      "the time of pickup.",
    ],
  },
  {
    id: "no-recharging-fees",
    icon: "/features/no-recharging-fees.svg",
    png8k: "/features/no-recharging-fees-8k.png",
    alt: "No recharging fees icon",
    titleLines: ["No recharging", "fees"],
  },
];

export default function Features() {
  return (
    <section className="w-full bg-[#0c0d12] text-white py-14 sm:py-18 lg:py-20 px-4 sm:px-8 lg:px-12 select-none relative overflow-hidden">
      {/* Subtle ambient luxury light bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-0">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className="relative group flex items-center gap-4 sm:gap-5 p-3 sm:p-4 lg:px-6 cursor-default"
            >
              {/* 8K Scalable Vector Icon */}
              <div className="relative w-12 h-12 sm:w-[50px] sm:h-[50px] shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={52}
                  height={52}
                  priority
                  className="w-full h-full object-contain filter contrast-125"
                />
              </div>

              {/* Feature Description */}
              <div className="text-[14px] sm:text-[14.5px] leading-[1.38] font-medium text-white/90 group-hover:text-white transition-colors duration-300 tracking-tight">
                {feature.titleLines.map((line, lineIdx) => (
                  <span key={lineIdx} className="block">
                    {line}
                  </span>
                ))}
              </div>

              {/* Gray Faded Vertical Divider Line (Desktop: 4 columns) */}
              {idx < features.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-gradient-to-b from-transparent via-gray-500/50 to-transparent pointer-events-none"
                />
              )}

              {/* Gray Faded Vertical Divider Line (Tablet: 2 columns) */}
              {(idx === 0 || idx === 2) && (
                <div
                  aria-hidden="true"
                  className="hidden sm:block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-gradient-to-b from-transparent via-gray-500/50 to-transparent pointer-events-none"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
