import React from "react";
import { useState } from "react";
import Logo from "../images/logo.svg";
import Avatar from "../images/image-avatar.png";
import Cart from "../images/icon-cart.svg";
import { List } from "@phosphor-icons/react";
import MenuModal from "./MenuModal";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="w-full p-4 relative">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                ""
              ) : (
                <div className="mt-0.5">
                  <List size={27} />
                </div>
              )}
            </button>
            <div className="mt-1">
              <img src={Logo} alt="logo" />
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <div className="flex items-center">
              <img src={Cart} alt="cart icon" />
            </div>
            <img src={Avatar} alt="avatar" className="w-[1.5rem]" />
          </div>
        </div>
        <MenuModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default HeaderMobile;
