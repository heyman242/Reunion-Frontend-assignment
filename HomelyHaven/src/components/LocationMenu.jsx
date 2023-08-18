const LocationMenu = () => {
  return (
    <div className="flex flex-col justify-center p-1 bg-white m-3 rounded-sm">
      <span className="relative top-[13px] left-[17px] text-black-500">
        Location
      </span>
      <div className="text-lg font-bold w-48 h-fit p-3 flex flex-row justify-between items-center hover:cursor-pointer">
        <select name="location" id="location">
          <option>Select an Option</option>
          <option value="Mumbai">Mumbai, India</option>
          <option value="Kolkata">Kolkata, India</option>
          <option value="Delhi">Delhi, India</option>
          <option value="Banglore">Banglore, India</option>
        </select>
      </div>
      
    </div>
  );
};

export default LocationMenu;
