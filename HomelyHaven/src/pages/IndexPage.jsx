import { Filters } from "../components";
import { EstateContainer } from "../pages";

const IndexPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-black font-bold text-4xl p-6">
        Search properties to rent
      </h1>
      <div className="bg-white px-3 flex flex-row justify-between items-center">
        <Filters />
        <button className="w-max p-3 rounded-lg text-sm text-white bg-purple-500">
          Search
        </button>
      </div>
      <EstateContainer />
    </div>
  );
};

export default IndexPage;
