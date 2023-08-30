import React from "react";

const Prices = () => {
  return (
    <div className="max-md:w-full md:w-[2rem] md:overflow-wrap md:flex md:flex-col max-md:justify-between">
      <div className="flex items-center gap-4">
        <span className="text-[1.7rem] font-semibold break-words">
          $125.00
        </span>
        <span className="mt-1 bg-orange-200 text-orange-400 px-1 font-semibold rounded">
          50%
        </span>
      </div>
      <div className="text-sm text-gray-500 font-semibold line-through whitespace-no-wrap md:block hidden">
        $250.00
      </div>
    </div>
  );
};

export default Prices;
