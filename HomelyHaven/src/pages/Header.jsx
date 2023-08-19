import { HomeIcon } from "../assets/icons";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center sm:items-center">
      <a href="/" className="flex items-center gap-1">
        <HomeIcon/>
        <span className="font-bold text-xl">HomelyHaven</span>
      </a>
      <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row gap-2">
        <div>Rent</div>
        <div className="border-l border-grey-300 sm:border-l-0 sm:border-t sm:border-grey-300"></div>
        <div>Buy</div>
        <div className="border-l border-grey-300 sm:border-l-0 sm:border-t sm:border-grey-300"></div>
        <div>Sell</div>
        <div className="border-l border-grey-300 sm:border-l-0 sm:border-t sm:border-grey-300"></div>
        <div>Manage Property</div>
        <div className="border-l border-grey-300 sm:border-l-0 sm:border-t sm:border-grey-300"></div>
        <div>Resources</div>
      </div>
      <div className="mt-2 sm:mt-0 flex gap-2 border border-grey-300 rounded-full px-4 py-2 shadow shadow-grey-300">
        <button className="whitespace-nowrap">Login</button>
        <div className="border-l border-grey-300"></div>
        <button className="whitespace-nowrap">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
