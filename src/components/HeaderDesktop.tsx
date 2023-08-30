import React, { useState } from "react";
import Logo from "../images/logo.svg";

const HeaderDesktop = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseOut = () => {
    setIsHovered(null);
  };

  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="w-full py-10 flex items-center border-b">
      <div className="mr-12">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-10 text-stone-500">
          {menuItems.map((item, index) => (
            <li className="hover:text-stone-800 relative" key={index}>
              <button
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              >
                {item}
              </button>
              {isHovered === index && (
                <div className="absolute w-full h-1 bg-orange-500 -bottom-[2.5rem]"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderDesktop;
