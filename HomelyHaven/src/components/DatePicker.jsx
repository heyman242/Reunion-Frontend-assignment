
const DatePicker = () => {
  return (
    <div className="flex flex-col justify-center p-1 bg-white m-3 rounded-sm">
      <span className=" relative top-[13px] left-[17px] text-black-500">
        When
      </span>
      <div className="text-lg font-bold w-48 h-fit p-3 flex flex-row justify-between items-center hover:cursor-pointer">
        <select name="date" id="date">
          <option  >
            Select Move-in Date
          </option>
          <option value="8-2023">August,2023</option>
          <option value="9-2023">September,2023</option>
          <option value="10-2023">Oct,2023</option>
          <option value="11-2023">Nov,2023</option>
          <option value="12-2023">Dec,2023</option>
          <option value="1-2023">Jan, 2023</option>
          <option value="2-2023">Feb, 2023</option>
          <option value="3-2023">March,2023</option>
          <option value="4-2023">April, 2023</option>
          <option value="5-2023">May,2023</option>
          <option value="6-2023">June,2023</option>
          <option value="7-2023">July,2023</option>
        </select>
      </div>
    </div>
  );
};

export default DatePicker;
