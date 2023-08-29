import React from "react";
import ProductInfoDesktop from "./ProductInfoDesktop";
import ProductInfoMobile from "./ProductInfoMobile";

const ProductInfo = () => {
  

  return <>
  <div className="md:hidden max-md:block">
    <ProductInfoMobile />
  </div>
  <div className="md:block max-md:hidden">
    <ProductInfoDesktop />
  </div>
  </>;
};

export default ProductInfo;
