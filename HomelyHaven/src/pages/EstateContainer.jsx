import { useState } from "react";
import data from "../data/data.json";
import {EstateCard } from '../components'

const EstateContainer = () => {
  const [estateData, setData] = useState(data.estate);
  return <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:w-[1000px]">
      {estateData.map((es) => {
        return <EstateCard estate={es} key={es.id} />;
      })}
    </div>;
};

export default EstateContainer;
