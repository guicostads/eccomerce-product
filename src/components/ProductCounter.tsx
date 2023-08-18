import React, { useState } from "react";

const ProductCounter = () => {
  const [productCount, setProductCount] = useState<number>(0);
  const increaseCount = () => {
    setProductCount((prevCount: number) => prevCount + 1);
  };

  const decreaseCount = () => {
    setProductCount((prevCount: number) =>
      prevCount === 0 ? prevCount : prevCount - 1
    );
  };

  return (
    <div className="w-full flex justify-between bg-gray-100 p-3 rounded font-semibold text-lg">
      <button className="text-orange-400" onClick={decreaseCount}>-</button>
      <span>{productCount}</span>
      <button className="text-orange-400" onClick={increaseCount}>+</button>
    </div>
  );
};

export default ProductCounter;
