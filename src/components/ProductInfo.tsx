import React from "react";
import ProductInfoDesktop from "./ProductInfoDesktop";
import ProductInfoMobile from "./ProductInfoMobile";
import { useResponsiveLayout } from "../customHooks/useResponsiveLayout";

const ProductInfo = () => {
  const mobileLayout = <ProductInfoMobile />;
  const desktopLayout = <ProductInfoDesktop />;
  const currentLayout = useResponsiveLayout(mobileLayout, desktopLayout);

  return <>{currentLayout}</>;
};

export default ProductInfo;
