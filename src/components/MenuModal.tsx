import React from "react";
import { X } from "@phosphor-icons/react";

interface ModalProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const MenuModal = ({ isMenuOpen, setIsMenuOpen }: ModalProps) => {
  return (
    <>
      {isMenuOpen && (
        <>
          <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-black opacity-40"></div>
          <div className="fixed top-0 left-0 z-50  min-h-screen p-4 bg-white">
            <nav>
            <ul className="flex flex-col  gap-2 bg-white w-[12rem]">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mb-4 text-left"
              >
                <X />
              </button>
              <li className="font-semibold cursor-pointer hover:border-b hover:border-orange-400 hover:border-b-2 ">
                Collections
              </li>
              <li className="font-semibold cursor-pointer hover:border-b hover:border-orange-400 hover:border-b-2 ">
                Men
              </li>
              <li className="font-semibold cursor-pointer hover:border-b hover:border-orange-400 hover:border-b-2 ">
                Women
              </li>
              <li className="font-semibold cursor-pointer hover:border-b hover:border-orange-400 hover:border-b-2 ">
                About
              </li>
              <li className="font-semibold cursor-pointer hover:border-b hover:border-orange-400 hover:border-b-2 ">
                Contact
              </li>
            </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MenuModal;
