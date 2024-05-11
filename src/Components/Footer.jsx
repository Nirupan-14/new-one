import React from 'react'
import header from "../Data/header.jpeg";
import { LuTally1 } from "react-icons/lu";

export default function Footer() {
  return (
    <div className="bg-[#6B3CC9]  text-white text-start px-5  lg:pt-0 ">
      <div className="md:flex   gap-10  w-11/12 md:w-10/12  mx-auto py-10  ">
        <div className=" w-full pr-4 leading-5 md:w-1/2 lg:pr-20 sm:pr-10  ">
          <img src={header} className=" h-8 sm:h-10 object-cover" alt="img" />
          <p className=" text-[16px]  pt-2">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results
          </p>
        </div>

        <div className=" sm:flex w-full md:w-1/2  md:justify-around mt-10 md:mt-0  gap-16">
          <div className="  ">
            <h3 className="text-[21px] cursor-default">Our Technologies</h3>
            <div className="text-[14px] space-y-2 mt-2">
              <p className=" cursor-pointer">ReactJS</p>
              <p className=" cursor-pointer">Gatsby</p>
              <p className=" cursor-pointer">NextJS</p>
              <p className=" cursor-pointer">NodeJS</p>
            </div>
          </div>

          <div className="">
            <h3 className="text-[21px] mt-6 sm:mt-0 cursor-default">
              Our Services
            </h3>
            <div className="text-[14px]  space-y-2 mt-2 ">
              <p className=" cursor-pointer ">Social media Marketing</p>
              <p className=" cursor-pointer ">Web & Mobile App Development</p>
              <p className=" cursor-pointer ">Data & Analytics</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <center>
          <hr className="bg-white lg:w-3/6"></hr>
        </center>
      </div>

      <div className="flex justify-center items-end pb-2  ">
        <p className=" cursor-pointer">Privacy Policy</p>
        <p className="pl-4 text-2xl cursor-default">
          <LuTally1 className="text-white mt-1" />
        </p>
        <p className="  cursor-pointer">Terms & Conditions</p>
      </div>
    </div>
  );
}
