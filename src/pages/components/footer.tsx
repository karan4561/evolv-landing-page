import React from 'react'
import Evolv from "../../../public/assets/svgs/EvolvLogo.svg"
import Image from 'next/image';


function footer() {
  return (
    <div className='bg-footer pt-16 bg-no-repeat bg-cover'>
        <div className='flex flex-col items-center'>
            <Image src={Evolv} alt='' className='pb-10'/>
            <hr className='bg-white border-0 h-[0.5px] w-[80%]'/>
            <p className='font-satoshi pt-10 text-base text-white text-center'>All rights researved. Evolv Art Pvt. Ltd.</p>
            <div className='pt-10 pb-20 flex flex-row space-x-10'>
            <img src="/assets/svgs/LinkedIn.svg" alt="" />
            <img src="/assets/svgs/Twitter.svg" alt="" />
            <img src="/assets/svgs/Discord.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default footer