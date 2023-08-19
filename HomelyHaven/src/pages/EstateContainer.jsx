import { useState } from "react";
import data from "../data/data.json";
import { EstateCard } from "../components";

const EstateContainer = ({
  selectedCity,
  selectedPrice,
  selectedPropertyType,
}) => {
  const [estateData, setData] = useState(data.estate);

  const filteredEstateData = estateData.filter((estate) => {
    if (selectedCity && estate.location.city !== selectedCity) {
      return false;
    }

    if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.split("-");
      const estatePrice = parseInt(estate.price);
      if (
        estatePrice < parseInt(minPrice) ||
        estatePrice > parseInt(maxPrice)
      ) {
        return false;
      }
    }

    if (
      selectedPropertyType &&
      estate["property-type"] !== selectedPropertyType
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredEstateData.map((es) => {
        return <EstateCard estate={es} key={es.id} />;
      })}
    </div>
  );
};

export default EstateContainer;
