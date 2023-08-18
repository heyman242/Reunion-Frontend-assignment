const Header = () => {
  return (
    <header className="flex justify-between">
      <a href="/" className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
          <path
            fillRule="evenodd"
            d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
            clipRule="evenodd"
          />
        </svg>

        <span className="font-bold text-xl">HomelyHaven</span>
      </a>
      <div className="flex gap-2 border border-grey-300 rounded-full px-4 py-2 shadow shadow-grey-300">
        <div>Rent</div>
        <div className="border-l border-grey-300"></div>
        <div>Buy</div>
        <div className="border-l border-grey-300"></div>
        <div>Sell</div>
        <div className="border-l border-grey-300"></div>
        <div>Manage Property</div>
        <div className="border-l border-grey-300"></div>
        <div>Resources</div>
      </div>
      <div className="flex items-center gap-2 border border-grey-300 rounded-full px-4 py-2 shadow shadow-grey-300">
        <button >Login</button>
        <div className="border-l border-grey-300"></div>
        <button >Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
