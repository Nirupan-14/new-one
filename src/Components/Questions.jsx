import React from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export default function Questions() {
  return (
    <div className='pt-4 p-4 md:p-16 lg:pl-60 lg:pr-60'>

        <h3 className='text-[#6B3CC9] text-center font-semibold text-[27px] leading-[33px] tracking-[0.4px] mb-2'>Frequently asked questions</h3>
        
        <div className='bg-[#FAF8FF]  text-start  rounded'>
          
            <div className='m-4  '>
            <div className='flex justify-between md:gap-10'>
                <h4 className='pt-4 text-[#6B3CC9] text-[20px] md:text-[22px] lg:text-[22px] tracking-normal '>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h4>
                <AiOutlineMinus className=' mt-6 ml-1 text-2xl' />
            </div>
            <div className='mt-4  pb-4'>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
            </div>
        </div>
        </div>

            <div className='bg-[#FAF8FF]   text-start rounded '>
            <div className='flex justify-between md:gap-10 pt-4 pb-4 pl-4 pr-4'>
            <h3 className='text-[#000000] text-[20px] '>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</h3>
            <AiOutlinePlus className='  text-2xl ' />
            </div>
            </div>

            <div className='bg-[#FAF8FF]   text-start rounded mt-4 '>
            <div className='flex justify-between md:gap-10 pt-4 pb-4 pl-4 pr-4'>
            <h3 className='text-[#000000] text-[20px] '>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</h3>
            <AiOutlinePlus className='  text-2xl ' />
            </div>
            </div>

            

    </div>
  )
}
