import React, { useState } from "react";
import Plus from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";

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
    <div className="w-full md:w-1/2 flex justify-between bg-gray-100 p-3 rounded font-semibold text-lg">
      <button className="text-orange-400" onClick={decreaseCount}>
        <img src={Minus} alt="minus sign" />
      </button>
      <span>{productCount}</span>
      <button className="text-orange-400" onClick={increaseCount}>
        <img src={Plus} alt="plus sign" />
      </button>
    </div>
  );
};

export default ProductCounter;
