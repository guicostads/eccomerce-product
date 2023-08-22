import React from "react";
import { useState } from "react";
import Logo from "../images/logo.svg";
import Avatar from "../images/image-avatar.png";
import Cart from "../images/icon-cart.svg";
import { List, X } from "@phosphor-icons/react";

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
        {isMenuOpen && (
          <>
            <div
              className="fixed top-0 left-0 z-40 w-screen h-screen bg-black opacity-40"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className="fixed top-0 left-0 z-50  min-h-screen p-4 bg-white">
              <ul className="flex flex-col  gap-2 bg-white w-[12rem]">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="mb-4 text-left"
                >
                  <X />
                </button>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
