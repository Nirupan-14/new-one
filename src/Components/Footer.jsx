import React from 'react'
import header from "../Data/header.jpeg";
import { LuTally1 } from "react-icons/lu";

export default function Footer() {
  return (
    <div className='bg-[#6B3CC9]  text-white text-start p-4 md:p-16  lg:pl-36 lg:pr-36 lg:pt-0'>
        <div className='lg:flex lg:flex-cols lg: justify-normal   '> 
        <div className='   lg:w-auto   '>
        <img src={header} className=" h-8 sm:h-10 object-cover lg:mt-12" alt="img" />
        <p className=' text-[16px]  pt-2'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results</p>
        </div>

        <div className='md:grid md:grid-cols-2 md:gap-2   '>
        <div className='lg:w-auto  '>
        <h3 className='text-[21px] pt-14'>Our Technologies</h3>
        <div className='text-[14px] flex-col  '>
        <p className='pb-4 pt-4'>ReactJS</p>
        <p>Gatsby</p>
        <p className='pb-4 pt-4'>NextJS</p>
        <p>NodeJS</p>
        </div>
        </div>
        
        <div className='lg:w-auto '>
        <h3 className='text-[21px] pt-14'>Our Services</h3>
        <div className='text-[14px] flex-col  '>
        <p className='pb-4 pt-4'>Social media Marketing</p>
        <p>Web & Mobile App Development</p>
        <p className='pt-4  pb-14'>Data & Analytics</p>
        </div>
        </div>
        </div>
        </div>

      

        <div>
          <hr className='bg-white '></hr>
        </div>


        <div className='flex justify-center  '>
          <p className='pt-3'>Privacy Policy</p>
          <p className='pl-4 text-2xl pt-2'><LuTally1 className='text-white mt-1' /></p>
          <p className='pt-3'>Terms & Conditions</p>

        </div>
       





    </div>
  )
}
