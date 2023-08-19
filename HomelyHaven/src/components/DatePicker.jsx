const DatePicker = () => {
  return (
    <div>
      <div className="text-lg font-bold p-2">When</div>
      <div className="w-full sm:w-44 h-fit p-3 flex flex-row justify-between items-center hover:cursor-pointer">
        <select
          name="date"
          id="date"
          className="w-full bg-white border border-grey-300 rounded-full p-2"
        >
          <option>Select Move-in Date</option>
          <option value="8-2023">August, 2023</option>
          <option value="9-2023">September, 2023</option>
          <option value="10-2023">October, 2023</option>
          <option value="11-2023">November, 2023</option>
          <option value="12-2023">December, 2023</option>
          <option value="1-2023">January, 2023</option>
          <option value="2-2023">February, 2023</option>
          <option value="3-2023">March, 2023</option>
          <option value="4-2023">April, 2023</option>
          <option value="5-2023">May, 2023</option>
          <option value="6-2023">June, 2023</option>
          <option value="7-2023">July, 2023</option>
        </select>
      </div>
    </div>
  );
};

export default DatePicker;
