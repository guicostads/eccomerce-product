import React from "react";
import ProductInfoDesktop from "./ProductInfoDesktop";
import ProductInfoMobile from "./ProductInfoMobile";
import { useResponsiveLayout } from "../customHooks/useResponsiveLayout";

const ProductInfo = () => {
  const currentLayout = useResponsiveLayout(
    ProductInfoMobile,
    ProductInfoDesktop
  );

  return <>{currentLayout}</>;
};

export default ProductInfo;
