import { useState } from "react";

const PriceMenu = ({ onPriceChange }) => {
  const [selectedPrice, setSelectedPrice] = useState("");

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setSelectedPrice(price);
    onPriceChange(price);
  };

  return (
    <div>
      <div className="text-lg font-bold p-2">Price</div>
      <div className="w-full sm:w-44 h-fit p-3 flex flex-row justify-between items-center hover:cursor-pointer">
        <select
          name="price"
          id="price"
          onChange={handlePriceChange}
          className="w-full bg-white border border-grey-300 rounded-full p-2"
        >
          <option>Select Price</option>
          <option value="10000-20000">10k-20k</option>
          <option value="20000-30000">20k-30k</option>
          <option value="30000-40000">30k-40k</option>
          <option value="40000-50000">40k-50k</option>
        </select>
      </div>
    </div>
  );
};

export default PriceMenu;
