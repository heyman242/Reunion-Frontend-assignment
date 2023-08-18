import { Filters } from "../components";


const IndexPage = () => {
  return (
    <div className="p-2">
      <div className="flex flex-row justify-between w-max relative left-[850px] items-center">
        <h1 className="text-black font-bold text-4xl p-6 relative -left-[850px]">
          Search properties to rent
        </h1>
        <div
          className="text-xs text-gray-500 border rounded bg-white w-60 h-fit p-3 flex flex-row justify-between items-center
        hover:cursor-pointer"
        >
          <p className="text-start">Search with SearchBar</p>
        </div>
      </div>
      <div className="bg-white px-3 flex flex-row justify-between items-center">
        <Filters/>
        <button className="w-max p-3 rounded-lg text-sm text-white bg-purple-500">
          Search
        </button>
      </div>
      </div>
  );
};

export default IndexPage;
