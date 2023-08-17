import React, { useState } from "react";
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
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <img src={images[currentImageIndex]} alt="product" />
      <div className="absolute">
        <div className="flex justify-between">
            <button onClick={() => handleImageChange(currentImageIndex - 1)}>
              Previous
            </button>
            <button onClick={() => handleImageChange(currentImageIndex + 1)}>
              Next
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
