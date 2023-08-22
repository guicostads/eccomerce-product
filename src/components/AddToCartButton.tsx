import React from "react";
import Cart from "../images/icon-cart.svg";

const AddToCartButton = () => {
  return (
    <button className="mt-2 w-full flex gap-3 items-center justify-center p-4 bg-orange-400 rounded transition-transform transform hover:scale-105 shadow-sm">
      <img src={Cart} alt="cart icon" className="stroke-white w-[1.2rem]" />
      <span className="font-semibold text-white">Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
