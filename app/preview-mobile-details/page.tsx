"use client";

import { useState, useEffect } from "react";
import VehicleDetailsModal, {
  vehiclesCatalog,
  VehicleDetail,
} from "@/components/VehicleDetailsModal";

export default function MobileDetailsPreview() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleDetail>(
    vehiclesCatalog[0]
  );
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const view = params.get("view");
      const timer = setTimeout(() => {
        const scroller = document.querySelector('[role="dialog"] .overflow-y-auto');
        if (scroller) {
          if (view === "form") scroller.scrollTop = 580;
          if (view === "related") scroller.scrollTop = 1400;
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);


  return (
    <div className="w-full min-h-screen bg-[#111215] text-white p-4">
      <div className="max-w-md mx-auto py-4">
        <h1 className="text-sm font-bold mb-2">Mobile Details Controls</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => {
              const scroller = document.querySelector('[role="dialog"] .overflow-y-auto');
              if (scroller) scroller.scrollTop = 0;
            }}
            className="bg-white/10 px-3 py-1.5 rounded-full text-xs"
          >
            Top Hero
          </button>
          <button
            id="btn-scroll-form"
            onClick={() => {
              const scroller = document.querySelector('[role="dialog"] .overflow-y-auto');
              if (scroller) scroller.scrollTop = 580;
            }}
            className="bg-white/10 px-3 py-1.5 rounded-full text-xs"
          >
            Booking Form
          </button>
          <button
            id="btn-scroll-related"
            onClick={() => {
              const scroller = document.querySelector('[role="dialog"] .overflow-y-auto');
              if (scroller) scroller.scrollTop = 1350;
            }}
            className="bg-white/10 px-3 py-1.5 rounded-full text-xs"
          >
            Related Cars
          </button>
        </div>
      </div>


      <VehicleDetailsModal
        vehicle={selectedVehicle}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelectVehicle={(v) => setSelectedVehicle(v)}
      />
    </div>
  );
}
