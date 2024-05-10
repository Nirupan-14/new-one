import React from 'react'
import backgroundImage from '../Data/home.jpeg'

export default function Home() {
  return (
    <div>
        <div className='bg-cover h-[218px] w-full md:h-[448px] lg:h-[700px] ' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='lg:pt-72 lg:pl-12'>
        <div className='bg-gradient-to-br from-[#1CBDDD] to-[#4DCA79] lg:p-2 lg:w-[580px] xl:w-[630px] h-[306px]  hidden lg:block'> 
        <p className='text-[36px] md:text-[48px] font-[700] text-white leading-[48px]  tracking-[-2%]  text-start pt-4 pl-4 pr-4  '>We crush your competitors, goals, and sales records - without the B.S.</p>
        <div className='text-start pl-[20px] pt-[20px] lg:pb-2 '><button className='bg-[#F28D35] w-[214px] h-[38px] rounded text-[14px] text-white font-bold leading-[14PX] tracking-[-2%] '>GET FREE CONSULTATION</button></div>
        </div>
        </div>

        </div >
        <div className='bg-gradient-to-br from-[#1CBDDD] to-[#4DCA79]  w-auto h-auto xl:w-[622px] xl:h-[306px] xl:pt-[354px] xl:pl-[60px] lg:hidden'> 
        <p className='text-[36px] md:text-[48px] font-[700] text-white leading-[36px] md:leading-[48px] tracking-[-2%]  text-start pt-4 pl-4 pr-4  md:pl-8 md:pr-8 md-pl-12'>We crush your competitors, goals, and sales records - without the B.S.</p>
        <div className='text-start pl-[20px] pt-[20px] pb-6 '><button className='bg-[#F28D35] w-[214px] h-[38px] rounded text-[14px] text-white font-bold leading-[14PX] tracking-[-2%] '>GET FREE CONSULTATION</button></div>
        </div>


    </div>
  )
}
