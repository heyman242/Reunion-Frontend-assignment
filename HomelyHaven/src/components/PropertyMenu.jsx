import { useState } from "react";

const PropertyMenu = ({ onPropertyTypeChange }) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const handlePropertyTypeChange = (event) => {
    const propertyType = event.target.value;
    setSelectedPropertyType(propertyType);
    onPropertyTypeChange(propertyType);
  };

  return (
    <div>
      <div className="text-lg font-bold p-2">Property Type</div>
      <div className="w-40 h-fit p-3 flex flex-row justify-between items-center hover:cursor-pointer">
        <select
          name="propertyType"
          id="propertyType"
          onChange={handlePropertyTypeChange}
        >
          <option>Select Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
        </select>
      </div>
    </div>
  );
};

export default PropertyMenu;
