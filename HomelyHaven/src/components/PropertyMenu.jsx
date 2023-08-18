import React from "react";

const PropertyMenu = () => {
  return (
    <div className="flex flex-col justify-center p-1 bg-white m-4 rounded-sm">
      <span className="relative top-[13px] left-[17px] text-black-500">
        Property Type
      </span>
      <div
        className="text-lg font-bold w-40 h-fit p-3 flex flex-row justify-between items-center
        hover:cursor-pointer"
      >
        <select name="propertyType" id="propertyType">
          <option>Select Property Type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>
    </div>
  );
};

export default PropertyMenu;
