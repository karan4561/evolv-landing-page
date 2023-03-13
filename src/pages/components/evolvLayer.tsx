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
    <div className="flex flex-col items-center pt-48 pb-[100px]">
      <p className="font-satoshi text-[24px] pt-[48px] md:text-[40px] md:pb-[30px] md:w-[1040px] text-center w-[345px] font-[400px] text-[#E2E4E8]">
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
        <div className="flex flex-row font-satoshi700 text-[62px] space-x-[252px] text-primaryRed">
          <p className="-ml-[44px]">Creators</p>
          <p>Collectors</p>
        </div>
        <div className="flex flex-row space-x-40">
          <div className="w-[353px]">
            <SlideCard>
              <div className="">
                <ul className="text-[28px]  text-gray-100 list-disc text-left px-10 py-6 tracking-wider">
                  {creatorText.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SlideCard>
          </div>
          <div className="w-[353px]">
            <SlideCard>
              <ul className="text-[26px] text-gray-100 list-disc py-6 tracking-widest px-10">
                {collectorText.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SlideCard>
          </div>
        </div>
      </div>
      <div className="relative min-h-[415px] w-[180%] mt-6 flex justify-center items-center sm:min-h-[400px] sm:-mt-[100px] md:h-[500px] md:-mt-[100px] md:w-[100%] md:mx-auto">
        <Image src={EvolvEarth} fill alt="evolv" className="object-contain" />
        <div className="absolute text-center ">
          <h6 className="font-satoshi text-[20px] text-gray-100 md:text-[26px]">
            WE CALL IT THE
          </h6>
          <h1 className="font-array text-[90px] text-gray-100 uppercase leading-[82.5px] sm:text-heading-64 sm:leading-[60px] md:text-heading-90 md:leading-[100px] lg:text-[80px] lg:leading-[70px]">
            Evolv
            <br /> Layer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default EvolvLayer;
