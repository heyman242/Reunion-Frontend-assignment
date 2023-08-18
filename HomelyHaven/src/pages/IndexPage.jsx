import { Filters } from "../components";

const IndexPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-black font-bold text-4xl p-6">
        Search properties to rent
      </h1>
      <div className="bg-white px-6 flex flex-row  items-center ">
        <div className="flex flex-grow items-center ">
          <Filters />
        </div>
        <button className="w-max p-3 rounded-lg text-sm text-white bg-purple-500">
          Search
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
