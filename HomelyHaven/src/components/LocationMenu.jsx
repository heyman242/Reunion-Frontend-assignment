import { useState } from "react";



const LocationMenu = ({ onCityChange }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onCityChange(city);
  };
  return (
    <div>
      <div className="text-lg font-bold p-2">Location</div>
      <div className="w-48 h-fit p-3 flex flex-row justify-between items-center hover:cursor-pointer">
        <select name="location" id="location" onChange={handleCityChange}>
          <option>Select an Option</option>
          <option value="Mumbai">Mumbai, India</option>
          <option value="Kolkata">Kolkata, India</option>
          <option value="Delhi">Delhi, India</option>
          <option value="Bangalore">Bangalore, India</option>
        </select>
      </div>
    </div>
  );
};

export default LocationMenu;
