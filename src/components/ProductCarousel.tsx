/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";

const ProductCarousel = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [currentProductImage, setCurrentProductImage] = useState(Image1);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <img src={currentProductImage} alt="product" />
    </div>
  );
};

export default ProductCarousel;
