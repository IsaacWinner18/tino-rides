"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import VehicleDetailsModal, {
  vehiclesCatalog,
  VehicleDetail,
} from "@/components/VehicleDetailsModal";

export default function TrendVehicles() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("toyota-suv");
  const [detailVehicle, setDetailVehicle] = useState<VehicleDetail | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleOpenDetails = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
    const found = vehiclesCatalog.find((v) => v.id === vehicleId) || vehiclesCatalog[0];
    setDetailVehicle(found);
    setIsDetailsOpen(true);
  };

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash.startsWith("#vehicle-")) {
          const rawId = hash.replace("#vehicle-", "");
          const id = rawId.split("-scroll")[0].split("-related")[0].split("-success")[0];
          handleOpenDetails(id);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);



  return (
    <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto w-full">
        {/* SECTION HEADER: Title & View all button */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-black tracking-[-0.02em] leading-none">
            Trend vehicles
          </h2>

          <a
            href="#fleet"
            className="bg-[#6b9eff] hover:bg-[#5b8ef5] active:bg-[#4a80e8] text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all flex items-center gap-1.5"
          >
            <span>View all</span>
            <span className="text-sm font-bold">→</span>
          </a>
        </div>

        {/* 4 VEHICLE CARDS ROW */}
        <div className="bg-white border border-gray-200/90 rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {vehiclesCatalog.map((v, idx) => {
            const isSelected = selectedVehicleId === v.id;

            return (
              <div
                key={v.id}
                onClick={() => handleOpenDetails(v.id)}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 min-h-[360px] sm:min-h-[400px] cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "bg-[#dce7ff]"
                    : "bg-white hover:bg-gray-50/70"
                } ${
                  idx < vehiclesCatalog.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-gray-200/80"
                    : ""
                }`}
              >
                {/* Top: Vehicle Name & Category */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight leading-tight">
                    {v.name}
                  </h3>
                  {v.subtitle && (
                    <p className="text-xs sm:text-[13px] font-normal text-gray-500 mt-0.5">
                      {v.subtitle}
                    </p>
                  )}
                </div>

                {/* Middle: Vehicle Image Studio Cutout */}
                <div className="relative w-full h-44 sm:h-52 my-3 flex items-center justify-center">
                  <img
                    src={v.thumbnail || v.gallery[1]?.src || v.image}
                    alt={v.alt}
                    className="max-h-40 sm:max-h-44 max-w-[90%] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 select-none"
                  />
                </div>

                {/* Bottom: Price in Naira & Book Now Pill Button */}
                <div className="flex items-center justify-between pt-4 mt-auto">
                  <span className="text-sm sm:text-[15px] font-medium text-gray-900 tracking-tight">
                    {v.priceFormatted}
                    <span className="font-normal text-gray-600 text-xs sm:text-[13px]">/day</span>
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDetails(v.id);
                    }}
                    className={`text-xs sm:text-[13px] font-medium px-4 sm:px-5 py-2 rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white text-gray-900 border border-transparent active:scale-95"
                        : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-400 active:scale-95"
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 90% SLIDE-UP VEHICLE DETAILS MODAL */}
      <VehicleDetailsModal
        vehicle={detailVehicle}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onSelectVehicle={(veh) => setDetailVehicle(veh)}
      />
    </section>
  );
}
