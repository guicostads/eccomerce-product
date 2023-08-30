import React, { useState } from "react";
import Logo from "../images/logo.svg";

const HeaderDesktop = () => {
  const hoveredStyle = "absolute w-full h-1 bg-orange-500 -bottom-[2.5rem]";
  const [isHovered, setIsHovered] = useState<string>("");

  const handleMouseOver = (e) => {
    setIsHovered(e.target.id);
  };

  const handleMouseOut = () => {
    setIsHovered("");
  };

  return (
    <div className="w-full py-10 flex items-center  border-b">
      <div className="mr-12">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-10 text-stone-500">
          <li className="hover:text-stone-800 relative">
            <a
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              id="1"
              href="#home"
            >
              Collections
            </a>
            <div className={isHovered === "1" ? hoveredStyle : ""}></div>
          </li>
          <li className="hover:text-stone-800 relative">
            <a
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              id="2"
              href="#home"
            >
              Men
            </a>
            <div className={isHovered === "2" ? hoveredStyle : ""}></div>
          </li>
          <li className="hover:text-stone-800 relative">
            <a
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              id="3"
              href="#home"
            >
              Women
            </a>
            <div className={isHovered === "3" ? hoveredStyle : ""}></div>
          </li>
          <li className="hover:text-stone-800 relative">
            <a
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              id="4"
              href="#home"
            >
              About
            </a>
            <div className={isHovered === "4" ? hoveredStyle : ""}></div>
          </li>
          <li className="hover:text-stone-800 relative">
            <a
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              id="5"
              href="#home"
            >
              Contact
            </a>
            <div className={isHovered === "5" ? hoveredStyle : ""}></div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderDesktop;
