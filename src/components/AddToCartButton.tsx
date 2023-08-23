import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";

const AddToCartButton = () => {
  return (
    <button className="mt-2 w-full flex gap-2 items-center justify-center p-4 bg-orange-400 rounded  hover:brightness-90 shadow-sm">
      <ShoppingCart weight="bold" color="white" size={20} />
      <span className="font-semibold text-white">Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
