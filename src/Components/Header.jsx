
import React, { useState } from "react";
import header from "../Data/header.jpeg";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [navItemStateForMobileScreens, setNavItemStateForMobileScreens] =
    useState(false);
  function NavItems() {
    return (
      <ul className=" sm:flex gap-6 font-semibold text-sm space-y-5 sm:space-y-0 text-start ">
        <li className="sm:hidden sm:text-white text-black hover:text-[rgb(107,60,201)] cursor-pointer sm:hover:text-[#f28d35] duration-200">
          HOME
        </li>
        <li className=" sm:text-white text-black hover:text-[#6b3cc9] cursor-pointer sm:hover:text-[#f28d35] duration-200">
          SERVICES
        </li>
        <li className=" sm:text-white  text-black hover:text-[#6b3cc9] cursor-pointer sm:hover:text-[#f28d35] duration-200">
          ABOUT US
        </li>
        <li className=" sm:text-white  text-black hover:text-[#6b3cc9] cursor-pointer sm:hover:text-[#f28d35] duration-200">
          CONTACT US
        </li>
        <li className=" sm:text-white  text-black hover:text-[#6b3cc9] cursor-pointer sm:hover:text-[#f28d35] duration-200">
          CAREERS
        </li>
      </ul>
    );
  }

  return (
    <div className=" w-full h-[60px]  bg-[#6b3cc9]  pt-2 pb-2  fixed ">
      <div className=" w-11/12 md:w-10/12  flex items-center justify-between mx-auto py-[5px]">
        <img src={header} className=" h-8 sm:h-10 object-cover" alt="img" />
        <div className=" hidden sm:block">
          <NavItems />
        </div>
        <FaBars
          onClick={() => {
            setNavItemStateForMobileScreens(!navItemStateForMobileScreens);
          }}
          className=" sm:hidden size-6 text-white"
        />
      </div>
      <div
        className={` ${
          navItemStateForMobileScreens === true ? " block" : "hidden"
        } sm:hidden absolute top-0 left-0 px-5 h-screen pt-6 w-full bg-white`}
      >
        <div className=" relative">
          <NavItems />
          <RxCross1
            onClick={() => {
              setNavItemStateForMobileScreens(!navItemStateForMobileScreens);
            }}
            className=" absolute top-0 right-0 size-6 text-gray-600 hover:text-[#6b3cc9]"
          />
        </div>
      </div>
    </div>
  );
}