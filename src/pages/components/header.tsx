import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function header() {
  return (
    <div className='flex flex-row justify-between px-[22px] md:px-[66px] pt-[46px] md:pt-[34px] items-center'>
        <img src="/assets/svgs/Evolv.svg" alt="" className='w-[91px] h-[24px] md:h-[46px] md:w-[150px]' />
        <div className='flex flex-row space-x-[17px] md:space-x-[39px] items-center justify-end w-[20px] md:w-[30px] h-[16px] md:h-[25px]'>
            <div className='space-x-[72px] items-center flex flex-row'>
            <Link href={'/'} className='hidden md:block text-[#FFFFFF] text-[24px]'>About</Link>
            <Link href={'https://medium.com/@contact_99922'} className='hidden md:block text-[#FFFFFF] text-[24px]'>Blog</Link>
            </div>
            <span className='hidden md:block px-[49px] text-[#FFFFFF] text-2xl '>|</span>
            <img src="/assets/svgs/Twitter.svg" alt="" />
            <img src="/assets/svgs/LinkedIn.svg" alt="" />
            <img src="/assets/svgs/Discord.svg" alt="" />
        </div>
    </div>
  )
}

export default header