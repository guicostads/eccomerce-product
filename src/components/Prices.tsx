import React from "react";

const Prices = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-[1.7rem] font-semibold ">$125.00</span>
        <span className="mt-1 bg-orange-200 text-orange-400 px-1 font-semibold rounded">50%</span>
      </div>
      <span className="text-sm text-gray-500 font-semibold line-through">$250.00</span>
    </div>
  );
};

export default Prices;
