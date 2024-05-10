import React from 'react'
import web from '../Data/web.png';
import search from '../Data/search.png';

export default function Services() {
  return (
    <div className='pt-4 '>
        <center>
        <div className='md:flex md:justify-between md:gap-2 lg:pl-12 lg:pr-12 xl:pl-32 xl:pr-32 '>
        <div>
        <img className='W-[275px] h-[275.82px] md:h-[275px] md:w-[275px] lg:w-[346px] lg:h-[346px] xl:w-[414px] xl:h-[414px] ' src={web} alt="Logo" />
        </div>
        <div className='md:w-[393px] md:h-[239px] lg:w-[530px] lg:h-[76px]  md:pr-10 xl:w-[542px] lg:pt-24 xl:pt-32'>
        <h3 className='text-[#6B3CC9] text-[27px] font-semibold leading-[33px] tracking-[0.4px] '>Web & Mobile App Development</h3>
        <h3 className='text-[16px] leading-[19.36px] font-normal pt-4 pl-[20px] pr-[20px] text-[#000000] pb-4'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online</h3>
        <div><button className='bg-[#F28D35] rounded w-[129px] h-[38px] text-[#FFFFFF] font-bold text-[14px] leading-[14px] tracking-[-2%]' >LEARN MORE</button></div>
        </div>
        </div>


        <div className='md:flex md:justify-between md:gap-2 lg:pl-12 lg:pr-12 xl:pl-32 xl:pr-32 '>
        <div>
        <img className='W-[275px] h-[275.82px] md:h-[275px] md:w-[275px] lg:w-[346px] lg:h-[346px] xl:w-[414px] xl:h-[414px] ' src={search} alt="Logo" />
        </div>
        <div className='md:w-[393px] md:h-[239px] lg:w-[530px] lg:h-[76px]  md:pr-10 xl:w-[542px] lg:pt-24 xl:pt-32'>
        <h3 className='text-[#6B3CC9] text-[27px] font-semibold leading-[33px] tracking-[0.4px] '>Digital Strategy Consulting</h3>
        <h3 className='text-[16px] leading-[19.36px] font-normal pt-4 pl-[20px] pr-[20px] text-[#000000] pb-4'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</h3>
        <div><button className='bg-[#F28D35] rounded w-[129px] h-[38px] text-[#FFFFFF] font-bold text-[14px] leading-[14px] tracking-[-2%]' >LEARN MORE</button></div>
        </div>
        </div>





        </center>
    </div>
  )
}
