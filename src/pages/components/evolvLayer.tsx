import React, { useEffect, useState } from "react";
import SlideCard from "./cards/SlideCard";
import Image from 'next/image';
import EvolvEarth from '../../../public/assets/svgs/EvolvEarth.png'

function EvolvLayer() {
  const [selected, setSelected] = useState("creators");

  // useEffect(() => {
  //   console.log(selected);
  // });
  const creatorText = [
    "Build stronger communities",
    "Achieve a dynamic product market fit",
    "Unlock true royalties",
  ];
  const collectorText = [
    "Get rewarded for your effort",
    "Intimate connection with your favourite brands",
    "Contribute-to-earn",
  ];
  return (
    <div className="flex flex-col items-center pt-12 sm:pt-36 pb-[100px] md:pb-[500px]">
      <p className="font-satoshi700 text-[24px] sm:text-[32px] sm:w-[80%] pb-20 pt-28 md:pt-[58px] md:text-[48px] md:pb-[30px] md:w-[1340px] text-center w-[345px] font-[400px] text-[#E2E4E8]">
        A Dynamic NFT infrastructure which creates value for
      </p>
      {/* Mobile Version */}
      <div className="md:hidden px-[24px]">
        <div className="flex flex-row space-x-[40px] px-[24px] text-primaryRed font-array text-[24px]">
          <h1
            className=" cursor-pointer"
            onClick={() => setSelected("creators")}
          >
            Creators
          </h1>
          <h1
            className=" cursor-pointer"
            onClick={() => setSelected("collectors")}
          >
            Collectors
          </h1>
        </div>
        <div className="mt-7 h-full">
          <SlideCard>
            <div className="p-[20px]">
              <ul className="text-[24px] list-disc pl-5 font-satoshi tracking-widest text-white">
                {selected === "creators" &&
                  creatorText.map((item) => <li key={item}>{item}</li>)}
                {selected === "collectors" &&
                  collectorText.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </SlideCard>
        </div>
      </div>
      {/* Desktop Version */}
      <div className="hidden md:flex flex-col items-center">
        <div className="flex flex-row font-array md:pt-16 text-[62px] space-x-[312px] text-primaryRed">
          <p className="-ml-[44px]">Creators</p>
          <p className="pl-[170px]">Collectors</p>
        </div>
        <div className="flex flex-row space-x-40">
          <div className="w-[553px]">
            <SlideCard>
              <div className="">
                <ul className="text-[32px]  text-gray-100 list-disc text-left px-12 py-10 tracking-wider">
                  {creatorText.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SlideCard>
          </div>
          <div className="w-[553px] ">
            <SlideCard>
              <ul className="text-[32px] text-gray-100 list-disc py-10 tracking-widest px-10">
                {collectorText.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SlideCard>
          </div>
        </div>
      </div>
      <div className="relative min-h-[215px] w-[180%] flex justify-center items-center sm:min-h-[400px] sm:-mt-[100px] md:h-[500px] md:-mt-[100px] md:w-[100%] md:mx-auto">
        <Image src={EvolvEarth} alt="evolv" className="object-contain md:mt-48 md:h-[980px] md:w-[980px] sm:h-[750px] sm:w-[750px]" />
        <div className="absolute text-center top-30% sm:top-[40%] md:top-[50%]">
          <h6 className="font-satoshi text-[20px] text-gray-100 md:text-[33px]">
            WE CALL IT THE
          </h6>
          <h1 className="font-array text-[90px] text-gray-100 uppercase leading-[82.5px] sm:text-heading-64 sm:leading-[70px] md:text-[95px] md:leading-[75px] lg:text-[100px] lg:leading-[85px]">
            Evolv
            <br /> Layer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default EvolvLayer;
