import LocationMenu from './LocationMenu'
import DatePicker from './DatePicker'
import PriceMenu from './PriceMenu' 
import PropertyMenu from './PropertyMenu'

const Filters = () => {
  return (
    <div className="flex flex-row justify-evenly items-start">
      <LocationMenu />
      <DatePicker />
      <PriceMenu />
      <PropertyMenu/>
    </div>
  );
}

export default Filters