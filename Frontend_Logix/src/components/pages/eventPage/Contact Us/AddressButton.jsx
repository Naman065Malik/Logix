import React from "react";
import { MapPin } from "lucide-react";

const AddressButton = () => {
  const address = "Taj Mahal, Agra, India"; 

  const handleOpenMaps = () => {
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapsLink, "_blank");
  };

  return (
    <button
      onClick={handleOpenMaps}
      className="border-2 border-purple-300 text-purple-200 w-[105%] text-[18px] lg:text-[15px] h-16 lg:h-12 items-center font-semibold px-4 rounded-sm shadow-md outline-none flex"
    >
      <MapPin size={20} color="violet" strokeWidth={2} className="mr-2" />
      {address}
    </button>
  );
};

export default AddressButton;
