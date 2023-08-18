import React from "react";
import ProductCarousel from "./ProductCarousel";
import Prices from "./Prices";
import ProductCounter from "./ProductCounter";
import AddToCartButton from "./AddToCartButton";

const ProductInfo = () => {
  return (
    <>
      <ProductCarousel />
      <div className="py-3 px-5 flex flex-col gap-2">
        <h3 className="uppercase font-bold text-xs text-orange-400">
          sneaker company
        </h3>
        <h1 className="font-semibold text-[2.5rem]">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-gray-500 font-regular">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          perspiciatis quibusdam, ex rerum ad doloribus aspernatur? Sint commodi
          obcaecati vitae labore, beatae asperiores voluptates, enim
          consequatur, dicta veniam nam quisquam?
        </p>
        <Prices />
        <ProductCounter />
        <AddToCartButton />
      </div>
    </>
  );
};

export default ProductInfo;
