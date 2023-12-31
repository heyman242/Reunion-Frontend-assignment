import LocationMenu from "./LocationMenu";
import PriceMenu from "./PriceMenu";
import PropertyMenu from "./PropertyMenu";
import DatePicker from "./DatePicker";

const Filters = ({ onCityChange, onPriceChange, onPropertyTypeChange }) => {
  return (
    <div className="flex flex-wrap justify-start items-center">
      <LocationMenu onCityChange={onCityChange} />
      <DatePicker />
      <PriceMenu onPriceChange={onPriceChange} />
      <PropertyMenu onPropertyTypeChange={onPropertyTypeChange} />
    </div>
  );
};

export default Filters;
