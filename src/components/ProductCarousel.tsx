import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";

const ProductCarousel = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (newIndex: number) => {
    let newIndexInRange = newIndex;

    if (newIndex < 0) {
      newIndexInRange = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndexInRange = 0;
    }

    setCurrentImageIndex(newIndexInRange);
  };


  return (
    <div className="w-full max-md:relative">
      <img
        src={images[currentImageIndex]}
        alt="product"
        className="md:rounded-md min-w-full"
      />
      <div className="absolute inset-0 flex items-center justify-between px-4 md:hidden">
        <button
          className="border rounded-full p-3 bg-white"
          onClick={() => handleImageChange(currentImageIndex - 1)}
        >
          <CaretLeft weight="bold" />
        </button>
        <button
          className="border rounded-full p-3 bg-white"
          onClick={() => handleImageChange(currentImageIndex + 1)}
        >
          <CaretRight weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
