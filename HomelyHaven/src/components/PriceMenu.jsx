const PriceMenu = () => {
  return (
    <div className="flex flex-col justify-center p-1 bg-white m-3 rounded-sm">
      <span className=" relative top-[13px] left-[17px] text-black-500">
        Price
      </span>
      <div
        className="text-lg font-bold w-44 h-fit p-3 flex flex-row justify-between items-center
        hover:cursor-pointer"
      >
        <select name="price" id="price">
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
