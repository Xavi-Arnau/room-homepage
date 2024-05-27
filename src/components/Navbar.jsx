import React, { useState, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const menuRef = useRef();
  const closeMenu = (e) => {
    if (menuRef.current === e.target) {
      handleNav();
    }
  };
  return (
    <div>
      <div className="w-full md:w-fit flex flex-row gap-12 items-center p-4">
        <div onClick={handleNav} className="md:hidden w-1/5 z-50">
          {nav ? (
            <AiOutlineClose size={30} className="text-black" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        <div className="w-full md:w-fit flex flex-row justify-center">
          <img src={logo} alt="" />
        </div>
        <div className="md:hidden w-1/5"></div>

        <ul className="hidden md:flex flex-row gap-8 text-white text-lg">
          <li className="hover:underline underline-offset-8">
            <a href="/">home</a>
          </li>
          <li className="hover:underline underline-offset-8">
            <a href="/">shop</a>
          </li>
          <li className="hover:underline underline-offset-8">
            <a href="/">about</a>
          </li>
          <li className="hover:underline underline-offset-8">
            <a href="/">contact</a>
          </li>
        </ul>
      </div>
      {/*start mobile menu*/}
      <div
        className={
          nav
            ? "md:hidden w-2/3 bg-white z-40 fixed h-full top-[0px] left-[0px] ease-in duration-500"
            : "md:hidden w-2/3 bg-white z-40 fixed h-full top-[0px] left-[-100%] ease-in duration-500"
        }
      >
        <div className="p-10 flex flex-col gap-6 mt-20">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={menuRef}
        onClick={closeMenu}
        className={
          nav
            ? "md:hidden w-full inset-0 bg-black  z-30 fixed h-full opacity-70 animate-openmenu"
            : "md:hidden w-full inset-0 bg-black  z-30 fixed h-full opacity-0 hidden animate-closemenu"
        }
      ></div>
      {/*end mobile menu*/}
    </div>
  );
};

export default Navbar;
