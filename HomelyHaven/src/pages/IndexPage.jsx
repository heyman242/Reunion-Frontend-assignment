import { useState } from "react";
import { Filters } from "../components";
import { EstateContainer } from "../pages";

const IndexPage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handlePropertyTypeChange = (propertyType) => {
    setSelectedPropertyType(propertyType);
  };

  return (
    <div className="p-2">
      <h1 className="text-black font-bold text-4xl p-6">
        Search properties to rent
      </h1>
      <div className="bg-white px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:flex sm:flex-row sm:justify-between sm:items-center ">
        <Filters
          onCityChange={handleCityChange}
          onPriceChange={handlePriceChange}
          onPropertyTypeChange={handlePropertyTypeChange}
        />
      </div>
      <br />
      <EstateContainer
        selectedCity={selectedCity}
        selectedPrice={selectedPrice}
        selectedPropertyType={selectedPropertyType}
      />
    </div>
  );
};

export default IndexPage;
