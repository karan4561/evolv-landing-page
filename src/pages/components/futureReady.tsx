import React from "react";
import Reflection from "../../../public/assets/svgs/reflection.svg"
import Image from 'next/image';

function FutureReady() {
  return (
    <div>
      {/* // Mobile Version */}
      <div className="flex flex-col items-center md:hidden">
        <p className="text-[40px] text-center font-bold w-[273px] text-white">
          <span className="font-array text-primaryRed">Future ready </span>in 5
          mins
        </p>
        <p className="font-satoshi text-[20px] pb-[60px] w-[303px] text-center text-white pt-[40px]">
          Launch Dynamic Interactive NFTs using our End-to-End SaaS Platform in
          less than 5 minutes.
        </p>
        <button className="px-[77px] mb-28 py-[15px] rounded-xl text-center font-satoshi text-[20px]  border-2 text-white  border-primaryRed">
          Lets Talk
        </button>
      </div>

      {/* // Desktop Version */}
      <div className="hidden md:flex flex-row space-x-[10%] pt-12 justify-between px-20">
        <div className="flex flex-col items-start">
          <p className="text-[64px] text-left leading-[76px] font-bold w-[450px] text-white">
            <span className="font-array text-[76px] text-primaryRed">
              Future
            </span>{" "}
            ready in 5 mins
          </p>
          <p className="font-satoshi text-[34px] pb-[60px] w-[502px] text-left text-white pt-[84px]">
            Launch Dynamic Interactive NFTs using our End-to-End SaaS Platform
            in less than 5 minutes.
          </p>
          <button className="px-[77px] mb-28 py-[15px] rounded-xl text-center hover:bg-primaryRed font-satoshi text-[20px]  border-2 text-white  border-primaryRed">
            Lets Talk
          </button>
        </div>
        <Image height={700} width={700} className="pr-0" src={Reflection} alt=""/>
      </div>
    </div>
  );
}

export default FutureReady;
