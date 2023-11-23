import React from "react";

const MenuButton = ({ setIsMenuOpen, isModalOpen }) => {
  return (
    <button
      onClick={() => {
        setIsMenuOpen((prev) => !prev);
      }}
      className={` ${
        isModalOpen ? "bottom-[-100%]" : " bottom-10"
      }  w-[70px] h-[70px] rounded-full bg-emerald-500 absolute z-20  transition-all left-[calc(50%-35px)]  lg:hidden block`}
    ></button>
  );
};

export default MenuButton;
