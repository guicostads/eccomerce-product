import React from "react";

const Prices = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-[2rem] font-semibold ">$125.00</span>
        <span className="bg-orange-200 text-orange-400 p-1 rounded">50%</span>
      </div>
      <span className="text-sm text-gray-500 font-semibold line-through">$250.00</span>
    </div>
  );
};

export default Prices;
